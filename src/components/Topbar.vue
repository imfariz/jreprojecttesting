<script setup>
defineProps({
    navbarBackground: String,
})
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light-media" :style="{'background-color': backgroundFurnitur}">
    <div class="container">
        <a class="navbar-brand fs-1" href="#">
            <img src="../assets/JREMEDIAlogo.svg" style="width:58px; height:42px">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse pt-2 ms-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" :class="{ active: current === 'Beranda' }"
                    @click="current = 'Beranda'">
                        JRE MEDIA
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" :class="{ active: current === 'Layanan' }"
                    @click="current = 'Layanan'">
                        JRE FURNITUR 
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" :class="{ active: current === 'Portofolio' }"
                    @click="current = 'Portofolio'">
                        JRE BENGKEL
                    </a>
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
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navbarBackground: '#EEE3DF',
  },
  data() {
    return {
      current: 'Beranda',
      backgroundFurnitur: this.navbarBackground,
    };
  },
  methods: {
    addClass() {
      this.isActive = true;
    },
  },
};
</script>

<style scoped>

.social-media li a {
    text-decoration: none;
    color: #949494;
}

.social-media li {
    list-style: none;
}

i {
    font-size: 2em;
}

i.bi-facebook:hover {
    color: #4267B2;
}

i.bi-linkedin:hover {
    color: #0072b1;
}

i.bi-instagram:hover {
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

.bg-light-red {
    background-color: #FFF9F9;
}
</style>