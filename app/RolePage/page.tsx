"use client";
import { HandHelping, HeartHandshake, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function RolePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center gap-3 max-w-md mx-auto">
                <HeartHandshake className="w-15 h-15 flex-shrink-0 text-gray-600" />
                <p className="text-center text-black-600 mb-4 max-w-md">
                    Dobrodošli! Izaberite ulogu koja najbolje opisuje vaše želje
                    i potrebe. Bilo da želite da pomognete kao volonter ili da
                    dobijete podršku kao korisnik, ovde možete započeti svoj
                    put.
                </p>
            </div>
            <div className="border-3 border-gray rounded-lg shadow-lg p-30 flex flex-col items-center">
                <h1 className="text-4xl font-semibold mb-10">
                    Izaberi šta želiš da budeš
                </h1>
                <div className="flex gap-8">
                    <Button
                        size="lg"
                        variant="outline"
                        // onClick={() => {
                        //     console.log("vol");
                        // }}
                    >
                        Volonter
                        <UserRoundPen />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        // onClick={() => {
                        //     console.log("kor");
                        // }}
                    >
                        Korisnik
                        <UserRoundPen />
                    </Button>
                </div>
            </div>
        </div>
    );
}
