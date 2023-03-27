import { TProps } from "../types";

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