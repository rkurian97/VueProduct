<template>
  <div class="list">
      <b-list-group class="productList mt-4">
          <b-list-group-item v-for="(item, i) in items" :key="i" v-on:click="setProduct(item[i])">
                {{item.name}}
          </b-list-group-item>
      </b-list-group>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'List',
    data(){
        return{
            items: []
        }
    },
    created(){
        axios
            .get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl')
            .then(response => {
                console.log(response)
                response.data.forEach(element =>{
                    const itemObject={};
                    itemObject["name"]= element.name;
                    itemObject["brand"]= element.brand;
                    itemObject["product_type"]= element.product_type;
                    itemObject["price"]= element.price;
                    itemObject["rating"]= element.rating;
                    itemObject["image_link"]= element.image_link;
                    itemObject["description"]= element.description;
                    itemObject["product_colors"]= [];
                    element.product_colors.forEach(element=> {
                        itemObject.product_colors.push(element);
                    });
                    this.items.push(itemObject);
                });

            })
            .catch(err => console.log(err))
    },
    methods: {
        ...mapActions(['setProduct'])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .productList{
        max-width: 50%;
    }
</style>