<script>
import { state } from '../assets/state.js'
import MainJumbotron from './main-partials/MainJumbotron.vue';
import MainAbout from './main-partials/MainAbout.vue';
import MainSkills from './main-partials/MainSkills.vue';
import MainProjects from './main-partials/MainProjects.vue';
import MainContact from './main-partials/MainContact.vue';



export default {
    name: "Main",
    components: {
        MainJumbotron,
        MainAbout,
        MainSkills,
        MainProjects,
        MainContact,
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
        <MainJumbotron />
        <MainAbout />
        <MainSkills />
        <MainProjects />
        <MainContact />
    </main>

</template>

<style></style>