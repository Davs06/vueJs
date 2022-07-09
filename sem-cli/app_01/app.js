const app = {

    data () {
        return{
         
            name: 'Davs',
            lastName: 'Santos',
            product:{
                title: 'Shape Element',
                description: 'maple',
                image: './img/element.jpeg', 
                stars: 5,
            },

            product2:{
                title: 'Shape Santa Cruz',
                description: 'marfin',
                image: './img/santaCruz.jpeg', 
                stars: 0,

            },

            product3:{
                title: 'Shape Primitive',
                description: 'maple',
                image: './img/primitive.jpeg', 
                stars: 3,
            },
            
        }
    }

}

Vue.createApp(app).mount('#app') 