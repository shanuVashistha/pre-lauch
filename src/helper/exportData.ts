import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

export const exportToExcel = (data: any[], name: string) => {
    // Create a new workbook
    const workbook: any = new Workbook();
    const worksheet: any = workbook.addWorksheet('Data');

    // Add headers to the worksheet
    const headers: any = Object.keys(data[0]);
    worksheet.addRow(headers);

    // Add data to the worksheet
    data.forEach((item: any) => {
        const row: any = [];
        headers.forEach((header: any) => {
            row.push(item[header]);
        });
        worksheet.addRow(row);
    });

    // Generate a buffer containing the Excel file
    workbook.xlsx.writeBuffer().then((buffer: any) => {
        // Create a Blob from the buffer
        const blob: any = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        // Save the Blob as a file using FileSaver.js
        saveAs(blob, `${name}.xlsx`);
    });
};
