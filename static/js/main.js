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
        }),

        uxButton: Ractive.extend({
            template: function (data) {
                return {
                        'a': '#uxA',
                        'button': '#uxButton',
                        'input': '#uxInput'
                    }[data.type] || '#uxButton';
            },
            data: {
                classD: 'btn'
            }
        }),

        uxInput: Ractive.extend({
            template: '#uxInput'
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