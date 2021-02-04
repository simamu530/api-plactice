<template>
  <div class="home">
    <input type="text" v-model="box">
    <button @click="$router.push({ postnumber: 'Home' })" class="cp_btn">button</button>
    <!-- pushの中がどういう意味かわかってません｜APIを利用うするうえで必要なものだとおもっていた -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["number"], //propsもどういう仕組かまだ理解できてないです｜今回使うファイルはAPP.vueとhome.vueと、main.jsの3つであってるか　appが親でhomeが子供だとおもっていて基本使うものだとおもっていた
  data() {
    return {
      box: "",
    };
  },
  async created() {
    const item = await axios.get(
      `https://apis.postcode-jp.com/api/v4/postcodes/1000001 \
  -G -v \
  -d "kGyZ1L8sV96yHk6TCm2TNpBYxiaGTzi7PBNoXmZ" ` 
    ); //apiのアドレス？がどのクエリを使うのか、どれを使うかをどうやって見極めるかがわかりません
    const numberData = item.data　//constの先からどう記入していいのかわからないです
    console.log();
  }
}

methods: {

}
</script>
