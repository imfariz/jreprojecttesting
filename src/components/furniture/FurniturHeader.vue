<template>
    <div class="container-fluid bg-light-orange-furnitur hero-banner py-5 d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col text-center">
                    <h1 class="headline__hero-banner">Explore The Beauty of Recycle Furniture</h1>
                    <p class="bodycopy__hero-banner my-5">Build your dream furniture with JRE Furniture. Find our best quality furniture here</p>
                    <button class="btn-furnitur btn-furnitur__hero-banner" @click="$emit('linkedToMedia')">
                        <i class="bi bi-whatsapp me-1"></i> Contact Us
                    </button>
                </div>
                <div class="col my-5 my-md-0 d-none d-md-block">
                    <img src="../../assets/images/PhotoBannerFurnitur.png" alt="JRE Media Image Banner">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-banner {
    height: 90vh;
}

.headline__hero-banner {
    font-weight: 500;
    font-size: 4em;
}

.bodycopy__hero-banner {
    font-size: 1.3em;
    color: #949494;
}
</style>