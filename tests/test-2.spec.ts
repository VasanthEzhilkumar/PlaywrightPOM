import { test ,Page} from "@playwright/test";
import { expect } from "@playwright/test";
import { loginpage } from '../src/pages/loginPage';
import { RehireProcess } from '../src/driver/Rehire';
import { homepage } from '../src/pages/homePage';
import { hireEmployeePage } from '../src/pages/hireEmployeePage';
import ExcelUtil from '../src/base/Util/ExcelUtil';
import { appCommons } from '../src/Application Commons/appCommons';
import { employeeInboxPage } from '../src/pages/employeeInboxpage';
import { proxyPage } from '../src/pages/proxyPage';
import { hrInboxPage } from '../src/pages/hrInboxPage';

let page: Page;
let empNum : string ; 

// test.beforeAll(async ({ browser }) => {

//   console.log('Before Test');
//   const username = "90000595"
//   const password = "Gratitude@12"
//   const context = await browser.newContext();
//   page = await context.newPage();
//   const login = new loginpage(page);
//   await login.goto();
//   await login.sigIn(username, password);


// })

test.beforeEach(async ({ browser }) => {

  console.log('Before Test');
  const username = ""
  const password = ""
  const context = await browser.newContext();
  page = await context.newPage();
  const login = new loginpage(page);
  await login.goto("Romania");
  await login.sigIn(username, password);


})

   
  

const testData = ExcelUtil.getTestDataArray("REHIRE")

testData.forEach(data =>{
  test(`Parameterized test ${data.GivenName}`, async ({  }) => {
 
    
  const rehire = new RehireProcess();
  const home = new homepage(page);
  const hireEmployee = new hireEmployeePage(page);
  const appCommon = new appCommons(page);
  const proxy = new proxyPage(page); 
  
  const empInboxpage = new employeeInboxPage(page, data.GivenName, data.FamilyName,data.JobProfile);
  const hrInbxPage = new hrInboxPage(page, data.GivenName, data.FamilyName);

  //const st = data.ExpirationDate1.toString();
  await home.searchHireEmployee();
  //await hireEmployee.searchSupervisoryOrganization(data.SupervisoryOrganisation, data.GivenName);


  await hireEmployee.searchSupervisoryOrganization(data.SupervisoryOrganisation, data.GivenName);
  await hireEmployee.legalNameInformation(data.GivenName,data.FamilyName)
  await hireEmployee.contactInformationpage();
  await hireEmployee.contactInformationPhone(data.PhoneNumber,data.PhoneDevice,data.Type);
  await hireEmployee.contactInformationAddress(data.Street,data.PostalCode,data.City,data.County,data.Type);
  await hireEmployee.contactInformationEmail(data.EmailAddress,data.Type);
  await hireEmployee.okHireButton();
  await hireEmployee.hireEmployeeJobDetails(data.HireDate, data.EmployeeType, data.JobProfile, data.TimeType, data.WorkShift, data.AdditionalJobClassifications,data.Position,data.ScheduledWeeklyHours);
  await appCommon.ClickInbox();


  await empInboxpage.assignDeparment(data.CostCenter);

  await appCommon.SuccessEventHandle();


})
})


// computerData.forEach(data => {

//     test(`Parameterized test ${data.name}`, async ({ page }) => {
//         await page.goto("https://computer-database.gatling.io/computers");
//         await page.click("#add");
//         await page.fill("#name", data.name);
//         await page.selectOption("#company", {
//             label: data.manufacture
//         });
//         await page.click("input[type='submit']");
//         expect(page.locator("div.alert-message.warning")).toContainText("Done")
//     })
// })
