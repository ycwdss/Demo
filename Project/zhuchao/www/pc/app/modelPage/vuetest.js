/**
 * Created by liu on 15-10-13.
 */
define(['jquery','vue'],function($,Vue){
    var demo = new Vue({
        el: '#demo',
        data: {
            title: 'todos',
            todos: [
                {
                    done: true,
                    content: 'Learn JavaScript'
                },
                {
                    done: false,
                    content: 'Learn Vue.js'
                }
            ]
        }
    })
})