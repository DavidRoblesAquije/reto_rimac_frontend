export interface FormData {
    docType: "DNI" | "Pasaporte";
    docNumber: string;
    celular: string;
    politicaPrivacidad: boolean;
    politicaComunica: boolean;
    username?: string;
    userlastname?: string;
    userBirthDay?: string;
}

// export interface HomeData{
//     username: string;
//     userlastname: string;
//     docNumber: string;
//     celular: string;
// }

export interface FormContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}