"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Chrome, FacebookIcon, Loader, Loader2, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [facebookPending, startFacebookTransition] = useTransition();
  const [emailPending, startEmailTransition] = useTransition();
  const [googlePending, startGoogleTransition] = useTransition();

  function signInWithFacebook() {
    startFacebookTransition(async () => {
      await authClient.signIn.social({
        provider: "facebook",
        callbackURL: "/set-role",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Facebook, you will be redirected...");
          },
          onError: () => {
            toast.error("Internal server error");
          },
        },
      });
    });
  }
  function signInWithGoogle() {
    startGoogleTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/set-role",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Google, you will be redirected...");
          },
          onError: () => {
            toast.error("Internal server error");
          },
        },
      });
    });
  }

  function signInWithEmail() {
    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email sent");
            router.push("/verify-request");
          },
          onError: () => {
            toast.error("An error occurred sending email");
          },
        },
      });
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>
          Login with your Google/Facebook account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          disabled={googlePending}
          className="w-full"
          variant="outline"
          onClick={signInWithGoogle}
        >
          {googlePending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <Chrome className="size-4" />
              Sign in with Google
            </>
          )}
        </Button>
        <Button
          disabled={facebookPending}
          className="w-full"
          variant="outline"
          onClick={signInWithFacebook}
        >
          {facebookPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <FacebookIcon className="size-4" />
              Sign in with Facebook
            </>
          )}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="e@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
          </div>

          <Button onClick={signInWithEmail} disabled={emailPending}>
            {emailPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                <span>Continue with Email</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
