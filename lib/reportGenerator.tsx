// export async function generateTableOfContents(companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string): Promise<string> {
    
// }

export function generateInternshipReport(companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string, description:string) {
 const data = {
    companyName: companyName,
    foundingYear: foundingYear,
    internshipTitle: internshipTitle,
    projectTitle: projectTitle,
    description: description,
 }

return data;
}




