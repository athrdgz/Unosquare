module.exports = {
    '@disabled': false,
    'Demo test google 1' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .end();
    }
}