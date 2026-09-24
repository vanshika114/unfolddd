### I tested the Create Account flow with an invalid Gmail address and a random password. 
The request reaches Supabase’s /auth/v1/signup endpoint, but the UI displays “Failed to fetch” instead of a meaningful authentication error.

Please check the Supabase Authentication configuration and the actual response/status of the signup request in the browser Network tab.
Invalid credentials should return an appropriate Supabase error message rather than a generic fetch error.
