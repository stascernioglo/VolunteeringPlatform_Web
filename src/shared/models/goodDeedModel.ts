export const goodDeedcategories = ['Intellectual Assistance', 'Education', 'Physical Assistance',
 'Financial Assistance', 'Social Assistance', 'Other'];

export interface GoodDeedForCreateDto {
    name: string;
    category: string;
    description?: string;
    date?: Date;
    locality?: string;
    address?: string;
    phoneNumber?: string;
    requiredNumberOfvolunteers?: number;
    image?: File;
}

 export interface GoodDeedListDto {
    id?: number;
    name?: string;
    category?: string;
    date?: Date;
    locality?: string;
    requiredNumberOfvolunteers?: number;
    numberOfParticipatingVolunteers?: number;
    imageUrl?: string;
}
