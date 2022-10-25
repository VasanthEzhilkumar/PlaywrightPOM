import { Locator, Page } from '@playwright/test';
// import RegistrationPageConstants from '../src/constants/RegistrationPageConstants';


export class hireEmployeePage {
  readonly page: Page;
  readonly supervisorysearch: Locator;
  readonly supervisorysearchexp: Locator;
  readonly newPreHire: Locator;
  readonly gName: Locator;
  readonly fName: Locator;
  readonly addphone : Locator;
  readonly addAddress : Locator;
  readonly addemail: Locator;
  readonly emailAddress: Locator;
  readonly emailType : Locator;
  readonly contactInformation : Locator;
  readonly contactPhoneNumber : Locator;
  readonly contactPhoneDevice : Locator;
  readonly contactPhoneDevicetext : Locator;
  readonly contactphoneType : Locator;
  readonly addressStreet : Locator;
  readonly addressPostalCode : Locator;
  readonly addressCity : Locator;
  readonly addressCounty : Locator;
  readonly addressType : Locator;
  readonly existingPreHire: Locator;
  readonly existingPreHireSearch: Locator;
  readonly okButtonHireEmployee: Locator;
  readonly supervisorhamburger: Locator;
  readonly hireDate: Locator;
  readonly reason: Locator;
  readonly empType: Locator;
  readonly jobprofile: Locator;
  readonly timetype: Locator;
  readonly location: Locator;
  readonly additionlInformation: Locator;
  readonly additonaljobClassification: Locator;
  readonly workshift: Locator;
  readonly okButton : Locator;
  readonly emailTypeExtended : Locator;
  readonly additionclassifiction : string;
  readonly additionalJobClassificationEXp : Locator;
  readonly workshiftExp : Locator;
  readonly submitButton : Locator;
  readonly additionalJobClassificationClick : Locator;
  readonly additionalJobsecondItm : Locator;
  readonly schdeuledHours: Locator;
  readonly endEmploymentDate : Locator;
  readonly addcls : Locator;

  constructor(page: Page) {
    this.page = page;
    this.supervisorysearch = page.locator('text=Supervisory OrganizationSupervisory Organization0 items selected >> [placeholder="Search"]');
    this.supervisorysearchexp = page.locator('text=Supervisory OrganizationSupervisory OrganizationOptions Expanded >> [placeholder="Search"]');
    this.supervisorhamburger = page.locator('text=Supervisory OrganizationSupervisory OrganizationOptions Expanded >> svg[role="presentation"]');
    this.newPreHire = page.locator('text=Create a New Pre-Hire');
    this.contactInformation = page.locator('text=Contact Information >> nth=0');
    // this.gName = page.locator('[id="\\35 6\\$551056--uid22-input"]');
    // this.fName = page.locator('[id="\\35 6\\$551056--uid23-input"]');
    this.gName = page.locator('label:has-text("Given Name")');
    this.fName = page.locator('label:has-text("Family Name")')
    this.addphone = page.locator('[aria-label="Add Phone"]');
    this.addAddress = page.locator('[aria-label="Add Address"]');
    this.addemail = page.locator('[aria-label="Add Email"]');
    this.emailAddress = page.locator('text=Email AddressEmail AddressTypeType0 items selectedPrimary WorkPrimary WorkPrimar >> input[role="textbox"]');
    this.emailType = page.locator('text=Email AddressEmail AddressTypeType0 items selectedPrimary WorkPrimary WorkPrimar >> [placeholder="Search"]');
    this.contactPhoneNumber = page.locator('label:has-text("Phone Number")');//page.locator('[id="\\35 6\\$506134--uid26-input"]');
    this.contactPhoneDevice = page.locator('text=select oneselect one');
    this.contactPhoneDevicetext = page.locator('div[role="option"]:has-text("Mobile")');
    this.contactphoneType = page.locator('text=TypeType0 items selected >> [placeholder="Search"]');
    this.addressStreet =page.locator('label:has-text("Street Name")');// page.locator('[id="\\35 6\\$34052--uid45-input"]');//page.locator('label:has-text("Street Name")');//page.locator('[id="\\35 6\\$34052--uid45-input"]');//text=StreetStreet
    this.addressPostalCode = page.locator('label:has-text("Postal Code")');//page.locator('[id="\\35 6\\$34052--uid52-input"]');
    this.addressCity = page.locator('label:has-text("City/Town or Post Office")');//page.locator('[id="\\35 6\\$34052--uid53-input"]');//page.locator('label:has-text("City/Town or Post Office")');//page.locator('[id="\\35 6\\$34052--uid53-input"]');
    this.addressCounty = page.locator('text=CountyCounty0 items selected >> [placeholder="Search"]');
   
    this.addressType = page.locator('text=UsageTypeType0 items selectedPrimary WorkPrimary WorkPrimary HomePrimary HomeUse >> [placeholder="Search"]');//page.locator('text=TypeType0 items selected >> [placeholder="Search"]');//
    this.existingPreHire = page.locator('text=Existing Pre-Hire0 items selected >> [placeholder="Search"]');
    this.existingPreHireSearch = this.page.locator('text=Existing Pre-HireOptions Expanded >> [placeholder="Search"]');
    this.okButtonHireEmployee = page.locator('button:has-text("OK")');
    this.okButton = page.locator('button:has-text("OK")');
    this.submitButton = page.locator('button:has-text("SUBMIT")');
    this.emailTypeExtended = page.locator('text=TypeType0 items selected, press enter to view all options, or type to search and >> [placeholder="Search"]')
    //Hire Employee Locators
    this.hireDate = page.locator('[aria-label="Day"]');
    //this.hireDate = page.locator('text=Hire DateHire Datecurrentvalue is DD/MM/YYYYDD/MM/YYYYuse right and left arrows >> div[role="group"]');
    this.reason = page.locator('text=ReasonReason0 items selected >> [placeholder="Search"]');
    this.empType = page.locator('text=Employee TypeEmployee Type0 items selected >> [placeholder="Search"]');
    this.jobprofile = page.locator('text=Job ProfileJob Profile0 items selected >> [placeholder="Search"]');
    this.timetype = page.locator('text=Time TypeTime Type0 items selected >> [placeholder="Search"]');
    this.location = page.locator('text=LocationLocation0 items selected >> [placeholder="Search"]');
    this.additionlInformation = page.locator('text=Additional Information');
    this.additonaljobClassification = page.locator('text=Additional Job ClassificationsAdditional Job Classifications0 items selected >> [placeholder="Search"]');
   // text=Options ExpandedC - Regular labour contract (Romania Contract Types-Romania) >> [placeholder="Search"]
   this.addcls = page.locator('label:has-text("Additional Job Classifications")');
    this.additionalJobClassificationEXp =  page.locator('text=Additional Job ClassificationsAdditional Job ClassificationsOptions Expanded >> [placeholder="Search"]');
    this.additionalJobClassificationClick = page.locator('text=Additional Job ClassificationsAdditional Job Classifications1 item selected, C - >> [placeholder="Search"]');
    this.additionalJobsecondItm = page.locator('text=Additional Job ClassificationsAdditional Job Classifications2 items selected, C  >> [placeholder="Search"]');
    this.workshift = page.locator('text=0 items selectedError: Select a Work Shift. >> [placeholder="Search"]');
    this.workshiftExp = page.locator('text=Options ExpandedError: Select a Work Shift. >> [placeholder="Search"]');
    this.schdeuledHours = page.locator('label:has-text("Scheduled Weekly Hours")');
    this.endEmploymentDate = page.locator('label:has-text("End Employment Date")');

  }


  /**
     * Creating a new Account
     * @param supervisoryOrganisation * @param givenname     * @param Country 
     * @param FamilyName 
     * @param PhoneDevice 
     * @param phoneNumber 
     * @param phoneType 
     * @param city 
     * @param address 
     * @param state 
     * @param postalCode 
     * @param EffectiveDate
     * @param Country
     * @param Street
     * @param BuildingNumber
     * @param StreetNumber
     * @param PostalCode
     * @param County
     * @param addressType
     * @param UseFor
     * @param EmailAddress
     * @param EmailType
     * @param HireDate
     * @param Reason
     * @param Position
     * @param EmployeeType
     * @param JobProfile
     * @param TimeType
     * @param Location
     * @param PayRateType
     * @param ScheduledWeeklyHours
     * @param AdditionalJobClassifications
     * @param WorkShift
     * @param EndEmploymentDate
     * @param Comments
     * @param CostCenter
     * @param DepartmentSection
     * @param ProposedPayGroupInitial
     * @param ProposedPayGroupFinal
     * @param MealVoucher
     * @param MedicalInsurance
     * @param HealthHouse
     * @param BasicFunction
     * @param Pensioner
     * @param NegotiatedLeave	
     * @param ProbationReviewDate
     * @param Reason
     * @param ContractID
     * @param ContractType	
     * @param Status
     * @param DateEmployeeSigned
     * @param DateEmployerSigned
     * @param ContractEndDate
     * @param Country1
     * @param NationalIDType1
     * @param DepartmentSection
     * @param IssuedDate1
     * @param ExpirationDate1
     * @param Country2
     * @param NationalIDType2
     * @param DepartmentSection
     * @param IssuedDate2
     * @param ExpirationDate2
     * @param IssuedBy2
     * @param Series2
     * @param Salary
     * @param Gender
     * @param DateOfBirth
     * @param CityOfBirth
     * @param MaritalStatus
     * @param MaritalStatusDate
     * @param CitizenshipStatus
     * @param PrimaryNationality
     * @param BankName
     * @param BankCode
     * @param AccountType
     * @param AccountNumber
     * @param IBAN
     * @param FNameType
     * @param Country
     * @param FGivenName
     * @param FFamilyName
     * @returns 
     */

  async contactInformationpage() {

    await this.contactInformation.click();

  }

  async legalNameInformation(givenname: string, FamilyName: string) {
    await this.gName.fill(givenname);
    await this.fName.fill(FamilyName);
  }

  async contactInformationPhone(phoneNumber : number ,PhoneDevice : string ,phoneType : string){
    await this.addphone.click();
    await this.contactPhoneNumber.fill(phoneNumber.toString());
    await this.contactPhoneDevice.click();
    await this.contactPhoneDevicetext.click();
    await this.contactphoneType.fill(phoneType);
    await this.contactphoneType.press('Enter');
    await this.page.waitForTimeout(500);

  }
  async contactInformationAddress(StreetNumber : string ,PostalCode : number ,city : string,County: string ,addressType: string){
    await this.page.waitForTimeout(500);
    await this.addAddress.click();
    await this.addressStreet.fill(StreetNumber);
    await this.addressPostalCode.fill(PostalCode.toString());
    await this.addressCity.fill(city);
    if( !city.includes('Bratislava')){
    //  await this.addressCounty.fill(County);
  }
    await this.addressType.fill(addressType);

  }
  async contactInformationEmail (EmailAddress : string ,EmailType : string ){
    await this.addemail.click();
    await this.emailAddress.fill(EmailAddress);
    await this.emailType.fill(EmailType);
    await this.emailTypeExtended.press('Enter');
    await this.page.waitForTimeout(500);
  }
  async okHireButton(){
    await this.okButton.click();
  }

  async searchSupervisoryOrganization(supervisoryOrganisation: string, givenname: string) {

    await this.supervisorysearch.fill(supervisoryOrganisation, { timeout: 2000 });
    // await this.supervisorysearchexp.fill (("880 Team TEST"),{timeout :2000});
    await this.page.waitForTimeout(2000);
   // await this.page.keyboard.press('Enter');
    // await this.supervisorysearchexp.press('Enter');
    //await this.supervisorysearch.press('Enter');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(5000);
    await this.newPreHire.click();

    // await this.existingPreHire.click();
    // await this.existingPreHireSearch.fill(givenname);
    // await this.existingPreHireSearch.press('Enter');
    await this.okButtonHireEmployee.click();
    await this.page.waitForTimeout(3000);

  }
  async fillpersonaldetails() {

  }
  async hireEmployeeJobDetails(HireDate: string, EmployeeType: string, jobprofile: string, timetype: string, workshift: string, AdditionalJobClassifications: string ,position : string,schdeuledhours :string) {
    var str: String[] = AdditionalJobClassifications.split('@') ;
    await this.page.waitForTimeout(1500);
    await this.hireDate.type(HireDate);
    await this.reason.fill("New Hire");
await this.page.waitForTimeout(1000);
    await this.page.keyboard.press('Enter');
    if (!position.includes('Auto')){

      await this.empType.fill(EmployeeType);
    await this.page.waitForTimeout(500);
    await this.empType.press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('Enter');
    await this.jobprofile.fill(jobprofile);
    await this.page.waitForTimeout(500);
    await this.jobprofile.press('Enter');
    await this.page.waitForTimeout(1000);
    await this.page.keyboard.press('Enter');
    await this.timetype.fill(timetype);
    await this.page.waitForTimeout(500);
    await this.timetype.press('Enter');
    await this.location.fill('870');
    await this.page.waitForTimeout(500);
    await this.location.press('Enter');
    await this.page.waitForTimeout(500);
    }
    
    await this.additionlInformation.click();
    await this.additonaljobClassification.fill(str[0].toString());
    await this.additonaljobClassification.press('Enter');
    await this.page.waitForTimeout(500);
    await this.addcls.fill(str[1].toString());
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(500);
    // await this.addcls.fill(str[2].toString());
    // await this.page.keyboard.press('Enter');
    // await this.page.waitForTimeout(500);
    //await this.additionalJobClassificationClick.click();
    // await this.additionalJobClassificationEXp.fill(str[1].toString());
    // await this.additionalJobClassificationEXp.press('Enter');
    // await this.page.waitForTimeout(500);
    await this.page.mouse.wheel(10,10);
    //await this.additionalJobsecondItm.click();
    // await this.additionalJobClassificationEXp.fill(str[2].toString());
    // await this.additionalJobClassificationEXp.press('Enter');
    await this.page.waitForTimeout(500);
    await this.workshift.click();
    await this.workshiftExp.fill(workshift);
    await this.workshiftExp.press('Enter');

    await this.schdeuledHours.fill(schdeuledhours);

    // if(!EmployeeType.includes('Permanent'))
    // {
    //   await this.endEmploymentDate.fill('01/12/2023');
    // }
    await this.submitButton.click();
    await this.page.waitForTimeout(1000);

  }

}
