import { ReactNode } from "react";

export interface ComponentProps {
    children: ReactNode;
}

export interface ButtonProps {
  title: string;
  action?: () => void
}

export interface MovieProps {
  id?: string
  posterImage: string
  releaseYear: string
  title: string
}

export interface MProps {
  movies: MoviesProps[]
}

export interface PrimaryImage {
  url: string
}

export interface TitleText {
  text: string
}

export interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}