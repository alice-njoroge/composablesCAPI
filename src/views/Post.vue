<template>
  <div v-if="post && user">
    <button type="button" class="border-2 px-2 py-1" @click="$router.back()">Back</button>

    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup async>

import {useRoute} from 'vue-router'
import useResource from "../composables/useResource";

const {params} = useRoute();
const id = params.id
//posts
const {item: post, fetchOne: fetchPost} = useResource('posts');
await fetchPost(id);

//users
const {item: user, fetchOne: fetchUser} = useResource('users')
fetchUser(post.value.userId)

</script>
