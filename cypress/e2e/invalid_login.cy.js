import { login_selector } from "../support/locator";
import { login_data } from "../fixtures/chairlyo_data";

describe("Test Data", () => {
    it("check fixture data", () => {
        console.log(login_data);
        console.log(login_data.invalid_email_data);
        console.log(login_data.invalid_password_data);
    });


});