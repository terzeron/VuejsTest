<template>
  <div id="book">
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
      <ul v-if="bookData">
        <li v-for="item in bookData" :key="item.title">{{ item.title }} by {{ item.author }}</li>
      </ul>
    </div>

    <button @click="run()">실행</button>

    <div class="memo" v-bind:class="{ active: isActive, 'text-danger': hasError }" v-bind:style="{ color: activeColor }">
      메모
    </div>

    <button @click="bookButtonClicked">책 불러오기</button>

    <div id="app">
      <total-counter></total-counter>
    </div>

    <button ref="saveFeedButton1" @click="saveFeedButtonClicked">Save Feed</button>
  </div>
</template>

<script>
import axios from 'axios';
import TotalCounter from './TotalCounter.vue';
import _ from 'lodash';

export default {
  name: 'Book',
  components: {
    TotalCounter,
  },
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
      isActive: true,
      hasError: false,
      activeColor: 'red',

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
    getBooks() {
      const url = this.getApiUrlPath() + "/books";
      axios.get(url)
          .then((res) => {
            if (!res.data.status) {
              this.errorMessage = res.data.message;
            } else {
              this.bookData = _.filter(res.data['books'], (o) => {
                return o['author'] !== '아서 클라크';
              }).map((o) => {
                o['date'] = new Date();
                return o;
              });
            }
          })
          .catch((error) => {
            this.errorMessage = error;
          })
    },
    bookButtonClicked() {
      return this.getBooks();
    },
    register(ref) {
      this.$refs[ref].status = true;
    },
    unregister(ref) {
      this.$refs[ref].status = false;
    },

    saveFeedButtonClicked: function() {
      this.$refs.saveFeedButton1.innerText = "Feed saved";
    }

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

</style>