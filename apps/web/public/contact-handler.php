<?php
/**
 * Contact form handler for the static-exported site.
 *
 * The site ships as plain HTML/CSS/JS (Next.js `output: export`) with no
 * Node runtime on shared/cPanel hosting, so the enquiry form on /contact
 * posts here instead of to an API route. Relies on the host's built-in
 * PHP mail() / MTA — no SMTP credentials are stored in this file.
 *
 * Update RECIPIENT_EMAIL once the client confirms which inbox should
 * receive enquiries (see docs/content-model.md).
 */

declare(strict_types=1);

const RECIPIENT_EMAIL = 'hello@prismtechnosys.com';
const SITE_NAME = 'Prism Technosys';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot — bots tend to fill every field, real users never see this one.
if (!empty($_POST['company_website'] ?? '')) {
    echo json_encode(['ok' => true]);
    exit;
}

function field(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

// Strip CR/LF from anything that could end up in a mail header, to block
// header-injection via crafted "name" or "email" values.
function sanitizeHeaderValue(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

$name = sanitizeHeaderValue(field('name'));
$email = sanitizeHeaderValue(field('email'));
$phone = sanitizeHeaderValue(field('phone'));
$company = sanitizeHeaderValue(field('company'));
$message = field('message');

$errors = [];
if ($name === '') {
    $errors[] = 'Name is required.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}
if ($message === '') {
    $errors[] = 'Message is required.';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

$subject = '[' . SITE_NAME . ' website] New enquiry from ' . $name;

$bodyLines = [
    'New enquiry submitted via the ' . SITE_NAME . ' website contact form.',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : '—'),
    'Company: ' . ($company !== '' ? $company : '—'),
    '',
    'Message:',
    $message,
];

$headers = [
    'From: "' . SITE_NAME . ' Website" <no-reply@prismtechnosys.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail(RECIPIENT_EMAIL, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Could not send message. Please email us directly.']);
    exit;
}

echo json_encode(['ok' => true]);
