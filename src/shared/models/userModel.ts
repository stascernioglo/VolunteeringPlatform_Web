export interface OrganizationRegisterDto {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    description?: string;
    locality?: string;
    address?: string;
    phoneNumber?: string;
    image?: File;
}

export interface VolunteerRegisterDto {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    personalInformation?: string;
    locality?: string;
    birthDate: Date;
    phoneNumber?: string;
    photo?: File;
}

export interface SimpleUserRegisterDto {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    personalInformation?: string;
    locality?: string;
    phoneNumber?: string;
    photo?: File;
}

