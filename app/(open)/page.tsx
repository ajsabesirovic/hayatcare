import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { HeartPulse, HelpingHand, Activity } from "lucide-react";
import { ElementType } from "react";
import Navbar from "./_components/Navbar";
import { CareRoute } from "../volMap/page";

interface InfoCard {
  title: string;
  description: string;
  content: string;
  icon: ElementType;
  color: string;
}

const cards: InfoCard[] = [
  {
    title: "Dnevne aktivnosti",
    description: "Pokret, kreativnost i rutina",
    content:
      "Vežbe, hobi ideje i društvene igre osmišljene da podstaknu fizičku aktivnost, mentalnu svežinu i svakodnevnu radost.",
    icon: Activity,
    color: "text-green-600",
  },
  {
    title: "Zdravlje i nega",
    description: "Saveti za vitalnost i prevenciju",
    content:
      "Otkrijte kako pravilna ishrana, redovno kretanje i preventivne kontrole mogu poboljšati kvalitet života i očuvati vaše zdravlje u svakodnevici.",
    icon: HeartPulse,
    color: "text-red-500",
  },
  {
    title: "Podrška i pomoć",
    description: "Uvek dostupna pomoć kad vam zatreba",
    content:
      "Pronađite informacije, kontakte i korisne savete za rešavanje svakodnevnih problema ili kontaktiranje stručnih službi – brzo i jednostavno.",
    icon: HelpingHand,
    color: "text-blue-600",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen py-12 px-6">
        <section className="flex flex-col items-center justify-center m-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Briga i podrška za naše najmilije
          </h1>
          <p className="text-xl mb-6">
            Siguran, zdrav i ispunjen život - svaki dan
          </p>
        </section>

        <section className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
                  className="w-full min-h-[250px] h-full flex flex-col"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${card.color}`} />
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {card.content}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <CareRoute />
    </>
  );
}
