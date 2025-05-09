export const isValidDocNumber = (docType: string, value: string) => {
    // Si no son números, devuelve false
    if (!/^\d*$/.test(value)) return false;

    if (docType === "DNI") return value.length <= 8;
    if (docType === "Pasaporte") return value.length <= 20;
    return false
}

export const isValidPhone = (value: string) => {
    // Validación: solo números y máximo 9 dígitos para celular
    const valido = /^\d*$/.test(value) && value.length <= 9;
    return valido
};

export const calculateAge = (fecha: string) => {
    const fechanacimiento = new Date(fecha.split("-").reverse().join("-")); //FOrmato YYYY-MM-DD
    const fechaactual = new Date();
    let edad = fechaactual.getFullYear() - fechanacimiento.getFullYear();
    const mesesdiferencia = fechaactual.getMonth() - fechanacimiento.getMonth();
    //si el cumpleaños del año actual aun no ha ocurrido
    if (
        mesesdiferencia < 0 ||
        (mesesdiferencia === 0 &&
            fechaactual.getDate() < fechanacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}