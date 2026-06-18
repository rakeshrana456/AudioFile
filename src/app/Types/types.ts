export interface Product {
  id: number;
  category: string;
  slug: string;
  tag: string;
  ParagraphColor:string,
  imageBackGround:string,
  textColor:string,
  bgColor:string,
  reverse:boolean,
  showTag: boolean;
  title: string;
  description: string;
  buttonText: string;
   CompVisible:boolean,
  image: {
    src: string;
    alt: string;
  };
}
export interface HeroCardData {
 id: number,
  tag: string,
  Show:boolean,
   bgColor:string,
   textColor: string,
   imageBackGround:string,
   ParagraphColor:string,
   title: string,
   description: string,
   buttonText:string,
  image: {
    src: string,
    alt:string
  },
}
export interface SpeakerData {
 id: number,
    tag:string,
    title: string,
    bgColor: string,
    description:string
    buttonText: string,
    image:{
      src:string,
      alt: string,
}
}