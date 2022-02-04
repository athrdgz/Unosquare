module.exports = {
    '@disabled': false,
    'Nightwatch test to pass' : function(browser) {

        browser.windowMaximize()
        var nightwatch = browser.page.landingpage();

        nightwatch
        .navigate()
        .waitForElementVisible('body')
        
        .click('@aboutMenu')
        .assert.titleEquals('About | Nightwatch.js')
        .isEnabled('css selector', '@btnContributor')
        .assert.urlEquals('https://nightwatchjs.org/about/')
        .assert.visible('#team')

        .pause("1500")
    }
}