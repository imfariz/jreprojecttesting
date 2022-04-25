<script setup>
defineProps({
    navbarBackground: String,
})
</script>
<template>
    <section class="testimonial container-fluid d-none d-md-block">
            <div class="container py-5 text-center text-md-start">
                <p class="content__title">What they said?</p>
                <h2 class="content__bodytext w-md-75 fs-2 pb-3 pt-3">Our Client</h2>
                <div class="row px-5">
                    <div class="col p-3" :style="{'background-color':navbarBackground}">
                        <div class="row p-5 content__testimonial ">
                            <div class="col-md-2">
                                <img class="content__avatar d-none d-md-block" src="../assets/images/testimonial-avatar.png" alt="Client Avatar">
                            </div>
                            <div class="content__testimonial__testimoni col-md-10">
                                <p class="content__title content__testimonial-desciption">“{{ testimoni[testimoni_current_position].testimonial }}”</p>
                                <p class="content__title content__testimonial-name pt-3">{{ testimoni[testimoni_current_position].name }}</p>
                            </div>
                        </div>  
                        <div class="content__button">
                            <button @click="previous_button()">
                                <img src="../assets/L-Arrow.svg">
                            </button>
                            <button @click="next_button()">
                                <img src="../assets/R-Arrow.svg">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {
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