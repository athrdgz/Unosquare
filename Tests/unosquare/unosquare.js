module.exports = {
    '@disabled': false,
    'Unosquare test to pass 1' : function(browser) {
        browser.windowMaximize()
        var unosquare = browser.page.mainpage();

        unosquare
        .navigate()
        .waitForElementVisible('@contactUsMenu')
        .click('@contactUsMenu')
        browser.execute("var footerElements = document.querySelectorAll('#form');" +
                        'footerElements[0].scrollIntoView(true);')
        .assert.visible('#form')
        .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
        .assert.cssProperty(".no-list.hs-error-msgs.inputs-list li label", 'color', 'rgba(255, 0, 0, 1)')
        .pause("1500")
        browser.end();
    },

    'Unosquare test to fail' : function(browser) {
        browser.windowMaximize()
        var unosquare = browser.page.mainpage();

        unosquare
        .navigate()
        .waitForElementVisible('@ourDnaMenu')
        .click('@ourDnaMenu')

        browser.execute("var footerElements = document.querySelectorAll('#values');" +
                        'footerElements[0].scrollIntoView(true);')
        .assert.visible('#values')
        
        .assert.containsText(".d-block", "Meet your changing demand with ease.")
        .expect.element(".info.pt-3 img[src= '/assets/svgs/values.svg#talent']").to.have.attribute('alt').equals('Talent')

        browser.pause("1500")
        browser.end();
    },
    'Unosquare test to pass 2' : function(browser) {
        browser.windowMaximize()
        var unosquare = browser.page.mainpage();

        unosquare
        .navigate()
        .waitForElementVisible('@blogMenu')
        .click('@blogMenu')
        .assert.not.cssProperty("li a[href = 'https://blog.unosquare.com/']", 'color', 'black')
        .assert.titleEquals('Software Development Blog | Digital Transformation Blog')
        .assert.urlEquals('https://blog.unosquare.com/')

        .pause("1500")
        browser.end();
    },
}