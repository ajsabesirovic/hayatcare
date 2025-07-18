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
import {
  countries,
  countryCityMap,
  profileSchema,
  skills,
} from "@/lib/zod.schema";
import { SkillsMultiSelect } from "./SkillsMultiSelect";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useEffect, useMemo, useTransition } from "react";
import { Loader2, LockIcon, Pencil } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Profile({ user }: { user: any }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name ?? "",
      age: user.age ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      street: user?.street ?? "",
      houseNumber: user?.houseNumber ?? "",
      city: user?.city ?? "",
      country: user?.country ?? "",
    },
  });
  const {
    formState: { isDirty },
  } = form;

  function onSubmit(values: z.infer<typeof profileSchema>) {
    startTransition(async () => {
      const result = await setUpProfile(values);
      if (result.status === "error") {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    });
  }

  const city = form.watch("city");
  const country = form.watch("country");

  useEffect(() => {
    if (city) {
      const matchedCountry = countries.find((c) =>
        countryCityMap[c]?.includes(city)
      );
      if (matchedCountry && matchedCountry !== country) {
        form.setValue("country", matchedCountry);
      }
    }
  }, [city]);

  useEffect(() => {
    if (country && city && !countryCityMap[country]?.includes(city)) {
      form.setValue("city", "");
    }
  }, [country]);

  const filteredCities = useMemo(() => {
    if (country && countryCityMap[country]) {
      return countryCityMap[country];
    }
    return countries.flatMap((c) => countryCityMap[c]);
  }, [country]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md">Osnovne informacije</CardTitle>
        <CardDescription className="text-sm">
          Ova stranica je namenjena prikupljanju osnovnih informacija o Vama
          kako bismo Vas povezali sa starijim osobama kojima je potrebna pomoć,
          podrška i topla ljudska reč. Popunjavanjem profila, pomažete nam da
          pronađemo aktivnosti koje najbolje odgovaraju Vašim veštinama,
          interesovanjima i raspoloživom vremenu. Molimo Vas da pažljivo unesete
          podatke, svi unosi se čuvaju poverljivo i koriste isključivo u svrhu
          organizacije volonterskog rada.
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <FormControl>
                          <Input
                            {...field}
                            readOnly
                            className="cursor-not-allowed bg-muted text-muted-foreground"
                          />
                        </FormControl>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        Email se ne može menjati
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ulica</FormLabel>
                    <FormControl>
                      <Input placeholder="Ulica" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="houseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Broj stana/kuće</FormLabel>
                    <FormControl>
                      <Input placeholder="Broj" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Grad</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Izaberi Grad"></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {filteredCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Država</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Izaberi Državu"></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={isPending || !isDirty}
              className="w-full"
            >
              {isPending ? (
                <>
                  Uređivanje ...
                  <Loader2 className="animate-spin ml-1" />
                </>
              ) : (
                <>
                  Uredi profil <Pencil size={16} className="ml-1" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
