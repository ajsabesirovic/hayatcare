import { prisma } from "@/lib/db";
import { getCurrentUser } from "./auth";
import { Prisma } from "@/lib/generated/prisma";

export async function findUserById<
  T extends Prisma.UserSelect | null | undefined
>(id: string, select: T) {
  return prisma.user.findUnique({
    where: { id },
    select,
  });
}
export async function getUserById(id: string) {
  return findUserById(id, { id: true, role: true });
}

export async function getCurrentDbUser() {
  const user = await getCurrentUser();
  const id = user?.id;

  if (!id) return null;

  return findUserById(id, {
    id: true,
    name: true,
    email: true,
    phone: true,
    age: true,
    street: true,
    houseNumber: true,
    availability: true,
    city: true,
    country: true,
    image: true,
    role: true,
    skills: true,
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
