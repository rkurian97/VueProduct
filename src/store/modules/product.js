const state={
    product:{
        name: null,
        brand: null,
        product_type: null,
        price: null,
        rating: null,
        image_link: null,
        description: null,
        product_colors: []
    }

}
const actions={
    setProduct({commit}, product){
        commit('setProduct', product)
    }
}

const mutations= {
    setPerson: (state, product)=> {
        state.product.name= product.name
        state.product.brand=product.brand
        state.product.product_type= product.product_type
        state.product.price= product.price
        state.product.rating= product.rating
        state.product.image_link=product.image_link
        state.product.description=product.description
        state.product.product_colors= product.product_colors
    }
}

const getters= {
    getProduct: (state) => state.product
}

export default {
    state,
    actions,
    mutations,
    getters
}