<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>
<script setup>
import usePost from "../composables/usePost";
import PostCard from "../components/PostCard.vue";
import {onMounted} from "vue";

const {posts, fetchAll} = usePost();

onMounted(()=>{
  fetchAll();
})

</script>
