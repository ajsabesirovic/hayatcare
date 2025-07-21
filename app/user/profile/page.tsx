import Profile from "./_components/Profile";
import { getCurrentDbUser } from "@/dal/user";

export default async function ProfilePage() {
  const user = await getCurrentDbUser();

  if (!user) {
    return <div>Molimo ulogujte se da biste pristupili profilu.</div>;
  }

  return <Profile user={user} />;
}
