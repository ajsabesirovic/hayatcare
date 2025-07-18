"use server";
import { redirect } from "next/navigation";
import { canSetRole, findUserById } from "@/dal/user";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "./auth";
import { profileSchema } from "@/lib/zod.schema";
import z from "zod";
import { getUpdatedFields } from "@/lib/utils";

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
  const existingUser = await findUserById(id, {
    name: true,
    email: true,
    phone: true,
    age: true,
    street: true,
    houseNumber: true,
    city: true,
    country: true,
  });
  if (!existingUser) {
    return { status: "error", message: "User not found in database" };
  }

  const data = getUpdatedFields(values, existingUser);

  if (Object.keys(data).length === 0) {
    return { status: "success", message: "Nothing to update" };
  }
  await prisma.user.update({
    where: { id },
    data,
  });
  return { status: "success", message: "Profile set up successfully" };
}
