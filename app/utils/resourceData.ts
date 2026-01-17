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
    tags: ["labor & delivery", "prenatal"],
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
    tags: ["labor & delivery"],
    category: "Prenatal medical care",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Complete Family Medicine",
    address: "811 W. William Ave, North Platte, NE 69101",
    phone: "308-696-2273",
    website: "gphealth.org",
    description:
      "Primary care during pregnancy; referrals and ongoing medical support, postpartum mother and baby care",
    tags: ["referrals", "breastfeeding support"],
    category: "Prenatal medical care",
    city: "North Platte",
  },
  {
    name: "Midlands Family Medicine",
    address: "611 West Francis Street Suite 100, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Primary care during pregnancy; referrals and medical support, postpartum mother and baby care.",

    tags: ["prenatal", "referrals"],

    category: "Postnatal medical care",

    city: "North Platte",
  },
  {
    name: "WIC – People’s Family Health Services",
    address: "102 S. Elm St, North Platte, NE 69101",
    phone: "308-534-1678",

    website: "dhhs.ne.gov",

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

    tags: ["benefits navigation", "subsidies", "housing"],

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

    tags: ["food pantry", "groceries"],

    category: "Food & Housing",

    city: "North Platte",
  },
  {
    name: "North Platte Housing Authority",
    address: "900 Autumn Park Dr, North Platte, NE 69101",
    phone: "308-534-4887",

    website: "www.npha.us",

    description:
      "Public housing and subsidized housing options; application/waitlist support.",

    tags: ["housing", "subsidies"],

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

    tags: ["DV shelter", "crisis line"],

    category: "Crisis support",

    city: "North Platte",
  },
  {
    name: "Legal Aid of Nebraska – North Platte Office",
    address: "102 E. 3rd St, Suite 102, North Platte, NE 69101",
    phone: "308-532-5793 (toll-free 1-877-669-9080)",

    website: "legalaidofnebraska.org",

    description:
      "Civil legal help; housing, benefits, family law, and immigration-related legal issues (eligibility-based).",

    tags: ["legal counseling", "immigration"],

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

    tags: ["transportation"],

    category: "Logistics & transportation",

    city: "North Platte",
  },
  {
    name: "Women’s Resource Center of North Platte",
    address: "209 McNeel Lane, North Platte, NE 69101",
    phone: "308-534-1440 308-650-3085",

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

    tags: ["options counseling", "casework"],

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

    tags: ["benefits navigation", "education"],

    category: "Benefits & support",

    city: "North Platte",
  },
  {
    name: "Great Plains Health – Car Seat Fittings",
    address: "600 W. Leota St, North Platte, NE 69101",
    phone: "308-568-8000",

    website: "gphealth.org",

    description:
      "Free car seat checks/installation help by trained staff; appointments.",

    tags: ["car seat safety", "education"],

    category: "logistics & transportation",

    city: "North Platte",
  },
  {
    name: "CHI Health Maternity Center at Good Samaritan",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7137",

    website:
      "https://www.chihealth.com/services/maternity/our-centers/maternity-center-at-good-samaritan",

    description:
      "Labor & delivery, C-sections, childbirth education, lactation consultants.",

    tags: ["labor & delivery", "breastfeeding support"],

    category: "Postnatal medical care",

    city: "Kearney",
  },
  {
    name: "Contemporary Obstetrics & Gynecology (COBGYN)",
    address: "101 W 24th St Suite 1, Kearney, NE 68847",
    phone: "(308) 865-2740",

    website: "cobgyn.com",

    description: "OB care, high-risk OB, gynecology, infertility services.",

    tags: ["labor & delivery", "prenatal"],

    category: "Prenatal medical care",

    city: "Kearney",
  },
  {
    name: "Choice Family Health Care (Kearney office)",
    address: "4503 2nd Ave Suite 209, Kearney, NE 68847",
    phone: "(308) 234-9140",

    website: "choicefamilyhealthcare.org",

    description:
      "Pregnancy testing/counseling, preventive women’s care, contraception, referrals.",

    tags: ["pregnancy test", "family planning"],

    category: "Prenatal medical care",

    city: "Kearney",
  },
  {
    name: "Nebraska DHHS (ACCESSNebraska Kearney office)",
    address: "24 W 16th St, Kearney, NE 68847",
    phone: "(308) 865-5592",

    website: "dhhs.ne.gov",

    description:
      "Medicaid, SNAP, cash assistance applications and case support.",

    tags: ["Medicaid", "SNAP"],

    category: "Benefits & support",

    city: "Kearney",
  },
  {
    name: "WIC – Community Action Partnership of Mid-Nebraska (Education Building)",
    address: "1023 Ave F, Kearney, NE 68847",
    phone: "(308) 865-5356",

    website: "communityactionmidne.com/wic",

    description:
      "WIC nutrition benefits for pregnant/postpartum people and children under 5.",

    tags: ["WIC", "nutrition"],

    category: "Benefits & support",

    city: "Kearney",
  },
  {
    name: "Community Action Mid-Nebraska Food Bank (Kearney)",
    address: "114 E 11th St, Kearney, NE 68848",
    phone: "(308) 865-5683",

    website: "communityactionmidne.com/contact-us",

    description: "Emergency food assistance; links to other supports.",

    tags: ["food pantry", "referrals"],

    category: "Food & Housing",

    city: "Kearney",
  },
  {
    name: "Kearney Jubilee Center",
    address: "1920 Central Ave, Kearney, NE 68848",
    phone: "(308) 234-3880",

    website: "kearneyjubilee.org",

    description:
      "Food pantry, clothing, basic needs support and assistance navigation.",

    tags: ["food pantry", "clothing"],

    category: "Food & Housing",

    city: "Kearney",
  },
  {
    name: "Storehouse (Kearney eFree Church)",
    address: "4010 7th Ave, Kearney, NE 68845",
    phone: "(308) 455-3302",

    website: "kearneystorehouse.com",

    description: "Food pantry support and community assistance.",

    tags: ["food pantry", "basic needs"],

    category: "Food & Housing",

    city: "Kearney",
  },
  {
    name: "Kearney Housing Agency",
    address: "2715 Ave I OFC, Kearney, NE 68848",
    phone: "(308) 234-3000",

    website: "kearneyhousingagency.com",

    description: "Public housing / housing assistance; application guidance.",

    tags: ["housing"],

    category: "Food & Housing",

    city: "Kearney",
  },
  {
    name: "The S.A.F.E. Center (Kearney)",
    address: "620 E 25th St, Suite 14, Kearney, NE 68847",
    phone: "(308) 237-2599",

    phone2: "(24/7 hotline) 1-877-237-2513",

    website: "",

    description:
      "Domestic/sexual violence crisis help, advocacy, shelter support, safety planning.",

    tags: ["DV shelter", "crisis line"],

    category: "Crisis support",

    city: "Kearney",
  },
  {
    name: "Catholic Social Services of Southern Nebraska ",
    address: "",
    phone: "(402) 385-9074",

    website: "csshope.org",

    description: "Immigration forms help and case guidance (regional service).",

    tags: ["options counseling", "immigration"],

    category: "Crisis support",

    city: "Online",
  },
  {
    name: "RYDE Transit (Community Action Mid-Nebraska)",
    address: "715 E 11th St, Kearney, NE 68847",
    phone: "(308) 865-5677",

    website: "communityactionmidne.com/ryde-landing",

    description:
      "Public transit; rides to appointments, errands, and essential services.",

    tags: ["transportation"],

    category: "Logistics & transportation",

    city: "Kearney",
  },
  {
    name: "Choice Family Health Care (pregnancy testing/counseling)",
    address: "4503 2nd Ave Ste 209, Kearney, NE 68847",
    phone: "(308) 234-9140",

    website: "choicefamilyhealthcare.org",

    description:
      "Pregnancy testing and counseling; options discussion and referrals.",

    tags: ["pregnancy test", "counseling"],

    category: "Pregnancy options",

    city: "Kearney",
  },
  {
    name: "Lutheran Family Services",
    address: "2715 9th Ave, Kearney, NE 68845",
    phone: "(308) 236-8226",

    website: "onelfs.org",

    description:
      "Pregnancy counseling and adoption planning support, immigration support",

    tags: ["options counseling", "immigration"],

    category: "Benefits & support",

    city: "Kearney",
  },
  {
    name: "CHI Health Good Samaritan – Postpartum & Breastfeeding support",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7689",

    website: "https://www.chihealth.com",

    description: "postpartum, breastfeeding",

    tags: [],

    category: "Postnatal medical care",

    city: "Kearney",
  },
  {
    name: "CHI Health Clinic Family Medicine (Kearney)",
    address: "211 W 33rd St, Kearney, NE 68845",
    phone: "(308) 865-2141",

    website: "https://www.chihealth.com",

    description:
      "Primary care for postpartum parents; ongoing health management.",

    tags: ["prenatal", "post-delivery care"],

    category: "Prenatal medical care",

    city: "Kearney",
  },
  {
    name: "Bright Futures Preschool (Kearney Public Schools) – Home visitation (prenatal–age 3)",
    address: "1511 5th Ave, Kearney, NE 68845",
    phone: "(308) 698-8046",

    website:
      "Home-visiting support from before birth to age 3; parent coaching.",

    description: "home visiting, early childhood",

    tags: [],

    category: "",

    city: "Kearney",
  },
  {
    name: "Head Start / Early Head Start (Community Action Mid-Nebraska)",
    address: "114 E 11th St, Kearney, NE 68848",
    phone: "(308) 865-5690",

    website: "communityactionmidne.com/head-start",

    description: "Early childhood education and family support services.",

    tags: ["Head Start", "early childhood"],

    category: "Benefits & support",

    city: "Kearney",
  },
  {
    name: "United Way of the Kearney Area (referrals/partner agencies)",
    address: "4009 6th Ave, Suite 19, Kearney, NE 68845",
    phone: "(308) 237-6840",

    website: "uwka.org",

    description:
      "Connects families to local partner agencies for basic needs and support.",

    tags: ["referrals", "benefits navigation"],

    category: "Benefits & support",

    city: "Kearney",
  },
  {
    name: "Lexington Regional Health Center — Labor & Delivery",
    address: "1201 N Erie St, Lexington, NE 68850",
    phone: "(308) 324-5651",

    website: "lexingtonregional.org",

    description:
      "Labor & delivery and pregnancy support from first prenatal visit through birth.",

    tags: ["labor & delivery", "post-delivery care"],

    category: "Prenatal medical care",

    city: "Lexington",
  },
  {
    name: "Family Medicine Specialists Clinic (LRHC)",
    address: "1105 N Erie St, Lexington, NE 68850",
    phone: "(308) 324-8308",

    website: "lexingtonregional.org",

    description:
      "Primary care for pregnancy needs, referrals, chronic disease management during pregnancy.",

    tags: ["prenatal", "referrals"],

    category: "Prenatal medical care",

    city: "Lexington",
  },
  {
    name: "Plum Creek Medical Group",
    address: "1103 Buffalo Bend, Lexington, NE 68850",
    phone: "(308) 324-6386",

    website: "https://www.plumcreekmedicalgroup.com/",

    description:
      "Primary care for pregnancy needs, referrals, chronic disease management during pregnancy.",

    tags: ["prenatal", "referrals"],

    category: "Prenatal medical care",

    city: "Lexington",
  },
  {
    name: "Nebraska DHHS — Lexington Office",
    address: "200 W 7th St, Suite 1, Lexington, NE 68850",
    phone: "(308) 324-6633",

    website: "dhhs.ne.gov",

    description:
      "Apply/manage Medicaid and public benefits; child/family services access point.",

    tags: ["Medicaid", "SNAP", "benefits navigation"],

    category: "Benefits & support",

    city: "Lexington",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (Lexington)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-4219",

    website: "communityactionmidne.com",

    description:
      "Benefits navigation and support services, Local hub for referrals: benefits, food, family supports, and navigation.",

    tags: ["case management", "benefits navigation", "referrals", "WIC"],

    category: "Benefits & support",

    city: "Lexington",
  },
  {
    name: "Head Start — Lexington (Community Action Partnership)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-5282",

    email: "lexingtonhs@mnca.net",

    website: "",

    description:
      "Early childhood program and family supports for eligible families.",

    tags: ["Head Start", "early childhood"],

    category: "Benefits & support",

    city: "Lexington",
  },
  {
    name: "Lexington Food Pantry (Community Action Partnership)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-4219",

    website: "communityactionmidne.com",

    description:
      "Food pantry access and resource navigation through CAP Lexington.",

    tags: ["food pantry", "referrals"],

    category: "Food & Housing",

    city: "Lexington",
  },
  {
    name: "Crossroads Mission Avenue — Lexington",
    address: "114 W 5th St, Lexington, NE 68850",
    phone: "(308) 378-3502",

    website: "crossroadsmission.com",

    description: "Food/clothing support and assistance for families in need.",

    tags: ["food support", "clothing"],

    category: "Food & Housing",

    city: "Lexington",
  },
  {
    name: "Micah’s House Blessing Box (Little Free Pantry)",
    address: "810 S Washington St, Lexington, NE 68850",
    phone: "308-746-7509",

    website: "mapping.littlefreepantry.org",

    description:
      "24/7 blessing box: non-perishable food, hygiene items, clothing.",

    tags: ["food support", "clothing"],

    category: "Food & Housing",

    city: "Lexington",
  },
  {
    name: "Lexington Housing Authority",
    address: "609 E 3rd St, Lexington, NE 68850",
    phone: "(308) 324-4633",

    website: "lexhousing.com",

    description: "Public housing support and housing assistance navigation.",

    tags: ["housing", "public housing"],

    category: "Food & Housing",

    city: "Lexington",
  },
  {
    name: "Parent-Child Center (DV/SA services)",
    address: "1001 N Washington St, Lexington, NE 68850",
    phone: "(308) 324-2336",

    phone2: "Crisis: (308) 324-3040",

    website: "parentchildcenter-lexington.org",

    description:
      "Emergency shelter, crisis line, advocacy, protection order help, counseling referrals.",

    tags: ["DV shelter", "crisis line"],

    category: "Crisis support",

    city: "Lexington",
  },
  {
    name: "Lutheran Family Services — Lexington Office",
    address: "800 N Washington St, Lexington, NE 68850",
    phone: "(308) 532-0587",

    website: "onelfs.org",

    description:
      "Counseling, pregnancy counseling/adoption pathways; immigration legal services available through LFS network.",

    tags: ["options counseling", "immigration"],

    category: "Pregnancy options",

    city: "Lexington",
  },
  {
    name: "Dawson County Handibus / RYDE Transit (Dawson County)",
    address: "407 E 6th St, Lexington, NE 68850",
    phone: "(308) 324-3670",

    website: "communityactionmidne.com",

    description:
      "Rides for medical appointments and essential trips in Dawson County.",

    tags: ["transportation"],

    category: "Logistics & transportation",

    city: "Lexington",
  },
  {
    name: "Kearney Regional Medical Center",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "308-455-3600",

    website: "https://www.kearneyregional.com",

    description:
      "OB services, labor and delivery, postpartum care, newborn care, lactation support.",

    tags: ["labor & delivery", "post-delivery care"],

    category: "Postnatal medical care",

    city: "Kearney",
  },
  {
    name: "Two Rivers Public Health Department",
    address: "701 4th Ave, Suite 1, Kearney, NE 68845",
    phone: "888-669-7154",

    website: "https://www.trphd.ne.gov",

    description:
      "Public health programs: WIC coordination, maternal-child health education, referrals, home-visiting partnerships.",

    tags: ["benefits navigation", "WIC", "education", "vaccination"],

    category: "Benefits & support",

    city: "Kearney",
  },
  {
    name: "Postpartum Nursing Care & Lactation Consultant (KRMC)",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "(308) 455-8507",

    website:
      "https://www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",

    description:
      "Post-delivery recovery support, parent education, newborn safety guidance.",

    tags: ["post-delivery care", "parent education", "breastfeeding support"],

    category: "Postnatal medical care",

    city: "Kearney",
  },
  {
    name: "KRMC Newborn Services",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "(308) 455-8507",

    website:
      "https://www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",

    description:
      "Newborn screenings, weight/feeding support, routine infant assessments.",

    tags: ["newborn care", "screening"],

    category: "Postnatal medical care",

    city: "Kearney",
  },
  {
    name: "Planned Parenthood ",
    address: "",
    phone: "800-230-7526",

    website: "plannedparenthood.org",

    description:
      "Abortion, contraception, STI care, pregnancy options counseling.",

    tags: ["options counseling", "contraception"],

    category: "Pregnancy options",

    city: "Online",
  },
  {
    name: "National Abortion Federation (NAF) Hotline",
    address: "",
    phone: "800-772-9100",

    website: "abortionfunds.org",

    description:
      "Referrals, case management, possible financial assistance for pregnancy termination",

    tags: ["options counseling"],

    category: "Pregnancy options",

    city: "Online",
  },
  {
    name: "Nebraska Children’s Home Society (NCHS) – Pregnancy Services",
    address: "",
    phone: "800-390-6754  877-420-4747",

    website: "nchs.org",

    description: "Pregnancy counseling, adoption planning, parenting support",

    tags: ["options counseling", "parent education"],

    category: "Pregnancy options",

    city: "Online",
  },
  {
    name: "Center for Immigrant & Refugee Advancement / Immigrant Legal Center (Nebraska Immigration Legal Assistance Hotline)",
    address: "",
    phone: "(402) 898-1349  (855) 307-6730",

    website:
      "https://www.immigrationadvocates.org/nonprofit/legaldirectory/organization.393089-Center_for_Immigrant_and_Refugee_Advancement",

    description: "Immigration legal services, consults, referrals",

    tags: ["immigration"],

    category: "Crisis support",

    city: "Online",
  },
  {
    name: "National Domestic Violence Hotline (24/7)",
    address: "",
    phone: "800-799-7233",

    website: "thehotline.org",

    description: "Safety planning, crisis support, local shelter referrals",

    tags: ["DV shelter", "crisis line"],

    category: "Crisis support",

    city: "Online",
  },
  {
    name: "RAINN National Sexual Assault Hotline (24/7)",
    address: "",
    phone: "800-656-4673",

    website: "rainn.org",

    description: "Sexual assault crisis support, referrals, reporting options.",

    tags: ["DV shelter", "crisis line"],

    category: "Crisis support",

    city: "Online",
  },
  {
    name: "Gothenburg Hospital ",
    address: "910 20th St Gothenburg, NE 69138",
    phone: "308-537-3661",

    website: "gothenburghealth.org",

    description:
      "Prenatal care, ultrasounds, OB visits, deliveries, gynecology.",

    tags: ["prenatal", "OB care", "ultrasounds"],

    category: "Prenatal medical care",

    city: "Gothenburg",
  },
  {
    name: "Cozad Community Health System (Hospital/Clinic)",
    address: "300 E 12th St, Cozad, NE 69130",
    phone: "308-784-2261",

    website: "cozadhealthcare.com",

    description:
      "Primary care during pregnancy; referrals and ongoing medical support",

    tags: ["prenatal", "referrals"],

    category: "Prenatal medical care",

    city: "Cozad",
  },
  {
    name: "Gothenburg Women’s Health (OB/GYN)",
    address: "918 20th St Gothenburg, NE 69138",
    phone: "308-537-4066",

    website: "gothenburghealth.org",

    description:
      "Primary care during pregnancy; referrals and ongoing medical support, postpartum mother and baby care",

    tags: ["prenatal", "referrals"],

    category: "Prenatal medical care",

    city: "Gothenburg",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska – WIC (Cozad)",
    address: "1515 Ave B, Cozad, NE 69130",
    phone: "308-784-2887",

    website: "communityactionmidne.com",

    description:
      "WIC enrollment/support; nutrition education and referrals for pregnant/postpartum people and young children.",

    tags: ["WIC", "nutrition", "breastfeeding"],

    category: "Benefits & support",

    city: "Cozad",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska – WIC (Gothenburg)",
    address: "1512 Ave G, Gothenburg, NE 69138",
    phone: "308-537-3433",

    website: "communityactionmidne.com",

    description: "WIC clinic site serving Gothenburg-area families.",

    tags: ["WIC", "nutrition"],

    category: "Benefits & support",

    city: "Gothenburg",
  },
  {
    name: "Cozad Food Pantry",
    address: "105 E Highway 30, Cozad, NE 69130",
    phone: "308-784-4545",

    website: "",

    description: "Grocery support for households with food insecurity.",

    tags: ["food pantry", "groceries"],

    category: "Food & Housing",

    city: "Cozad",
  },
  {
    name: "Gothenburg Food Pantry (American Lutheran Church)",
    address: "1512 Ave G, Gothenburg, NE 69138",
    phone: "308-537-3433",

    website: "",

    description: "Food pantry serving Gothenburg and surrounding area.",

    tags: ["food pantry", "groceries"],

    category: "Food & Housing",

    city: "Gothenburg",
  },
];

export const resourceData: Record<string, ContactResource[]> = {
  en: PRENATAL_CONTACTS,
  es: PRENATAL_CONTACTS,
  so: PRENATAL_CONTACTS,
};
