"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Profile() {
  const form = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      availability: "",
      skills: "",
      address: "",
      city: "",
      country: "",
    },
  });

  return (
    <>
      <div className="flex flex-col space-y-6  max-w-6xl mx-auto px-6">
        <h3 className="text-lg font-semibold mb-4 ">Osnovne informacije</h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          Ova stranica je namenjena prikupljanju osnovnih informacija o Vama
          kako bismo Vas povezali sa starijim osobama kojima je potrebna pomoć,
          podrška i topla ljudska reč. Popunjavanjem profila, pomažete nam da
          pronađemo aktivnosti koje najbolje odgovaraju Vašim veštinama,
          interesovanjima i raspoloživom vremenu. Molimo Vas da pažljivo unesete
          podatke, svi unosi se čuvaju poverljivo i koriste isključivo u svrhu
          organizacije volonterskog rada.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-6xl p-6 sm:p-8">
          <Form {...form}>
            <form className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ime:</FormLabel>
                    <FormControl>
                      <Input placeholder="Ime" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prezime:</FormLabel>
                    <FormControl>
                      <Input placeholder="Prezime" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="test@gmail.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon:</FormLabel>
                    <FormControl>
                      <Input placeholder="+381 60 123 4567" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dostupnost:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Npr. vikendom, posle 17h..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Veštine:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Npr. kuvanje, šetnja, razgovor..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresa:</FormLabel>
                    <FormControl>
                      <Input placeholder="Ulica i broj" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grad:</FormLabel>
                    <FormControl>
                      <Input placeholder="Grad" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Država:</FormLabel>
                    <FormControl>
                      <Input placeholder="Država" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button type="submit" className="w-full max-w-6xl">
                  Pošalji
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
