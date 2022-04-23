<script setup>
import Header from './bengkel/BengkelHeader.vue'
import Content from './bengkel/BengkelContent.vue'
</script>

<template>
<header>
    <Header @linkedToMedia="anchorToMedia" />
</header>
<main>
    <Content @linkedToMedia="anchorToMedia" />
</main>
</template>