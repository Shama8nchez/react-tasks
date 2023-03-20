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
