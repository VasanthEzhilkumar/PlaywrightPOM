import { test, expect, Page } from '@playwright/test';
import { loginpage } from '../src/pages/loginPage';
import { RehireProcess } from '../src/driver/Rehire';
import { homepage } from '../src/pages/homePage';
import { hireEmployeePage } from '../src/pages/hireEmployeePage';
import ExcelUtil from '../src/base/Util/ExcelUtil';
import { appCommons } from '../src/Application Commons/appCommons';
import { employeeInboxPage } from '../src/pages/employeeInboxpage';
import { proxyPage } from '../src/pages/proxyPage';
import { hrInboxPage } from '../src/pages/hrInboxPage';
//import XLSX from 'xlsx';
import Excel, { Workbook } from 'exceljs';
import writeXlsxFile from 'write-excel-file'
import fs from 'fs';
import path from 'path';


let page: Page;
let empNum: string;



test.beforeAll(async ({ browser }) => {

  console.log('Before Test');
  const username = "90000601"
  const password = "Gratitude@12"
  const context = await browser.newContext();
  page = await context.newPage();
  const login = new loginpage(page);
  await login.goto("Slovakia");
  await login.sigIn(username, password);


})
const testData = ExcelUtil.getTestDataArray("REHIRE")

testData.forEach(data => {
  test(`Parameterized test ${data.Serial}`, async ({  }) => {
    
 
  //test('Parameterized test ${data.Serial}', async ({ }) => {

    const rehire = new RehireProcess();
    const home = new homepage(page);
    const hireEmployee = new hireEmployeePage(page);
    const appCommon = new appCommons(page);
    const proxy = new proxyPage(page);

    const empInboxpage = new employeeInboxPage(page, data.GivenName, data.FamilyName, data.JobProfile);
    const hrInbxPage = new hrInboxPage(page, data.GivenName, data.FamilyName);

  console.log(data.GivenName,data.Serial );

  type Country = {
    name: string;
    countryCode: string;
    capital: string;
    phoneIndicator: number;
  };
  
  const countries: Country[] = [
    { name: 'Cameroon', capital: 'Yaounde', countryCode: 'CM', phoneIndicator: 237 },
    { name: 'France', capital: 'Paris', countryCode: 'FR', phoneIndicator: 33 },
    { name: 'United States', capital: 'Washington, D.C.', countryCode: 'US', phoneIndicator: 1 },
    { name: 'India', capital: 'New Delhi', countryCode: 'IN', phoneIndicator: 91 },
    { name: 'Brazil', capital: 'Brasília', countryCode: 'BR', phoneIndicator: 55 },
    { name: 'Japan', capital: 'Tokyo', countryCode: 'JP', phoneIndicator: 81 },
    { name: 'Australia', capital: 'Canberra', countryCode: 'AUS', phoneIndicator: 61 },
    { name: 'Nigeria', capital: 'Abuja', countryCode: 'NG', phoneIndicator: 234 },
    { name: 'Germany', capital: 'Berlin', countryCode: 'DE', phoneIndicator: 49 },
  ];
  
  const exportCountriesFile = async () => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('Countries List');
  
    worksheet.columns = [
      { key: 'name', header: 'Name' },
      { key: 'countryCode', header: 'Country Code' },
      { key: 'capital', header: 'Capital' },
      { key: 'phoneIndicator', header: 'International Direct Dialling' },
    ];
  
    countries.forEach((item) => {
      worksheet.addRow(item);
    });
  
    const exportPath = path.resolve(__dirname, 'countries.xlsx');
  
    await workbook.xlsx.writeFile(exportPath);
  };
  
  exportCountriesFile();
//   var workbook = new Excel.Workbook();
//   var worksheet = workbook.addWorksheet('Employees');
 
//   workbook.xlsx.writeBuffer().then(function(buffer) {
//     saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Employees.xlsx');
//   });

// //   const workbookStream = new Excel.Workbook();
//   const writeStream = fs.createWriteStream('./test-stream.xlsx');
//   workbookStream.xlsx.write(writeStream)
//   .then(() => writeStream.end)
//   .then(() => writeStream.close());

//   const workbookfile = new Excel.Workbook();
//   workbookfile.xlsx.writeFile('./test.file.xlsx')

// //   const workbookbuffer = new Excel.Workbook();
// //   workbookbuffer.xlsx.write()
// //   .then(buffer => {fs.promises.writeFile('./test-buffer.xlsx',Buffer.from(buffer));
// // });





})

})

