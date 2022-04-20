<template>
    <div class="container-fluid bg-dark-blue-bengkel hero-banner py-5 d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col text-center text-md-start">
                    <h1 class="headline__hero-banner">Welcome to <br> BENGKEL JRE</h1>
                    <p class="bodycopy__hero-banner my-4">Professional partner for manufactur, engineering, welding, and etc</p>
                    <button class="btn btn-bengkel__hero-banner mt-5" @click="$emit('linkedToMedia')">
                        <i class="bi bi-whatsapp me-1"></i> Contact Us
                    </button>
                </div>
                <div class="col my-5 my-md-0 d-none d-md-block">
                    <img src="../../assets/images/PhotoBannerBengkel.png" alt="JRE Bengkel Image Banner">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-banner {
    height: 90vh;
    color: #fff;
}

.headline__hero-banner {
    font-weight: 500;
    line-height: 1.5em;
    font-size: 4em;
}

.bodycopy__hero-banner {
    font-weight: 400;
    font-size: 1.3em;
}
</style>