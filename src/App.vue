<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Topbar from './components/Topbar.vue'
import MediaHeader from './components/media/MediaHeader.vue'
import MainContent from './components/media/MainContent.vue';
import Bottom from './components/Bottom.vue';
import FurniturHeader from './components/furniture/FurniturHeader.vue';
import CatalogueContent from './components/furniture/CatalogueContent.vue';
import BengkelHeader from './components/bengkel/BengkelHeader.vue';
import BengkelContent from './components/bengkel/BengkelContent.vue';
import Testimoni from './components/Testimoni.vue';
</script>

<template>
  <Topbar :navbarBackground="backgroundMedia" />
  <header>
    <MediaHeader @linkedToMedia="anchorToMedia" />
    <!-- <FurniturHeader @linkedToMedia="anchorToMedia" /> -->
    <!-- <BengkelHeader @linkedToMedia="anchorToMedia" /> -->
  </header>
  <main>
      <MainContent @linkedToMedia="anchorToMedia" />
      <!-- <CatalogueContent /> -->
      <!-- <BengkelContent @linkedToMedia="anchorToMedia" /> -->
      <Testimoni />
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
      backgroundMedia: '#FDF6FC',
      backgroundFurnitur: '#EEE3DF',
      backgroundBengkel: '#FFF',
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

.bg-dark-blue-bengkel {
  background-color: #211D52;
}

.bg-light-orange-furnitur {
  background-color: #EEE3DF;
}

.btn {
    width: 200px;
    height: 50px;
    border-radius: 32px;
}

.btn-furnitur {
  width: 200px;
  height: 50px;
  border-radius: 0;
  border: 0;
}

.btn-furnitur__hero-banner {
  color: #fff;
  font-weight: 600;
  background-color: #FA9671;
}

.btn-bengkel {
  color: #fff;
  font-weight: 600;
  background-color: #211D52;
}

.btn-bengkel:hover {
  color: #ed9d1c;
}

.btn-bengkel__hero-banner {
  color: #fff;
  font-weight: 600;
  background-color: #ED1C23;
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
