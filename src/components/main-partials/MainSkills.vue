<script>
import { state } from '../../assets/state.js'
import { callApiSkills } from '../../assets/apiCalls.js'

export default {
    name: "MainAbout",
    data() {
        return {
            state,
            loading: true,
        }
    },
    mounted() {
        callApiSkills(state.backend + "technologies");
    }
}
</script>

<template>

    <section id="skills" class="pt-40">

        <h1 class="text-white text-center mb-32 text-4xl font-extrabold">Skills</h1>

        <div class="w-10/12 mx-auto relative h-16 overflow-hidden text-white font-extrabold text-4xl max-w-screen-2xl"
            :style="`mask-image: linear-gradient(to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0) 100%);`">
            <div class="skillAnimation absolute" v-for="( skill, index ) in  state.skills"
                :style="`animation-delay: calc(30s / ${state.skills.length} * ${index} * -1);`">{{ skill.name }}</div>
        </div>
    </section>
</template>

<style scoped>
.skillAnimation {
    left: max(calc(200px * 9), 100%);
    animation-name: scrollLeft;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes scrollLeft {
    to {
        left: -200px;
    }
}
</style>