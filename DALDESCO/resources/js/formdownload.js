function downloadDocx() {
    var link = document.createElement('a');
    link.href = 'Membership Form/FORM-membership-letter-GLAMPCO.docx';
    link.download = 'Membership Form/FORM-membership-letter-GLAMPCO.docx';
    link.click()
}
function downloadPDF() {
    var link = document.createElement('a');
    link.href = 'Membership Form/FORM-membership-letter-GLAMPCO (PDF).pdf';
    link.download = 'Membership Form/FORM-membership-letter-GLAMPCO (PDF).pdf';
    link.click()
}