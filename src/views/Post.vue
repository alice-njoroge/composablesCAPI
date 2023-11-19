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
import useUser from "../composables/useUser";

const {params} = useRoute();
const id = params.id

const {post, fetchOne} = usePost();
const {user, fetchOne: fetchUser} = useUser();

onMounted(()=>{
  fetchOne(id);
  fetchUser(id)
})

</script>
