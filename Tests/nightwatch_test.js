module.exports = {
    '@disabled': false,
    'Demo test nightwatchjs 1' : function(browser) {
        browser
        .windowMaximize()
        .url('https://nightwatchjs.org')
        .waitForElementVisible('body')

        .click("#navigation ul li a[href = '/api/']")         // "Getting Started" is not longer on the page, click on "API Reference"
        .waitForElementVisible('body')
        .assert.title("API Reference | Nightwatch.js")
        .click('[aria-label="Search"]')
        .assert.visible('.DocSearch-Form')
        .sendKeys('#docsearch-input', 'Asserts')
        .useXpath()
        .assert.elementPresent("//*[@id='docsearch-list']//child::li[1]")
        .click("//*[@id='docsearch-list']//child::li[1]")
        .useCss()
        .click("#navbartop ul li a[href = 'https://nightwatchjs.org/blog/']")
        .assert.urlContains('blog')
        .execute('var footerElements = document.getElementsByClassName("address");' +
          'footerElements[0].scrollIntoView(true);')
        .assert.visible('.address')
        .assert.containsText(".address", "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.")
        
        browser.pause(15000)
        .end();
    }
}