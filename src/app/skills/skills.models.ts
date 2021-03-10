export interface skillDTO{
    id:number;
    name: string;
    description: string;
    icon: string;
}

export interface skillCreationDTO{
    name: string;
    description: string;
    icon: File;
}