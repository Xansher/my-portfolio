export interface skillDTO{
    id:number;
    name: string;
    englishDescription: string;
    polishDescription: string;
    icon: string;
}

export interface skillCreationDTO{
    name: string;
    englishDescription: string;
    polishDescription: string;
    icon: File;
}