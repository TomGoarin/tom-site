// Constantes globales du site. [À CONFIRMER] = à valider avec Tom.

export const SITE = {
	name: "Tom Goarin",
	// [À CONFIRMER] domaine final
	url: "https://tomgoarin.fr",
	// [À CONFIRMER] email pro
	email: "contact@tomgoarin.fr",
	// [TÉLÉPHONE À AJOUTER]
	phone: null as string | null,
	city: "Lyon",
	region: "Auvergne-Rhône-Alpes",
	country: "FR",
	defaultOgImage: "/og-default.png",
} as const;

export const NAV_LINKS = [
	{ label: "Pour qui", href: "/#pour-qui" },
	{ label: "Approche", href: "/#approche" },
	{ label: "Projet", href: "/projet-phare" },
	{ label: "À propos", href: "/a-propos" },
] as const;

export const FOOTER_LINKS = [
	{ label: "Accueil", href: "/" },
	{ label: "Projet phare", href: "/projet-phare" },
	{ label: "À propos", href: "/a-propos" },
	{ label: "Contact", href: "/contact" },
] as const;

// JSON-LD : ProfessionalService pour la home
export const PROFESSIONAL_SERVICE_JSONLD = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Tom Goarin — Sites web et SEO",
	description:
		"Création de sites internet et référencement local pour indépendants, PME et associations à Lyon et en région.",
	url: SITE.url,
	areaServed: { "@type": "City", name: "Lyon" },
	address: {
		"@type": "PostalAddress",
		addressLocality: "Lyon",
		addressRegion: "Auvergne-Rhône-Alpes",
		addressCountry: "FR",
	},
	email: SITE.email,
	priceRange: "€€",
};

// JSON-LD : Person pour /a-propos
export const PERSON_JSONLD = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Tom Goarin",
	jobTitle: "Ingénieur télécoms en alternance, développeur web indépendant",
	url: `${SITE.url}/a-propos`,
	worksFor: {
		"@type": "Organization",
		name: "Coexya",
	},
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "INSA Lyon",
	},
	address: {
		"@type": "PostalAddress",
		addressLocality: "Lyon",
		addressCountry: "FR",
	},
};
