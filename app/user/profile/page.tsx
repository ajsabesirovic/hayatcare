import Profile from "./_components/Profile";
import { getCurrentDbUser } from "@/dal/user";

export default async function ProfilePage() {
  const user = await getCurrentDbUser();
  return <Profile user={user} />;
}
