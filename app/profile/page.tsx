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
      <div className="flex space-y-6 flex-col text-center justify-center max-w-screen-sm mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4">
          Dobrodošli, hvala Vam što želite da budete deo zajednice!
        </h1>
        <p>
          Ova stranica je namenjena prikupljanju osnovnih informacija o Vama
          kako bismo Vas povezali sa starijim osobama kojima je potrebna pomoć,
          podrška i topla ljudska reč. Popunjavanjem profila, pomažete nam da
          pronađemo aktivnosti koje najbolje odgovaraju Vašim veštinama,
          interesovanjima i raspoloživom vremenu. Molimo Vas da pažljivo unesete
          podatke, svi unosi se čuvaju poverljivo i koriste isključivo u svrhu
          organizacije volonterskog rada.
        </p>
      </div>
      <hr className="my-8 border-t border-gray-300 mx-auto" />
      <div>
        <h3 className="px-4">Osnovne informacije</h3>
        <Form {...form}>
          <form className="space-y-6 px-4">
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
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
                  <FormItem className="w-full">
                    <FormLabel>Prezime:</FormLabel>
                    <FormControl>
                      <Input placeholder="Prezime" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
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
                  <FormItem className="w-full">
                    <FormLabel>Telefon:</FormLabel>
                    <FormControl>
                      <Input placeholder="+381 60 123 4567" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <hr className="my-8 border-t border-gray-300 mx-auto" />
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Dostupnost:</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Veštine:</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <hr className="my-8 border-t border-gray-300 mx-auto" />
            <div className="space-y-4">
              <h3 className="px-4">Informacije o adresi</h3>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-3xl">
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
                  <FormItem className="w-3xl">
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
                  <FormItem className="w-3xl">
                    <FormLabel>Država:</FormLabel>
                    <FormControl>
                      <Input placeholder="Država" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit">Pošalji</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
