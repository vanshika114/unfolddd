## What was the issue?

Users were getting a **"Failed to fetch"** error when trying to sign in or create an account.

## What was causing it?

The app was unable to connect to the configured Supabase project, so the authentication requests were failing.

## What was fixed?

- Verified the Supabase configuration.
- Updated the authentication connection/configuration.
- Tested both Sign In and Create Account flows.

## Result

Users can now sign in and create an account successfully without the "Failed to fetch" error.
