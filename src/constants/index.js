import { Root_Routes } from "../Services/Routes/APP";

import {
  AccountManagement,
  SEO,
  ADS,
  ProtectionAssistance,
  Advertising,
  Optimization,
  OurStory,
  OurTeam,
  PartnershipProgram,
  ProudctLaunch,
  Refund,
  Reinstatement,
  SellerInteractive,
} from "../SVG/header";

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
    icon: <ProudctLaunch width={32} height={32} />,
  },
  {
    id: 35,
    title: "Listing Optimization",
    href: Root_Routes?.listing_optimization,
    icon: <Optimization width={32} height={32} />,
  },
  {
    id: 36,
    title: "Brand Protection & Assistance",
    href: Root_Routes?.protection_asistance,
    icon: <ProtectionAssistance width={32} height={32} />,
  },
  {
    id: 37,
    title: "Account Suspension Appeal & Reinstatement",
    href: Root_Routes?.appeal_reinstatement,
    icon: <Reinstatement width={32} height={32} />,
  },
  {
    id: 38,
    title: "Reimbursement & Refund",
    href: Root_Routes?.reimbursement_refund,
    icon: <Refund width={32} height={32} />,
  },
  {
    id: 39,
    title: "FBA Wholesale Partnership Program",
    href: Root_Routes?.wholesale_partnership_program,
    icon: <PartnershipProgram width={32} height={32} />,
  },
  {
    id: 40,
    title: "Amazon Demand-Side Platform Advertising",
    href: Root_Routes?.platform_advertising,
    icon: <Advertising width={32} height={32} />,
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
    icon: <SellerInteractive width={32} height={32} />,
  },
  {
    id: `client-2`,
    href: Root_Routes?.ourstory,
    title: "Our Story",
    icon: <OurStory width={32} height={32} />,
  },
  {
    id: `client-2`,
    href: Root_Routes?.our_team,
    title: "Our Team",
    icon: <OurTeam width={32} height={32} />,
  },
];
