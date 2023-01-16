export const arrayToExcel = (function () {
    //PASO 2: Meter tabla en el formato de Excel.
    const createXMLTable = (table, fileName) => {
        const xmlTable = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"
            xmlns="http://www.w3.org/TR/REC-html40"
        >
           <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
           <head>
              <xml>
                <x:ExcelWorkbook>
                    <x:ExcelWorksheets>
                        <x:ExcelWorksheet>
                            <x:Name>${fileName}</x:Name>
                            <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
                        </x:ExcelWorksheet>
                    </x:ExcelWorksheets>
                </x:ExcelWorkbook>
              </xml>
           </head>
           <body>
             ${table}
           </body>
        </html> `;
        return xmlTable;
    };

    //PASO 3: transformar a BLOB para poder descargarlo.
    const createFileUrl = (xmlTable) => {
        const tableBlob = new Blob([xmlTable], {
            type: 'application/vnd.ms-excel;base64,',
        });
        const downloadURL = URL.createObjectURL(tableBlob);
        return downloadURL;
    };

    //STEP 5: Create download link on button click
    const downloadFile = (downloadURL, fileName) => {
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        downloadLink.download = fileName;
        downloadLink.href = downloadURL;
        downloadLink.click();
    };

    //STEP 1: Convert Array to HTML Table.
    return {
        convertArrayToTable: async (headers , body, fileName) => {
            //traer headers
            const tableHeaders = `<tr>
            ${Object.keys(headers).map((obj) => `<td>${headers[obj]}</td>`).join('')}
            </tr>`;
            //traer Rows
            const tableRows = body.map((obj) => [
                `<tr>
                ${Object.keys(obj).map((key) =>`<td>${obj[key] === null || obj[key] === '' ? '': obj[key]}</td>`).join('')}
                <tr/>`,
            ]).join('');
            
            const table = `<table>${tableHeaders}${tableRows}</table>`.trim(); //fin del paso 1
            const xmlTable = createXMLTable(table, fileName); //paso 2
            const downloadURL = createFileUrl(xmlTable); //paso 3
            downloadFile(downloadURL, fileName); //final
        },
    };
})();
