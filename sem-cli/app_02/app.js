const app = {

    data () {
        return{
         
            name: 'Davs',
            lastName: 'Santos',

            products: [

                {
                    title: 'Shape Element',
                    description: 'Madeira: Maple',
                    image: './img/element.jpeg', 
                    stars: 5,
                },

                {
                    title: 'Shape Santa Cruz',
                    description: 'Madeira: Marfin',
                    image: './img/santaCruz.jpeg', 
                    stars: 0,
    
                },
                
                {
                    title: 'Shape Primitive',
                    description: 'Madeira: Maple',
                    image: './img/primitive.jpeg', 
                    stars: 3,
                }

            ],

            cart:[], 

            styles: {
                                
                backgroundColor:  '#3d3b3b' ,
                color: '#fff',
            },
            
            themeBlack: true
        }

    },

    computed:{

        fullName (){

            return this.name + ' ' + this.lastName 
        }

    },

    methods:{

        addCart(product){
            this.cart.push(product)
        },

        inCart(product){
            return this.cart.indexOf(product) != -1 
        },

        removeCart(product){
            this.cart =  this.cart.filter((prodc , index) => product != prodc)
        },

        toogleTheme(){
            this.themeBlack = !this.themeBlack

            if(this.themeBlack){
                this.styles.backgroundColor = '#3d3b3b'
                this.styles.color = '#fff'
            }else{
                this.styles.backgroundColor = ' #e9e9e9 '
                this.styles.color = '#000'
            }
        }


    }

}
// const productDetail = {

//     template: '<p>Sou um componente  {{example}} - product Detail</p>',
//     data () {
//         return {
//             example: 123,
//         }
//     },
// }

//parte de outra aula

Vue.createApp(app).mount('#app') 