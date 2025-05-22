describe('New LogInTest POM' , () =>{
   

      it("test login", () => {
          cy.viewport(1745, 835);
          cy.visit("https://test-unifyrk-gateway.azurewebsites.net/auth/login"); //mainURL
          cy.get("span.dp-chevron-right").click(); //login btn
          cy.wait(4000)

          //Handling microsoft login
          cy.origin('https://login.microsoftonline.com', () => {
            cy.visit('/993ad417-3131-465f-819a-d58f7f8d9c6c/oauth2/v2.0/authorize?client_id=d2ce0b74-fb68-4cd9-8efe-0d134f885067&scope=user.read%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Ftest-unifyrk-gateway.azurewebsites.net%2Fauth%2Flogin&client-request-id=0196af62-2102-7ace-9439-533e49b2502d&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.24.0&client_info=1&code_challenge=65-QjdVC7CPvgMvAyVEv5oI8PBVd5yJh9IW1X_qhY1Y&code_challenge_method=S256&nonce=0196af62-2103-752c-8c89-7d6dfcf6d14d&state=eyJpZCI6IjAxOTZhZjYyLTIxMDMtNzg5My1iMGQxLTUzZjM5MWEzZmY3ZCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');
            cy.get('#i0116').type("apptest@julyservices.com")//typing username 
            cy.get("#idSIButton9").click(); //next btn
            cy.wait(2000)
            cy.get("#i0118").type("Four-rail-basic-escape2@"); //typing password
            cy.get("#idSIButton9").click(); //next btn
            cy.get("#idBtn_Back").click(); //no btn
      
              });
           
          //after login
          cy.get('.dp-chevron-right').click(); //login btn
          cy.get("div.flex-none i").click(); //main menu btn
          cy.get("li:nth-of-type(5) > a").click(); //transaction btn
          cy.get("app-transaction-list > div > div.flex > p-button > button").click(); //add transaction btn
          cy.get("li:nth-of-type(3) span").click(); //divident btn
          cy.wait(3000)
          cy.get("div.flex-order-0 > div:nth-of-type(1) input").click(); // select plan
          cy.get("tr:nth-of-type(3) > td.text-center span").click();
          cy.get("div.flex-order-1 input").click(); //select participant
          cy.get("app-search-panel > div button").click();
   
           
          });
         })

        
         