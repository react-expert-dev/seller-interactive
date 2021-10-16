import { Root_Routes } from "../Services/Routes/APP";

import { AccountManagement, SEO, ADS } from "../SVG/header";

export const amazonArr = [
  {
    id: 31,
    title: "Full Account Management",
    href: Root_Routes?.account_management,
    icon: <AccountManagement width={32} height={32} />,
  },
  {
    id: 32,
    title: "Search Engine Optimization (SEO)",
    href: Root_Routes?.seo,
    icon: <SEO width={32} height={32} />,
  },
  {
    id: 33,
    title: "Sponsored Ads Management (PPC)",
    href: Root_Routes?.ppc,
    icon: <ADS width={32} height={32} />,
  },
  {
    id: 34,
    title: "Product Launch",
    href: Root_Routes?.product_launch,
    icon: "",
  },
  {
    id: 35,
    title: "Listing Optimization",
    href: Root_Routes?.listing_optimization,
    icon: "",
  },
  {
    id: 36,
    title: "Brand Protection & Assistance",
    href: Root_Routes?.protection_asistance,
    icon: "",
  },
  {
    id: 37,
    title: "Account Suspension Appeal & Reinstatement",
    href: Root_Routes?.appeal_reinstatement,
    icon: "",
  },
  {
    id: 38,
    title: "Reimbursement & Refund",
    href: Root_Routes?.reimbursement_refund,
    icon: "",
  },
  {
    id: 39,
    title: "FBA Wholesale Partnership Program",
    href: Root_Routes?.wholesale_partnership_program,
    icon: "",
  },
  {
    id: 40,
    title: "Amazon Demand-Side Platform Advertising",
    href: Root_Routes?.platform_advertising,
    icon: "",
  },
];

export const ourClients = [
  {
    id: `client-1`,
    href: Root_Routes?.case_studies,
    title: "Case Studies",
  },
  {
    id: `client-2`,
    href: Root_Routes?.testimonials,
    title: "Client Testimonials",
  },
];

export const whoAreWe = [
  {
    id: `client-1`,
    href: Root_Routes?.seller_interactive,
    title: "Why Seller Interactive?",
  },
  {
    id: `client-2`,
    href: Root_Routes?.ourstory,
    title: "Our Story",
  },
  {
    id: `client-2`,
    href: Root_Routes?.our_team,
    title: "Our Team",
  },
];
