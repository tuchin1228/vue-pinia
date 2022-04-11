import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  state: () => ({
    count: 1,
    api_data: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    async getApi() {
      let res = await fetch(
        'https://api.kcg.gov.tw/api/service/Get/e94fbcd3-b644-403b-8da2-d09dec39f67d'
      );
      let data = await res.json();
      console.log('getApi', data.data);
      this.api_data = [...data.data];
    },
  },
  getters: {
    getApiData: (state) => state.api_data,
  },
});
