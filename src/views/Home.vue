<template>
  <div class="home">
    <input type="text" v-model="box">
    <button @click="$router.push({ postnumber: 'Home' })" class="cp_btn">button</button>
    <!-- pushの中がどういう意味かわかってません -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["number"], //propsもどういう仕組かまだ理解できてないです
  data() {
    return {
      box: "",
    };
  },
  async created() {
    const item = await axios.get(
      `https://https://apis.postcode-jp.com/api/v4/postcodekGyZ1L8sV96yHk6TCm2TNpBYxiaGTzi7PBNoXmZ` 
    ); //apiのアドレス？がどのクエリを使うのか、どれを使うかをどうやって見極めるかがわかりません
    const numberData = item.data　//constの先からどう記入していいのかわからないです
  }
}

methods: {

}
</script>
