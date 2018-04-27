var webdriver = require('selenium-webdriver');
require('chromedriver');
require('chai').should();

var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
  'args': ['--no-sandbox', '--headless']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

function findLoginPageButton() {
  return driver.findElements(webdriver.By.css('.loginButton a')).then(function (result) {
    return result[0];
  });
}

function findLink(link, index) {
  return driver.findElements(webdriver.By.linkText(link)).then(function (result) {
    return result[index];
  });
}

function findRegisterButton() {
  return findLink('register now!', 0);
}

function findHomeRegisterButton() {
  return driver.findElements(webdriver.By.css('.registerButton a')).then(function (result) {
    return result[0];
  });
}

function findLoginButton() {
  return driver.findElements(webdriver.By.css('.login-form-button')).then(function (result) {
    return result[0];
  });
}

function findButton(index) {
  return driver.findElements(webdriver.By.css('.login-form-button')).then(function (result) {
    return result[index];
  });
}

function findUserDropdown() {
  return driver.findElements(webdriver.By.css('.ant-dropdown-trigger')).then(function (result) {
    return result[0];
  });
}

function findMySchedulesItem() {
  return driver.findElements(webdriver.By.css('.ant-dropdown-menu-item')).then(function (result) {
    return result[0];
  });
}

function findLogoutItem() {
  return driver.findElements(webdriver.By.css('.ant-dropdown-menu-item')).then(function (result) {
    return result[1];
  });
}

function findDangerButton() {
  return driver.findElements(webdriver.By.css('.ant-btn-danger')).then(function (result) {
    return result[0];
  });
}

function findErrorText(index) {
  return driver.findElements(webdriver.By.css('.ant-form-explain')).then(function (result) {
    return result[index];
  });
}

function findErrorMessage(index) {
  return driver.findElements(webdriver.By.css('.ant-message-error span')).then(function (result) {
    return result[index];
  });
}

function findSuccessMessage(index) {
  return driver.findElements(webdriver.By.css('.ant-message-success span')).then(function (result) {
    return result[index];
  });
}

function findEmailEntry() {
  return driver.findElements(webdriver.By.css('#email')).then(function (result) {
    return result[0];
  });
}

function findUsernameEntry() {
  return driver.findElements(webdriver.By.css('#username')).then(function (result) {
    return result[0];
  });
}

function findFirstPasswordEntry() {
  return driver.findElements(webdriver.By.css('#password1')).then(function (result) {
    return result[0];
  });
}

function findPasswordEntry() {
  return driver.findElements(webdriver.By.css('#password')).then(function (result) {
    return result[0];
  });
}

function findTitleText() {
  return driver.findElements(webdriver.By.css('.intro h1')).then(function (result) {
    return result[0];
  });
}

function findResetPassword() {
  return driver.findElements(webdriver.By.css('.login-form-forgot')).then(function (result) {
    return result[0];
  });
}

function findAuCodeEntry() {
  return driver.findElements(webdriver.By.css('#aucode')).then(function (result) {
    return result[0];
  });
}

function findNewPasswordEntry() {
  return driver.findElements(webdriver.By.css('#password1')).then(function (result) {
    return result[0];
  });
}

function findConfirmPasswordEntry() {
  return driver.findElements(webdriver.By.css('#password2')).then(function (result) {
    return result[0];
  });
}

function goToLoginPage() {
  return driver.get('http://localhost:3000/')
    .then(() => driver.wait(findLoginPageButton, 2000))
    .then(button => button.click());
}

describe('Home and Login Tests', function () {
  it('Page Title', function (done) {
    this.timeout(10000);
    driver.get('http://localhost:3000/')
      .then(() => driver.getTitle())
      .then(title =>
        title.should.equal('Graduation Helper')
      )
      .then(() => done())
      .catch(error => done(error));
  });

  it('Login Button on Home Page', function (done) {
    this.timeout(10000);
    goToLoginPage()
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Login'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Register Button on Home Page', function (done) {
    this.timeout(10000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findHomeRegisterButton, 2000))
      .then(button => button.click())
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Signup'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Register Button on Login Page', function (done) {
    this.timeout(10000);
    goToLoginPage()
      .then(() => driver.wait(findLink('register now!', 0), 2000))
      .then(button => button.click())
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Signup'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Empty Login', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.wait(findErrorText(0), 2000))
      .then(errorElem => errorElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('Please enter your email.'))
      .then(() => driver.wait(findErrorText(1), 2000))
      .then(errorElem => errorElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('Please enter your password.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Successful Registration', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findRegisterButton, 2000))
      .then(button => button.click())
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findUsernameEntry(), 2000))
      .then(input => input.sendKeys('admin'))
      .then(() => driver.wait(findFirstPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findConfirmPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('The calendar \nreinvented for students.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Register with Same Email', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findRegisterButton, 2000))
      .then(button => button.click())
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findUsernameEntry(), 2000))
      .then(input => input.sendKeys('admin'))
      .then(() => driver.wait(findFirstPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findConfirmPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Signup'))
      .then(() => driver.wait(findErrorMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('Email already registered.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Register with Bad Email', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findRegisterButton, 2000))
      .then(button => button.click())
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@gmail.com'))
      .then(() => driver.wait(findUsernameEntry(), 2000))
      .then(input => input.sendKeys('admin'))
      .then(() => driver.wait(findFirstPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findConfirmPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Signup'))
      .then(() => driver.wait(findErrorMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('You must sign up with an illinois.edu email. Please try again.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Register with Short Password', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findRegisterButton, 2000))
      .then(button => button.click())
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findUsernameEntry(), 2000))
      .then(input => input.sendKeys('admin'))
      .then(() => driver.wait(findFirstPasswordEntry(), 2000))
      .then(input => input.sendKeys('test'))
      .then(() => driver.wait(findConfirmPasswordEntry(), 2000))
      .then(input => input.sendKeys('test'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Signup'))
      .then(() => driver.wait(findErrorMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('Password must be at least 10 characters.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Register with Non Matching Passwords', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findRegisterButton, 2000))
      .then(button => button.click())
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findUsernameEntry(), 2000))
      .then(input => input.sendKeys('admin'))
      .then(() => driver.wait(findFirstPasswordEntry(), 2000))
      .then(input => input.sendKeys('test'))
      .then(() => driver.wait(findConfirmPasswordEntry(), 2000))
      .then(input => input.sendKeys('test2'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(curUrl => curUrl.should.include('Signup'))
      .then(() => driver.wait(findErrorMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('Passwords do not match. Please try again.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Successful Login', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findPasswordEntry(), 2000))
      .then(input => input.sendKeys('testtesttest'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('Hello, \nadmin!'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Successful Logout', function (done) {
    this.timeout(20000);
    driver.get('http://localhost:3000/')
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findLogoutItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findDangerButton(), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('The calendar \nreinvented for students.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Reset Password', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findResetPassword(), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findAuCodeEntry(), 2000))
      .then(input => input.sendKeys('ABCDEFGHIJ'))
      .then(() => driver.wait(findNewPasswordEntry(), 2000))
      .then(input => input.sendKeys('test2test2test2'))
      .then(() => driver.wait(findConfirmPasswordEntry(), 2000))
      .then(input => input.sendKeys('test2test2test2'))
      .then(() => driver.wait(findButton(1), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('Hello, \nadmin!'))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findLogoutItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findDangerButton(), 2000))
      .then(button => button.click())
      .then(() => done())
      .catch(error => done(error));
  });

  it('Successful Login After Reset', function (done) {
    this.timeout(20000);
    goToLoginPage()
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findPasswordEntry(), 2000))
      .then(input => input.sendKeys('test2test2test2'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('Hello, \nadmin!'))
      .then(() => done())
      .catch(error => done(error));
  });
});

function findSemesterDropdown() {
  return driver.findElements(webdriver.By.css('.ant-cascader-input')).then(function (result) {
    return result[0];
  });
}

function findDropdown(index) {
  return driver.findElements(webdriver.By.css('.ant-cascader-input')).then(function (result) {
    return result[index];
  });
}

function findElementByTitle(title) {
  return driver.findElements(webdriver.By.css('*[title="' + title + '"]')).then(function (result) {
    return result[0];
  });
}

function findNextButton() {
  return findLink('Next', 0);
}

function findAddOrGenerateButton(index) {
  return driver.findElements(webdriver.By.css('.nextButton')).then(function (result) {
    return result[index];
  });
}

function findSelectedSemester() {
  return driver.findElements(webdriver.By.css('.contentContainer div')).then(function (result) {
    return result[0];
  });
}

function findGenerateScheduleButton() {
  return findLink('Generate Schedule', 0);
}

function findSmallSchedule(index) {
  return driver.findElements(webdriver.By.css('.smallGrid')).then(function (result) {
    return result[index];
  });
}

function getNumSchedules() {
  return driver.findElements(webdriver.By.css('.smallGrid')).then(function (result) {
    return result.length;
  });
}

function findSectionElement(index) {
  return driver.findElements(webdriver.By.css('.rbc-event-content')).then(function (result) {
    return result[index];
  });
}

function findSaveOrEditButton() {
  return driver.findElements(webdriver.By.css('.ant-modal-footer > .ant-btn-primary')).then(function (result) {
    return result[0];
  });
}

function findEditScheduleButton(index) {
  return driver.findElements(webdriver.By.css('.cascaderContainer > .ant-btn-primary')).then(function (result) {
    return result[index];
  });
}

function findMySchedulesTitle() {
  return driver.findElements(webdriver.By.css('.bodyContainer h1')).then(function (result) {
    return result[0];
  });
}

function findSectionDeleteButton(index) {
  return driver.findElements(webdriver.By.css('.anticon-cross')).then(function (result) {
    return result[index];
  });
}

function findCheckbox(index) {
  return driver.findElements(webdriver.By.css('.ant-checkbox-input')).then(function (result) {
    return result[index];
  });
}

function findTimeslot(index) {
  return driver.findElements(webdriver.By.css('.rbc-day-slot > .rbc-timeslot-group')).then(function (result) {
    return result[index];
  });
}

function findNoClassTimeTag(index) {
  return driver.findElements(webdriver.By.css('.ant-tag-green')).then(function (result) {
    return result[index];
  });
}

function getNumberOfNoClassTimeTags(index) {
  return driver.findElements(webdriver.By.css('.ant-tag-green')).then(function (result) {
    return result.length;
  });
}

function selectSemester() {
  return driver.get('http://localhost:3000/')
    .then(() => driver.wait(findGenerateScheduleButton, 2000))
    .then(button => button.click())
    .then(() => driver.getCurrentUrl())
    .then(url => url.should.contain('SemesterSelection'))
    .then(() => driver.sleep(4000))
    .then(() => driver.wait(findSemesterDropdown(), 2000))
    .then(dropdown => dropdown.click())
    .then(() => driver.wait(findElementByTitle('2018'), 2000))
    .then(element => element.click())
    .then(() => driver.sleep(4000))
    .then(() => driver.wait(findElementByTitle('Fall 2018'), 2000))
    .then(element => element.click())
    .then(() => driver.wait(findNextButton(), 2000))
    .then(button => button.click())
    .then(() => driver.sleep(2000));
}

describe('Schedule Generation Tests', function () {
  it('Select Semester', function (done) {
    this.timeout(20000);
    selectSemester()
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.contain('GenerateSchedule'))
      .then(() => driver.wait(findSelectedSemester(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.contain('Selected Semester: Fall 2018'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Semester Already Selected', function (done) {
    this.timeout(20000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findGenerateScheduleButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.contain('GenerateSchedule'))
      .then(() => driver.wait(findSelectedSemester(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.contain('Selected Semester: Fall 2018'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Generate and Save Schedule, No Preferences', function (done) {
    this.timeout(35000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findGenerateScheduleButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Asian American Studies'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findElementByTitle('100: Intro Asian American Studies'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Agricultural and Biological Engineering'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(4000))
      .then(() => driver.wait(findElementByTitle('100: Intro Agric & Biological Engrg'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findAddOrGenerateButton(4), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(5000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionElement(2), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('ABE 100-B 31263'))
      .then(() => driver.wait(findSectionElement(3), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('AAS 100-AD1 41758'))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2500))
      .then(() => driver.wait(findSuccessMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(successText => successText.should.equal('Schedule saved successfully.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Generate and Save Schedule, No Morning Classes', function (done) {
    this.timeout(35000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findGenerateScheduleButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Asian American Studies'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findElementByTitle('100: Intro Asian American Studies'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Agricultural and Biological Engineering'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(4000))
      .then(() => driver.wait(findElementByTitle('100: Intro Agric & Biological Engrg'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findDropdown(2), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Morning'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(2), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findAddOrGenerateButton(4), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(5000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionElement(2), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('ABE 100-B 31263'))
      .then(() => driver.wait(findSectionElement(3), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('AAS 100-AD2 47100'))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2500))
      .then(() => driver.wait(findSuccessMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(successText => successText.should.equal('Schedule saved successfully.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Generate and Save Schedule with No Class Time Selected', function (done) {
    this.timeout(35000);
    var data = {};
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findGenerateScheduleButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Asian American Studies'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findElementByTitle('100: Intro Asian American Studies'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Agricultural and Biological Engineering'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(4000))
      .then(() => driver.wait(findElementByTitle('100: Intro Agric & Biological Engrg'), 2000))
      .then(element => element.click())
      .then(() => driver.wait(findAddOrGenerateButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findAddOrGenerateButton(3), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findTimeslot(78), 2000))
      .then(function (timeslot) { data.firstTimeslot = timeslot; })
      .then(() => driver.wait(findTimeslot(82), 2000))
      .then(function (timeslot) { data.secondTimeslot = timeslot; })
      .then(timeslot => driver.actions({ bridge: true }).dragAndDrop(data.firstTimeslot, data.secondTimeslot).perform())
      .then(() => driver.wait(findTimeslot(65), 2000))
      .then(function (timeslot) { data.firstTimeslot = timeslot; })
      .then(() => driver.wait(findTimeslot(69), 2000))
      .then(function (timeslot) { data.secondTimeslot = timeslot; })
      .then(timeslot => driver.actions({ bridge: true }).dragAndDrop(data.firstTimeslot, data.secondTimeslot).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findNoClassTimeTag(0), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('F 8 - 12'))
      .then(() => driver.wait(findAddOrGenerateButton(4), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(5000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionElement(2), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('ABE 100-B 31263'))
      .then(() => driver.wait(findSectionElement(3), 2000))
      .then(className => className.getAttribute('innerText'))
      .then(innerText => innerText.should.equal('AAS 100-AD2 47100'))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2500))
      .then(() => driver.wait(findSuccessMessage(0), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(successText => successText.should.equal('Schedule saved successfully.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Log Out From Generate Schedules Page', function (done) {
    this.timeout(30000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findGenerateScheduleButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findLogoutItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findDangerButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('The calendar \nreinvented for students.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('My Schedules Page', function (done) {
    this.timeout(30000);
    goToLoginPage()
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findPasswordEntry(), 2000))
      .then(input => input.sendKeys('test2test2test2'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.contain('MySchedules'))
      .then(() => driver.wait(findMySchedulesTitle(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('My Schedules'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Log Out From My Schedules Page', function (done) {
    this.timeout(30000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findLogoutItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findDangerButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('The calendar \nreinvented for students.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Delete Schedule', function (done) {
    this.timeout(30000);
    goToLoginPage()
      .then(() => driver.wait(findEmailEntry(), 2000))
      .then(input => input.sendKeys('admin@illinois.edu'))
      .then(() => driver.wait(findPasswordEntry(), 2000))
      .then(input => input.sendKeys('test2test2test2'))
      .then(() => driver.wait(findLoginButton, 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSmallSchedule(2), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findDangerButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(getNumSchedules(), 1000))
      .then(numberOfSchedules => numberOfSchedules.should.equal(2))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Edit Button', function (done) {
    this.timeout(30000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.contain('EditSchedule'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Save Empty Schedule', function (done) {
    this.timeout(30000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionDeleteButton(2), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionDeleteButton(1), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionDeleteButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findEditScheduleButton(1), 2000))
      .then(button => button.click())
      .then(() => driver.wait(findErrorMessage(0), 2000))
      .then(errorElem => errorElem.getAttribute('innerText'))
      .then(errorText => errorText.should.equal('The schedule cannot be empty.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Edit and Save Schedule', function (done) {
    this.timeout(30000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSectionDeleteButton(2), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSemesterDropdown(), 2000))
      .then(dropdown => dropdown.click())
      .then(() => driver.wait(findElementByTitle('Accountancy'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findElementByTitle('201: Accounting and Accountancy I'), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findEditScheduleButton(0), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(3000))
      .then(() => driver.wait(findCheckbox(1), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findLink('2', 0), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findCheckbox(9), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findEditScheduleButton(1), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2500))
      .then(() => driver.wait(findSuccessMessage(0), 2000))
      .then(errorElem => errorElem.getAttribute('innerText'))
      .then(successText => successText.should.equal('Schedule edited successfully.'))
      .then(() => done())
      .catch(error => done(error));
  });

  it('Log Out From Edit Schedule Page', function (done) {
    this.timeout(30000);
    driver.get('http://localhost:3000/')
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findMySchedulesItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSmallSchedule(0), 2000))
      .then(element => element.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findSaveOrEditButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.wait(findUserDropdown(), 2000))
      .then(dropdown => driver.actions({ bridge: true }).move({ origin: dropdown }).perform())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findLogoutItem(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(1000))
      .then(() => driver.wait(findDangerButton(), 2000))
      .then(button => button.click())
      .then(() => driver.sleep(2000))
      .then(() => driver.getCurrentUrl())
      .then(url => url.should.equal('http://localhost:3000/#/'))
      .then(() => driver.wait(findTitleText(), 2000))
      .then(textElem => textElem.getAttribute('innerText'))
      .then(titleText => titleText.should.equal('The calendar \nreinvented for students.'))
      .then(() => done())
      .catch(error => done(error));
  });
});
