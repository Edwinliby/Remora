export interface ContactResource {
  name: string;
  address: string;
  phone: string;
  phone2?: string;
  website: string;
  email?: string;
  description: string;
  tags: string[];
  category: string;
  city: string;
}

export const PRENATAL_CONTACTS: ContactResource[] = [
  {
    name: "North Platte OBGYN, PC",
    address: "1115 S. Willow St, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Prenatal care, ultrasounds, OB visits, deliveries, gynecology.",
    tags: ["OB care", "prenatal"],
    category: "Prenatal medical care",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Women’s & Children’s Services / Labor & Delivery",
    address: "601 W. Leota St, North Platte, NE 69101",
    phone: "308-568-7373",
    website: "gphealth.org",
    description:
      "Hospital-based maternity services; labor and delivery support and coordination.",
    tags: ["labor & delivery", "hospital"],
    category: "Prenatal medical care",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Complete Family Medicine",
    address: "811 W. William Ave, North Platte, NE 69101",
    phone: "308-696-2273",
    website: "gphealth.org",
    description:
      "Primary care during pregnancy; referrals and ongoing medical support.",
    tags: ["primary care", "referrals"],
    category: "Prenatal medical care",
    city: "North Platte",
  },
  {
    name: "Great Plains Pediatrics",
    address: "625 W. William Ave, Suite 100, North Platte, NE 69101",
    phone: "308-568-3580",
    website: "gphealth.org",
    description:
      "Newborn and child care, vaccines, sick visits, developmental concerns.",
    tags: ["pediatrics", "vaccines"],
    category: "Postnatal medical care",
    city: "North Platte",
  },
  {
    name: "North Platte OBGYN, PC",
    address: "1115 S. Willow St, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Postpartum visits, breastfeeding-related concerns, contraception counseling.",
    tags: ["postpartum", "contraception"],
    category: "Postnatal medical care",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Breastfeeding Support",
    address: "601 W. Leota St, North Platte, NE 69101",
    phone: "308-568-2265",
    website: "gphealth.org",
    description:
      "Lactation support; help with breastfeeding questions and milk support resources.",
    tags: ["lactation", "breastfeeding"],
    category: "Postnatal medical care",
    city: "North Platte",
  },
  {
    name: "WIC – People’s Family Health Services",
    address: "102 S. Elm St, North Platte, NE 69101",
    phone: "308-534-1678",
    website: "dhhs.ne.gov ",
    description:
      "WIC nutrition benefits for pregnant/postpartum people, infants, and children.",
    tags: ["WIC", "nutrition"],
    category: "Benefits & support",
    city: "North Platte",
  },
  {
    name: "Nebraska DHHS – Lincoln County Office",
    address: "200 S. Silber Ave, North Platte, NE 69101",
    phone: "308-535-8200",
    website: "dhhs.ne.gov",
    description: "Apply/manage Medicaid, SNAP, and other public benefits.",
    tags: ["Medicaid", "SNAP"],
    category: "Benefits & support",
    city: "North Platte",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (North Platte)",
    address: "901 E. 10th St, North Platte, NE 69101",
    phone: "308-532-3250",
    website: "communityactionmidne.com",
    description:
      "Benefits navigation plus emergency assistance and stabilization support.",
    tags: ["benefits help", "assistance"],
    category: "Benefits & support",
    city: "North Platte",
  },
  {
    name: "North Platte Catholic Community Food Pantry",
    address: "421 E. 3rd St, North Platte, NE 69101",
    phone: "308-532-8800",
    website: "northplattegiving.org",
    description: "Community food pantry; groceries for households in need.",
    tags: ["food pantry", "groceries"],
    category: "Food & Housing",
    city: "North Platte",
  },
  {
    name: "The Salvation Army of North Platte – Food Pantry",
    address: "1020 N. Adams Ave, North Platte, NE 69101",
    phone: "308-532-2038",
    website: "salvationarmyusa.org",
    description: "Food pantry plus basic needs support for families.",
    tags: ["food pantry", "essentials"],
    category: "Food & Housing",
    city: "North Platte",
  },
  {
    name: "North Platte Housing Authority",
    address: "900 Autumn Park Dr, North Platte, NE 69101",
    phone: "308-534-4887",
    website: "www.npha.us",
    email: "tenantservices@npha.us",
    description:
      "Public housing and subsidized housing options; application/waitlist support.",
    tags: ["housing", "subsidies"],
    category: "Food & Housing",
    city: "North Platte",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (North Platte)",
    address: "901 E. 10th St, North Platte, NE 69101",
    phone: "308-532-3250",
    website: "communityactionmidne.com",
    description:
      "Homelessness prevention and emergency services; housing-related help.",
    tags: ["housing help", "emergency"],
    category: "Food & Housing",
    city: "North Platte",
  },
  {
    name: "Rape/Domestic Abuse Program (RDAP)",
    address: "North Platte, NE (crisis services; contact for shelter access)",
    phone: "308-534-3495",
    phone2: "308-536-4848",
    website: "nprdap.org",
    description:
      "24/7 domestic violence/sexual assault crisis support; shelter, advocacy, protection orders, transportation.",
    tags: ["DV shelter", "crisis"],
    category: "Crisis support",
    city: "North Platte",
  },
  {
    name: "Legal Aid of Nebraska – North Platte Office",
    address: "102 E. 3rd St, Suite 102, North Platte, NE 69101",
    phone: "308-532-5793",
    phone2: "1-877-669-9080",
    website: "legalaidofnebraska.org",
    description:
      "Civil legal help; housing, benefits, family law, and immigration-related legal issues.",
    tags: [],
    category: "Crisis support",
    city: "North Platte",
  },
  {
    name: "North Platte Public Transit",
    address: "1520 N. Jeffers St, North Platte, NE 69101",
    phone: "308-532-1370",
    website: "northplattene.gov",
    description:
      "Local public transportation; ride planning for clinic visits and errands.",
    tags: ["public transit", "rides"],
    category: "Logistics",
    city: "North Platte",
  },
  {
    name: "Women’s Resource Center of North Platte",
    address: "209 McNeel Lane, North Platte, NE 69101",
    phone: "308-534-1440",
    phone2: "308-650-3085",
    website: "pregnancynorthplatte.com",
    description:
      "Pregnancy testing and options counseling; support and resources for unplanned pregnancy decisions.",
    tags: ["options counseling", "pregnancy test"],
    category: "Pregnancy options",
    city: "North Platte",
  },
  {
    name: "Nebraska Children’s Home Society (NCHS) – North Platte Office",
    address: "121 N. Dewey St, Suite 206, North Platte, NE 69101",
    phone: "308-534-3250",
    website: "nchs.org",
    description:
      "Adoption and family support services; guidance for parenting or adoption planning.",
    tags: ["adoption", "casework"],
    category: "Pregnancy options",
    city: "North Platte",
  },
  {
    name: "West Central District Health Department",
    address: "820 S. Maple St, North Platte, NE 69101",
    phone: "308-696-1201",
    website: "wcdhd.org",
    description:
      "Public health services, education, and community health supports for families.",
    tags: ["public health", "education"],
    category: "Benefits & support",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Car Seat Fittings",
    address: "600 W. Leota St, North Platte, NE 69101",
    phone: "308-568-8000",
    website: "gphealth.org",
    email: "jennyh@gphealth.org",
    description:
      "Free car seat checks/installation help by trained staff; appointments.",
    tags: ["car seat safety", "education"],
    category: "Logistics",
    city: "North Platte",
  },
];

export const resourceData: Record<string, ContactResource[]> = {
  en: PRENATAL_CONTACTS,
  es: PRENATAL_CONTACTS,
  so: PRENATAL_CONTACTS,
};
