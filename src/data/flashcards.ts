export type Flashcard = {
  spanish: string;
  english: string;
  category: string;
};

export const CATEGORIES = [
  "All",
  "Globalisation: Origins",
  "Globalisation: Positives",
  "Globalisation: Negatives",
  "Daily Life",
  "Cultural Identity",
  "Minority Languages",
  "When a Language Dies",
  "Benefits of Bilingualism",
  "Language & Thought",
  "Opinion Phrases",
];

export const FLASHCARDS: Flashcard[] = [
  // Globalisation: Origins
  { spanish: "la globalización", english: "globalisation", category: "Globalisation: Origins" },
  { spanish: "el comercio internacional", english: "international trade", category: "Globalisation: Origins" },
  { spanish: "la revolución tecnológica", english: "the technological revolution", category: "Globalisation: Origins" },
  { spanish: "internet / las redes sociales", english: "internet / social media", category: "Globalisation: Origins" },
  { spanish: "las multinacionales", english: "multinationals", category: "Globalisation: Origins" },
  { spanish: "la interdependencia", english: "interdependence", category: "Globalisation: Origins" },
  { spanish: "la conectividad", english: "connectivity", category: "Globalisation: Origins" },
  { spanish: "el mundo globalizado", english: "the globalised world", category: "Globalisation: Origins" },
  { spanish: "los orígenes", english: "the origins", category: "Globalisation: Origins" },
  { spanish: "el libre comercio", english: "free trade", category: "Globalisation: Origins" },

  // Globalisation: Positives
  { spanish: "las oportunidades laborales", english: "job opportunities", category: "Globalisation: Positives" },
  { spanish: "el crecimiento económico", english: "economic growth", category: "Globalisation: Positives" },
  { spanish: "el intercambio cultural", english: "cultural exchange", category: "Globalisation: Positives" },
  { spanish: "viajar con facilidad", english: "to travel easily", category: "Globalisation: Positives" },
  { spanish: "el acceso al conocimiento", english: "access to knowledge", category: "Globalisation: Positives" },
  { spanish: "la innovación", english: "innovation", category: "Globalisation: Positives" },
  { spanish: "la cooperación internacional", english: "international cooperation", category: "Globalisation: Positives" },
  { spanish: "el desarrollo", english: "development", category: "Globalisation: Positives" },
  { spanish: "la difusión de ideas", english: "the spread of ideas", category: "Globalisation: Positives" },
  { spanish: "mejorar el nivel de vida", english: "to improve the standard of living", category: "Globalisation: Positives" },

  // Globalisation: Negatives
  { spanish: "la desigualdad", english: "inequality", category: "Globalisation: Negatives" },
  { spanish: "la explotación de recursos", english: "resource exploitation", category: "Globalisation: Negatives" },
  { spanish: "la homogeneización", english: "homogenisation", category: "Globalisation: Negatives" },
  { spanish: "la pérdida de identidad", english: "loss of identity", category: "Globalisation: Negatives" },
  { spanish: "la dependencia económica", english: "economic dependence", category: "Globalisation: Negatives" },
  { spanish: "el colonialismo cultural", english: "cultural colonialism", category: "Globalisation: Negatives" },
  { spanish: "la westernización", english: "westernisation", category: "Globalisation: Negatives" },
  { spanish: "la presión social", english: "social pressure", category: "Globalisation: Negatives" },
  { spanish: "la brecha entre ricos y pobres", english: "the gap between rich and poor", category: "Globalisation: Negatives" },
  { spanish: "la uniformidad", english: "uniformity", category: "Globalisation: Negatives" },

  // Daily Life
  { spanish: "en mi vida cotidiana", english: "in my daily life", category: "Daily Life" },
  { spanish: "consumir productos extranjeros", english: "to consume foreign products", category: "Daily Life" },
  { spanish: "las marcas internacionales", english: "international brands", category: "Daily Life" },
  { spanish: "la música / moda global", english: "global music / fashion", category: "Daily Life" },
  { spanish: "comunicarse en línea", english: "to communicate online", category: "Daily Life" },
  { spanish: "trabajar desde casa", english: "to work from home", category: "Daily Life" },
  { spanish: "estudiar en el extranjero", english: "to study abroad", category: "Daily Life" },
  { spanish: "el turismo", english: "tourism", category: "Daily Life" },
  { spanish: "la influencia americana", english: "American influence", category: "Daily Life" },
  { spanish: "el estilo de vida occidental", english: "western lifestyle", category: "Daily Life" },

  // Cultural Identity
  { spanish: "la identidad cultural", english: "cultural identity", category: "Cultural Identity" },
  { spanish: "el sentido de pertenencia", english: "sense of belonging", category: "Cultural Identity" },
  { spanish: "las tradiciones", english: "traditions", category: "Cultural Identity" },
  { spanish: "los valores", english: "values", category: "Cultural Identity" },
  { spanish: "las creencias", english: "beliefs", category: "Cultural Identity" },
  { spanish: "el patrimonio cultural", english: "cultural heritage", category: "Cultural Identity" },
  { spanish: "las raíces", english: "roots", category: "Cultural Identity" },
  { spanish: "arraigado/a", english: "deeply rooted", category: "Cultural Identity" },
  { spanish: "la herencia", english: "heritage / legacy", category: "Cultural Identity" },
  { spanish: "la diversidad cultural", english: "cultural diversity", category: "Cultural Identity" },
  { spanish: "la cultura que se pierde", english: "the culture that is lost", category: "Cultural Identity" },
  { spanish: "quiénes somos", english: "who we are", category: "Cultural Identity" },

  // Minority Languages
  { spanish: "las lenguas en peligro de extinción", english: "endangered languages", category: "Minority Languages" },
  { spanish: "las minorías lingüísticas", english: "linguistic minorities", category: "Minority Languages" },
  { spanish: "la extinción lingüística", english: "language extinction", category: "Minority Languages" },
  { spanish: "el galés / el vasco / el quechua", english: "Welsh / Basque / Quechua (examples)", category: "Minority Languages" },
  { spanish: "el idioma dominante", english: "the dominant language", category: "Minority Languages" },
  { spanish: "desplazar una lengua", english: "to displace a language", category: "Minority Languages" },
  { spanish: "la presión política", english: "political pressure", category: "Minority Languages" },
  { spanish: "el prestigio social", english: "social prestige", category: "Minority Languages" },
  { spanish: "la utilidad social", english: "social usefulness", category: "Minority Languages" },
  { spanish: "preservar una lengua", english: "to preserve a language", category: "Minority Languages" },
  { spanish: "revitalizar", english: "to revitalise", category: "Minority Languages" },
  { spanish: "se estima que...", english: "it is estimated that...", category: "Minority Languages" },

  // When a Language Dies
  { spanish: "se pierde una visión del mundo", english: "a worldview is lost", category: "When a Language Dies" },
  { spanish: "el conocimiento ancestral", english: "ancestral knowledge", category: "When a Language Dies" },
  { spanish: "la memoria colectiva", english: "collective memory", category: "When a Language Dies" },
  { spanish: "la literatura oral", english: "oral literature", category: "When a Language Dies" },
  { spanish: "los cuentos / los mitos", english: "stories / myths", category: "When a Language Dies" },
  { spanish: "la sabiduría tradicional", english: "traditional wisdom", category: "When a Language Dies" },
  { spanish: "es irreversible", english: "it is irreversible", category: "When a Language Dies" },
  { spanish: "una parte de la humanidad", english: "a part of humanity", category: "When a Language Dies" },
  { spanish: "ya no se puede recuperar", english: "it can no longer be recovered", category: "When a Language Dies" },
  { spanish: "el silencio cultural", english: "cultural silence", category: "When a Language Dies" },

  // Benefits of Bilingualism
  { spanish: "el bilingüismo", english: "bilingualism", category: "Benefits of Bilingualism" },
  { spanish: "las ventajas cognitivas", english: "cognitive advantages", category: "Benefits of Bilingualism" },
  { spanish: "retrasar el alzhéimer", english: "to delay Alzheimer's", category: "Benefits of Bilingualism" },
  { spanish: "la memoria / la concentración", english: "memory / concentration", category: "Benefits of Bilingualism" },
  { spanish: "el pensamiento flexible", english: "flexible thinking", category: "Benefits of Bilingualism" },
  { spanish: "cambiar de código", english: "to code-switch", category: "Benefits of Bilingualism" },
  { spanish: "las oportunidades laborales", english: "job opportunities", category: "Benefits of Bilingualism" },
  { spanish: "empatizar con otras culturas", english: "to empathise with other cultures", category: "Benefits of Bilingualism" },
  { spanish: "pensar de manera más creativa", english: "to think more creatively", category: "Benefits of Bilingualism" },
  { spanish: "la inteligencia lingüística", english: "linguistic intelligence", category: "Benefits of Bilingualism" },

  // Language & Thought
  { spanish: "el idioma da forma a nuestra visión del mundo", english: "language shapes our worldview", category: "Language & Thought" },
  { spanish: "la hipótesis de Sapir-Whorf", english: "the Sapir-Whorf hypothesis", category: "Language & Thought" },
  { spanish: "el relativismo lingüístico", english: "linguistic relativity", category: "Language & Thought" },
  { spanish: "percibir los colores", english: "to perceive colours", category: "Language & Thought" },
  { spanish: "el concepto del tiempo", english: "the concept of time", category: "Language & Thought" },
  { spanish: "expresar emociones", english: "to express emotions", category: "Language & Thought" },
  { spanish: "palabras intraducibles", english: "untranslatable words", category: "Language & Thought" },
  { spanish: "el 'saudade' / el 'schadenfreude'", english: "saudade / schadenfreude (examples)", category: "Language & Thought" },
  { spanish: "pensar en otro idioma", english: "to think in another language", category: "Language & Thought" },
  { spanish: "el idioma refleja la cultura", english: "language reflects culture", category: "Language & Thought" },

  // Opinion Phrases
  { spanish: "en mi opinión", english: "in my opinion", category: "Opinion Phrases" },
  { spanish: "yo pienso / creo que", english: "I think / believe that", category: "Opinion Phrases" },
  { spanish: "es evidente que", english: "it is clear that", category: "Opinion Phrases" },
  { spanish: "sin embargo", english: "however", category: "Opinion Phrases" },
  { spanish: "por otro lado", english: "on the other hand", category: "Opinion Phrases" },
  { spanish: "aunque", english: "although / even though", category: "Opinion Phrases" },
  { spanish: "a pesar de", english: "despite", category: "Opinion Phrases" },
  { spanish: "hoy en día", english: "nowadays", category: "Opinion Phrases" },
  { spanish: "cada vez más", english: "increasingly / more and more", category: "Opinion Phrases" },
  { spanish: "es importante que (+ subj.)", english: "it is important that...", category: "Opinion Phrases" },
  { spanish: "no cabe duda de que", english: "there is no doubt that", category: "Opinion Phrases" },
  { spanish: "en conclusión", english: "in conclusion", category: "Opinion Phrases" },
];
