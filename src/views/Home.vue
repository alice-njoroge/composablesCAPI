<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>
<script setup>
import useResource from "../composables/useResource";
import PostCard from "../components/PostCard.vue";
import {onMounted} from "vue";

const {items:posts, fetchAll: fetchPosts} = useResource('posts');

onMounted(()=>{
  fetchPosts();
})

</script>
