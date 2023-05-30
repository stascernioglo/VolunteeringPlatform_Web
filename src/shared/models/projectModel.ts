export const categories = ['Nature', 'Healthcare', 'Education', 'Older generation', 'Veterans', 'Ecology',
 'Children and youth', 'Animals', 'Sport', 'Other'];

export interface ProjectForCreateDto {
    name: string;
    category: string;
    description?: string;
    date?: Date;
    locality?: string;
    address?: string;
    requiredNumberOfvolunteers?: number;
    image?: File;
}

export interface ProjectListDto {
    id?: number;
    name?: string;
    category?: string;
    date?: Date;
    locality?: string;
    address?: string;
    requiredNumberOfvolunteers?: number;
    numberOfParticipatingVolunteers?: number;
    organization?: string;
    imageUrl?: string;
}

export interface ProjectDto {
    id?: number;
    name?: string;
    category?: string;
    description?: string;
    date?: Date;
    locality?: string;
    address?: string;
    requiredNumberOfVolunteers?: number;
    numberOfParticipatingVolunteers?: number;
    organization?: string;
    organizationId?: number;
    imageUrl?: string;
}

export interface ProjectResult {
    project?: ProjectDto;
    participation?: boolean;
}

export interface MyProjectDto {
    id?: number;
    name?: string;
    imageUrl?: string;
    numberOfParticipatingVolunteers?: number;
}

export interface MyParticipationDto {
    id?: number;
    name?: string;
    imageUrl?: string;
}