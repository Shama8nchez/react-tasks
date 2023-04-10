import { MouseEvent } from "react";

export type TNavLi = {
  to: string;
  title: string | null;
  onClick: (e: MouseEvent) => void;
};

export type TData = {
  search: string;
};

export type TCard = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TProps = {
  name: string;
  birth: string;
  course: string;
  relocation: string;
  language: string;
  img: string;
};

export type TForm = {
  name: string;
  birth: string;
  course: string;
  relocation: boolean;
  language: string;
  img: FileList;
};
