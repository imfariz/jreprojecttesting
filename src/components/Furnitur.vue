<script setup>
import Header from './furniture/FurniturHeader.vue'
import Content from './furniture/CatalogueContent.vue'
import Popup from './furniture/DetailsPopup.vue'
</script>

<template>
<header>
    <Header @linkedToMedia="$emit('linkedToMedia')" />
</header>
<main>
    <Content @linkedToMedia="$emit('linkedToMedia')" />
    <Popup class="d-none" />
</main>
</template>