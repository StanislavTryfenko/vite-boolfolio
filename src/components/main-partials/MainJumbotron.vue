<script>

export default {
    name: "MainJumbotron",
    data() {
        return {
            
        }
    }
}
</script>

<template>

    <section id="home" class="text-gray-600 body-font pt-32">
        <div class="container w-4/6 mx-auto flex px-5 py-24 md:flex-row flex-col ">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 mt-16">
                <div class="title-font sm:text-4xl text-8xl mb-4 font-extrabold text-white">
                    <h1>Hi,</h1>
                    <h1>I'm <span class="text-green-400">Stanislav</span></h1>
                    <h1> placeholder</h1>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
            </div>
        </div>
    </section>

</template>