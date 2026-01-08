const SAMPLE_RESOURCES_EN = [
  {
    id: 1,
    name: "Lexington Regional Health Center",
    description:
      "Comprehensive women's health services including prenatal care, labor and delivery, and postpartum support.",
    location: "Lexington",
    phone: "(308) 324-5651",
    category: "Medical Care",
  },
  {
    id: 2,
    name: "North Platte OB/GYN",
    description:
      "Specialized obstetrics and gynecology clinic providing expert care for expectant mothers.",
    location: "North Platte",
    phone: "(308) 534-5858",
    category: "Specialist",
  },
  {
    id: 3,
    name: "Dawson County WIC Program",
    description:
      "Nutrition education, breastfeeding support, and supplemental food for pregnant women and children.",
    location: "Lexington",
    phone: "(308) 324-4433",
    category: "Support",
  },
  {
    id: 4,
    name: "Community Action Partnership",
    description:
      "Assistance with housing, food, and emergency services for families in need.",
    location: "Lexington",
    phone: "(308) 324-4219",
    category: "Community",
  },
  {
    id: 5,
    name: "Great Plains Health",
    description:
      "Full-service hospital offering advanced maternity care and neonatal intensive care unit (NICU).",
    location: "North Platte",
    phone: "(308) 568-8000",
    category: "Hospital",
  },
  {
    id: 6,
    name: "Cozad Medical Clinic",
    description:
      "Family practice clinic offering prenatal checkups and general health services for families.",
    location: "Cozad",
    phone: "(308) 784-3535",
    category: "Medical Care",
  },
  {
    id: 7,
    name: "Parent & Child Center",
    description:
      "Educational resources, parenting classes, and supply donations for new parents.",
    location: "Lexington",
    phone: "(308) 324-1234",
    category: "Education",
  },
];

const SAMPLE_RESOURCES_ES = [
  {
    id: 1,
    name: "Lexington Regional Health Center",
    description:
      "Servicios integrales de salud para la mujer que incluyen atención prenatal, parto y apoyo posparto.",
    location: "Lexington",
    phone: "(308) 324-5651",
    category: "Atención Médica",
  },
  {
    id: 2,
    name: "North Platte OB/GYN",
    description:
      "Clínica especializada en obstetricia y ginecología que brinda atención experta a futuras madres.",
    location: "North Platte",
    phone: "(308) 534-5858",
    category: "Especialista",
  },
  {
    id: 3,
    name: "Dawson County WIC Program",
    description:
      "Educación nutricional, apoyo a la lactancia y alimentos complementarios para mujeres embarazadas y niños.",
    location: "Lexington",
    phone: "(308) 324-4433",
    category: "Apoyo",
  },
  {
    id: 4,
    name: "Community Action Partnership",
    description:
      "Asistencia con vivienda, alimentos y servicios de emergencia para familias necesitadas.",
    location: "Lexington",
    phone: "(308) 324-4219",
    category: "Comunidad",
  },
  {
    id: 5,
    name: "Great Plains Health",
    description:
      "Hospital de servicio completo que ofrece atención de maternidad avanzada y unidad de cuidados intensivos neonatales (NICU).",
    location: "North Platte",
    phone: "(308) 568-8000",
    category: "Hospital",
  },
  {
    id: 6,
    name: "Cozad Medical Clinic",
    description:
      "Clínica de medicina familiar que ofrece chequeos prenatales y servicios de salud general para familias.",
    location: "Cozad",
    phone: "(308) 784-3535",
    category: "Atención Médica",
  },
  {
    id: 7,
    name: "Parent & Child Center",
    description:
      "Recursos educativos, clases para padres y donaciones de suministros para nuevos padres.",
    location: "Lexington",
    phone: "(308) 324-1234",
    category: "Educación",
  },
];

const SAMPLE_RESOURCES_SO = [
  {
    id: 1,
    name: "Lexington Regional Health Center",
    description:
      "Adeegyada caafimaadka haweenka oo dhammaystiran oo ay ku jiraan daryeelka dhalmada kahor, foosha iyo dhalmada, iyo taageerada dhalmada kadib.",
    location: "Lexington",
    phone: "(308) 324-5651",
    category: "Daryeelka Caafimaadka",
  },
  {
    id: 2,
    name: "North Platte OB/GYN",
    description:
      "Rugta caafimaadka haweenka iyo dhalmada oo bixisa daryeel khubaro ah hooyooyinka uurka leh.",
    location: "North Platte",
    phone: "(308) 534-5858",
    category: "Takhasusle",
  },
  {
    id: 3,
    name: "Dawson County WIC Program",
    description:
      "Waxbarashada nafaqada, taageerada naas-nuujinta, iyo cuntada dheeriga ah ee haweenka uurka leh iyo carruurta.",
    location: "Lexington",
    phone: "(308) 324-4433",
    category: "Taageero",
  },
  {
    id: 4,
    name: "Community Action Partnership",
    description:
      "Caawinta guriyeynta, cuntada, iyo adeegyada degdegga ah ee qoysaska u baahan.",
    location: "Lexington",
    phone: "(308) 324-4219",
    category: "Bulshada",
  },
  {
    id: 5,
    name: "Great Plains Health",
    description:
      "Isbitaal adeeg buuxa ah oo bixiya daryeelka dhalmada oo horumarsan iyo qaybta daryeelka degdegga ah ee dhallaanka (NICU).",
    location: "North Platte",
    phone: "(308) 568-8000",
    category: "Isbitaal",
  },
  {
    id: 6,
    name: "Cozad Medical Clinic",
    description:
      "Rugta dhaqtarka qoyska oo bixisa baaritaannada dhalmada kahor iyo adeegyada caafimaadka guud ee qoysaska.",
    location: "Cozad",
    phone: "(308) 784-3535",
    category: "Daryeelka Caafimaadka",
  },
  {
    id: 7,
    name: "Parent & Child Center",
    description:
      "Agabka waxbarashada, xiisadaha waalidnimada, iyo deeqaha agabka ee waalidiinta cusub.",
    location: "Lexington",
    phone: "(308) 324-1234",
    category: "Waxbarasho",
  },
];

export const resourceData = {
  en: SAMPLE_RESOURCES_EN,
  es: SAMPLE_RESOURCES_ES,
  so: SAMPLE_RESOURCES_SO,
};

// Keep for backward compatibility if needed, or remove if fully successfully refactored
export const SAMPLE_RESOURCES = SAMPLE_RESOURCES_EN;
