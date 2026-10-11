import excelJS from 'exceljs'; // Import the exceljs library
import {test, expect} from '@playwright/test';
import path from 'node:path';

async function writeExcelFile(searchText, replaceText, change, filePath){
const workbook = new excelJS.Workbook(); // Create a new workbook
await workbook.xlsx.readFile(filePath)// Read an existing Excel file
const worksheet = workbook.getWorksheet('Sheet1'); // Get the first worksheet in the workbook
const output = await readExcelFile(worksheet, searchText); // Call the function to read the Excel file
const cell = worksheet.getCell(output.row,output.column+change.columnChange); // Get the cell at row 3, column 2
console.log(cell.value); // Log the value of the cell to the console
cell.value = replaceText; // Change the value of the cell to "Banana"
await workbook.xlsx.writeFile(filePath) // Save the changes to the Excel file
};

async function readExcelFile(worksheet, searchText){
    let output = {row:-1, column:-1}; // Initialize an output object to store the row and column of the cell with value "Apple"
    worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
        if(cell.value === searchText){
            output.row = rowNumber;
            output.column = colNumber;
        }
    })
    
})
return output;
    
}
test('Upload download excel validation', async ({ page }, testInfo) => {
    const textSearch = "Apple";
    const textReplace = "123";
    await page.goto('https://rahulshettyacademy.com/upload-download-test/');
    const downloadButton = page.getByRole('button', { name: 'Download' });
    const downloadPromise = page.waitForEvent('download');
    await downloadButton.click();
    const download = await downloadPromise;
    const filePath = path.join(testInfo.outputDir, 'download.xlsx');
    await download.saveAs(filePath);
    await writeExcelFile(textSearch,textReplace, {rowChange:0, columnChange:2}, filePath); // Call the function to read the Excel file
    const uploadButton = page.locator('#fileinput');
    await uploadButton.setInputFiles(filePath);
    const textLocator = page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({ has: textLocator });
    await expect(desiredRow).toContainText(textReplace);
});