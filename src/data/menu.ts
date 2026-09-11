import { priceBands } from "./economics";

export const drinkIds = [
  "jasmine-cloud",
  "grape",
  "grape-cloud",
  "mango-cloud",
  "mango-grapefruit",
  "coconut-mango",
  "brown-sugar-boba",
  "jasmine-milk",
  "matcha-cloud",
  "triple-matcha",
] as const;

export type DrinkId = (typeof drinkIds)[number];

export type DrinkCategory = "cloud" | "fruit" | "milk" | "matcha";

export type Drink = {
  id: DrinkId;
  code: string;
  category: DrinkCategory;
  image: string;
  color: string;
  ingredients: string[];
  price: { low: number; high: number };
  /** Internal concept mapping. Never shown publicly. */
  inspiration: string;
  layout: "left" | "right" | "wide";
};

export const drinks: Drink[] = [
  {
    id: "jasmine-cloud",
    code: "01",
    category: "cloud",
    image: "/drinks/jasmine-cloud.png",
    color: "#E8D9B8",
    ingredients: ["jasmine", "cloud", "milk"],
    price: priceBands.cloud,
    inspiration: "Cloud jasmine tea structure",
    layout: "right",
  },
  {
    id: "grape",
    code: "02",
    category: "fruit",
    image: "/drinks/grape.png",
    color: "#C5D9A8",
    ingredients: ["grape", "jasmine", "ice"],
    price: priceBands.fruitTea,
    inspiration: "Crisp grape fruit tea structure",
    layout: "left",
  },
  {
    id: "grape-cloud",
    code: "03",
    category: "cloud",
    image: "/drinks/grape-cloud.png",
    color: "#8B6B78",
    ingredients: ["grape", "jasmine", "cloud"],
    price: priceBands.cloud,
    inspiration: "Cloud grape tea structure",
    layout: "wide",
  },
  {
    id: "mango-cloud",
    code: "04",
    category: "cloud",
    image: "/drinks/mango-cloud.png",
    color: "#E6B94B",
    ingredients: ["mango", "jasmine", "cloud"],
    price: priceBands.cloud,
    inspiration: "Cloud mango tea structure",
    layout: "left",
  },
  {
    id: "mango-grapefruit",
    code: "05",
    category: "fruit",
    image: "/drinks/mango-grapefruit.png",
    color: "#D99A71",
    ingredients: ["mango", "grapefruit", "jasmine"],
    price: priceBands.fruitTea,
    inspiration: "Mango grapefruit fruit tea structure",
    layout: "right",
  },
  {
    id: "coconut-mango",
    code: "06",
    category: "fruit",
    image: "/drinks/coconut-mango.png",
    color: "#F0D9A8",
    ingredients: ["mango", "coconut", "sago"],
    price: priceBands.fruitTea,
    inspiration: "Coconut mango beverage structure",
    layout: "left",
  },
  {
    id: "brown-sugar-boba",
    code: "07",
    category: "milk",
    image: "/drinks/brown-sugar-boba.png",
    color: "#8B5A2B",
    ingredients: ["tea", "milk", "boba", "brown-sugar"],
    price: priceBands.milkTea,
    inspiration: "Brown sugar boba milk tea structure",
    layout: "right",
  },
  {
    id: "jasmine-milk",
    code: "08",
    category: "milk",
    image: "/drinks/jasmine-milk.png",
    color: "#E4D2B0",
    ingredients: ["jasmine", "milk"],
    price: priceBands.milkTea,
    inspiration: "Jasmine milk tea structure",
    layout: "left",
  },
  {
    id: "matcha-cloud",
    code: "09",
    category: "matcha",
    image: "/drinks/matcha-cloud.png",
    color: "#7D9162",
    ingredients: ["matcha", "milk", "cloud"],
    price: priceBands.matcha,
    inspiration: "Cloud matcha latte structure",
    layout: "right",
  },
  {
    id: "triple-matcha",
    code: "10",
    category: "matcha",
    image: "/drinks/triple-matcha.png",
    color: "#55735B",
    ingredients: ["matcha", "milk", "matcha-cloud", "jelly", "mochi"],
    price: priceBands.matcha,
    inspiration: "Layered matcha latte structure",
    layout: "wide",
  },
];

export const ingredientKeys = ["tea", "fruit", "milk", "boba", "cloud", "matcha"] as const;
export type IngredientKey = (typeof ingredientKeys)[number];
