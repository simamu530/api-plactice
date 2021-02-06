<template>
  <div class="home">
    <input type="text" v-model="postCode">
    <button @click="getAdressPostCode" class="cp_btn">button</button>
    <p>{{getCity}}</p>
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
  async created() {
    const item = await axios.get(
      `https://apis.postcode-jp.com/api/v4/postcodes/1000001`
    ); //apiのアドレス？がどのクエリを使うのか、どれを使うかをどうやって見極めるかがわかりません
    const numberData = item.data
    const postCode = item.city; //ここの三行追加してコンソールでまず中身が取り出せてるか確認したかったのですができてません。
    console.log(postCode);
    console.log(numberData);
  },
  methods: {
    async getAdressPostCode() {
      const item = await axios.get(
      `https://apis.postcode-jp.com/api/v4/postcodes/${this.postCode}`
    );
    const numberData = item.data;
    console.log(numberData);
    console.log(this.postCode);
    }
  },

}

</script>
