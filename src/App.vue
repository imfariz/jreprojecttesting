<script setup>
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
  <!-- <Topbar :navbarBackground="backgroundMedia" /> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light-media" :style="{'background-color': backgroundMedia}">
    <div class="container">
        <a class="navbar-brand fs-1" href="#">
            <img src="./assets/JREMEDIAlogo.svg" style="width:58px; height:42px">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse pt-2 ms-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" :class="{ active: current === 'Beranda' }"
                    @click="current = 'Beranda'">
                        JRE MEDIA
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/furnitur" :class="{ active: current === 'Layanan' }"
                    @click="current = 'Layanan'">
                        JRE FURNITUR 
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/bengkel" :class="{ active: current === 'Portofolio' }"
                    @click="current = 'Portofolio'">
                        JRE BENGKEL
                    </router-link>
                </li>
            </ul>
            <ul class="social-media mt-4 mt-md-0 d-flex justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="https://www.facebook.com/JREMediaIndonesia/">
                        <i class="bi bi-facebook"></i>
                        <!-- <span class="ms-1">Facebook</span> -->
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://id.linkedin.com/in/jre-media-042a58181">
                        <i class="bi bi-linkedin"></i>
                        <!-- <span class="ms-1">Linkedin</span> -->
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.instagram.com/jre.media/">
                        <i class="bi bi-instagram"></i>
                        <!-- <span class="ms-1">Instagram</span> -->
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  <header>
    <MediaHeader @linkedToMedia="anchorToMedia" />
    <!-- <FurniturHeader @linkedToMedia="anchorToMedia" /> -->
    <!-- <BengkelHeader @linkedToMedia="anchorToMedia" /> -->
  </header>
  <main>
      <!-- <MainContent @linkedToMedia="anchorToMedia" /> -->
      <router-view></router-view>
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

.social-media li a {
    text-decoration: none;
    color: #949494;
}

.social-media li {
    list-style: none;
}

.social-media i {
    font-size: 2em;
}

.social-media i.bi-facebook:hover {
    color: #4267B2;
}

.social-media i.bi-linkedin:hover {
    color: #0072b1;
}

.social-media i.bi-instagram:hover {
    color: #8a3ab9;
}

.bg-light-media {
    background-color: #FDF6FC;
}
.nav-item {
    font-weight: 500;
    margin-left: 1.5rem;
}

.active {
    font-weight: 700;
}
</style>
