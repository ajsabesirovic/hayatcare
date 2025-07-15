"use server";
import { redirect } from "next/navigation";
import { canSetRole } from "@/dal/user";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "./auth";

export async function setUserRole(formData: FormData) {
  const role = formData.get("role");
  if (role !== "volunteer" && role !== "user") {
    throw new Error("Invalid role");
  }

  const allowed = await canSetRole();
  if (!allowed) {
    redirect("/user/profile");
  }

  const user = await getCurrentUser();
  await prisma.user.update({
    where: { id: user?.id },
    data: { role },
  });

  redirect("/user/profile");
}
