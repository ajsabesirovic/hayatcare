import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { emailOTP } from "better-auth/plugins";
import { env } from "./env";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // need to implement sending mail with otp
      },
    }),
  ],
  socialProviders: {
    facebook: {
      clientId: env.AUTH_FACEBOOK_CLIENT_ID,
      clientSecret: env.AUTH_FACEBOOK_CLIENT_SECRET,
    },
    google: {
      prompt: "select_account",
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    },
  },
});
