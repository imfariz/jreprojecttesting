<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Topbar from './components/Topbar.vue'
import Header from './components/media/Header.vue'
import MainContent from './components/media/MainContent.vue';
import Bottom from './components/Bottom.vue';
</script>

<template>
  <Topbar />
  <header>
    <Header @linkedToMedia="anchorToMedia" />
  </header>
  <main>
      <MainContent @linkedToMedia="anchorToMedia" />
  </main>
  <footer>
    <Bottom/>
  </footer>
</template>

<script>
export default {
  name: 'application',
  data() {
    return {
      JreMedia: '081215750518',
    }
  },
  methods: {
    anchorToMedia() {
      window.open(`https://wa.me/`+ this.JreMedia);
    },
  },
};
</script>
<style>

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.bg-light-media {
    background-color: #FDF6FC;
}

.bg-light-blue-media {
  background-color: #DDF5FD;
}

.btn {
    width: 200px;
    height: 50px;
    border-radius: 32px;
}

.btn__hero-banner {
    color: #fff;
    font-weight: 600;
    background: linear-gradient(267.48deg, #6CA0E0 0.72%, #CF91C6 0.73%, #A55299 93.3%);
}

.btn__content-secondary {
  color: #fff;
  font-weight: 600;
  background: linear-gradient(267.48deg, #A55299 0.72%, #CF91C6 0.73%, #6CA0E0 93.3%);
}
</style>
