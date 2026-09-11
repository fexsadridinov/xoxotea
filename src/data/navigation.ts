export const sectionIds = [
  "home",
  "why-ukraine",
  "tea",
  "ingredients",
  "economics",
  "store",
  "vision",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export type NavKey = "why" | "tea" | "economics" | "store" | "vision" | "contact";

export type NavItem = {
  id: SectionId;
  key: NavKey;
  hash: `#${SectionId}`;
};

export const navItems: NavItem[] = [
  { id: "why-ukraine", key: "why", hash: "#why-ukraine" },
  { id: "tea", key: "tea", hash: "#tea" },
  { id: "economics", key: "economics", hash: "#economics" },
  { id: "store", key: "store", hash: "#store" },
  { id: "vision", key: "vision", hash: "#vision" },
];

export const contactItem: NavItem = {
  id: "contact",
  key: "contact",
  hash: "#contact",
};

export const footerItems: NavItem[] = [...navItems, contactItem];

export const observedSectionIds: SectionId[] = [
  "home",
  "why-ukraine",
  "tea",
  "ingredients",
  "economics",
  "store",
  "vision",
  "contact",
];
