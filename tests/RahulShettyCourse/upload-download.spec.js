const {test, expect} = require ('@playwright/test')
const ExcelJS = require('exceljs');

let output = { row: -1, column: -1 };
async function writeExcelTest(searchText, replaceText, change, filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    readExcel(worksheet, searchText);
    const cell = worksheet.getCell(output.row, output.column+change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath)
}

async function readExcel(worksheet, searchText) {
    
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }
        })
    })
}

// writeExcelTest("Galaxy S25 Ultra", 149990, {rowChange:0, colChange:2}, "C:\\Users\\Guest1\\Downloads\\exceldownloadTest.xlsx");

test ("uploaded downloaded excel validation", async ({page})=>
{   
    const searchText = 'Mango'
    const updateValue = '350';
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click(),
    ]);
    const downloadPath = 'C:\\Users\\Guest1\\Downloads\\download.xlsx';
    await download.saveAs(downloadPath);
    writeExcelTest(searchText, updateValue, {rowChange:0, colChange:2}, "C:\\Users\\Guest1\\Downloads\\download.xlsx");
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles("C:\\Users\\Guest1\\Downloads\\download.xlsx");
    const textLocator =  page.getByText(searchText);
    const desiredRow = await page.getByRole('row').filter({has: textLocator});
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue)

})