// export async function generateTableOfContents(companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string): Promise<string> {
    
// }
/*  schoolName,
            campusName,
            courseName,
            studentName,
            studentId,
            supervisorName,
            supervisorEmail,
            supervisorPhone,
            startDate,
            endDate,
            duration,
            reportTitle,
            reportType,
            reportFormat */

export function generateInternshipReport(companyName: string, foundingYear: number, internshipTitle: string, projectTitle: string, description:string,
      schoolName: string,
      campusName: string,
      courseName: string,
      studentName: string,
      studentId: string,
      supervisorName: string,
      supervisorEmail: string,
      supervisorPhone: string,
      startDate: string,
      endDate: string,
      duration: string,
      reportTitle: string,
      reportType: string,
      reportFormat: string

   ) {
 const data = {
    companyName: companyName,
    foundingYear: foundingYear,
    internshipTitle: internshipTitle,
    projectTitle: projectTitle,
    description: description,
      schoolName: schoolName,
      campusName: campusName,
      courseName: courseName,
      studentName: studentName,
      studentId: studentId,
      supervisorName: supervisorName,
      supervisorEmail: supervisorEmail,
      supervisorPhone: supervisorPhone,
      startDate: startDate,
      endDate: endDate,
      duration: duration,
      reportTitle: reportTitle,
      reportType: reportType,
      reportFormat: reportFormat
      
 }

return data;
}




