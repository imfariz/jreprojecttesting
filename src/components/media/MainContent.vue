<template>
        <section class="what container-fluid bg-light-blue-media d-flex align-items-center">
            <div class="container py-5 text-center text-md-start">
                <p class="content__title">Who JRE MEDIA?</p>
                <h2 class="content__bodytext fs-2 pt-3">JRE MEDIA is Jogja Kreasi Media, creative agency based in Yogyakarta, Indonesia. We’re focusing on digital marketing, social media management, web development, photography, and other.</h2>
                <button class="btn btn__hero-banner mt-5" @click="$emit('linkedToMedia')">
                    <!-- <img src="../../assets/CTA-Arrow.svg" alt="CTA-Arrow" class="btn__arrow"> -->
                        <div class="btn__text">
                            <i class="bi bi-whatsapp">
                            </i>
                                <p class="d-inline ms-1">Contact Us</p>    
                        </div>
                </button>
            </div>
        </section>
        <section class="services container-fluid">
            <div class="container py-5 text-center text-md-start">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <p class="content__title">What we do?</p>
                        <h2 class="content__bodytext fs-2 pt-3">
                            We helps <br> to personalizing <br> your brands 
                        </h2>
                        <button class="btn btn__hero-banner mt-5" @click="$emit('linkedToMedia')">
                    <img src="../../assets/CTA-Arrow.svg" alt="CTA-Arrow" class="btn__arrow">
                        <div class="btn__text">
                            <i class="bi bi-whatsapp">
                            </i>
                                <p class="d-inline ms-1">Contact Us</p>    
                        </div>
                </button>
                    </div>
                    <div class="col-md-8">
                        <div class="row p-5 p-md-0 d-flex justify-content-center">
                            <div class="card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/SocialEngagement.jpg" alt="https://unsplash.com/photos/Ebb8fe-NZtM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Social Media Management</h5>
                                    <!-- <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p> -->
                                </div>
                            </div>                            
                            <div class="card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/reels&tiktok.jpg" alt="https://unsplash.com/photos/ZmY7AG1l0Eo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Reels & TikTok</h5>
                                    <!-- <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p> -->
                                </div>
                            </div>                            
                            <div class="card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/creativedesign.jpg" alt="https://unsplash.com/photos/yapBRdPWxik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Creative Design</h5>
                                    <!-- <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p> -->
                                </div>
                            </div>                            
                            <div class="card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/reels&tiktok.jpg" alt="https://unsplash.com/photos/eYpcLDXHVb0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Web Development</h5>
                                    <!-- <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p> -->
                                </div>
                            </div>                            
                            <div class="card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/reels&tiktok.jpg" alt="https://unsplash.com/photos/aS4Duj2j7r4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Photography & Video</h5>
                                    <!-- <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p> -->
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="portofolio container-fluid bg-light-media">
            <div class="container py-5 text-center text-md-start">
                <p class="content__title">What we've done?</p>
                <h2 class="content__bodytext w-md-75 fs-2 py-4">We Develop Your <br> Brand with Passions</h2> 
                <button class="btn btn__hero-banner mt-2" @click="$emit('linkedToMedia')">
                    <img src="../../assets/CTA-Arrow.svg" alt="CTA-Arrow" class="btn__arrow">
                        <div class="btn__text">
                            <i class="bi bi-whatsapp">
                            </i>
                                <p class="d-inline ms-1">Contact Us</p>    
                        </div>
                </button>
                <div class="row g-5 pt-5 mt-2">
                    <div class="content__portofolio d-flex flex-column align-items-center col-md-4" v-for="index in portofolioLimit" :key="index">
                        <img :src="portofolio[index].imagePath"
                        alt="Portofolio Image">
                        <div class="content__portofolio-description text-white text-center">
                            <h5 class="lh-base">{{ portofolio[index].client }}</h5>
                            <p class="fs-6 mt-3">{{ portofolio[index].Category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>


export default {
name: 'Media',
data() {
    return {
    portofolio: [
    {
        imagePath: './images/media/FGadaimu.jpg',
        client: 'GADAIMU',
        Category: 'Instagram Feed',
    }, 
    {
        imagePath: './images/media/FTuesday.jpg',
        client: 'Tuesday',
        Category: 'Instagram Feed',
    }, 
    {
        imagePath: './images/media/FNibbles.jpg',
        client: 'Nibbles',
        Category: 'Instagram Feed',
    }, 
    {
        imagePath: './images/media/FMarkshare.jpg',
        client: 'Markshare',
        Category: 'Instagram Feed',
    }, 
    {
        imagePath: './images/media/FJoghouse.jpg',
        client: 'Jogja House',
        Category: 'Instagram Feed',
    }, 
    {
        imagePath: './images/media/FPTSSE.jpg',
        client: 'PT SSE',
        Category: 'Instagram Feed',
    }, 
    {
        imagePath: './images/media/LCanB.jpg',
        client: 'Can B',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LDentalPlus.jpg',
        client: 'Dental Plus',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LJoghouse.jpg',
        client: 'Jogja House',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LKebunSehat.jpg',
        client: 'Kebun Sehat',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LNibbles.jpg',
        client: 'Nibbles',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LOmachi.jpg',
        client: 'Omachi',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LSeroja.jpg',
        client: 'Seroja',
        Category: 'Logo',
    }, 
    {
        imagePath: './images/media/LTokoTani.jpg',
        client: 'Toko Tani',
        Category: 'Logo',
    }, 
    ],
    portofolioLimit: 6,
    };
},
};
</script>

<style scoped>
.what {
    height: 80vh;
    display: flex;
    justify-content: center;
}

.content__title {
    font-weight: 700;
}

.content__bodytext {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5em;
}

.content__button {
    width: fit-content;
    margin-left: auto;
}

.content__testimonial {
    height: 300px;
}

.content__button button {
    background-color: transparent;
    width: 40px;
    border: none;
}

.card {
    width: 200px;
    height: 250px;
    margin: 10px;
    padding: 0;
}

.content__card-Header {
    height: 150px;
    overflow: hidden;
}

.content__card-body-title {
    height: 2em;
}


.content__portofolio {
    height: 300px;
    min-width: 300px;
    position: relative;
}

.content__portofolio:hover img{
    opacity: 0.3;
}

.content__portofolio:hover .content__portofolio-description{
    opacity: 1;
}

.content__portofolio-description {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.6);
}

.content__portofolio-description p {
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
}

.content__portofolio-description h5 {
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    top: 45%;
    left: 50%;
}
.btn__arrow {
    display: none;
}
/* Button CTA */
/* .btn {
position: relative;
width: 50px;
height: 50px;
border-radius: 32px;
display: flex;
align-items: center;
}
.btn__text {
position: absolute;
width: 200px;
transform: translateX(2em);
color: #000;
}
.btn__arrow {
    width: 50px;
    transform: translateX(1.6em);
}
.bi-whatsapp {
    display: none;
}
.btn:hover {
    width: 200px;
    height: 50px;
    justify-content: center;
    animation: widdingColor 1s;
    overflow: hidden;
}
.btn:hover .btn__text {
    transform: translateX(0em);
    color: #fff;
}
.btn__text:hover .btn__text {
    transform: translateX(0em);
    color: #fff;
}
.btn:hover .btn__arrow {
    animation: arrowRemoving 1s;
    opacity: 0;
}
.btn__text:hover .btn__arrow {
    animation: arrowRemoving 1s;
    opacity: 0;
} */

.btn:hover .bi-whatsapp {
    display: inline-block;
}
img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s ease;
}
/* Animation of CTA */
@keyframes widdingColor {
    from {width: 50px;}
    to {width: 200px;}
}

@keyframes arrowRemoving {
    0% {
        opacity: 1;
        transform: translateX(1.6em);
    }
    100% {
        transform: translateX(40em);
        opacity: 0;
    }
}
</style>