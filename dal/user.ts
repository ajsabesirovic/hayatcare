import { prisma } from "@/lib/db";
import { getCurrentUser } from "./auth";

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, role: true },
  });
}
export async function canSetRole() {
  const user = await getCurrentUser();
  if (!user) return false;
  const dbUser = await getUserById(user.id);
  return dbUser && !dbUser.role;
}
export async function hasRole() {
  const user = await getCurrentUser();
  if (!user) return false;
  const dbUser = await getUserById(user.id);
  return dbUser?.role != null;
}
