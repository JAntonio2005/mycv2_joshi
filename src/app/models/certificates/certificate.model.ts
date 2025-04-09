export class Certificate {
    id?: string;
    issueDate?: string = 'mmm-yyyy';  // Fecha de emisión
    issuer?: string = 'Issuer Name';  // El que emite el certificado
    title?: string = 'Certificate Title';  // Título del certificado
}