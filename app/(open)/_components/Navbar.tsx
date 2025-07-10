"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Navbar() {
  // const { data: session, isPending } = authClient.useSession();

  return (
    <nav className="flex items-center justify-between p-3">
      <h4 className="text-xl font-bold">HayatCare</h4>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem asChild>
            <Link href="/login" className={buttonVariants()}>
              Login
            </Link>
            {/* {isPending ? null : session ? (
              <Avatar>
                <AvatarImage src={session?.user.image || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <Link href="/login" className={buttonVariants()}>
                Login
              </Link>
            )} */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
