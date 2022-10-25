import { Locator, Page } from "@playwright/test";
import { homepage } from '../../src/pages/homePage';
import { loginpage } from '../../src/pages/loginPage';
import { hireEmployeePage } from '../../src/pages/hireEmployeePage';
import ExcelUtil from '../../src/base/Util/ExcelUtil';

export class RehireProcess {

    public async runrehireProcess(page) {

        const login = new loginpage(page);
        const home = new homepage(page);
        const hireEmployee = new hireEmployeePage(page);
        const username = "90000590"
        const password = "Gratitude@12"
        const sheet = "REHIRE";
        const testData = ExcelUtil.getTestDataArray("REHIRE")


        //await login.goto();
        //await login.sigIn(username, password);





    }


}