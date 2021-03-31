export interface HomeDTO{
    id:number;
    language:string;
    label:string;
    text:string;
    underText:string;
    image:string;
    photo:string;
}

export interface HomeCreationDTO {
    englishLabel:string;
    englishText:string;
    englishUnderText:string;
    polishLabel:string;
    polishText:string;
    polishUnderText:string;
    image:File;
    photo:File;
}
export interface HomePutDTO {
    englishLabel:string;
    englishText:string;
    englishUnderText:string;
    polishLabel:string;
    polishText:string;
    polishUnderText:string;
    image:string;
    photo:string;
}

