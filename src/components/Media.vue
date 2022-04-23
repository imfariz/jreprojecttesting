<script setup>
import Header from './media/MediaHeader.vue'
import Content from './media/MainContent.vue'
</script>

<template>
<header>
    <Header @linkedToMedia="$emit('linkedToMedia')" />
</header>
<main>
    <Content @linkedToMedia="$emit('linkedToMedia')" />
</main>
</template>