<script>
import { state } from '../../assets/state.js'
import { callApiProjects } from '../../assets/apiCalls.js'


export default {
    name: "AppProjects",

    data() {
        return {
            state,
            page: 1,
            loading: true,
        }
    },
    methods: {
        goTo(page) {
            this.page = page;
            let url = `${state.backend}projects?page=${this.page}`;
            callApiProjects(url);
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
                let url = `${state.backend}projects?page=${this.page}`;
                callApiProjects(url);
            }
        },

        nextPage() {
            if (this.page < this.state.projects.last_page) {
                this.page++;
                let url = `${state.backend}projects?page=${this.page}`;
                callApiProjects(url);
            }
        },
    },
    mounted() {
        callApiProjects(state.backend + "projects");
    },

}

</script>

<template>
    <div class="container px-5 py-24 mx-auto text-white body-font">
        <div class="flex flex-col">
            <div class="h-1 bg-black rounded overflow-hidden">
                <div :style="`width: ${state.projects.current_page / state.projects.last_page * 100}%`" class="h-full bg-white"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Some of my projects
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">I hope you enjoy my projects, theese are
                    the most revelant and important i've filtered for u</p>
            </div>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 sm:w-full md:w-1/2 lg:w-1/3 sm:mb-0 mb-6 " v-for="project in state.projects.data">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full hover:hidden"
                        :src="project.image">
                    <iframe class="object-cover object-center h-full w-full hidden hover:block"
                        :src="project.youtube"></iframe>
                </div>
                <h2 class="text-2xl font-bold title-font text-gray-400 mt-5">{{ project.name }}</h2>
                <p class="text-base leading-relaxed mt-2">{{ project.description }}</p>
                <a class="text-indigo-500 inline-flex items-center mt-3" :href="project.github">Github
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
                <router-link :to="{ name: 'project', params: { slug: project.slug } }" 
                class="text-indigo-500 inline-flex items-center mt-3">Details 
                    <i class="fas fa-arrow-right ml-2"></i>
                </router-link>
            </div>
        </div>

        <nav class=" flex justify-center mt-10 ">
            <ul class="flex items-center -space-x-px h-8 text-sm text-gray-500 bg-black">
                <li>
                    <button
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                        @click="prevPage" :disabled="page === 1">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                </li>
                <li v-for="page in state.projects.last_page">
                    <button
                        class="flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700-400"
                        :class="page === state.projects.current_page ? 'bg-gray-100 text-gray-700' : ''"
                        @click="goTo(page)">
                        {{ page }}
                    </button>
                </li>
                <li>
                    <button
                        class="flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                        @click="nextPage" :disabled="page === state.projects.last_page">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style></style>