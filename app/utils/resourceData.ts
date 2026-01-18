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
    website: "iserve.nebraska.gov",
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
    website: "iserve.nebraska.gov",
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
    category: "Logistics & transportation",
    city: "North Platte",
  },
  {
    name: "CHI Health Maternity Center at Good Samaritan",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7137",
    website:
      "www.chihealth.com/services/maternity/our-centers/maternity-center-at-good-samaritan",
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
    website: "iserve.nebraska.gov",
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
    website: "safecenter.org/",
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

    website: "www.chihealth.com",

    description: "postpartum, breastfeeding",

    tags: [],

    category: "Postnatal medical care",

    city: "Kearney",
  },
  {
    name: "CHI Health Clinic Family Medicine (Kearney)",
    address: "211 W 33rd St, Kearney, NE 68845",
    phone: "(308) 865-2141",

    website: "www.chihealth.com",

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
    website: "brightfutures.kearneypublicschools.org/",
    description:
      "Home-visiting support from before birth to age 3; parent coaching.",
    tags: ["Home Visiting", "Early Childhood"],
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

    website: "www.plumcreekmedicalgroup.com/",

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
    website: "iserve.nebraska.gov",
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
    website: "communityactionmidne.com/head-start/locations/",
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

    website: "www.kearneyregional.com",

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

    website: "www.trphd.ne.gov",

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
      "www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",

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
      "www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",

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
      "www.immigrationadvocates.org/nonprofit/legaldirectory/organization.393089-Center_for_Immigrant_and_Refugee_Advancement",

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

export const PRENATAL_CONTACTS_ES: ContactResource[] = [
  {
    name: "North Platte OBGYN, PC",
    address: "1115 S. Willow St, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Atención prenatal, ecografías, visitas obstétricas, partos, ginecología.",
    tags: ["parto y alumbramiento", "prenatal"],
    category: "Atención médica prenatal",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Women’s & Children’s Services / Labor & Delivery",
    address: "601 W. Leota St, North Platte, NE 69101",
    phone: "308-568-7373",
    website: "gphealth.org",
    description:
      "Servicios de maternidad hospitalarios; apoyo y coordinación de parto y alumbramiento.",
    tags: ["parto y alumbramiento"],
    category: "Atención médica prenatal",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Complete Family Medicine",
    address: "811 W. William Ave, North Platte, NE 69101",
    phone: "308-696-2273",
    website: "gphealth.org",
    description:
      "Atención primaria durante el embarazo; referencias y apoyo médico continuo, atención posparto para madre y bebé",
    tags: ["referencias", "apoyo a la lactancia"],
    category: "Atención médica prenatal",
    city: "North Platte",
  },
  {
    name: "Midlands Family Medicine",
    address: "611 West Francis Street Suite 100, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Atención primaria durante el embarazo; referencias y apoyo médico continuo, atención posparto para madre y bebé.",
    tags: ["prenatal", "referencias"],
    category: "Atención médica posparto",
    city: "North Platte",
  },
  {
    name: "WIC – People’s Family Health Services",
    address: "102 S. Elm St, North Platte, NE 69101",
    phone: "308-534-1678",
    website: "iserve.nebraska.gov",
    description:
      "Beneficios de nutrición de WIC para personas embarazadas/posparto, bebés y niños.",
    tags: ["WIC", "nutrición"],
    category: "Beneficios y apoyo",
    city: "North Platte",
  },
  {
    name: "Nebraska DHHS – Lincoln County Office",
    address: "200 S. Silber Ave, North Platte, NE 69101",
    phone: "308-535-8200",
    website: "iserve.nebraska.gov",
    description:
      "Solicitar/administrar Medicaid, SNAP y otros beneficios públicos.",
    tags: ["Medicaid", "SNAP"],
    category: "Beneficios y apoyo",
    city: "North Platte",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (North Platte)",
    address: "901 E. 10th St, North Platte, NE 69101",
    phone: "308-532-3250",
    website: "communityactionmidne.com",
    description:
      "Navegación de beneficios más asistencia de emergencia y apoyo de estabilización.",
    tags: ["navegación de beneficios", "subsidios", "vivienda"],
    category: "Beneficios y apoyo",
    city: "North Platte",
  },
  {
    name: "North Platte Catholic Community Food Pantry",
    address: "421 E. 3rd St, North Platte, NE 69101",
    phone: "308-532-8800",
    website: "northplattegiving.org",
    description:
      "Despensa de alimentos comunitaria; comestibles para hogares necesitados.",
    tags: ["despensa de alimentos", "comestibles"],
    category: "Comida y Vivienda",
    city: "North Platte",
  },
  {
    name: "The Salvation Army of North Platte – Food Pantry",
    address: "1020 N. Adams Ave, North Platte, NE 69101",
    phone: "308-532-2038",
    website: "salvationarmyusa.org",
    description:
      "Despensa de alimentos más apoyo para necesidades básicas para familias.",
    tags: ["despensa de alimentos", "comestibles"],
    category: "Comida y Vivienda",
    city: "North Platte",
  },
  {
    name: "North Platte Housing Authority",
    address: "900 Autumn Park Dr, North Platte, NE 69101",
    phone: "308-534-4887",
    website: "www.npha.us",
    description:
      "Vivienda pública y opciones de vivienda subsidiada; apoyo con solicitud/lista de espera.",
    tags: ["vivienda", "subsidios"],
    category: "Comida y Vivienda",
    city: "North Platte",
  },
  {
    name: "Rape/Domestic Abuse Program (RDAP)",
    address: "North Platte, NE (crisis services; contact for shelter access)",
    phone: "308-534-3495",
    phone2: "308-536-4848",
    website: "nprdap.org",
    description:
      "Apoyo de crisis 24/7 para violencia doméstica/agresión sexual; refugio, defensa, órdenes de protección, transporte.",
    tags: ["refugio VD", "línea de crisis"],
    category: "Apoyo en crisis",
    city: "North Platte",
  },
  {
    name: "Legal Aid of Nebraska – North Platte Office",
    address: "102 E. 3rd St, Suite 102, North Platte, NE 69101",
    phone: "308-532-5793 (toll-free 1-877-669-9080)",
    website: "legalaidofnebraska.org",
    description:
      "Ayuda legal civil; vivienda, beneficios, derecho familiar y asuntos legales de inmigración (basado en elegibilidad).",
    tags: ["consejería legal", "inmigración"],
    category: "Apoyo en crisis",
    city: "North Platte",
  },
  {
    name: "North Platte Public Transit",
    address: "1520 N. Jeffers St, North Platte, NE 69101",
    phone: "308-532-1370",
    website: "northplattene.gov",
    description:
      "Transporte público local; planificación de viajes para visitas clínicas y mandados.",
    tags: ["transporte"],
    category: "Logística y transporte",
    city: "North Platte",
  },
  {
    name: "Women’s Resource Center of North Platte",
    address: "209 McNeel Lane, North Platte, NE 69101",
    phone: "308-534-1440 308-650-3085",
    website: "pregnancynorthplatte.com",
    description:
      "Pruebas de embarazo y consejería de opciones; apoyo y recursos para decisiones de embarazo no planificado.",
    tags: ["consejería de opciones", "prueba de embarazo"],
    category: "Opciones de embarazo",
    city: "North Platte",
  },
  {
    name: "Nebraska Children’s Home Society (NCHS) – North Platte Office",
    address: "121 N. Dewey St, Suite 206, North Platte, NE 69101",
    phone: "308-534-3250",
    website: "nchs.org",
    description:
      "Servicios de adopción y apoyo familiar; orientación para la crianza o planificación de adopción.",
    tags: ["consejería de opciones", "trabajo social"],
    category: "Opciones de embarazo",
    city: "North Platte",
  },
  {
    name: "West Central District Health Department",
    address: "820 S. Maple St, North Platte, NE 69101",
    phone: "308-696-1201",
    website: "wcdhd.org",
    description:
      "Servicios de salud pública, educación y apoyos de salud comunitaria para familias.",
    tags: ["navegación de beneficios", "educación"],
    category: "Beneficios y apoyo",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Car Seat Fittings",
    address: "600 W. Leota St, North Platte, NE 69101",
    phone: "308-568-8000",
    website: "gphealth.org",
    description:
      "Revisiones/ayuda de instalación de asientos de seguridad gratuitos por personal capacitado; citas.",
    tags: ["seguridad en el auto", "educación"],
    category: "Logística y transporte",
    city: "North Platte",
  },
  {
    name: "CHI Health Maternity Center at Good Samaritan",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7137",
    website:
      "www.chihealth.com/services/maternity/our-centers/maternity-center-at-good-samaritan",
    description:
      "Parto y alumbramiento, cesáreas, educación sobre el parto, consultoras de lactancia.",
    tags: ["parto y alumbramiento", "apoyo a la lactancia"],
    category: "Atención médica posparto",
    city: "Kearney",
  },
  {
    name: "Contemporary Obstetrics & Gynecology (COBGYN)",
    address: "101 W 24th St Suite 1, Kearney, NE 68847",
    phone: "(308) 865-2740",
    website: "cobgyn.com",
    description:
      "Atención obstétrica, obstetricia de alto riesgo, ginecología, servicios de infertilidad.",
    tags: ["parto y alumbramiento", "prenatal"],
    category: "Atención médica prenatal",
    city: "Kearney",
  },
  {
    name: "Choice Family Health Care (Kearney office)",
    address: "4503 2nd Ave Suite 209, Kearney, NE 68847",
    phone: "(308) 234-9140",
    website: "choicefamilyhealthcare.org",
    description:
      "Pruebas/consejería de embarazo, atención preventiva para mujeres, anticoncepción, referencias.",
    tags: ["prueba de embarazo", "planificación familiar"],
    category: "Atención médica prenatal",
    city: "Kearney",
  },
  {
    name: "Kearney Regional Medical Center",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "308-455-3600",
    website: "www.kearneyregional.com",
    description:
      "Servicios obstétricos, parto y alumbramiento, atención posparto, atención de recién nacidos, apoyo a la lactancia.",
    tags: ["parto y alumbramiento", "atención posparto"],
    category: "Atención médica posparto",
    city: "Kearney",
  },
  {
    name: "Two Rivers Public Health Department",
    address: "701 4th Ave, Suite 1, Kearney, NE 68845",
    phone: "888-669-7154",
    website: "www.trphd.ne.gov",
    description:
      "Programas de salud pública: coordinación de WIC, educación de salud materno-infantil, referencias, asociaciones de visitas domiciliarias.",
    tags: ["navegación de beneficios", "WIC", "educación", "vacunación"],
    category: "Beneficios y apoyo",
    city: "Kearney",
  },
  {
    name: "Postpartum Nursing Care & Lactation Consultant (KRMC)",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "(308) 455-8507",
    website:
      "www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",
    description:
      "Apoyo de recuperación posparto, educación para padres, orientación sobre seguridad del recién nacido.",
    tags: [
      "atención posparto",
      "educación para padres",
      "apoyo a la lactancia",
    ],
    category: "Atención médica posparto",
    city: "Kearney",
  },
  {
    name: "KRMC Newborn Services",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "(308) 455-8507",
    website:
      "www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",
    description:
      "Exámenes de recién nacidos, apoyo de peso/alimentación, evaluaciones infantiles de rutina.",
    tags: ["atención de recién nacidos", "exámenes"],
    category: "Atención médica posparto",
    city: "Kearney",
  },
  {
    name: "Center for Immigrant & Refugee Advancement / Immigrant Legal Center",
    address: "",
    phone: "(402) 898-1349  (855) 307-6730",
    website:
      "www.immigrationadvocates.org/nonprofit/legaldirectory/organization.393089-Center_for_Immigrant_and_Refugee_Advancement",
    description: "Servicios legales de inmigración, consultas, referencias",
    tags: ["inmigración"],
    category: "Apoyo en crisis",
    city: "Online",
  },
  {
    name: "Nebraska DHHS (ACCESSNebraska Kearney office)",
    address: "24 W 16th St, Kearney, NE 68847",
    phone: "(308) 865-5592",
    website: "iserve.nebraska.gov",
    description:
      "Medicaid, SNAP, solicitudes de asistencia en efectivo y apoyo de casos.",
    tags: ["Medicaid", "SNAP"],
    category: "Beneficios y apoyo",
    city: "Kearney",
  },
  {
    name: "WIC – Community Action Partnership of Mid-Nebraska (Education Building)",
    address: "1023 Ave F, Kearney, NE 68847",
    phone: "(308) 865-5356",
    website: "communityactionmidne.com/wic",
    description:
      "Beneficios de nutrición de WIC para personas embarazadas/posparto y niños menores de 5 años.",
    tags: ["WIC", "nutrición"],
    category: "Beneficios y apoyo",
    city: "Kearney",
  },
  {
    name: "Community Action Mid-Nebraska Food Bank (Kearney)",
    address: "114 E 11th St, Kearney, NE 68848",
    phone: "(308) 865-5683",
    website: "communityactionmidne.com/contact-us",
    description:
      "Asistencia alimentaria de emergencia; enlaces a otros apoyos.",
    tags: ["despensa de alimentos", "referencias"],
    category: "Comida y Vivienda",
    city: "Kearney",
  },
  {
    name: "Kearney Jubilee Center",
    address: "1920 Central Ave, Kearney, NE 68848",
    phone: "(308) 234-3880",
    website: "kearneyjubilee.org",
    description:
      "Despensa de alimentos, ropa, apoyo para necesidades básicas y navegación de asistencia.",
    tags: ["despensa de alimentos", "ropa"],
    category: "Comida y Vivienda",
    city: "Kearney",
  },
  {
    name: "Storehouse (Kearney eFree Church)",
    address: "4010 7th Ave, Kearney, NE 68845",
    phone: "(308) 455-3302",
    website: "kearneystorehouse.com",
    description: "Apoyo de despensa de alimentos y asistencia comunitaria.",
    tags: ["despensa de alimentos", "necesidades básicas"],
    category: "Comida y Vivienda",
    city: "Kearney",
  },
  {
    name: "Kearney Housing Agency",
    address: "2715 Ave I OFC, Kearney, NE 68848",
    phone: "(308) 234-3000",
    website: "kearneyhousingagency.com",
    description:
      "Vivienda pública / asistencia de vivienda; orientación para la solicitud.",
    tags: ["vivienda"],
    category: "Comida y Vivienda",
    city: "Kearney",
  },
  {
    name: "The S.A.F.E. Center (Kearney)",
    address: "620 E 25th St, Suite 14, Kearney, NE 68847",
    phone: "(308) 237-2599",
    phone2: "(24/7 hotline) 1-877-237-2513",
    website: "safecenter.org/",
    description:
      "Ayuda de crisis por violencia doméstica/sexual, defensa, apoyo de refugio, planificación de seguridad.",
    tags: ["refugio VD", "línea de crisis"],
    category: "Apoyo en crisis",
    city: "Kearney",
  },
  {
    name: "Catholic Social Services of Southern Nebraska ",
    address: "",
    phone: "(402) 385-9074",
    website: "csshope.org",
    description:
      "Ayuda con formularios de inmigración y orientación de casos (servicio regional).",
    tags: ["consejería de opciones", "inmigración"],
    category: "Apoyo en crisis",
    city: "Online",
  },
  {
    name: "RYDE Transit (Community Action Mid-Nebraska)",
    address: "715 E 11th St, Kearney, NE 68847",
    phone: "(308) 865-5677",
    website: "communityactionmidne.com/ryde-landing",
    description:
      "Transporte público; viajes a citas, mandados y servicios esenciales.",
    tags: ["transporte"],
    category: "Logística y transporte",
    city: "Kearney",
  },
  {
    name: "Choice Family Health Care (pregnancy testing/counseling)",
    address: "4503 2nd Ave Ste 209, Kearney, NE 68847",
    phone: "(308) 234-9140",
    website: "choicefamilyhealthcare.org",
    description:
      "Pruebas de embarazo y consejería; discusión de opciones y referencias.",
    tags: ["prueba de embarazo", "consejería"],
    category: "Opciones de embarazo",
    city: "Kearney",
  },
  {
    name: "Lutheran Family Services",
    address: "2715 9th Ave, Kearney, NE 68845",
    phone: "(308) 236-8226",
    website: "onelfs.org",
    description:
      "Consejería de embarazo y apoyo para la planificación de adopción, apoyo de inmigración",
    tags: ["consejería de opciones", "inmigración"],
    category: "Beneficios y apoyo",
    city: "Kearney",
  },
  {
    name: "CHI Health Good Samaritan – Postpartum & Breastfeeding support",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7689",
    website: "www.chihealth.com",
    description: "posparto, lactancia",
    tags: [],
    category: "Atención médica posparto",
    city: "Kearney",
  },
  {
    name: "CHI Health Clinic Family Medicine (Kearney)",
    address: "211 W 33rd St, Kearney, NE 68845",
    phone: "(308) 865-2141",
    website: "www.chihealth.com",
    description:
      "Atención primaria para padres posparto; gestión de salud continua.",
    tags: ["prenatal", "atención posparto"],
    category: "Atención médica prenatal",
    city: "Kearney",
  },
  {
    name: "Bright Futures Preschool (Kearney Public Schools) – Home visitation (prenatal–age 3)",
    address: "1511 5th Ave, Kearney, NE 68845",
    phone: "(308) 698-8046",
    website: "brightfutures.kearneypublicschools.org/",
    description:
      "Apoyo de visitas domiciliarias desde antes del nacimiento hasta los 3 años; entrenamiento para padres.",
    tags: ["Visitas Domiciliarias", "Primera Infancia"],
    category: "",
    city: "Kearney",
  },
  {
    name: "Head Start / Early Head Start (Community Action Mid-Nebraska)",
    address: "114 E 11th St, Kearney, NE 68848",
    phone: "(308) 865-5690",
    website: "communityactionmidne.com/head-start",
    description:
      "Educación para la primera infancia y servicios de apoyo familiar.",
    tags: ["Head Start", "primera infancia"],
    category: "Beneficios y apoyo",
    city: "Kearney",
  },
  {
    name: "United Way of the Kearney Area (referrals/partner agencies)",
    address: "4009 6th Ave, Suite 19, Kearney, NE 68845",
    phone: "(308) 237-6840",
    website: "uwka.org",
    description:
      "Conecta a las familias con agencias asociadas locales para necesidades básicas y apoyo.",
    tags: ["referencias", "navegación de beneficios"],
    category: "Beneficios y apoyo",
    city: "Kearney",
  },
  {
    name: "Lexington Regional Health Center — Labor & Delivery",
    address: "1201 N Erie St, Lexington, NE 68850",
    phone: "(308) 324-5651",
    website: "lexingtonregional.org",
    description:
      "Parto y alumbramiento y apoyo durante el embarazo desde la primera visita prenatal hasta el nacimiento.",
    tags: ["parto y alumbramiento", "atención posparto"],
    category: "Atención médica prenatal",
    city: "Lexington",
  },
  {
    name: "Family Medicine Specialists Clinic (LRHC)",
    address: "1105 N Erie St, Lexington, NE 68850",
    phone: "(308) 324-8308",
    website: "lexingtonregional.org",
    description:
      "Atención primaria para necesidades de embarazo, referencias, manejo de enfermedades crónicas durante el embarazo.",
    tags: ["prenatal", "referencias"],
    category: "Atención médica prenatal",
    city: "Lexington",
  },
  {
    name: "Plum Creek Medical Group",
    address: "1103 Buffalo Bend, Lexington, NE 68850",
    phone: "(308) 324-6386",
    website: "www.plumcreekmedicalgroup.com/",
    description:
      "Atención primaria para necesidades de embarazo, referencias, manejo de enfermedades crónicas durante el embarazo.",
    tags: ["prenatal", "referencias"],
    category: "Atención médica prenatal",
    city: "Lexington",
  },
  {
    name: "Nebraska DHHS — Lexington Office",
    address: "200 W 7th St, Suite 1, Lexington, NE 68850",
    phone: "(308) 324-6633",
    website: "iserve.nebraska.gov",
    description:
      "Solicitar/administrar Medicaid y beneficios públicos; punto de acceso a servicios para niños/familias.",
    tags: ["Medicaid", "SNAP", "navegación de beneficios"],
    category: "Beneficios y apoyo",
    city: "Lexington",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (Lexington)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-4219",
    website: "communityactionmidne.com",
    description:
      "Navegación de beneficios y servicios de apoyo, centro local para referencias: beneficios, alimentos, apoyos familiares y navegación.",
    tags: [
      "gestión de casos",
      "navegación de beneficios",
      "referencias",
      "WIC",
    ],
    category: "Beneficios y apoyo",
    city: "Lexington",
  },
  {
    name: "Head Start — Lexington (Community Action Partnership)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-5282",
    email: "lexingtonhs@mnca.net",
    website: "communityactionmidne.com/head-start/locations/",
    description:
      "Programa para la primera infancia y apoyos familiares para familias elegibles.",
    tags: ["Head Start", "primera infancia"],
    category: "Beneficios y apoyo",
    city: "Lexington",
  },
  {
    name: "Lexington Food Pantry (Community Action Partnership)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-4219",
    website: "communityactionmidne.com",
    description:
      "Acceso a despensa de alimentos y navegación de recursos a través de CAP Lexington.",
    tags: ["despensa de alimentos", "referencias"],
    category: "Comida y Vivienda",
    city: "Lexington",
  },
  {
    name: "Crossroads Mission Avenue — Lexington",
    address: "114 W 5th St, Lexington, NE 68850",
    phone: "(308) 378-3502",
    website: "crossroadsmission.com",
    description:
      "Apoyo de alimentos/ropa y asistencia para familias necesitadas.",
    tags: ["apoyo de alimentos", "ropa"],
    category: "Comida y Vivienda",
    city: "Lexington",
  },
  {
    name: "Micah’s House Blessing Box (Little Free Pantry)",
    address: "810 S Washington St, Lexington, NE 68850",
    phone: "308-746-7509",
    website: "mapping.littlefreepantry.org",
    description:
      "Caja de bendición 24/7: alimentos no perecederos, artículos de higiene, ropa.",
    tags: ["apoyo de alimentos", "ropa"],
    category: "Comida y Vivienda",
    city: "Lexington",
  },
  {
    name: "Lexington Housing Authority",
    address: "609 E 3rd St, Lexington, NE 68850",
    phone: "(308) 324-4633",
    website: "lexhousing.com",
    description:
      "Apoyo de vivienda pública y navegación de asistencia de vivienda.",
    tags: ["vivienda", "vivienda pública"],
    category: "Comida y Vivienda",
    city: "Lexington",
  },
  {
    name: "Parent-Child Center (DV/SA services)",
    address: "1001 N Washington St, Lexington, NE 68850",
    phone: "(308) 324-2336",
    phone2: "Crisis: (308) 324-3040",
    website: "parentchildcenter-lexington.org",
    description:
      "Refugio de emergencia, línea de crisis, defensa, ayuda con órdenes de protección, referencias de consejería.",
    tags: ["refugio VD", "línea de crisis"],
    category: "Apoyo en crisis",
    city: "Lexington",
  },
  {
    name: "Lutheran Family Services — Lexington Office",
    address: "800 N Washington St, Lexington, NE 68850",
    phone: "(308) 532-0587",
    website: "onelfs.org",
    description:
      "Consejería, consejería de embarazo/vías de adopción; servicios legales de inmigración disponibles a través de la red LFS.",
    tags: ["consejería de opciones", "inmigración"],
    category: "Opciones de embarazo",
    city: "Lexington",
  },
  {
    name: "Dawson County Handibus / RYDE Transit (Dawson County)",
    address: "407 E 6th St, Lexington, NE 68850",
    phone: "(308) 324-3670",
    website: "communityactionmidne.com",
    description:
      "Viajes para citas médicas y viajes esenciales en el condado de Dawson.",
    tags: ["transporte"],
    category: "Logística y transporte",
    city: "Lexington",
  },
  {
    name: "Planned Parenthood ",
    address: "",
    phone: "800-230-7526",
    website: "plannedparenthood.org",
    description:
      "Aborto, anticoncepción, atención de ITS, consejería de opciones de embarazo.",
    tags: ["consejería de opciones", "anticoncepción"],
    category: "Opciones de embarazo",
    city: "Online",
  },
  {
    name: "National Abortion Federation (NAF) Hotline",
    address: "",
    phone: "800-772-9100",
    website: "abortionfunds.org",
    description:
      "Referencias, gestión de casos, posible asistencia financiera para la interrupción del embarazo",
    tags: ["consejería de opciones"],
    category: "Opciones de embarazo",
    city: "Online",
  },
  {
    name: "Nebraska Children’s Home Society (NCHS) – Pregnancy Services",
    address: "",
    phone: "800-390-6754  877-420-4747",
    website: "nchs.org",
    description:
      "Consejería de embarazo, planificación de adopción, apoyo para la crianza",
    tags: ["consejería de opciones", "educación para padres"],
    category: "Opciones de embarazo",
    city: "Online",
  },
  {
    name: "National Domestic Violence Hotline (24/7)",
    address: "",
    phone: "800-799-7233",
    website: "thehotline.org",
    description:
      "Planificación de seguridad, apoyo de crisis, referencias de refugios locales",
    tags: ["refugio VD", "línea de crisis"],
    category: "Apoyo en crisis",
    city: "Online",
  },
  {
    name: "RAINN National Sexual Assault Hotline (24/7)",
    address: "",
    phone: "800-656-4673",
    website: "rainn.org",
    description:
      "Apoyo de crisis por agresión sexual, referencias, opciones de denuncia.",
    tags: ["refugio VD", "línea de crisis"],
    category: "Apoyo en crisis",
    city: "Online",
  },
  {
    name: "Gothenburg Hospital ",
    address: "910 20th St Gothenburg, NE 69138",
    phone: "308-537-3661",
    website: "gothenburghealth.org",
    description:
      "Atención prenatal, ecografías, visitas obstétricas, partos, ginecología.",
    tags: ["prenatal", "atención obstétrica", "ecografías"],
    category: "Atención médica prenatal",
    city: "Gothenburg",
  },
  {
    name: "Cozad Community Health System (Hospital/Clinic)",
    address: "300 E 12th St, Cozad, NE 69130",
    phone: "308-784-2261",
    website: "cozadhealthcare.com",
    description:
      "Atención primaria durante el embarazo; referencias y apoyo médico continuo",
    tags: ["prenatal", "referencias"],
    category: "Atención médica prenatal",
    city: "Cozad",
  },
  {
    name: "Gothenburg Women’s Health (OB/GYN)",
    address: "918 20th St Gothenburg, NE 69138",
    phone: "308-537-4066",
    website: "gothenburghealth.org",
    description:
      "Atención primaria durante el embarazo; referencias y apoyo médico continuo, atención posparto para madre y bebé",
    tags: ["prenatal", "referencias"],
    category: "Atención médica prenatal",
    city: "Gothenburg",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska – WIC (Cozad)",
    address: "1515 Ave B, Cozad, NE 69130",
    phone: "308-784-2887",
    website: "communityactionmidne.com",
    description:
      "Inscripción/apoyo de WIC; educación nutricional y referencias para personas embarazadas/posparto y niños pequeños.",
    tags: ["WIC", "nutrición", "lactancia"],
    category: "Beneficios y apoyo",
    city: "Cozad",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska – WIC (Gothenburg)",
    address: "1512 Ave G, Gothenburg, NE 69138",
    phone: "308-537-3433",
    website: "communityactionmidne.com",
    description:
      "Clínica de WIC que atiende a familias del área de Gothenburg.",
    tags: ["WIC", "nutrición"],
    category: "Beneficios y apoyo",
    city: "Gothenburg",
  },
  {
    name: "Cozad Food Pantry",
    address: "105 E Highway 30, Cozad, NE 69130",
    phone: "308-784-4545",
    website: "",
    description:
      "Apoyo de comestibles para hogares con inseguridad alimentaria.",
    tags: ["despensa de alimentos", "comestibles"],
    category: "Comida y Vivienda",
    city: "Cozad",
  },
  {
    name: "Gothenburg Food Pantry (American Lutheran Church)",
    address: "1512 Ave G, Gothenburg, NE 69138",
    phone: "308-537-3433",
    website: "",
    description:
      "Despensa de alimentos que atiende a Gothenburg y sus alrededores.",
    tags: ["despensa de alimentos", "comestibles"],
    category: "Comida y Vivienda",
    city: "Gothenburg",
  },
];

export const PRENATAL_CONTACTS_SO: ContactResource[] = [
  {
    name: "North Platte OBGYN, PC",
    address: "1115 S. Willow St, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Daryeelka dhalmada kahor, ultrasound-ka, booqashooyinka OB, dhalmada, iyo cudurada haweenka.",
    tags: ["foosha & dhalmada", "dhalmada kahor"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Women’s & Children’s Services / Labor & Delivery",
    address: "601 W. Leota St, North Platte, NE 69101",
    phone: "308-568-7373",
    website: "gphealth.org",
    description:
      "Adeegyada dhalmada ee isbitaalka; taageerada iyo isku dubaridka foosha iyo dhalmada.",
    tags: ["foosha & dhalmada"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Complete Family Medicine",
    address: "811 W. William Ave, North Platte, NE 69101",
    phone: "308-696-2273",
    website: "gphealth.org",
    description:
      "Daryeelka aasaasiga ah inta lagu jiro uurka; tixraacyada iyo taageerada caafimaad ee joogtada ah, daryeelka hooyada iyo ilmaha dhalmada kadib.",
    tags: ["tixraacyo", "taageerada naas-nuujinta"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "North Platte",
  },
  {
    name: "Midlands Family Medicine",
    address: "611 West Francis Street Suite 100, North Platte, NE 69101",
    phone: "308-534-4804",
    website: "northplatteobgyn.com",
    description:
      "Daryeelka aasaasiga ah inta lagu jiro uurka; tixraacyada iyo taageerada caafimaad ee joogtada ah, daryeelka hooyada iyo ilmaha dhalmada kadib.",
    tags: ["dhalmada kahor", "tixraacyo"],
    category: "Daryeelka caafimaadka dhalmada kadib",
    city: "North Platte",
  },
  {
    name: "WIC – People’s Family Health Services",
    address: "102 S. Elm St, North Platte, NE 69101",
    phone: "308-534-1678",
    website: "iserve.nebraska.gov",
    description:
      "Faa'iidooyinka nafaqada ee WIC ee dadka uurka leh/dhalmada kadib, dhallaanka, iyo carruurta.",
    tags: ["WIC", "nafaqada"],
    category: "Faa'iidooyinka & taageerada",
    city: "North Platte",
  },
  {
    name: "Nebraska DHHS – Lincoln County Office",
    address: "200 S. Silber Ave, North Platte, NE 69101",
    phone: "308-535-8200",
    website: "iserve.nebraska.gov",
    description:
      "Codso/maamul Medicaid, SNAP, iyo faa'iidooyinka kale ee dadweynaha.",
    tags: ["Medicaid", "SNAP"],
    category: "Faa'iidooyinka & taageerada",
    city: "North Platte",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (North Platte)",
    address: "901 E. 10th St, North Platte, NE 69101",
    phone: "308-532-3250",
    website: "communityactionmidne.com",
    description:
      "Hagidda faa'iidooyinka lagu daray gargaarka degdegga ah iyo taageerada xasilloonida.",
    tags: ["hagidda faa'iidooyinka", "kabitaannada", "guryaha"],
    category: "Faa'iidooyinka & taageerada",
    city: "North Platte",
  },
  {
    name: "North Platte Catholic Community Food Pantry",
    address: "421 E. 3rd St, North Platte, NE 69101",
    phone: "308-532-8800",
    website: "northplattegiving.org",
    description: "Bakhaarka cuntada ee bulshada; raashinka qoysaska u baahan.",
    tags: ["bakhaarka cuntada", "raashinka"],
    category: "Cuntada & Guryaha",
    city: "North Platte",
  },
  {
    name: "The Salvation Army of North Platte – Food Pantry",
    address: "1020 N. Adams Ave, North Platte, NE 69101",
    phone: "308-532-2038",
    website: "salvationarmyusa.org",
    description:
      "Bakhaarka cuntada oo lagu daray taageerada baahiyaha aasaasiga ah ee qoysaska.",
    tags: ["bakhaarka cuntada", "raashinka"],
    category: "Cuntada & Guryaha",
    city: "North Platte",
  },
  {
    name: "North Platte Housing Authority",
    address: "900 Autumn Park Dr, North Platte, NE 69101",
    phone: "308-534-4887",
    website: "www.npha.us",
    description:
      "Guryaha dadweynaha iyo xulashooyinka guryaha la kabo; taageerada codsiga/liiska sugitaanka.",
    tags: ["guryaha", "kabitaannada"],
    category: "Cuntada & Guryaha",
    city: "North Platte",
  },
  {
    name: "Rape/Domestic Abuse Program (RDAP)",
    address: "North Platte, NE (crisis services; contact for shelter access)",
    phone: "308-534-3495",
    phone2: "308-536-4848",
    website: "nprdap.org",
    description:
      "Taageerada dhibaatooyinka rabshadaha qoyska/xadgudubka galmada 24/7; hoyga, u doodista, amarada ilaalinta, gaadiidka.",
    tags: ["hoyga DV", "khadka dhibaatooyinka"],
    category: "Taageerada dhibaatooyinka",
    city: "North Platte",
  },
  {
    name: "Legal Aid of Nebraska – North Platte Office",
    address: "102 E. 3rd St, Suite 102, North Platte, NE 69101",
    phone: "308-532-5793 (toll-free 1-877-669-9080)",
    website: "legalaidofnebraska.org",
    description:
      "Caawinaad sharciyeed oo madani ah; guryaha, faa'iidooyinka, sharciga qoyska, iyo arrimaha sharciga ee la xiriira socdaalka (oo ku saleysan u-qalmitaanka).",
    tags: ["la-talinta sharciga", "socdaalka"],
    category: "Taageerada dhibaatooyinka",
    city: "North Platte",
  },
  {
    name: "North Platte Public Transit",
    address: "1520 N. Jeffers St, North Platte, NE 69101",
    phone: "308-532-1370",
    website: "northplattene.gov",
    description:
      "Gaadiidka dadweynaha ee maxalliga ah; qorsheynta safarka ee booqashooyinka rugta caafimaadka iyo hawlaha.",
    tags: ["gaadiidka"],
    category: "Logistics & gaadiidka",
    city: "North Platte",
  },
  {
    name: "Women’s Resource Center of North Platte",
    address: "209 McNeel Lane, North Platte, NE 69101",
    phone: "308-534-1440 308-650-3085",
    website: "pregnancynorthplatte.com",
    description:
      "Baaritaanka uurka iyo la-talinta xulashooyinka; taageerada iyo kheyraadka go'aamada uurka aan la qorsheyn.",
    tags: ["la-talinta xulashooyinka", "baaritaanka uurka"],
    category: "Xulashooyinka uurka",
    city: "North Platte",
  },
  {
    name: "Nebraska Children’s Home Society (NCHS) – North Platte Office",
    address: "121 N. Dewey St, Suite 206, North Platte, NE 69101",
    phone: "308-534-3250",
    website: "nchs.org",
    description:
      "Adeegyada korsashada iyo taageerada qoyska; hagidda barbaarinta ama qorsheynta korsashada.",
    tags: ["la-talinta xulashooyinka", "kiiska"],
    category: "Xulashooyinka uurka",
    city: "North Platte",
  },
  {
    name: "West Central District Health Department",
    address: "820 S. Maple St, North Platte, NE 69101",
    phone: "308-696-1201",
    website: "wcdhd.org",
    description:
      "Adeegyada caafimaadka dadweynaha, waxbarashada, iyo taageerada caafimaadka bulshada ee qoysaska.",
    tags: ["hagidda faa'iidooyinka", "waxbarashada"],
    category: "Faa'iidooyinka & taageerada",
    city: "North Platte",
  },
  {
    name: "Great Plains Health – Car Seat Fittings",
    address: "600 W. Leota St, North Platte, NE 69101",
    phone: "308-568-8000",
    website: "gphealth.org",
    description:
      "Baaritaannada kuraasta gaariga oo bilaash ah/caawinaad rakibidda shaqaale tababaran; ballamo.",
    tags: ["badbaadada kursiga gaariga", "waxbarashada"],
    category: "Logistics & gaadiidka",
    city: "North Platte",
  },
  {
    name: "CHI Health Maternity Center at Good Samaritan",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7137",
    website:
      "www.chihealth.com/services/maternity/our-centers/maternity-center-at-good-samaritan",
    description:
      "Foosha & dhalmada, Qalliinka C-section, waxbarashada dhalmada, lataliyeyaasha nuujinta.",
    tags: ["foosha & dhalmada", "taageerada naas-nuujinta"],
    category: "Daryeelka caafimaadka dhalmada kadib",
    city: "Kearney",
  },
  {
    name: "Contemporary Obstetrics & Gynecology (COBGYN)",
    address: "101 W 24th St Suite 1, Kearney, NE 68847",
    phone: "(308) 865-2740",
    website: "cobgyn.com",
    description:
      "Daryeelka OB, OB khatarta sare leh, cudurada haweenka, adeegyada dhalmo la'aanta.",
    tags: ["foosha & dhalmada", "dhalmada kahor"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Kearney",
  },
  {
    name: "Choice Family Health Care (Kearney office)",
    address: "4503 2nd Ave Suite 209, Kearney, NE 68847",
    phone: "(308) 234-9140",
    website: "choicefamilyhealthcare.org",
    description:
      "Baaritaanka/la-talinta uurka, daryeelka ka hortagga ah ee haweenka, ka hortagga uurka, tixraacyada.",
    tags: ["baaritaanka uurka", "qorsheynta qoyska"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Kearney",
  },
  {
    name: "Kearney Regional Medical Center",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "308-455-3600",
    website: "www.kearneyregional.com",
    description:
      "Adeegyada OB, foosha iyo dhalmada, daryeelka dhalmada kadib, daryeelka dhallaanka, taageerada nuujinta.",
    tags: ["foosha & dhalmada", "daryeelka dhalmada kadib"],
    category: "Daryeelka caafimaadka dhalmada kadib",
    city: "Kearney",
  },
  {
    name: "Two Rivers Public Health Department",
    address: "701 4th Ave, Suite 1, Kearney, NE 68845",
    phone: "888-669-7154",
    website: "www.trphd.ne.gov",
    description:
      "Barnaamijyada caafimaadka dadweynaha: isku dubaridka WIC, waxbarashada caafimaadka hooyada iyo dhallaanka, tixraacyada, iskaashiga booqashada guriga.",
    tags: ["hagidda faa'iidooyinka", "WIC", "waxbarashada", "tallaalka"],
    category: "Faa'iidooyinka & taageerada",
    city: "Kearney",
  },
  {
    name: "Postpartum Nursing Care & Lactation Consultant (KRMC)",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "(308) 455-8507",
    website:
      "www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",
    description:
      "Taageerada soo kabashada dhalmada kadib, waxbarashada waalidka, hagista badbaadada dhallaanka.",
    tags: [
      "daryeelka dhalmada kadib",
      "waxbarashada waalidka",
      "taageerada naas-nuujinta",
    ],
    category: "Daryeelka caafimaadka dhalmada kadib",
    city: "Kearney",
  },
  {
    name: "KRMC Newborn Services",
    address: "804 22nd Ave, Kearney, NE 68845",
    phone: "(308) 455-8507",
    website:
      "www.bryanhealth.com/locations/hospitals/krmc/services/pregnancy-and-baby/",
    description:
      "Baaritaannada dhallaanka, taageerada miisaanka/quudinta, qiimeynta dhallaanka ee joogtada ah.",
    tags: ["daryeelka dhallaanka", "baaritaanka"],
    category: "Daryeelka caafimaadka dhalmada kadib",
    city: "Kearney",
  },
  {
    name: "Center for Immigrant & Refugee Advancement / Immigrant Legal Center",
    address: "",
    phone: "(402) 898-1349  (855) 307-6730",
    website:
      "www.immigrationadvocates.org/nonprofit/legaldirectory/organization.393089-Center_for_Immigrant_and_Refugee_Advancement",
    description: "Adeegyada sharciga socdaalka, la-tashiyada, tixraacyada",
    tags: ["socdaalka"],
    category: "Taageerada dhibaatooyinka",
    city: "Online",
  },
  {
    name: "Nebraska DHHS (ACCESSNebraska Kearney office)",
    address: "24 W 16th St, Kearney, NE 68847",
    phone: "(308) 865-5592",
    website: "iserve.nebraska.gov",
    description:
      "Medicaid, SNAP, codsiyada gargaarka lacagta caddaanka ah iyo taageerada kiisaska.",
    tags: ["Medicaid", "SNAP"],
    category: "Faa'iidooyinka & taageerada",
    city: "Kearney",
  },
  {
    name: "WIC – Community Action Partnership of Mid-Nebraska (Education Building)",
    address: "1023 Ave F, Kearney, NE 68847",
    phone: "(308) 865-5356",
    website: "communityactionmidne.com/wic",
    description:
      "Faa'iidooyinka nafaqada ee WIC ee dadka uurka leh/dhalmada kadib iyo carruurta ka yar 5 sano.",
    tags: ["WIC", "nafaqada"],
    category: "Faa'iidooyinka & taageerada",
    city: "Kearney",
  },
  {
    name: "Community Action Mid-Nebraska Food Bank (Kearney)",
    address: "114 E 11th St, Kearney, NE 68848",
    phone: "(308) 865-5683",
    website: "communityactionmidne.com/contact-us",
    description:
      "Kaalmada cuntada degdegga ah; isku xirka taageerooyinka kale.",
    tags: ["bakhaarka cuntada", "tixraacyada"],
    category: "Cuntada & Guryaha",
    city: "Kearney",
  },
  {
    name: "Kearney Jubilee Center",
    address: "1920 Central Ave, Kearney, NE 68848",
    phone: "(308) 234-3880",
    website: "kearneyjubilee.org",
    description:
      "Bakhaarka cuntada, dharka, taageerada baahiyaha aasaasiga ah iyo hagidda gargaarka.",
    tags: ["bakhaarka cuntada", "dharka"],
    category: "Cuntada & Guryaha",
    city: "Kearney",
  },
  {
    name: "Storehouse (Kearney eFree Church)",
    address: "4010 7th Ave, Kearney, NE 68845",
    phone: "(308) 455-3302",
    website: "kearneystorehouse.com",
    description: "Taageerada bakhaarka cuntada iyo gargaarka bulshada.",
    tags: ["bakhaarka cuntada", "baahiyaha aasaasiga ah"],
    category: "Cuntada & Guryaha",
    city: "Kearney",
  },
  {
    name: "Kearney Housing Agency",
    address: "2715 Ave I OFC, Kearney, NE 68848",
    phone: "(308) 234-3000",
    website: "kearneyhousingagency.com",
    description: "Guryaha dadweynaha / gargaarka guryaha; hagidda codsiga.",
    tags: ["guryaha"],
    category: "Cuntada & Guryaha",
    city: "Kearney",
  },
  {
    name: "The S.A.F.E. Center (Kearney)",
    address: "620 E 25th St, Suite 14, Kearney, NE 68847",
    phone: "(308) 237-2599",
    phone2: "(24/7 hotline) 1-877-237-2513",
    website: "safecenter.org/",
    description:
      "Gargaarka dhibaatooyinka rabshadaha qoyska/galmada, u doodista, taageerada hoyga, qorsheynta badbaadada.",
    tags: ["hoyga DV", "khadka dhibaatooyinka"],
    category: "Taageerada dhibaatooyinka",
    city: "Kearney",
  },
  {
    name: "Catholic Social Services of Southern Nebraska ",
    address: "",
    phone: "(402) 385-9074",
    website: "csshope.org",
    description:
      "Caawinta foomamka socdaalka iyo hagidda kiisaska (adeegga gobolka).",
    tags: ["la-talinta xulashooyinka", "socdaalka"],
    category: "Taageerada dhibaatooyinka",
    city: "Online",
  },
  {
    name: "RYDE Transit (Community Action Mid-Nebraska)",
    address: "715 E 11th St, Kearney, NE 68847",
    phone: "(308) 865-5677",
    website: "communityactionmidne.com/ryde-landing",
    description:
      "Gaadiidka dadweynaha; safarrada ballamaha, hawlaha, iyo adeegyada muhiimka ah.",
    tags: ["gaadiidka"],
    category: "Logistics & gaadiidka",
    city: "Kearney",
  },
  {
    name: "Choice Family Health Care (pregnancy testing/counseling)",
    address: "4503 2nd Ave Ste 209, Kearney, NE 68847",
    phone: "(308) 234-9140",
    website: "choicefamilyhealthcare.org",
    description:
      "Baaritaanka uurka iyo la-talinta; ka doodista xulashooyinka iyo tixraacyada.",
    tags: ["baaritaanka uurka", "la-talinta"],
    category: "Xulashooyinka uurka",
    city: "Kearney",
  },
  {
    name: "Lutheran Family Services",
    address: "2715 9th Ave, Kearney, NE 68845",
    phone: "(308) 236-8226",
    website: "onelfs.org",
    description:
      "La-talinta uurka iyo taageerada qorsheynta korsashada, taageerada socdaalka",
    tags: ["la-talinta xulashooyinka", "socdaalka"],
    category: "Faa'iidooyinka & taageerada",
    city: "Kearney",
  },
  {
    name: "CHI Health Good Samaritan – Postpartum & Breastfeeding support",
    address: "10 E 31st St, Kearney, NE 68847",
    phone: "(308) 865-7689",
    website: "www.chihealth.com",
    description: "dhalmada kadib, naas-nuujinta",
    tags: [],
    category: "Daryeelka caafimaadka dhalmada kadib",
    city: "Kearney",
  },
  {
    name: "CHI Health Clinic Family Medicine (Kearney)",
    address: "211 W 33rd St, Kearney, NE 68845",
    phone: "(308) 865-2141",
    website: "www.chihealth.com",
    description:
      "Daryeelka aasaasiga ah ee waalidiinta dhalmada kadib; maamulka caafimaadka ee socda.",
    tags: ["dhalmada kahor", "daryeelka dhalmada kadib"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Kearney",
  },
  {
    name: "Bright Futures Preschool (Kearney Public Schools) – Home visitation (prenatal–age 3)",
    address: "1511 5th Ave, Kearney, NE 68845",
    phone: "(308) 698-8046",
    website: "brightfutures.kearneypublicschools.org/",
    description:
      "Taageerada booqashada guriga laga bilaabo dhalashada ka hor ilaa da'da 3; tababarka waalidka.",
    tags: ["Booqashada Guriga", "Carruurnimada Hore"],
    category: "",
    city: "Kearney",
  },
  {
    name: "Head Start / Early Head Start (Community Action Mid-Nebraska)",
    address: "114 E 11th St, Kearney, NE 68848",
    phone: "(308) 865-5690",
    website: "communityactionmidne.com/head-start",
    description:
      "Waxbarashada carruurnimada hore iyo adeegyada taageerada qoyska.",
    tags: ["Head Start", "carruurnimada hore"],
    category: "Faa'iidooyinka & taageerada",
    city: "Kearney",
  },
  {
    name: "United Way of the Kearney Area (referrals/partner agencies)",
    address: "4009 6th Ave, Suite 19, Kearney, NE 68845",
    phone: "(308) 237-6840",
    website: "uwka.org",
    description:
      "Waxay ku xirtaa qoysaska hay'adaha iskaashiga la leh ee maxalliga ah baahiyaha aasaasiga ah iyo taageerada.",
    tags: ["tixraacyada", "hagidda faa'iidooyinka"],
    category: "Faa'iidooyinka & taageerada",
    city: "Kearney",
  },
  {
    name: "Lexington Regional Health Center — Labor & Delivery",
    address: "1201 N Erie St, Lexington, NE 68850",
    phone: "(308) 324-5651",
    website: "lexingtonregional.org",
    description:
      "Foosha & dhalmada iyo taageerada uurka laga bilaabo booqashada ugu horreysa ee dhalmada kahor ilaa dhalashada.",
    tags: ["foosha & dhalmada", "daryeelka dhalmada kadib"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Lexington",
  },
  {
    name: "Family Medicine Specialists Clinic (LRHC)",
    address: "1105 N Erie St, Lexington, NE 68850",
    phone: "(308) 324-8308",
    website: "lexingtonregional.org",
    description:
      "Daryeelka aasaasiga ah ee baahiyaha uurka, tixraacyada, maareynta cudurrada daba dheeraada inta lagu jiro uurka.",
    tags: ["dhalmada kahor", "tixraacyo"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Lexington",
  },
  {
    name: "Plum Creek Medical Group",
    address: "1103 Buffalo Bend, Lexington, NE 68850",
    phone: "(308) 324-6386",
    website: "www.plumcreekmedicalgroup.com/",
    description:
      "Daryeelka aasaasiga ah ee baahiyaha uurka, tixraacyada, maareynta cudurrada daba dheeraada inta lagu jiro uurka.",
    tags: ["dhalmada kahor", "tixraacyo"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Lexington",
  },
  {
    name: "Nebraska DHHS — Lexington Office",
    address: "200 W 7th St, Suite 1, Lexington, NE 68850",
    phone: "(308) 324-6633",
    website: "iserve.nebraska.gov",
    description:
      "Codso/maamul Medicaid iyo faa'iidooyinka dadweynaha; barta laga galo adeegyada carruurta/qoyska.",
    tags: ["Medicaid", "SNAP", "hagidda faa'iidooyinka"],
    category: "Faa'iidooyinka & taageerada",
    city: "Lexington",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska (Lexington)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-4219",
    website: "communityactionmidne.com",
    description:
      "Hagidda faa'iidooyinka iyo adeegyada taageerada, Xarunta maxalliga ah ee tixraacyada: faa'iidooyinka, cuntada, taageerada qoyska, iyo hagidda.",
    tags: ["maareynta kiiska", "hagidda faa'iidooyinka", "tixraacyada", "WIC"],
    category: "Faa'iidooyinka & taageerada",
    city: "Lexington",
  },
  {
    name: "Head Start — Lexington (Community Action Partnership)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-5282",
    email: "lexingtonhs@mnca.net",
    website: "communityactionmidne.com/head-start/locations/",
    description:
      "Barnaamijka carruurnimada hore iyo taageerada qoyska ee qoysaska u qalma.",
    tags: ["Head Start", "carruurnimada hore"],
    category: "Faa'iidooyinka & taageerada",
    city: "Lexington",
  },
  {
    name: "Lexington Food Pantry (Community Action Partnership)",
    address: "931 W 7th St, Lexington, NE 68850",
    phone: "(308) 324-4219",
    website: "communityactionmidne.com",
    description:
      "Gelitaanka bakhaarka cuntada iyo hagidda kheyraadka iyada oo loo marayo CAP Lexington.",
    tags: ["bakhaarka cuntada", "tixraacyada"],
    category: "Cuntada & Guryaha",
    city: "Lexington",
  },
  {
    name: "Crossroads Mission Avenue — Lexington",
    address: "114 W 5th St, Lexington, NE 68850",
    phone: "(308) 378-3502",
    website: "crossroadsmission.com",
    description: "Taageerada cuntada/dharka iyo gargaarka qoysaska u baahan.",
    tags: ["taageerada cuntada", "dharka"],
    category: "Cuntada & Guryaha",
    city: "Lexington",
  },
  {
    name: "Micah’s House Blessing Box (Little Free Pantry)",
    address: "810 S Washington St, Lexington, NE 68850",
    phone: "308-746-7509",
    website: "mapping.littlefreepantry.org",
    description:
      "Sanduuqa barakada 24/7: cunto aan xumaanayn, alaabta nadaafadda, dhar.",
    tags: ["taageerada cuntada", "dhar"],
    category: "Cuntada & Guryaha",
    city: "Lexington",
  },
  {
    name: "Lexington Housing Authority",
    address: "609 E 3rd St, Lexington, NE 68850",
    phone: "(308) 324-4633",
    website: "lexhousing.com",
    description: "Taageerada guryaha dadweynaha iyo hagidda gargaarka guryaha.",
    tags: ["guryaha", "guryaha dadweynaha"],
    category: "Cuntada & Guryaha",
    city: "Lexington",
  },
  {
    name: "Parent-Child Center (DV/SA services)",
    address: "1001 N Washington St, Lexington, NE 68850",
    phone: "(308) 324-2336",
    phone2: "Crisis: (308) 324-3040",
    website: "parentchildcenter-lexington.org",
    description:
      "Hoyga degdegga ah, khadka dhibaatooyinka, u doodista, caawinta amarka ilaalinta, tixraacyada la-talinta.",
    tags: ["hoyga DV", "khadka dhibaatooyinka"],
    category: "Taageerada dhibaatooyinka",
    city: "Lexington",
  },
  {
    name: "Lutheran Family Services — Lexington Office",
    address: "800 N Washington St, Lexington, NE 68850",
    phone: "(308) 532-0587",
    website: "onelfs.org",
    description:
      "La-talinta, la-talinta uurka/siyaabaha korsashada; adeegyada sharciga ee socdaalka oo laga heli karo shabakadda LFS.",
    tags: ["la-talinta xulashooyinka", "socdaalka"],
    category: "Xulashooyinka uurka",
    city: "Lexington",
  },
  {
    name: "Dawson County Handibus / RYDE Transit (Dawson County)",
    address: "407 E 6th St, Lexington, NE 68850",
    phone: "(308) 324-3670",
    website: "communityactionmidne.com",
    description:
      "Safarrada ballamaha caafimaadka iyo safarrada muhiimka ah ee Degmada Dawson.",
    tags: ["gaadiidka"],
    category: "Logistics & gaadiidka",
    city: "Lexington",
  },
  {
    name: "Planned Parenthood ",
    address: "",
    phone: "800-230-7526",
    website: "plannedparenthood.org",
    description:
      "Ilmo iska soo ridid, ka hortagga uurka, daryeelka STI, la-talinta xulashooyinka uurka.",
    tags: ["la-talinta xulashooyinka", "ka hortagga uurka"],
    category: "Xulashooyinka uurka",
    city: "Online",
  },
  {
    name: "National Abortion Federation (NAF) Hotline",
    address: "",
    phone: "800-772-9100",
    website: "abortionfunds.org",
    description:
      "Tixraacyada, maareynta kiiska, gargaarka dhaqaale ee suurtogalka ah ee joojinta uurka",
    tags: ["la-talinta xulashooyinka"],
    category: "Xulashooyinka uurka",
    city: "Online",
  },
  {
    name: "Nebraska Children’s Home Society (NCHS) – Pregnancy Services",
    address: "",
    phone: "800-390-6754  877-420-4747",
    website: "nchs.org",
    description:
      "La-talinta uurka, qorsheynta korsashada, taageerada barbaarinta",
    tags: ["la-talinta xulashooyinka", "waxbarashada waalidka"],
    category: "Xulashooyinka uurka",
    city: "Online",
  },
  {
    name: "National Domestic Violence Hotline (24/7)",
    address: "",
    phone: "800-799-7233",
    website: "thehotline.org",
    description:
      "Qorsheynta badbaadada, taageerada dhibaatooyinka, tixraacyada hoyga maxalliga ah",
    tags: ["hoyga DV", "khadka dhibaatooyinka"],
    category: "Taageerada dhibaatooyinka",
    city: "Online",
  },
  {
    name: "RAINN National Sexual Assault Hotline (24/7)",
    address: "",
    phone: "800-656-4673",
    website: "rainn.org",
    description:
      "Taageerada dhibaatooyinka xadgudubka galmada, tixraacyada, xulashooyinka warbixinta.",
    tags: ["hoyga DV", "khadka dhibaatooyinka"],
    category: "Taageerada dhibaatooyinka",
    city: "Online",
  },
  {
    name: "Gothenburg Hospital ",
    address: "910 20th St Gothenburg, NE 69138",
    phone: "308-537-3661",
    website: "gothenburghealth.org",
    description:
      "Daryeelka dhalmada kahor, ultrasound-ka, booqashooyinka OB, dhalmada, iyo cudurada haweenka.",
    tags: ["dhalmada kahor", "daryeelka OB", "ultrasound-ka"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Gothenburg",
  },
  {
    name: "Cozad Community Health System (Hospital/Clinic)",
    address: "300 E 12th St, Cozad, NE 69130",
    phone: "308-784-2261",
    website: "cozadhealthcare.com",
    description:
      "Daryeelka aasaasiga ah inta lagu jiro uurka; tixraacyada iyo taageerada caafimaad ee joogtada ah",
    tags: ["dhalmada kahor", "tixraacyada"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Cozad",
  },
  {
    name: "Gothenburg Women’s Health (OB/GYN)",
    address: "918 20th St Gothenburg, NE 69138",
    phone: "308-537-4066",
    website: "gothenburghealth.org",
    description:
      "Daryeelka aasaasiga ah inta lagu jiro uurka; tixraacyada iyo taageerada caafimaad ee joogtada ah, daryeelka hooyada iyo ilmaha dhalmada kadib.",
    tags: ["dhalmada kahor", "tixraacyada"],
    category: "Daryeelka caafimaadka dhalmada kahor",
    city: "Gothenburg",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska – WIC (Cozad)",
    address: "1515 Ave B, Cozad, NE 69130",
    phone: "308-784-2887",
    website: "communityactionmidne.com",
    description:
      "Diiwaangelinta/taageerada WIC; waxbarashada nafaqada iyo tixraacyada dadka uurka leh/dhalmada kadib iyo carruurta yaryar.",
    tags: ["WIC", "nafaqada", "naas-nuujinta"],
    category: "Faa'iidooyinka & taageerada",
    city: "Cozad",
  },
  {
    name: "Community Action Partnership of Mid-Nebraska – WIC (Gothenburg)",
    address: "1512 Ave G, Gothenburg, NE 69138",
    phone: "308-537-3433",
    website: "communityactionmidne.com",
    description: "Rugta WIC ee u adeegta qoysaska aagga Gothenburg.",
    tags: ["WIC", "nafaqada"],
    category: "Faa'iidooyinka & taageerada",
    city: "Gothenburg",
  },
  {
    name: "Cozad Food Pantry",
    address: "105 E Highway 30, Cozad, NE 69130",
    phone: "308-784-4545",
    website: "",
    description: "Taageerada raashinka ee qoysaska cuntada yarida haysato.",
    tags: ["bakhaarka cuntada", "raashinka"],
    category: "Cuntada & Guryaha",
    city: "Cozad",
  },
  {
    name: "Gothenburg Food Pantry (American Lutheran Church)",
    address: "1512 Ave G, Gothenburg, NE 69138",
    phone: "308-537-3433",
    website: "",
    description:
      "Bakhaarka cuntada ee u adeega Gothenburg iyo aagga ku xeeran.",
    tags: ["bakhaarka cuntada", "raashinka"],
    category: "Cuntada & Guryaha",
    city: "Gothenburg",
  },
];

export const resourceData: Record<string, ContactResource[]> = {
  en: PRENATAL_CONTACTS,
  es: PRENATAL_CONTACTS_ES,
  so: PRENATAL_CONTACTS_SO,
};
