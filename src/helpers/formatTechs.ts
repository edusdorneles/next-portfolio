export const formatTechs = (techs: string[]) => {
    let formattedTechs = techs.map((tech) => tech).join(", ");
    return `- ${formattedTechs}`;
};
