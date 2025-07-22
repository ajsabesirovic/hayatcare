import { HeartHandshake, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { hasRole } from "@/dal/user";
import { setUserRole } from "@/dal/actions";

export default async function RolePage() {
  if (await hasRole()) {
    redirect("/user");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <HeartHandshake className="w-15 h-15 flex-shrink-0 text-gray-600" />
        <p className="text-center text-black-600 mb-4 max-w-md">
          Dobrodošli! Izaberite ulogu koja najbolje opisuje vaše želje i
          potrebe. Bilo da želite da pomognete kao volonter ili da dobijete
          podršku kao korisnik, ovde možete započeti svoj put.
        </p>
      </div>
      <div className="border-3 border-gray rounded-lg shadow-lg p-30 flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-10">
          Izaberi šta želiš da budeš
        </h1>
        <form action={setUserRole} className="flex gap-8">
          <Button
            name="role"
            size="lg"
            variant="outline"
            type="submit"
            value="volunteer"
          >
            Volonter
            <UserRoundPen />
          </Button>
          <Button
            name="role"
            size="lg"
            variant="outline"
            type="submit"
            value="user"
          >
            Korisnik
            <UserRoundPen />
          </Button>
        </form>
      </div>
    </div>
  );
}
