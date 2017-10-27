var mainVm = new Vue({
    el: '#app',
    data : {
        dot: []

    },
    methods: {
        
        findlocation: function(event) {
            //console.log(event);
            this.dot.push ({
                dotx: event.offsetX + 'px',
                doty: event.offsetY +  'px'
            })
        },
        removemarker: function(dot, index, event) {
            event.stopPropagation()
            this.dot.splice(index, 1)
        }


    }
});



// var mainVM = new Vue({
//    el: "#app",
//    data: {
//        markers: [] //`<img class="marker" src="Micky_Mouse">`
//    },
//    methods: {
//        makeAMouse: function($event) {
//            //create marker at x and y
//            this.markers.push({
//                pageX: event.offsetX-10 + 'px',
//                pageY: event.offsetY-30 + 'px',
//            })
//            // return this.marker
//            // console.log($event)
//            // $event.pageX
//            // $event.page
//            // $event.bubbles: false
//        },
//        mouseTrap: function(mouse, index, event) {
//            event.stopPropagation()
//            this.markers.splice(index, 1)

//        }
//    }
// })