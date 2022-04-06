<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light-media">
    <div class="container">
        <a class="navbar-brand fs-1" href="#">
            <img src="../assets/JRE MEDIA logo.svg" style="width:58px; height:42px">
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
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String,
  },
  data() {
    return {
      current: 'Beranda',
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