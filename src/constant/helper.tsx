import {
  ShieldCheck,
  ClipboardCheck,
  Plane,
  Truck,
  Syringe,
  PillBottle
} from "lucide-react";

export const pharmacyName = "Olympic Park Pharmacy";
export const address = "85 Canada Olympic Rd SW, Calgary, AB T3B 5R5";

export const location = "85 Canada Olympic Rd SW";
export const province = "Calgary, AB T3B 5R5"
export const BOOKING_LINK = "https://calendar.app.google/VsiUVgFyJ5fGdyaE7";
export const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdMfuGVTSweO9geCAEbhKnN7Ya0TZEh4e-C2D5PEJrPyduGqg/viewform?usp=dialog"

// const lat = 51.08346944455196;
// const lng = -114.215586118508;

// export const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
export const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

export const directionsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
// export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

export const pharmPhone = "(403) 000-0000";
export const pharmEmail = "info@olympicparkpharmacy.ca";
export const open_mon_fri = "9:00 AM – 6:00 PM";
export const open_sat = "10:00 AM – 4:00 PM";
export const pharmWhatsApp = "8255612724";

export const services = [
  {
    title: "Rapid Strep Testing",
    desc: "Okay Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at veritatis quos voluptas sed temporibus blanditiis ullam architecto labore, quidem beatae, rerum adipisci natus impedit non quasi deserunt! Asperiores, amet!",
    short_desc:
      "Quick and convenient strep testing with professional guidance from our pharmacy team.",
    icon: <ClipboardCheck size={22} />
  },

  {
    title: "Medication Reviews",
    desc: "Yes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at veritatis quos voluptas sed temporibus blanditiis ullam architecto labore, quidem beatae, rerum adipisci natus impedit non quasi deserunt! Asperiores, amet!",
    short_desc:
      "Personalized medication reviews to help you safely manage prescriptions and treatments.",
    icon: <ShieldCheck size={22} />
  },

  {
    title: "Travel Vaccines",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at veritatis quos voluptas sed temporibus blanditiis ullam architecto labore, quidem beatae, rerum adipisci natus impedit non quasi deserunt! Asperiores, amet!",
    short_desc:
      "Stay protected while traveling with recommended vaccines and travel health advice.",
    icon: <Plane size={22} />
  },

  {
    title: "Free Delivery",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at veritatis quos voluptas sed temporibus blanditiis ullam architecto labore, quidem beatae, rerum adipisci natus impedit non quasi deserunt! Asperiores, amet!",
    short_desc:
      "Convenient prescription delivery services to help you get your medications on time.",
    icon: <Truck size={22} />
  },

  {
    title: "Vaccinations & Immunizations",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at veritatis quos voluptas sed temporibus blanditiis ullam architecto labore, quidem beatae, rerum adipisci natus impedit non quasi deserunt! Asperiores, amet!",
    short_desc:
      "Protect yourself and your family with routine and seasonal vaccination services.",
    icon: <Syringe size={22} />
  },

  {
    title: "Compliance Packaging",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at veritatis quos voluptas sed temporibus blanditiis ullam architecto labore, quidem beatae, rerum adipisci natus impedit non quasi deserunt! Asperiores, amet!",
    short_desc:
      "Organized medication packaging designed to help you take medications correctly and on schedule.",
    icon: <PillBottle size={22} />
  }
];