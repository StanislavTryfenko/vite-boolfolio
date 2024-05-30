<script>
import { state } from '../assets/state.js'
import axios from 'axios'

export default {
    name: "ProjectCard",

    data() {
        return {
            state,
        }
    },
    methods: {
        getProjects() {
        const url = "http://127.0.0.1:8000";
        const route = "/api/projects"
        axios.get(url + route)
            .then((response) => {
                const result = response.data.projects.data;
                state.projects = result;
                console.log(state.projects)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    },
    mounted() {
        this.getProjects()
    },
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4 g-3" v-for="project in state.projects">
                <div class="card h-100">
                    <div class="card-header">
                        {{ project.name }}
                    </div>
                    <div class="card-body">
                        <img class="img-fluid" :src="project.image" alt="">
                        <p>{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>