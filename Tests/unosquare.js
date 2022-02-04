module.exports = {
    '@disabled': true,
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
        .assert.not.visible('xxxx')
        .url('https://www.google.com')
        .assert.not.visible('.non_existing')
        .url('https://www.amazon.com')
        .end();
    },

    'Demo test unosquare 3' : function(browser) {
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
    },

    'Demo test unosquare 5' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
        .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
        .waitForElementVisible("li a[href = '/Services']")
        .assert.containsText("li a[href = '/Services']", "SERVICES"); //This is case Sensitive
        browser.end();
    },

    'Demo test unosquare 6' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
        .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
        .waitForElementVisible("li a[href = '/Services']")
        .assert.containsText("li a[href = '/Services']", "SERVICES")
        .assert.cssProperty("li a[href = '/About']", 'display', 'block')
        .assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px');
        browser.end();
    },
      
    'Demo test unosquare Pull Request' : function(browser) {
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')

        // assert[.not].visible()
        .assert.visible('.card.h-100')
        .assert.not.visible("li a[href = '/Industries/LifeSciences']")

        // assert[.not].title() 
        //DEPRECATED: the assertion .title() has been deprecated and will be removed from future versions. 
        //Using assert.titleEquals()
        .assert.titleEquals("Digital Transformation Services | Agile Staffing Solutions | Unosquare")
        .assert.not.titleEquals("Nightwatch.js")

        //assert[.not].urlContains()        
        .assert.urlContains('unosquare.com/')
        .assert.not.urlContains('/ContactUs')

        //assert[.not].urlEquals()
        .assert.urlEquals('https://www.unosquare.com/')
        .assert.not.urlEquals('Nightwatch.js')
    },
    
     
};