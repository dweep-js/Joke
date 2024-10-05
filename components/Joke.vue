<template>
    <div class="joke-container">
        <p class="text-yellow-100 text-center">{{ joke }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            joke: "",
        };
    },
    methods: {
        async fetchJoke() {
            try {
                const response = await fetch("https://v2.jokeapi.dev/joke/Any");
                const data = await response.json();

                // Check if the joke is a single or two-part joke
                if (data.type === "single") {
                    this.joke = data.joke;
                } else {
                    this.joke = `${data.setup} - ${data.delivery}`;
                }
            } catch (error) {
                console.error("Error fetching joke:", error);
                this.joke = "Failed to fetch a joke. Please try again later.";
            }
        },
    },
    mounted() {
        this.fetchJoke(); // Fetch a joke when the component mounts
    },
};
</script>
