module.exports = {
    'Demo test unosquare 1' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .end();
    },
    'Demo test unosquare 2' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .verify.visible('xxxx')
        .url('https://www.google.com')
        .assert.visible('.non_existing')
        .url('https://www.amazon.com')
        .end();
    },
};