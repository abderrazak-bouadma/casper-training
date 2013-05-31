
//
var casper = require('casper').create({
    pageSettings: {
        userAgent:'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36'
    }
});

var word = casper.cli.get(0);
console.log('word : ' + word);

casper.start('http://www.google.com');


casper.then(function(response) {
    this.sendKeys('input[name=q]','Casper');
});

casper.waitFor(function check() {
    return this.evaluate(function() {
        require('utils').dump('Got it');
        return document.querySelector('.gssb_e tbody') !== null;
    })
}, function then() {

    //this.echo(this.fetchText('.gstl_0'));

    // correction Nicolas
    var nodes = document.querySelectorAll('.gssb_e tbody');
    return [].map.call(nodes,function(node) {
            return node,textContent
        })
})

casper.run();