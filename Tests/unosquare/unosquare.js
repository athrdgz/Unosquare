module.exports = {
    '@disabled': false,
    'Demo test unosquare 1' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .end();
    }
}