import {ref} from "vue";


export default function useUser (){
    const user = ref(null)
    const fetchOne = async (id) =>{
       const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
       user.value = await response.json()
    }

    return{
        user,
        fetchOne
    }
}