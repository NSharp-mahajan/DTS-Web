# Backend Setup Guide

## Installation Commands

Run these commands in your project root directory:

```bash
npm install express nodemailer cors dotenv
```

## Environment Variables Setup

1. Create a `.env` file in the root directory (same level as `package.json`)

2. Add the following content to `.env`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
PORT=5000
```

## Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to **Security** → **2-Step Verification** (enable it if not already)
3. Scroll down to **App Passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Paste it in your `.env` file as `EMAIL_PASS`

**Important:** Use the App Password, NOT your regular Gmail password.

## Running the Server

### Option 1: Run Backend Only
```bash
npm run server
```

### Option 2: Run Both Frontend and Backend
```bash
npm install -g concurrently
npm run dev:full
```

Or manually in two terminals:
- Terminal 1: `npm run dev` (frontend)
- Terminal 2: `npm run server` (backend)

## Testing

1. Start the backend server: `npm run server`
2. You should see: `✅ Email server is ready to send messages`
3. Test the health endpoint: Visit `http://localhost:5000/health`
4. Submit the contact form on your website

## Troubleshooting

- **"Email transporter error"**: Check your EMAIL_USER and EMAIL_PASS in `.env`
- **"Failed to send email"**: Make sure you're using an App Password, not your regular password
- **CORS errors**: The server already has CORS enabled for localhost

