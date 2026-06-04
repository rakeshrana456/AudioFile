export interface Item {
  id: number;
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  Show:boolean,
  textColor: string,
  ParagraphColor:string,
  bgColor:string,
  image: {
    src: string;
    alt: string;
  };
 
}

export interface SpeakerType{
  id: number;
  tag: string;
  title: string;
  description: string;
  bgColor: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface HeadPhoneType {
  id: number;
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
  }
   
}