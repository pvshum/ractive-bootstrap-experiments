/* global Ractive */
document.addEventListener('DOMContentLoaded', function () {

    var conponents = {
        uxRow: Ractive.extend({
            template: '#uxRow'
        }),
        uxCol: Ractive.extend({
            template: '#uxCol'
        }),
        uxContainer: Ractive.extend({
            template: '#uxContainer'
        })
    };

    var options = {
        el: 'main',
        template: '#template',
        data: {},
        components: conponents
    };

    var ractive = new Ractive(options);


    console.log(ractive);

});