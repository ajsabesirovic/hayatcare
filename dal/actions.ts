"use server";
import { redirect } from "next/navigation";
import { canSetRole, getCurrentDbUser } from "@/dal/user";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "./auth";
import { profileSchema } from "@/lib/zod.schema";
import z from "zod";

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
export async function setUpProfile(values: z.infer<typeof profileSchema>) {
  const result = profileSchema.safeParse(values);
  if (!result) {
    return { status: "error", message: "Something went wrong" };
  }

  const user = await getCurrentUser();
  const id = user?.id;

  if (!id) {
    return { status: "error", message: "User not found" };
  }
  const data = {
    name: values.name || undefined,
    email: values.email || undefined,
    age: values.age || undefined,
    phone: values.phone || undefined,
    address: values.address || undefined,
    city: values.city || undefined,
    country: values.country || undefined,
  };
  await prisma.user.update({
    where: { id },
    data,
  });
  return { status: "success", message: "Profile set up successfully" };
}
