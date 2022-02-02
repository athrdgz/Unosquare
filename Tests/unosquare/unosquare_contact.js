module.exports = {
    '@disabled': false,
    'Demo test unosquareS 1' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')

      .click("#navbarSupportedContent ul li a[href = '/ContactUs']")
      .end();
    }
}