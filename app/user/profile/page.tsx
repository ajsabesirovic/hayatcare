import Profile from "./_components/Profile";
import { getCurrentDbUser } from "@/dal/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const user = await getCurrentDbUser();
  return <Profile user={user} />;
}
