import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
       DATABASE_URL:process.env.DATABASE_URL,
       NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
       CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
