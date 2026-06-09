export type Dietary = "Standard" | "Vegetarian" | "Vegan" | "Gluten Free" | "Nut Allergy" | "Dairy Free" | "Halal";
export type MealChoice = "Filetto di Manzo" | "Branzino al Forno" | "Risotto ai Funghi";
export type ArrivalStatus = "checked-in" | "pending" | "en-route";
export type TransportType = "shuttle" | "private" | "self";

export interface Guest {
  id: number;
  name: string;
  table: number;
  tableName: string;
  seat: number;
  starter: string;
  meal: MealChoice;
  dietary: Dietary;
  dietaryNote?: string;
  arrived: ArrivalStatus;
  hotel: string;
  transport: TransportType;
  accessibility?: string;
}

export const guests: Guest[] = [
  // Table 1 — Cortona
  { id: 1,  name: "Maya Johnson",       table: 1, tableName: "Cortona", seat: 1, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 2,  name: "Aiden Park",         table: 1, tableName: "Cortona", seat: 2, starter: "Carpaccio di Manzo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle" },
  { id: 3,  name: "Sofia Reyes",        table: 1, tableName: "Cortona", seat: 3, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegetarian",   arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 4,  name: "James Okafor",       table: 1, tableName: "Cortona", seat: 4, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Gluten Free",  arrived: "checked-in", hotel: "NH Perugia",               transport: "shuttle" },
  { id: 5,  name: "Priya Sharma",       table: 1, tableName: "Cortona", seat: 5, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegetarian",   arrived: "pending",    hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 6,  name: "Marcus Thompson",    table: 1, tableName: "Cortona", seat: 6, starter: "Carpaccio di Manzo",  meal: "Branzino al Forno",  dietary: "Standard",     arrived: "checked-in", hotel: "Alla Posta dei Donini",    transport: "private" },
  { id: 7,  name: "Yuna Kim",           table: 1, tableName: "Cortona", seat: 7, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Dairy Free",   arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle" },
  { id: 8,  name: "Daniel Adeyemi",     table: 1, tableName: "Cortona", seat: 8, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Halal",        arrived: "en-route",   hotel: "NH Perugia",               transport: "shuttle" },

  // Table 2 — Siena
  { id: 9,  name: "Aaliyah Washington", table: 2, tableName: "Siena",   seat: 1, starter: "Burrata con Tartufo",  meal: "Branzino al Forno",  dietary: "Standard",     arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 10, name: "Carlos Mendoza",     table: 2, tableName: "Siena",   seat: 2, starter: "Carpaccio di Manzo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 11, name: "Jin-soo Choi",       table: 2, tableName: "Siena",   seat: 3, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegan",        arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle" },
  { id: 12, name: "Fatima Al-Hassan",   table: 2, tableName: "Siena",   seat: 4, starter: "Burrata con Tartufo",  meal: "Branzino al Forno",  dietary: "Halal",        arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 13, name: "Tyler Robinson",     table: 2, tableName: "Siena",   seat: 5, starter: "Carpaccio di Manzo",  meal: "Filetto di Manzo",   dietary: "Gluten Free",  arrived: "pending",    hotel: "NH Perugia",               transport: "shuttle" },
  { id: 14, name: "Mei-Lin Chen",       table: 2, tableName: "Siena",   seat: 6, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegan",        arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle",  dietaryNote: "Nut allergy also" },
  { id: 15, name: "Kwame Asante",       table: 2, tableName: "Siena",   seat: 7, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "Alla Posta dei Donini",    transport: "private" },
  { id: 16, name: "Isabelle Moreau",    table: 2, tableName: "Siena",   seat: 8, starter: "Carpaccio di Manzo",  meal: "Branzino al Forno",  dietary: "Dairy Free",   arrived: "pending",    hotel: "Hotel Brufani Palace",     transport: "shuttle" },

  // Table 3 — Assisi
  { id: 17, name: "Zara Ahmed",         table: 3, tableName: "Assisi",  seat: 1, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegetarian",   arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 18, name: "Luca Fernandez",     table: 3, tableName: "Assisi",  seat: 2, starter: "Carpaccio di Manzo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle" },
  { id: 19, name: "Soo-Jin Park",       table: 3, tableName: "Assisi",  seat: 3, starter: "Burrata con Tartufo",  meal: "Branzino al Forno",  dietary: "Gluten Free",  arrived: "checked-in", hotel: "NH Perugia",               transport: "shuttle",  dietaryNote: "Coeliac — strict" },
  { id: 20, name: "Dominique Williams", table: 3, tableName: "Assisi",  seat: 4, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegan",        arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle",  accessibility: "Wheelchair access" },
  { id: 21, name: "Rahul Nair",         table: 3, tableName: "Assisi",  seat: 5, starter: "Carpaccio di Manzo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "pending",    hotel: "Alla Posta dei Donini",    transport: "private" },
  { id: 22, name: "Amara Diallo",       table: 3, tableName: "Assisi",  seat: 6, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Halal",        arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 23, name: "Kenji Nakamura",     table: 3, tableName: "Assisi",  seat: 7, starter: "Zuppa di Zucca",      meal: "Branzino al Forno",  dietary: "Standard",     arrived: "en-route",   hotel: "Castello di Monterone",   transport: "shuttle" },
  { id: 24, name: "Camille Dubois",     table: 3, tableName: "Assisi",  seat: 8, starter: "Carpaccio di Manzo",  meal: "Risotto ai Funghi",  dietary: "Vegetarian",   arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },

  // Table 4 — Spoleto
  { id: 25, name: "Isaiah Carter",      table: 4, tableName: "Spoleto", seat: 1, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "NH Perugia",               transport: "shuttle" },
  { id: 26, name: "Hana Yamamoto",      table: 4, tableName: "Spoleto", seat: 2, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Gluten Free",  arrived: "checked-in", hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 27, name: "Mateo Gonzalez",     table: 4, tableName: "Spoleto", seat: 3, starter: "Carpaccio di Manzo",  meal: "Branzino al Forno",  dietary: "Standard",     arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle" },
  { id: 28, name: "Adaeze Okonkwo",     table: 4, tableName: "Spoleto", seat: 4, starter: "Burrata con Tartufo",  meal: "Filetto di Manzo",   dietary: "Nut Allergy",  arrived: "pending",    hotel: "Hotel Brufani Palace",     transport: "shuttle",  dietaryNote: "Severe — epi-pen noted" },
  { id: 29, name: "Sunhee Bae",         table: 4, tableName: "Spoleto", seat: 5, starter: "Zuppa di Zucca",      meal: "Risotto ai Funghi",  dietary: "Vegan",        arrived: "checked-in", hotel: "Alla Posta dei Donini",    transport: "private" },
  { id: 30, name: "Jordan Brooks",      table: 4, tableName: "Spoleto", seat: 6, starter: "Carpaccio di Manzo",  meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "NH Perugia",               transport: "shuttle" },
  { id: 31, name: "Nia Mensah",         table: 4, tableName: "Spoleto", seat: 7, starter: "Burrata con Tartufo",  meal: "Branzino al Forno",  dietary: "Vegetarian",   arrived: "en-route",   hotel: "Hotel Brufani Palace",     transport: "shuttle" },
  { id: 32, name: "Rafael Santos",      table: 4, tableName: "Spoleto", seat: 8, starter: "Zuppa di Zucca",      meal: "Filetto di Manzo",   dietary: "Standard",     arrived: "checked-in", hotel: "Castello di Monterone",   transport: "shuttle" },
];

export const transportRoutes = [
  {
    hotel: "Hotel Brufani Palace",
    guestCount: 14,
    shuttles: [
      { time: "14:15", arrival: "14:35", status: "on-schedule" as const, capacity: 18, boarded: 14 },
      { time: "17:00", arrival: "17:20", status: "scheduled" as const, capacity: 18, boarded: 0 },
    ],
  },
  {
    hotel: "NH Perugia",
    guestCount: 5,
    shuttles: [
      { time: "14:20", arrival: "14:45", status: "on-schedule" as const, capacity: 12, boarded: 5 },
      { time: "17:05", arrival: "17:30", status: "scheduled" as const, capacity: 12, boarded: 0 },
    ],
  },
  {
    hotel: "Castello di Monterone",
    guestCount: 8,
    shuttles: [
      { time: "14:30", arrival: "14:45", status: "delayed" as const, capacity: 12, boarded: 6 },
    ],
  },
  {
    hotel: "Alla Posta dei Donini",
    guestCount: 4,
    shuttles: [
      { time: "—", arrival: "—", status: "private" as const, capacity: 0, boarded: 0 },
    ],
  },
];

export const announcements = [
  {
    id: 1,
    message: "Welcome to Castello di Petrata. Ceremony begins at 3:30 PM in the chapel. Please make your way to your seats by 3:15 PM.",
    sentAt: "13:45",
    sentBy: "Wedding Planner",
    readCount: 28,
    totalSent: 32,
  },
  {
    id: 2,
    message: "Shuttle from Hotel Brufani Palace is now boarding. Please meet at the main entrance.",
    sentAt: "14:00",
    sentBy: "Transport Coordinator",
    readCount: 14,
    totalSent: 14,
  },
  {
    id: 3,
    message: "Cocktail hour will take place on the terrace. Aperitivo is being served.",
    sentAt: "16:35",
    sentBy: "Wedding Planner",
    readCount: 31,
    totalSent: 32,
  },
];

export const dietaryColors: Record<Dietary, string> = {
  "Standard":    "rgba(45,45,45,0.5)",
  "Vegetarian":  "var(--sage)",
  "Vegan":       "#7aaa6b",
  "Gluten Free": "var(--gold)",
  "Nut Allergy": "var(--dusty-rose)",
  "Dairy Free":  "#a0b4c8",
  "Halal":       "#b09ad0",
};

export const arrivalLabel: Record<ArrivalStatus, string> = {
  "checked-in": "Checked In",
  "pending":    "Not Arrived",
  "en-route":   "En Route",
};

export const arrivalColor: Record<ArrivalStatus, string> = {
  "checked-in": "var(--sage)",
  "pending":    "var(--dusty-rose)",
  "en-route":   "var(--gold)",
};
