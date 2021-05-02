import { LargeMenu } from "../Models/largeMenu";
import { BRANDS_MENU } from "./brands";
import { CHARTS_MENU } from "./charts";
import { CURRENCY_MENU } from "./currency";
import { PAYMENTS_MENU } from "./payments";
import { TRANSPORTATION_MENU } from "./transportation";

export const LARGE_MENU: LargeMenu[] = [
  {
    title: "Brands",
    subMenu: BRANDS_MENU
  },
  {
    title: "Currency",
    subMenu: CURRENCY_MENU
  },
  {
    title: 'Transportation',
    subMenu: TRANSPORTATION_MENU
  },
  {
    title: 'Charts',
    subMenu: CHARTS_MENU
  },
  {
    title: 'Payments',
    subMenu: PAYMENTS_MENU
  },

]
