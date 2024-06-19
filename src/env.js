import dotenv from "dotenv";
if (process.env.DEV) dotenv.config({ path: ".env-dev-local" });
// if (process.env.DEV) dotenv.config({ path: ".env-dev-2" });
// if (process.env.DEV) dotenv.config({ path: ".env-prod" });
// if (process.env.DEV) dotenv.config({ path: ".env-prod-uk" });
// if (process.env.DEV) dotenv.config({ path: ".env-onprem" });
else dotenv.config();

if (!process.env.API_MODE) process.env.API_MODE = "on-premises";
if (!process.env.REGION) process.env.REGION = "us-east-1";
if (!process.env.RELAY_DOMAIN)
  process.env.RELAY_DOMAIN = "https://relay-app.monolithforensics.com";
if (!process.env.MONOLITH_DOMAIN)
  process.env.MONOLITH_DOMAIN = "https://monolith-app.monolithforensics.com";