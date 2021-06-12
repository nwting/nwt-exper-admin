<template>
  <p>当前时间：{{ nowTime }}</p>
</template>

<script>
import { computed, ref, watch } from "vue";
import { formatDate } from "@/role/Menu";
export default {
  setup() {
    //const nowTime = ref("");
    //nowTime.value = Date().toLocaleString();
    const t0 = Date();
    const t2 = ref("");
    const t1 = setTimeout(() => {
      t2.value = Date();
      console.log(t2.value);
      console.log(t0 < t2.value);
    }, 1000);
    //console.log(nowTime.value);
    console.log(t0);
    console.log(t1);
    console.log(t2);

    return {};
  },
  // data() {
  //   return {
  //     nowTime: "",
  //   };
  // },
  // methods: {
  //   getTime() {
  //     setInterval(() => {
  //       //new Date() new一个data对象，当前日期和时间
  //       //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
  //       this.nowtime = new Date().toLocaleString();
  //     }, 1000);
  //   },
  // },
  // created() {
  //   this.getTime();
  // },
};
</script>
