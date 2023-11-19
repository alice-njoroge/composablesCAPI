<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import usePost from "../composables/usePost";
import { useRoute } from 'vue-router'
import {onMounted} from "vue";

const {params} = useRoute();
const id = params.id

const {post, fetchOne} = usePost();

onMounted(()=>{
  fetchOne(id);
})


const user = {
  name: "Leanne Graham",
};
</script>
