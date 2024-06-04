<script>
import { state } from '../../assets/state.js'
export default {
    name: "ShowcaseProjects",

    data() {
        return {
            state
        }
    }
}
</script>

<template>

    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3" >
                <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">PROJECT
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">NAME</h1>
                    <p class="leading-relaxed mb-3">DESC</p>
                    <router-link :to="{ name: 'projects' }" class="inline-flex items-center">
                        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>