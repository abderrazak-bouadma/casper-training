var casper = require('casper').create({
	loadPlugins:false,
	viewportSize:{width:1200,height: 800}
});

casper.start('http://www.cinemur.fr/', function() {    
    this.sendKeys('#search_input', 'epic')
    this.click('.submit_input');
    this.test.assertSelectorHasText('cinemur test','#notifActionMenu', 'résultats');
});

casper.run(function() {
    this.test.done(1); // checks that 5 assertions have been executed
    this.test.renderResults(true);
});