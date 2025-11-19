# Email Setup Instructions for Netlify

## Quick Setup Steps

1. **Go to your Netlify Dashboard**
   - Navigate to your site
   - Click on **Site Settings** → **Environment Variables**

2. **Add the following environment variables:**

   | Variable Name | Value |
   |--------------|-------|
   | `SMTP_HOST` | `smtp.roadrunner.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `truway@roadrunner.com` |
   | `SMTP_PASSWORD` | `[Your RoadRunner email password]` |
   | `SMTP_FROM` | `truway@roadrunner.com` |

3. **Redeploy your site**
   - After adding the environment variables, trigger a new deployment
   - Go to **Deploys** → Click **Trigger deploy** → **Deploy site**

## Testing

Once deployed, test the contact form on your live domain. When someone submits the form, both email addresses will receive the submission:
- `truway@roadrunner.com`
- `truway2016@gmail.com`

## Troubleshooting

If emails aren't sending:
1. Verify the SMTP password is correct
2. Check Netlify Function logs in the Netlify Dashboard
3. Ensure RoadRunner allows SMTP access (some email providers require enabling "Less secure app access" or using an app-specific password)

## Alternative: Using Gmail SMTP (if RoadRunner doesn't work)

If RoadRunner SMTP has issues, you can use Gmail SMTP instead:

| Variable Name | Value |
|--------------|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `truway2016@gmail.com` |
| `SMTP_PASSWORD` | `[Gmail App Password]` |
| `SMTP_FROM` | `truway2016@gmail.com` |

**Note:** For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password (not your regular password)
3. Use that App Password in `SMTP_PASSWORD`

