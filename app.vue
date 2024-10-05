<template>
    <div
        class="bg-black flex flex-col justify-center items-center h-screen"
        id="app"
    >
        <!-- Joke component displaying a random joke -->
        <Joke ref="jokeComponent" />

        <!-- Adding a line break for spacing -->
        <hr class="my-4 border-gray-300" />

        <!-- Button to fetch a new joke -->
        <button
            class="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
            @click="fetchNewJoke"
        >
            😭 Get a New Joke 😭
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue"; // Importing ref from Vue for reactive references

// Creating a reference to the Joke component
const jokeComponent = ref(null);

// Function to fetch a new joke from the Joke component
const fetchNewJoke = () => {
    // Check if the jokeComponent reference is not null
    if (jokeComponent.value) {
        jokeComponent.value.fetchJoke(); // Call the fetchJoke method from the Joke component
    }
};
</script>
