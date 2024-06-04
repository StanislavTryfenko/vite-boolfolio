<script>
import { state } from '../../assets/state.js'

export default {
    name: "MainProjects",
    data() {
        return {
            state,
        }
    }
}
</script>

<template>
    
    <router-view id="projects" class="pt-40 min-h-screen">
    </router-view>

</template>