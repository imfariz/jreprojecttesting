<template>
    <div class="catalogue__details p-3">
        <div class="catalogue__details__product d-flex flex-column flex-lg-row p-md-5">
            <div class="catalogue__details__image me-lg-4 mt-4 mt-md-0">
                <img src="../../assets/images/Catalogue1.png" alt="catalogue1">
            </div>
            <div class="catalogue__details__description text-start p-4 pt-md-3 mt-4 mt-md-0">
                <div class="product_label">
                    <p class="product_title mb-2">Product Name:</p>
                    <p class="product_description">Cangkir Mauttie</p>                    
                </div>
                <div class="product_label">
                    <p class="product_title mb-2">Product Type:</p>
                    <p class="product_description">Cangkir Mauttie</p>
                </div>
                <div class="product_label">                    
                    <p class="product_title mb-2">Product Material:</p>
                    <p class="product_description">Cangkir Mauttie</p>
                </div>
                <div class="product_label">                    
                    <p class="product_description mb-2">Description:</p>
                    <p class="product_long_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga a ipsum dignissimos quam facilis beatae possimus quod minima! Reiciendis, velit!</p>
                </div>
            </div>
        </div>   
    </div>
</template>

<style>
.catalogue__details {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: center;
}
.catalogue__details__description {
    overflow: hidden;
}
.product_label {
    line-height: 1;
}
.product_title {
    font-weight: 600;
}
.product_description {
    font-weight: 700;
}
.product_long_description{
    font-weight: 400;
}
.catalogue__details__product {
    background-color: #fff;
    position: relative;
    width: 45rem;
    border-radius: 25px;
}
.catalogue__details__product img {
    /* height: 30rem; */
    max-height: 30rem;
    border-radius: 25px;
}</style>