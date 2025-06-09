export interface Brand {
    id: string | number;
    name: string;
    logoUrl: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;  
}
