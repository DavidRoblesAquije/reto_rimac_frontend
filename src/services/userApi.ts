export const getUserData = async () => {
    const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
    if (!response.ok) throw new Error("Error al obtener datos del usuario");
    return await response.json();
}