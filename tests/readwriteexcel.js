const excelJS = require('exceljs'); // Import the exceljs library

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
writeExcelFile("Apple",479, {rowChange:0, columnChange:2},"C:/Users/user/Downloads/download.xlsx"); // Call the function to read the Excel file