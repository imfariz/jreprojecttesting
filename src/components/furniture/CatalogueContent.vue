<template>
    <div class="container-fluid catalogue">
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
    </div>
    <!-- <div class="catalogue__details p-5">
        <div class="container">
            <div class="catalogue__details__product">
            </div>            
        </div>
    </div> -->
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
.catalogue {
    font-family: 'Open Sans', sans-serif;
}

.catalogue__details {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.catalogue__details__product {
    width: 1000px;
    height: 1000px;
    background-color: #fff;
}

.catalogue .catalogue__card {
    overflow: hidden;
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