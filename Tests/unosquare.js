module.exports = {
    'Demo test unosquare 1' : ''+ function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .end();
    },
    'Demo test unosquare 2' : ''+ function(browser) {
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

    'Demo test unosquare 3' : ''+ function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
        .end();
    },

    'Demo test unosquare 4' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
        .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
        .end();
      }
};