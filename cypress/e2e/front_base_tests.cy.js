import * as main_page from "../locators/login_test_page/main_page.json";
import * as recovery_password_page from "../locators/login_test_page/recovery_password_page.json"
import * as result_page from "../locators/login_test_page/result_page.json"
import * as data from "../helpers/default_data.json"

describe('12.2 практика Cypress', function () {


   beforeEach('Переход на сайт', function () {
         cy.visit('/');
         });


   afterEach('Видимость заголовка и крестика', function () {
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.close).should('be.visible')
        });



    it('1. Правильный логин и пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();

         cy.get(result_page.title).contains('Авторизация прошла успешно');         
     })


    it('2. Проверка логики восстановления пароля', function () {
         cy.get(main_page.forgot_password).click();

         cy.get(recovery_password_page.email).type(data.test_email);
         cy.get(recovery_password_page.send_button).click();

         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
     })


    it('3. Правильный логин, неправильный пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.wrong_password);
         cy.get(main_page.login_button).click();

         cy.get(result_page.title).contains('Такого логина или пароля нет');
     })

        it('4. Проверка валидации @', function () {
         cy.get(main_page.email).type(data.validation_login_test);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();

         cy.get(result_page.title).contains('Нужно исправить проблему валидации');
     })

         it('5. Проверка строчных букв в логине', function () {
         cy.get(main_page.email).type(data.capital_login_test);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();

         cy.get(result_page.title).contains('Авторизация прошла успешно');
     })
 }) 