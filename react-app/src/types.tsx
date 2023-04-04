import { MouseEvent } from "react";

export type TNavLi = {
  to: string;
  title: string | null;
  onClick: (e: MouseEvent) => void;
};

export type TCard = {
  title: string;
  source: string;
  produced: string;
  release: string;
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
