// Shared site data for Somali Youth Link.
import {
  peaceAmbassador,
  mentorship,
  familyMeeting,
  outreachStreet,
  iftarDinner,
  memorialPatrol,
  groupPhoto,
  coffee1,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  iftar2,
  iftar3,
  iftar4,
  iftar5,
  coffee2,
  coffee3,
  coffee4,
  community1,
  flyerUpcoming,
} from "./assets";

export const CONTACT = {
  email: "somaliyouthlink.syl@gmail.com",
  city: "Minneapolis, Minnesota",
  orgName: "Somali Youth Link",
  abbr: "S.Y.L.",
};

export const NAV = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export type Program = {
  id: string;
  title: string;
  short: string;
  description: string;
  image: string;
};

export const PROGRAMS: Program[] = [
  {
    id: "peace",
    title: "Peace Ambassador & Violence Prevention",
    short: "De-escalation & neighborhood presence",
    description:
      "Trained, unarmed ambassadors help de-escalate conflict, promote nonviolence, and build safer neighborhoods through consistent community presence and outreach.",
    image: peaceAmbassador,
  },
  {
    id: "family",
    title: "Family Support & Resource Navigation",
    short: "Food, legal & immigration help",
    description:
      "Support for families facing food insecurity, help navigating court and immigration matters, and referrals to essential community resources when they are needed most.",
    image: outreachStreet,
  },
  {
    id: "safety",
    title: "Monthly Parent & Youth Safety Discussions",
    short: "Trust-building conversations",
    description:
      "Facilitated conversations that build trust, share safety strategies, and strengthen relationships between youth, parents, and community partners — held the last Friday of every month.",
    image: familyMeeting,
  },
  {
    id: "mentorship",
    title: "Youth Mentorship Programs",
    short: "Workforce, arts & sports",
    description:
      "Mentorship in workforce development, arts, and sports that helps young people build skills, confidence, and positive pathways toward brighter futures.",
    image: mentorship,
  },
];

export type SylEvent = {
  id: string;
  title: string;
  date: string;
  dateSort: string; // ISO for sorting
  time?: string;
  location?: string;
  status: "upcoming" | "past";
  category: "Meeting" | "Community" | "Advocacy";
  description: string;
  image: string;
};

export const EVENTS: SylEvent[] = [
  {
    id: "may-2026",
    title: "Monthly Parent & Youth Meeting",
    date: "Friday, May 29, 2026",
    dateSort: "2026-05-29",
    time: "6:00 – 8:00 PM",
    location: "Minneapolis, MN",
    status: "upcoming",
    category: "Meeting",
    description:
      "A community safety discussion and parent & youth empowerment workshop focused on strengthening families, supporting youth, and building community. Kulan Awood-siinta Waalidiinta & Dhallinyarada.",
    image: flyerUpcoming,
  },
  {
    id: "may-1",
    title: "Monthly Parent & Youth Meeting",
    date: "Friday, May 1, 2026",
    dateSort: "2026-05-01",
    location: "Minneapolis, MN",
    status: "past",
    category: "Meeting",
    description:
      "Our monthly Parent and Youth Meeting where we hold discussions with both parents and youth that help strengthen families and support young people.",
    image: iftarDinner,
  },
  {
    id: "mar-27",
    title: "Monthly Parent & Youth Meeting",
    date: "Friday, March 27, 2026",
    dateSort: "2026-03-27",
    location: "Minneapolis, MN",
    status: "past",
    category: "Meeting",
    description:
      "Discussions with parents and youth to strengthen families and support the youth in our community.",
    image: groupPhoto,
  },
  {
    id: "mar-16-press",
    title: "Press Conference to Extend Temporary Protected Status",
    date: "Monday, March 16, 2026",
    dateSort: "2026-03-16",
    location: "Minnesota State Capitol, Room B971",
    status: "past",
    category: "Advocacy",
    description:
      "Somali Youth Link, partnered with Justice 4 Us The People, hosted an immigrant-led press conference at the Minnesota State Capitol.",
    image: memorialPatrol,
  },
  {
    id: "iftar",
    title: "Community Iftar Dinner during Ramadan",
    date: "Ramadan 2026",
    dateSort: "2026-03-10",
    location: "Minneapolis, MN",
    status: "past",
    category: "Community",
    description:
      "A shared Iftar dinner bringing the community together for both healing and hope during the holy month of Ramadan.",
    image: iftar2,
  },
  {
    id: "feb-27",
    title: "Monthly Parent & Youth Meeting",
    date: "Friday, February 27, 2026",
    dateSort: "2026-02-27",
    location: "Minneapolis, MN",
    status: "past",
    category: "Meeting",
    description:
      "Discussions with parents and youth to strengthen families and support the youth in our community.",
    image: coffee1,
  },
];

export type GalleryAlbum = {
  id: string;
  title: string;
  caption: string;
  images: { src: string; alt: string }[];
};

export const GALLERY: GalleryAlbum[] = [
  {
    id: "memorial",
    title: "Patrolling Alex Pretti's Memorial",
    caption:
      "Peace ambassadors keeping a caring, watchful presence at the community memorial.",
    images: [
      { src: memorialPatrol, alt: "SYL members at Alex Pretti memorial" },
      { src: gallery1, alt: "Community memorial gathering" },
      { src: gallery2, alt: "SYL outreach at the memorial" },
      { src: gallery3, alt: "Community presence at the memorial" },
      { src: gallery4, alt: "SYL ambassadors on patrol" },
      { src: gallery5, alt: "Community memorial support" },
    ],
  },
  {
    id: "iftar",
    title: "A Blessed Iftar Dinner",
    caption:
      "Bringing the community together for healing and hope during Ramadan.",
    images: [
      { src: iftarDinner, alt: "Community Iftar dinner gathering" },
      { src: iftar2, alt: "Families sharing Iftar" },
      { src: iftar3, alt: "Iftar community meal" },
      { src: iftar4, alt: "Community members at Iftar" },
      { src: iftar5, alt: "Iftar dinner celebration" },
      { src: groupPhoto, alt: "SYL community group photo" },
    ],
  },
  {
    id: "coffee",
    title: "Coffee & Resources at the Memorial",
    caption:
      "Distributing coffee and resources to neighbors — with coffee generously contributed by Starbucks.",
    images: [
      { src: outreachStreet, alt: "SYL outreach on the street" },
      { src: coffee1, alt: "Giving out coffee and resources" },
      { src: coffee2, alt: "Community resource distribution" },
      { src: coffee3, alt: "Coffee and resource support" },
      { src: coffee4, alt: "Resource distribution outreach" },
      { src: community1, alt: "Community outreach moment" },
    ],
  },
];

export const IMPACT = [
  { value: 4, suffix: "", label: "Core community programs" },
  { value: 12, suffix: "+", label: "Monthly safety discussions a year" },
  { value: 100, suffix: "%", label: "Unarmed, community-rooted approach" },
  { value: 1, suffix: "", label: "Shared goal: safer neighborhoods" },
];
