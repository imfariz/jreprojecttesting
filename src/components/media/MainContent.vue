<template>
        <section class="what container-fluid bg-light-blue-media d-flex align-items-center">
            <div class="container py-5 text-center text-md-start">
                <p class="content__title">Who JRE MEDIA?</p>
                <h2 class="content__bodytext fs-2 pb-5 pt-3">JRE MEDIA is Jogja Kreasi Media, creative agency based in Yogyakarta, Indonesia. We’re focusing on digital marketing, social media management, web development, photography, and other.</h2>
                <button class="btn btn__hero-banner">
                    Contact Us
                </button>
            </div>
        </section>
        <section class="services container-fluid">
            <div class="container py-5 text-center text-md-start">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <p class="content__title">What we do?</p>
                        <h2 class="content__bodytext fs-2 pb-5 pt-3">
                            We helps <br> to personalizing <br> your brands 
                        </h2>
                        <button class="btn btn__content-secondary">
                            Contact Us
                        </button>
                    </div>
                    <div class="col-md-8">
                        <div class="row p-5 p-md-0">
                            <div class="col-12 col-md-3 card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/socialmediamanagement.jpg" alt="https://unsplash.com/photos/Ebb8fe-NZtM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Social Media Management</h5>
                                    <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p>
                                </div>
                            </div>                            
                            <div class="col-12 col-md-3 card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/reels&tiktok.jpg" alt="https://unsplash.com/photos/ZmY7AG1l0Eo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Reels & TikTok</h5>
                                    <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p>
                                </div>
                            </div>                            
                            <div class="col-12 col-md-3 card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/creativedesign.jpg" alt="https://unsplash.com/photos/yapBRdPWxik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Creative Design</h5>
                                    <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p>
                                </div>
                            </div>                            
                            <div class="col-12 col-md-3 card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/webdevelopment.jpg" alt="https://unsplash.com/photos/eYpcLDXHVb0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Web Development</h5>
                                    <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p>
                                </div>
                            </div>                            
                            <div class="col-12 col-md-3 card">
                                <div class="content__card-Header">
                                    <img src="../../assets/images/photography&video.jpg" alt="https://unsplash.com/photos/aS4Duj2j7r4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
                                </div>
                                <div class="content__card-Body p-4">
                                    <h5 class="content__card-body-title">Photography & Video</h5>
                                    <p class="content__card-body-description mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio quo omnis facere perferendis hic odio ad magni! Molestias, sequi.</p>
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
                <h2 class="content__bodytext w-md-75 fs-2 py-4">We develop your <br> brand with passions</h2> 
                <button class="btn btn__content-secondary">
                    Contact Us
                </button>
                <div class="row g-5 pt-5">
                    <div class="content__portofolio d-flex flex-column align-items-center col-md-4" v-for="porto in porto" :key="porto">
                        <img :src="porto.imagePath"
                        alt="Portofolio Image">
                        <div class="content__portofolio-description text-white text-center">
                            <h5 class="lh-base">{{ porto.client }}</h5>
                            <p class="fs-6">{{ porto.Category }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonial container-fluid">
            <div class="container py-5 text-center text-md-start">
                <p class="content__title">What they said?</p>
                <h2 class="content__bodytext w-md-75 fs-2 pb-3 pt-3">Our Client</h2>
                <div class="row px-5">
                    <div class="col bg-light-blue-media p-3">
                        <div class="row p-5 content__testimonial ">
                            <div class="col-md-2">
                                <img class="content__avatar d-none d-md-block" src="../../assets/images/testimonial-avatar.png" alt="Client Avatar">
                            </div>
                            <div class="content__testimonial__testimoni col-md-10">
                                <p class="content__title content__testimonial-desciption">“{{ testimoni[testimoni_current_position].testimonial }}”</p>
                                <p class="content__title content__testimonial-name pt-3">{{ testimoni[testimoni_current_position].name }}</p>
                            </div>
                        </div>  
                        <div class="content__button">
                            <button @click="previous_button()">
                                <img src="../../assets/L-Arrow.svg">
                            </button>
                            <button @click="next_button()">
                                <img src="../../assets/R-Arrow.svg">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>


export default {
name: 'Portofolio',
methods: {
    previous_button() {
        this.testimoni_current_position = (this.testimoni_current_position === 0) ? 0 : this.testimoni_current_position-1
    },
    next_button() {
        this.testimoni_current_position = (this.testimoni_current_position === this.testimoni.length) ? this.testimoni.length : this.testimoni_current_position+1
    }
},
data() {
    return {
    porto: [{
        imagePath: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
        client: 'XBRAND',
        Category: 'Desain Ilustrasi TShirt',
    }, {
        imagePath: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
        client: 'PT XASDDAS',
        Category: 'Website Development',
    }, {
        imagePath: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80',
        client: 'PT XASDDAS',
        Category: 'Website Development',
    }, {
        imagePath: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        client: 'PT XASDDAS',
        Category: 'Website Development',
    }, {
        imagePath: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        client: 'PT XASDDAS',
        Category: 'Website Development',
    }, {
        imagePath: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        client: 'PT XASDDAS',
        Category: 'Website Development',
    }],
    testimoni: [{
        name: 'Andra, Product Manager Of Backbone',
        avatar: '../../assets/images/testimonial-avatar.png',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus dui et, lacinia sem iaculis elementum arcu risus commodo. Aenean nec arcu luctus cras ut sed quam nec tincidunt. Eget non vulputate dui tellus. Porttitor ultrices ac aliquam nibh.',
    }, {
        name: 'Farhan, UI Designer Of Foreground',
        avatar: '../../assets/images/testimonial-avatar.png',
        testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum hic nesciunt voluptatum saepe at provident suscipit impedit temporibus quia.',
    }, {
        name: 'Alvin, Owner Of ABCloth',
        avatar: '../../assets/images/testimonial-avatar.png',
        testimonial: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi?',
    }],
    testimoni_current_position: 0,
    };
},
};
</script>

<style scoped>
.what {
    height: 80vh;
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
    height: 426px;
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

img.content__avatar {
    width: 130px;
    height: 130px;
}

img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s ease;
}
</style>