<script setup>
import { useCountStore } from '@/store/CountStore.js';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const CountStore = useCountStore();

CountStore.getApi();

let api_data = computed((state) => CountStore.getApiData);

console.log(CountStore.getApiData);
function AddPiniaCount() {
  // CountStore.$patch({
  //   count: CountStore.count + 1,
  // });

  CountStore.increment();
}

defineProps({
  msg: String,
});

const str = ref('test');
</script>
<template>
  <h1>{{ str }}</h1>
  <h2>{{ msg }}</h2>
  <button type="button" @click="AddPiniaCount">add pinia</button>
  <h3>{{ CountStore.count }}</h3>
  <ul>
    <li v-for="item in api_data">{{ item['站名'] }}</li>
  </ul>
</template>
