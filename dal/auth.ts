import { cache } from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export const getCurrentSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
});

export const getCurrentUser = cache(async () => {
  const session = await getCurrentSession();
  return session?.user ?? null;
});
