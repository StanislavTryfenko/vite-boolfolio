<script>
export default {
    name: "Header",
    data() {
        return {
            darkMode: 'dark'
        }
    },
    methods: {
        darkModeSwitch() {
            if(this.darkMode === 'dark') {
                this.darkMode = 'light'
            } else {
                this.darkMode = 'dark'
            }
        }
    }
}
</script>

<template>

    <header class="w-6/12 fixed top-16 left-1/4 p-4 flex items-center justify-evenly gap-4  bg-black  rounded-full border-2 border-gray-400 z-10">

        <h1 class="text-3xl text-white">Logo</h1>

        <nav class="flex gap-4">
            <a href="#home" class="text-white">Home</a>
            <a href="#about" class="text-white">About</a>
            <a href="#skills" class="text-white">Skills</a>
            <a href="#projects" class="text-white">Projects</a>
            <a href="#contact" class="text-white">Contact</a>
        </nav>

        <!-- dark mode with icons switch -->
        <button class="text-white" @click="darkModeSwitch()">
            <i  class="fa-solid fa-moon h-4 w-4" :class="this.darkMode === 'dark' ? 'hidden' : 'block'"></i>
            <i class="fa-solid fa-sun h-4 w-4" :class="this.darkMode === 'dark' ? 'block' : 'hidden'"></i>
        </button>

    </header>

</template>

<style>
a{color: white;}
</style>
