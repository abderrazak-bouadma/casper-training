//
// Scrapping  http://fr.wikipedia.org/wiki/Web_scraping

var casper = require('casper').create();
var links;

casper.start('http://fr.wikipedia.org/wiki/Web_scraping');

casper.then(function(response) {
	
	// entry point for the page DOM
	links = this.evaluate(function() {

		var nodes = document.querySelectorAll('a');

        return [].map.call(nodes, function(node) {
            return node.href;
        });

	});

	require('utils').dump(links);
});

// everything starts here
casper.run();