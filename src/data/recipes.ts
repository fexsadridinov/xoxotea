/**
 * DEVELOPMENT RECIPES — not shown on the marketing site.
 * Approximate placeholders for calibration. STATUS: DEVELOPMENT RECIPE.
 */
import type { DrinkId } from "./menu";

export type DevelopmentRecipe = {
  drinkId: DrinkId;
  status: "DEVELOPMENT RECIPE";
  teaBaseMl: number;
  fruitG: number;
  milkMl: number;
  syrupG: number;
  iceG: number;
  toppingG: number;
  notes: string;
};

export const recipes: Record<DrinkId, DevelopmentRecipe> = {
  "jasmine-cloud": {
    drinkId: "jasmine-cloud",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 280,
    fruitG: 0,
    milkMl: 40,
    syrupG: 18,
    iceG: 80,
    toppingG: 55,
    notes: "Salted dairy cloud over jasmine. Calibrate salt and tea strength.",
  },
  grape: {
    drinkId: "grape",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 220,
    fruitG: 90,
    milkMl: 0,
    syrupG: 22,
    iceG: 120,
    toppingG: 0,
    notes: "Fresh grape + jasmine. Tea must remain audible.",
  },
  "grape-cloud": {
    drinkId: "grape-cloud",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 210,
    fruitG: 85,
    milkMl: 35,
    syrupG: 20,
    iceG: 90,
    toppingG: 55,
    notes: "Grape fruit tea with dairy cloud.",
  },
  "mango-cloud": {
    drinkId: "mango-cloud",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 200,
    fruitG: 95,
    milkMl: 35,
    syrupG: 20,
    iceG: 90,
    toppingG: 55,
    notes: "Ripe mango + jasmine + cloud.",
  },
  "mango-grapefruit": {
    drinkId: "mango-grapefruit",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 210,
    fruitG: 110,
    milkMl: 0,
    syrupG: 18,
    iceG: 120,
    toppingG: 0,
    notes: "No cloud. Acid and fruit pulp carry the drink.",
  },
  "coconut-mango": {
    drinkId: "coconut-mango",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 40,
    fruitG: 90,
    milkMl: 180,
    syrupG: 20,
    iceG: 100,
    toppingG: 40,
    notes: "Coconut milk + mango + sago. Tea optional/light.",
  },
  "brown-sugar-boba": {
    drinkId: "brown-sugar-boba",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 160,
    fruitG: 0,
    milkMl: 160,
    syrupG: 28,
    iceG: 60,
    toppingG: 70,
    notes: "Tea must stay identifiable under brown sugar and pearls.",
  },
  "jasmine-milk": {
    drinkId: "jasmine-milk",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 180,
    fruitG: 0,
    milkMl: 160,
    syrupG: 16,
    iceG: 80,
    toppingG: 0,
    notes: "Everyday cup. No extra toppings.",
  },
  "matcha-cloud": {
    drinkId: "matcha-cloud",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 0,
    fruitG: 0,
    milkMl: 220,
    syrupG: 16,
    iceG: 70,
    toppingG: 55,
    notes: "Matcha whisked properly, then dairy cloud.",
  },
  "triple-matcha": {
    drinkId: "triple-matcha",
    status: "DEVELOPMENT RECIPE",
    teaBaseMl: 0,
    fruitG: 0,
    milkMl: 200,
    syrupG: 18,
    iceG: 50,
    toppingG: 95,
    notes: "Matcha + matcha cloud + jelly + mochi. Premium complexity.",
  },
};
