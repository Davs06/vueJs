const myApp = {

    data() {
        return {

            name: 'Davs',
            lastName: 'Santos',

            products: [

                {
                    title: 'Shape Element',
                    description: 'Madeira: Maple',
                    image: './img/element.jpeg',
                    stars: 4,
                },

                {
                    title: 'Shape Santa Cruz',
                    description: 'Madeira: Maple',
                    image: './img/santaCruz.jpeg',
                    stars: 5,

                },

                {
                    title: 'Shape Primitive',
                    description: 'Madeira: Marfin',
                    image: './img/primitive.jpeg',
                    stars: 3,
                }

            ],

            cart: [],

            styles: {

                backgroundColor: '#3d3b3b',
                color: '#fff',
            },

            themeBlack: true
        }

    },

    computed: {

        fullName() {

            return this.name + ' ' + this.lastName
        }

    },

    methods: {

        addCart(product) {
            this.cart.push(product)
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart(product) {
            this.cart = this.cart.filter((prodc, index) => product != prodc)
        },

        toogleTheme() {
            this.themeBlack = !this.themeBlack

            if (this.themeBlack) {
                this.styles.backgroundColor = '#3d3b3b'
                this.styles.color = '#fff'
            } else {
                this.styles.backgroundColor = ' #e9e9e9 '
                this.styles.color = '#000'
            }
        }


    }

}

const productDetail = {
    template: ` 
    <p>{{product.title}}</p>
    <img :src="product.image" :alt="product.title" style=" max-width: 100px; border-radius: 20%;">
    <strong v-if="product.stars > 0">{{product.stars}}</strong>
    <p>{{product.description}} </p>  
    
    <input type="button" value="Remove to cart" @click.prevent="removeCart(product)" v-if="inCart(product)" style="width: 100px; height: 30px;">
    <input type="button" value="Add to cart" v-on:click.prevent="addCart(product)" v-else="inCart(product)" style="width: 100px; height: 30px;">
    `,

props: ['product'],

    data() {
        return {
            exemple: 123,
        }
    },

    methods: {

        addCart(product) {
            this.cart.push(product)
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart(product) {
            this.cart = this.cart.filter((prodc, index) => product != prodc)
        },


    },
}

const app = Vue.createApp(myApp)

app.component('product-detail', productDetail)

app.mount('#app') 