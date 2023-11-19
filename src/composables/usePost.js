import {ref} from "vue";

export default function usePost() {

    const posts = ref([]);
    const post = ref(null);
    const baseURL = 'https://jsonplaceholder.typicode.com/posts'
    const fetchAll = async () => {
        const response = await fetch(`${baseURL}`);
        posts.value = await response.json()
    }
    const fetchOne = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        post.value = await response.json()
    }

    return {
        fetchAll,
        fetchOne,
        posts,
        post
    }

}