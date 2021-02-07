<template>
  <div class="home">
    <input type="text" v-model="postCode">
    <button @click="getAdressPostCode" class="cp_btn">button</button>
    <p>{{ this.getCity }}</p>
    <p>{{ postCode }}</p>
    <!-- pushの中がどういう意味かわかってません｜APIを利用うするうえで必要なものだとおもっていた -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      postCode: "",
      getCity:"",
    };
  },
  methods: {
    async getAdressPostCode() {
      const item = await axios.get(
      `https://apis.postcode-jp.com/api/v4/postcodes/${this.postCode}`
    );
    const numberData = item.data;
    console.log(numberData);
    console.log(this.postCode);
    this.getCity = item.data[0].city;
    
    }
  },

};

</script>
