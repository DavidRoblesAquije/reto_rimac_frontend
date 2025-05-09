export const getPlansData = async () => {
    const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json");
    if (!response.ok) throw new Error("Error al obtener datos de planes");
    return await response.json();
}