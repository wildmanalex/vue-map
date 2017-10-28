
var mainVm = new Vue({
    el: '#app',
    data : {
        flagArray: []
    },
    methods: {
        placeAFlag: function($event) {
            this.flagArray.push({
                pageX: event.offsetX + 'px',
                pageY: event.offsetY + 'px',
            })
        },
        removeFlag: function(flags, index, $event) {
            event.stopPropagation()
            this.flagArray.splice(index, 1)
        }
    }
});
