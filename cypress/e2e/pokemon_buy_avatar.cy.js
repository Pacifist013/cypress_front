import * as login_page from "../locators/pokemonbattle/pokemon_login.json"; //старница авторизации
import * as main_page from "../locators/pokemonbattle/pokemon_main.json";  //главная страница
import * as my_trainer from "../locators/pokemonbattle/my_trainer.json";  //страница моего теренера
import * as shop from "../locators/pokemonbattle/pokemon_shop.json";  //Магазин аватаров
import * as payment from "../locators/pokemonbattle/payment.json";  //Страница оплаты
import * as sms from "../locators/pokemonbattle/sms_confirm.json";  //Страница ввода смс
import * as payment_success from "../locators/pokemonbattle/payment_success.json";  //старница успшеной оплаты
import * as data from "../helpers/pokemon_data.json"  //данные

describe('Покупка аватара на сайте poekmonbattle.ru', function () {



    it('Покупка аватара', function () {

        // Авторизуемся на сайте

         cy.visit('/');
         cy.get(login_page.email).type(data.email);
         cy.get(login_page.password).type(data.password);
         cy.get(login_page.login_button).click();

         cy.wait(3000);

         // Заходим на страницу тренера

         cy.get(main_page.my_trainer).click();

         cy.wait(3000);

         // Переходим в раздел "Смена аватара"

         cy.get(my_trainer.change_avatar).click();

         cy.wait(3000);

         // Выбираем аватар 

         cy.get('.available > button').first().click();

         cy.wait(3000);

         // Вводим данные карты и оплачиваем

         cy.get(payment.card_number).type(data.card_number);
         cy.get(payment.expires).type(data.expires);
         cy.get(payment.cvv).type(data.cvv);
         cy.get(payment.cardholder).type(data.cardholder);
         cy.get(payment.buy_button).click();

         cy.wait(2000);

         // Вводим смс код

         cy.get(sms.sms).type(data.sms)
         cy.get(sms.confirm_button).click();

         cy.wait(2000);

         // Проверям, что оплата прошла

         cy.get(payment_success.payment_status).should('be.visible').contains('Покупка прошла успешно')

    }) 

 }) 