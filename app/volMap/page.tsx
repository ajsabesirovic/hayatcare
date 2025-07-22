import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";
import Navbar from "../(open)/_components/Navbar";
import PopUp from "@/components/PopUp";

export function CareRoute() {
    const clients = [
        {
            clientName: "Klijent1",
            description: "Detalji za zadatak klijenta1.",
        },
        {
            clientName: "Klijent2",
            description: "Detalji za zadatak klijenta2.",
        },
        {
            clientName: "Klijent3",
            description: "Detalji za zadatak klijenta3.",
        },
    ];
    return (
        <>
            <Navbar />
            <main className="max-w-5xl mx-auto p-10 text-center">
                <h1 className="text-3xl font-bold mb-4 text-black-800">
                    Dobrodošli na Care Route
                </h1>
                <p className="text-black-600 text-lg ">
                    Ovde možete pregledati i organizovati sve rute vezane za
                    pružanje nege. Na jednom mestu pratite planirane posete,
                    rute do klijenata i optimizujte svoje kretanje.
                </p>
                <p className="mt-4 text-black-500">
                    Uskoro ćemo dodati interaktivnu mapu kako biste lakše
                    pratili sve svoje obaveze.
                </p>
                <div className="flex flex-col md:flex-row justify-center mt-8 gap-6">
                    <Card className="max-w-2xl w-full">
                        <CardHeader>
                            <CardTitle>Zadaci:</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-gray-700">
                            <ul className="list-disc pl-5 space-y-1 text-left">
                                {clients.map((client, index) => (
                                    <li
                                        key={index}
                                        className="text-black font-semibold dark:text-white"
                                    >
                                        {client.clientName}{" "}
                                        <PopUp {...client} />
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="max-w-2xl w-full ">
                        <CardHeader>
                            <CardTitle>Mapa:</CardTitle>
                        </CardHeader>
                        <CardContent className="h-96">
                            <Map />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
