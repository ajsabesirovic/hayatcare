import { z } from "zod";

export const taskCategories = [
  "companionship",
  "reading",
  "errands",
  "meal_preparation",
  "mobility_support",
  "housekeeping",
  "medical_escort",
  "pet_care",
  "gardening",
  "tech_support",
  "exercise_support",
  "medication_reminder",
] as const;
export const countryCityMap: Record<string, string[]> = {
  Srbija: [
    "Beograd",
    "Novi Pazar",
    "Niš",
    "Kragujevac",
    "Subotica",
    "Čačak",
    "Zrenjanin",
    "Pančevo",
    "Sombor",
    "Valjevo",
  ],
  "Crna Gora": [
    "Podgorica",
    "Nikšić",
    "Herceg Novi",
    "Bar",
    "Cetinje",
    "Tivat",
    "Budva",
    "Berane",
    "Pljevlja",
    "Ulcinj",
  ],
  Bosna: [
    "Sarajevo",
    "Tuzla",
    "Banja Luka",
    "Mostar",
    "Zenica",
    "Bihać",
    "Doboj",
    "Brčko",
    "Goražde",
    "Travnik",
  ],
  Hrvatska: [
    "Zagreb",
    "Split",
    "Rijeka",
    "Osijek",
    "Zadar",
    "Pula",
    "Šibenik",
    "Karlovac",
    "Varaždin",
    "Dubrovnik",
  ],
  Slovenija: [
    "Ljubljana",
    "Maribor",
    "Celje",
    "Kranj",
    "Velenje",
    "Koper",
    "Novo Mesto",
    "Ptuj",
    "Trbovlje",
    "Kamnik",
  ],
  Makedonija: [
    "Skoplje",
    "Bitola",
    "Kumanovo",
    "Prilep",
    "Tetovo",
    "Veles",
    "Štip",
    "Ohrid",
    "Gostivar",
    "Kavadarci",
  ],
  Albanija: [
    "Tirana",
    "Durrës",
    "Vlorë",
    "Shkodër",
    "Elbasan",
    "Fier",
    "Berat",
    "Korçë",
    "Lushnjë",
    "Kavajë",
  ],
  Bugarska: [
    "Sofija",
    "Plovdiv",
    "Varna",
    "Burgas",
    "Ruse",
    "Stara Zagora",
    "Pleven",
    "Sliven",
    "Dobrich",
    "Shumen",
  ],
  Rumunija: [
    "Bukurešt",
    "Kluž-Napoka",
    "Timișoara",
    "Iași",
    "Krajova",
    "Brașov",
    "Galați",
    "Ploiești",
    "Oradea",
    "Constanța",
  ],
  Mađarska: [
    "Budimpešta",
    "Debrecen",
    "Szeged",
    "Miskolc",
    "Pécs",
    "Győr",
    "Nyíregyháza",
    "Kecskemét",
    "Székesfehérvár",
    "Szombathely",
  ],
};
export const countries = Object.keys(countryCityMap) as [string, ...string[]];
export const allCities = countries.flatMap(
  (country) => countryCityMap[country]
) as [string, ...string[]];

export const profileSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  age: z.string().min(1, { message: "Age required" }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 9 digits long." })
    .regex(/^\+?[0-9\s\-]+$/, {
      message:
        "Phone number can only contain numbers, spaces, dashes, or '+' sign.",
    }),
  street: z
    .string()
    .min(5, { message: "Street must be at least 5 characters long." }),
  houseNumber: z
    .string()
    .min(2, { message: "House number must be at least 2 characters long." }),
  city: z.enum(allCities, { message: "Please select a city." }),
  country: z.enum(countries, { message: "Please select a country." }),
  // taskCategories: z.enum(taskCategories, { message: "At least one skill is required" }),
  // availability
});

export const taskSchema = z.object({
  title: z.string().min(1, "Please provide a title"),
  category: z.enum(taskCategories, {
    message: "Please select a category that suits your task",
  }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  start_time: z.string().min(1, "Start time is required"),
  duration: z.coerce.number().optional(),
  multi_day: z.boolean().optional(),
});
