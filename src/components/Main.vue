<script>
import { state } from '../assets/state.js'
import ProjectCard from './ProjectCard.vue'


export default {
    name: "Main",
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
        }
    },
}
</script>

<template>

    <main>

        <ProjectCard />

    </main>

</template>

<style></style>