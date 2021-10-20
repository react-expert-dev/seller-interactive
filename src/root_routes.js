//user import

import {
  Home,
  Blog,
  OurStory,
  CaseStudies,
  Testimonials,
  OurTeam,
  SellerInteractive,
  AmazonAccountManagement,
  AppealReinstatement,
  LisitngOptimization,
  PPC,
  PartershipProgram,
  PlatformAdvertising,
  ProductLanch,
  ProtectionAssistance,
  ReimbursementRefund,
  SEO,
  ContactUs,
} from "./Pages";
import GatorCable from "./Pages/GatorCable";
import GaurdianAthletic from "./Pages/GaurdianAthletic";
import HairBurst from "./Pages/HairBurst";
import QuenchCo from "./Pages/QuenchCo";
import SoloNutrition from "./Pages/SoloNutrition";
import Tribella from "./Pages/Tribella";
import VortexEnterprise from "./Pages/VortexEnterprise";
import WokenCoffee from "./Pages/WokenCoffee";
import { Root_Routes } from "./Services/Routes/APP";

export const routes = [
  {
    id: 101,
    path: Root_Routes?.root,
    page: Home,
    exact: true,
  },
  {
    id: 102,
    path: Root_Routes?.blog,
    page: Blog,
    exact: true,
  },
  {
    id: 103,
    path: Root_Routes?.ourstory,
    page: OurStory,
    exact: true,
  },
  {
    id: 104,
    path: Root_Routes?.testimonials,
    page: Testimonials,
    exact: true,
  },
  {
    id: 105,
    path: Root_Routes?.case_studies,
    page: CaseStudies,
    exact: true,
  },

  {
    id: 106,
    path: Root_Routes?.seller_interactive,
    page: SellerInteractive,
    exact: true,
  },
  {
    id: 107,
    path: Root_Routes?.our_team,
    page: OurTeam,
    exact: true,
  },
  {
    id: 108,
    path: Root_Routes?.account_management,
    page: AmazonAccountManagement,
    exact: true,
  },
  {
    id: 109,
    path: Root_Routes?.appeal_reinstatement,
    page: AppealReinstatement,
    exact: true,
  },
  {
    id: 110,
    path: Root_Routes?.listing_optimization,
    page: LisitngOptimization,
    exact: true,
  },
  {
    id: 111,
    path: Root_Routes?.wholesale_partnership_program,
    page: PartershipProgram,
    exact: true,
  },
  {
    id: 112,
    path: Root_Routes?.platform_advertising,
    page: PlatformAdvertising,
    exact: true,
  },
  {
    id: 113,
    path: Root_Routes?.ppc,
    page: PPC,
    exact: true,
  },
  {
    id: 114,
    path: Root_Routes?.product_launch,
    page: ProductLanch,
    exact: true,
  },
  {
    id: 115,
    path: Root_Routes?.protection_asistance,
    page: ProtectionAssistance,
    exact: true,
  },
  {
    id: 116,
    path: Root_Routes?.reimbursement_refund,
    page: ReimbursementRefund,
    exact: true,
  },
  {
    id: 117,
    path: Root_Routes?.amazon_seo,
    page: SEO,
    exact: true,
  },
  {
    id: 117,
    path: Root_Routes?.contact_us,
    page: ContactUs,
    exact: true,
  },
  {
    id: 118,
    path: Root_Routes?.gator_cable,
    page: GatorCable,
    exact: true,
  },
  {
    id: 119,
    path: Root_Routes?.hair_burst,
    page: HairBurst,
    exact: true,
  },
  {
    id: 120,
    path: Root_Routes?.quench_co,
    page: QuenchCo,
    exact: true,
  },
  {
    id: 121,
    path: Root_Routes?.solo_nutrition,
    page: SoloNutrition,
    exact: true,
  },
  {
    id: 122,
    path: Root_Routes?.woken_coffee,
    page: WokenCoffee,
    exact: true,
  },
  {
    id: 123,
    path: Root_Routes?.tribella,
    page: Tribella,
    exact: true,
  },
  {
    id: 124,
    path: Root_Routes?.gaurdian_athletic,
    page: GaurdianAthletic,
    exact: true,
  },
  {
    id: 125,
    path: Root_Routes?.vortex_enterprise,
    page: VortexEnterprise,
    exact: true,
  },
];
