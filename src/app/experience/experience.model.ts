export interface experienceDTO {
    id:number;
    startDate:Date;
    endDate:Date;
    position:string;
    company:string;
    englishDuties:string;
    polishDuties:string;
}

export interface experienceCreationDTO {
    startDate:Date;
    endDate:Date;
    position:string;
    company:string;
    englishDuties:string;
    polishDuties:string;
}