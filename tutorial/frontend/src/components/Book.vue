<template>
  <div id="books">
    <p>title: {{ title }}</p>
    <p>number: {{ number }}</p>
    <p>book data: {{ bookData }}</p>

    <p>status: {{ status }}</p>
    <p>status message: {{ statusMessage }}</p>

    <p>error message: {{ errorMessage }}</p>

    <b-input-group class="mt-3">
      제목 입력:
      <b-form-input v-model="title"></b-form-input>
    </b-input-group>

    <div v-if="status">
      <h1>작품 목록</h1>
      <ul>
        <li v-for="item in bookData" :key="item.title">{{ item.title }} by {{ item.author }}</li>
      </ul>
    </div>

    <button @click="bookButtonClicked">책 불러오기</button>

    <button ref="saveFeedButton1" @click="saveFeedButtonClicked">Save</button>

    <total-counter></total-counter>
  </div>
</template>

<script>
import axios from 'axios';
import TotalCounter from './TotalCounter.vue';

export default {
  name: 'Book',
  data: function () {
    return {
      title: 'Books',
      number: 30,
      bookData: [
        {'author': '헤밍웨이', 'title': '노인과 바다'},
        {'author': '피츠제럴드', 'title': '위대한 개츠비'},
      ],
      status: true,
      errorMessage: '',
    }
  },
  computed: {
    statusMessage: function () {
      return '실행 ' + (this.status ? '중단' : '재개');
    }
  },
  watch: {
    title: function () {
      this.errorMessage = '제목 변경됨';
    }
  },
  methods: {
    getApiUrlPath: function () {
      let pathPrefix = 'https://api.mydomain.com/myapp';
      if (process.env.NODE_ENV === 'development') {
        pathPrefix = 'http://localhost:5000';
      }
      return pathPrefix;
    },
    bookButtonClicked() {
      return this.getBooks();
    },
    getBooks() {
      const url = this.getApiUrlPath() + "/books";
      axios.get(url)
          .then((res) => {
            if (!res.data.status) {
              this.errorMessage = res.data.message;
            } else {
              this.bookData = res.data['books'];
            }
          })
          .catch((error) => {
            this.errorMessage = error;
          })
    },
    saveFeedButtonClicked: function () {
      this.$refs.saveFeedButton1.innerText = "Saved";
    }
  },
  components: {
    TotalCounter
  },
  created: function () {
    console.log("component created");
  },
  mounted: function () {
    console.log("component mounted");
  },
}
</script>

<style scoped>
#books {
  border: black 1px solid;
}
</style>

