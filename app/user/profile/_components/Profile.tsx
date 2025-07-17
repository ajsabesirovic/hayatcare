"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUpProfile } from "@/dal/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { profileSchema, skills } from "@/lib/zod.schema";
import { SkillsMultiSelect } from "./SkillsMultiSelect";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

export default function Profile({ user }: { user: any }) {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name ?? "",
      age: user.age ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      address: user?.address ?? "",
      city: user?.city ?? "",
      country: user?.country ?? "",
      // skills: user?.skills ?? "",
      // availability: user?.availability ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    const result = await setUpProfile(values);
    if (result.status === "error") {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-md">Osnovne informacije</CardTitle>
          <CardDescription className="text-sm">
            Ova stranica je namenjena prikupljanju osnovnih informacija o Vama
            kako bismo Vas povezali sa starijim osobama kojima je potrebna
            pomoć, podrška i topla ljudska reč. Popunjavanjem profila, pomažete
            nam da pronađemo aktivnosti koje najbolje odgovaraju Vašim
            veštinama, interesovanjima i raspoloživom vremenu. Molimo Vas da
            pažljivo unesete podatke, svi unosi se čuvaju poverljivo i koriste
            isključivo u svrhu organizacije volonterskog rada.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ime</FormLabel>
                    <FormControl>
                      <Input placeholder="Ime" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Godine</FormLabel>
                    <FormControl>
                      <Input placeholder="Godine" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="test@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input placeholder="+381 60 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <SkillsMultiSelect field={field} skills={skills} />
                )}
              /> */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Ulica i broj" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grad</FormLabel>
                    <FormControl>
                      <Input placeholder="Grad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Država</FormLabel>
                    <FormControl>
                      <Input placeholder="Država" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full max-w-6xl">
                Sačuvaj
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
