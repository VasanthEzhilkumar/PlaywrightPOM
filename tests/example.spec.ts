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


let page: Page;
let empNum : string ; 

test.beforeAll(async ({ browser }) => {

  console.log('Before Test');
  const username = "90000595"
  const password = "Gratitude@12"
  const context = await browser.newContext();
  page = await context.newPage();
  const login = new loginpage(page);
  await login.goto("Romania");
  await login.sigIn(username, password);


})


test('Hire Process', async ({ }) => {


  const rehire = new RehireProcess();
  const home = new homepage(page);
  const hireEmployee = new hireEmployeePage(page);
  const appCommon = new appCommons(page);
  const proxy = new proxyPage(page); 
  

  const testData = ExcelUtil.getTestDataArray("REHIRE")

  for (const data of testData) {
    const empInboxpage = new employeeInboxPage(page, data.GivenName, data.FamilyName,data.JobProfile);
    const hrInbxPage = new hrInboxPage(page, data.GivenName, data.FamilyName);
    // if (data.Position = 'Yes'){
    //  // await home.CreatePoistion();
    // }
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

    // await appCommon.refreshInbox();

    // await empInboxpage.assignPayGroup();

    // await appCommon.SuccessEventHandle();

    await appCommon.Searchbox("Start Proxy");

    await proxy.startProxy( '10526253');  //'10285794' // Hr Partner

    await appCommon.ClickInbox();

    // await hrInbxPage.hrPaygroupSubmit();

    // await appCommon.SuccessEventHandle();

    // await appCommon.refreshInbox();

    //await hrInbxPage.hrPaygroupSubmit();

    await hrInbxPage.EnterGovID(data.Country1 ,data.NationalIDType1,data.NIDPersonal,data.IssuedDate1,data.ExpirationDate1,data.Country2,data.NationalIDType2,data.IDCardNumber,data.IssuedDate2,data.ExpirationDate2);

    await appCommon.refreshInbox();
    await appCommon.SuccessEventHandle();

    await hrInbxPage.hrcontractsubmit(data.ContractType,data.Status,data.DateEmployeeSigned,data.DateEmployerSigned,data.ContractEndDate,data.ContractReason)


    await appCommon.SuccessEventHandle();

    await appCommon.refreshInbox();

    // await hrInbxPage.hrcontractAddendum();

    // await appCommon.SuccessEventHandle();

    // await appCommon.refreshInbox();

    // await hrInbxPage.hrHireAdditionalData(data.MedicalInsurance,data.HealthHouse);

    // await appCommon.SuccessEventHandle();

    // //await appCommon.refreshInbox();

    // await hrInbxPage.hrhireadditiondatasubmit(data.MedicalInsurance,data.HealthHouse);

    // await appCommon.SuccessEventHandle();

     await appCommon.refreshInbox();

    await hrInbxPage.hrManageProbation(data.ProbationReviewDate);


    await appCommon.SuccessEventHandle();

    await appCommon.refreshInbox();

    //await hrInbxPage.hrProposeCompensationHire();

    //await appCommon.SuccessEventHandle();

    //await appCommon.refreshInbox();

    empNum = await hrInbxPage.hrEditNoticePeriod();

    await appCommon.SuccessEventHandle();

    await appCommon.ClickInbox();

    await appCommon.Searchbox("Stop Proxy");

    await proxy.stopproxy();

    await appCommon.Searchbox("Start Proxy");

    await proxy.startProxy( empNum); //empNum

    await appCommon.ClickInbox();

   await empInboxpage.onBoardingGuide();

    await empInboxpage.empaddPhoto();

   await appCommon.SuccessEventHandle();

    await empInboxpage.empaddBankDetails(data.BankName,data.BankCode,data.AccountNumber,data.IBAN);

    await appCommon.ClickInbox();

    await empInboxpage.empaddBanksubmit();

    await appCommon.SuccessEventHandle();

    await empInboxpage.changeContactInformation();

    await appCommon.SuccessEventHandle();

    await empInboxpage.changePersonalInformation(data.DateOfBirth,data.CityOfBirth,data.MaritalStatus,data.CitizenshipStatus,data.PrimaryNationality);
  
    await appCommon.SuccessEventHandle();

    await empInboxpage.changepersonalinformationSubmit();

    await appCommon.SuccessEventHandle();

    await empInboxpage.changeGovIDInformation();

    await appCommon.SuccessEventHandle();

    await empInboxpage.AddEmergecyInformation();
    await appCommon.SuccessEventHandle();

    await appCommon.Searchbox(empNum);

    await empInboxpage.employeeLinkClick();

    await empInboxpage.empFathername(data.FNameType,data.FGivenName,data.FFamilyName)
    await appCommon.ClickInbox();
    await empInboxpage.reviewDocumentSubmit();
    await appCommon.SuccessEventHandle();
    await empInboxpage.addCertificationSubmit();
    await appCommon.SuccessEventHandle();
    await empInboxpage.romaniaFatherNameSubmit();
    await appCommon.SuccessEventHandle();

    await appCommon.Searchbox("Start Proxy");

    await proxy.startProxy( '10526253');

    await appCommon.ClickInbox();

    // await hrInbxPage.personalInformation();
    // await appCommon.SuccessEventHandle();
    await hrInbxPage.paymentElections();
    await appCommon.SuccessEventHandle();
    await hrInbxPage.updateworkder();
    await appCommon.SuccessEventHandle();
    await hrInbxPage.addworkerbank();
    await appCommon.SuccessEventHandle();
    await appCommon.refreshInbox();
    await empInboxpage.changePersonalInformation1(data.DateOfBirth,data.CityOfBirth,data.MaritalStatus,data.CitizenshipStatus,data.PrimaryNationality);
    //await hrInbxPage.personalInfochange();
    await appCommon.SuccessEventHandle();
    await appCommon.refreshInbox();
    await hrInbxPage.assignPayGroup();
    // await appCommon.refreshInbox();
    // await hrInbxPage.assignPayGroupApprove();


  }

});


