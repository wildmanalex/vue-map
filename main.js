var mainVm = new Vue({
    el: '#app',
    data : {
        dot: []

    },
    methods: {
        
        findlocation: function(event) {
            console.log(event.offsetX, event.offsetY);
            this.dot.push ({
                dotx: event.offsetX + 'px',
                doty: event.offsetY + 'px'
            })
        } 



    }
});