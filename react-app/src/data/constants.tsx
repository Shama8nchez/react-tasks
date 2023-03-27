import Main from "../components/pages/Main/main";
import About from "../components/pages/About/About";
import { TProps } from "../types";
import Forms from "../components/pages/Forms/Forms";
import Notfound from "../components/pages/Notfound/404";

export enum EPATH {
  ABOUT = "/about",
  FORMS = "/forms",
  MAIN = "/",
  NOTFOUND = "*",
}

export enum EPAGES {
  ABOUT = "About us",
  FORMS = "Form",
  MAIN = "Main",
  NOTFOUND = "404. Page not found",
}

export const ROUTE = [
  {
    path: EPATH.MAIN,
    page: EPAGES.MAIN,
    element: <Main />,
  },
  {
    path: EPATH.ABOUT,
    page: EPAGES.ABOUT,
    element: <About />,
  },
  {
    path: EPATH.FORMS,
    page: EPAGES.FORMS,
    element: <Forms />,
  },
  {
    path: EPATH.NOTFOUND,
    page: EPAGES.NOTFOUND,
    element: <Notfound />,
  },
];

export const COURSES = [
  {
    id: 1,
    course: "React",
  },
  {
    id: 2,
    course: "Angular",
  },
  {
    id: 3,
    course: "Vue",
  },
];

export const cards: TProps[] = [];
