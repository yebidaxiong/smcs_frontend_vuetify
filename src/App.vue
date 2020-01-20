<template>
    <v-app id="app">
        <MainLayout></MainLayout>
    </v-app>
</template>

<script>
    import MainLayout from "./view/MainLayout";
    export default {
        name: 'app',
        components: {
            MainLayout,
        }
    }
</script>

<style>
    #app {
        font-family: 幼圆;
    }
</style>
