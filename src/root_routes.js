//user import

import { Home, Blog, OurStory } from "./Pages";
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
];
