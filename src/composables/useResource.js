import {ref} from "vue";

export default function useResource(resource) {

    const baseURL = 'https://jsonplaceholder.typicode.com';
    const item = ref(null);
    const items = ref([]);

    const fetchOne = async (id) => {
        const response = await fetch(`${baseURL}/${resource}/${id}`)
        item.value = await response.json();
    }

    const fetchAll = async () => {
        const response = await fetch(`${baseURL}/${resource}`)
        items.value = await response.json();
    }

    return {
        item,
        items,
        fetchOne,
        fetchAll
    }

}