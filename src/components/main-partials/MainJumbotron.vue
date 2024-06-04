<script>

export default {
    name: "MainJumbotron",
    data() {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['Web Developer', 'Gamer', 'Foodie', 'Dog Owner'],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus)
                    this.typeStatus = true;
                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            }
            else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if (this.typeArrayIndex >= this.typeArray.length)
                    this.typeArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
    mounted() {
    }
}

</script>

<template>
    <section id="jumbotron" class="text-gray-600 body-font pt-40 min-h-screen">
        <div class="container w-4/6 mx-auto flex px-5 md:flex-row flex-col ">
            <div class="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 mt-16">
                <div class="title-font sm:text-4xl text-8xl mb-4 font-extrabold text-white space-y-4">
                    <h1>Hi,</h1>
                    <h1>I'm <span class="text-green-400">Stanislav</span></h1>
                    <h1>
                        <span class="text-red-400">{{ typeValue }}</span>
                        <span class="animatedCorsor inline ml-2 w-2 text-white"
                            :class="{ 'animate-none': typeStatus }">&nbsp;</span>
                    </h1>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/400x600">
            </div>
        </div>
    </section>
</template>

<style scoped>
.animatedCorsor {
    animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
    49% {
        background-color: #fff;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}
</style>