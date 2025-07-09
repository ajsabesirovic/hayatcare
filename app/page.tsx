import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { HeartPulse, HelpingHand, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <nav className="flex items-center justify-between p-3">
                <h4 className="text-xl font-bold">HayatCare</h4>
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-4">
                        <NavigationMenuItem>
                            <Link href="/">
                                <Button>Log in</Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/">
                                <Button>Saznaj više</Button>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <main className="min-h-screen py-12 px-6">
                <section className="flex items-center flex-col justify-center m-6">
                    <h1 className="text-4xl font-bold mb-4">
                        Briga i podrška za naše najmilije
                    </h1>
                    <p className="text-xl mb-6">
                        Siguran, zdrav i ispunjen život - svaki dan
                    </p>
                </section>
                <section className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl">
                        <Card className="w-full min-h-[250px] h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>
                                    <HeartPulse className="w-5 h-5 text-red-500" />
                                    Zdravlje i nega
                                </CardTitle>
                                <CardDescription>
                                    Saveti za vitalnost i prevenciju
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Otkrijte kako pravilna ishrana, redovno kretanje
                                i preventivne kontrole mogu poboljšati kvalitet
                                života i očuvati vaše zdravlje u svakodnevici.
                            </CardContent>
                        </Card>

                        <Card className="w-full min-h-[250px] h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>
                                    <Activity className="w-5 h-5 text-green-600" />
                                    Dnevne aktivnosti
                                </CardTitle>
                                <CardDescription>
                                    Pokret, kreativnost i rutina
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Vežbe, hobi ideje i društvene igre osmišljene da
                                podstaknu fizičku aktivnost, mentalnu svežinu i
                                svakodnevnu radost.
                            </CardContent>
                        </Card>

                        <Card className="w-full min-h-[250px] h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>
                                    <HelpingHand className="w-5 h-5 text-blue-600" />
                                    Podrška i pomoć
                                </CardTitle>
                                <CardDescription>
                                    Uvek dostupna pomoć kad vam zatreba
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                Pronađite informacije, kontakte i korisne savete
                                za rešavanje svakodnevnih problema ili
                                kontaktiranje stručnih službi – brzo i
                                jednostavno.
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </>
    );
}
