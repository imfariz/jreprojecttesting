<template>
    <section class="what container-fluid d-flex align-items-center">
            <div class="container py-5 text-center text-md-start">
                <p class="content__title">Who JRE FURNITUR?</p>
                <h2 class="content__bodytext fs-1 pb-5 pt-3 lh-base">JRE Furniture is based in Yogyakarta, Indonesia. We’re focusing on recycled furniture product in indonesia. We are manufacturing of furniture using the former wood capable in creating eco-friendly of furniture business. </h2>
                <button class="btn btn-furnitur__hero-banner" @click="$emit('linkedToMedia')">
                    <i class="bi bi-whatsapp me-1"></i> Contact Us
                </button>
            </div>
    </section>
    <section class="container-fluid catalogue">
        <div class="container text-center py-5">
            <h5 class="catalogue__title mb-5">RECENT PRODUCTS</h5>
            <div class="row gy-5">
                <div class="catalogue__card col-md-3 col-6" v-for="catalogue in catalogues" :key="catalogue" >
                    <div class="image__card">
                        <img src="../../assets/images/Catalogue1.png" :alt="catalogue.name">
                    </div>
                    <p class="catalogue__name mt-3 text-start">{{ catalogue.name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            catalogues: [
                {
                    id: 1,
                    name: 'Cangkir Mauttie',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 2,
                    name: 'Bankyu Minimax',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 3,
                    name: 'Buku Sidu Edition',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 4,
                    name: 'Cangkir Mauttie',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 5,
                    name: 'Cangkir Mauttie',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 6,
                    name: 'Bankyu Minimax',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 7,
                    name: 'Buku Sidu Edition',
                    images : '../../assets/images/Catalogue1.png'
                },
                {
                    id: 8,
                    name: 'Cangkir Mauttie',
                    images : '../../assets/images/Catalogue1.png'
                },
            ]
        }
    },
}
</script>


<style scoped>
.what {
    height: 80vh;
    display: flex;
    justify-content: center;
}

.services img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s ease;
}

.content__card-Header {
    height: 150px;
    overflow: hidden;
}

.content__card-body-title {
    height: 2em;
    line-height: 1.3em;
}
.catalogue {
    font-family: 'Open Sans', sans-serif;
}
.catalogue__card:hover img {
    border: solid 2px #FA9671;
    transform: translateY(-1em);
}
.catalogue .catalogue__card {
    /* overflow: hidden; */
}
.catalogue .catalogue__name {
    font-weight: 600;
    font-size: 1.2em;
}
.catalogue .catalogue__card img{
    width: 100%;
    max-width: 287px;
    height: auto;
    border-radius: 25px;
}
</style>