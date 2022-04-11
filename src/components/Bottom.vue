<template>
    <section class="close p-5 bg-light-blue-media mt-5">
        <div class="container text-center text-md-start">
            <img src="../assets/JREMEDIAlogo.svg" alt="JRE Media" style="width:58px; height:42px">
            <div class="footnote row mt-5 mt-md-1 g-5 ps-md-5 align-items-baseline">
                <div class="col-md-3 col-8">
                    <h5 class="fw-bolder mb-4">Another Service</h5>
                    <ul>
                        <li>JRE Media</li>
                        <li>JRE Furnitur</li>
                        <li>JRE Bengkel</li>
                    </ul>
                </div>
                <div class="sosmed col-md-4 col-12 my-5 my-md-0">
                    <h5 class="fw-bolder mb-4">SOSIAL MEDIA</h5>
                    <div class="icons text-center rounded-3 me-3">
                        <a href="https://www.facebook.com/JREMediaIndonesia/" target="_blank">
                            <Icon icon="icomoon-free:facebook" />
                        </a>
                    </div>
                    <div class="icons text-center rounded-3 me-3">
                        <a href="https://id.linkedin.com/in/jre-media-042a58181" target="_blank">
                            <Icon icon="cib:linkedin-in" />
                        </a>
                    </div>
                    <div class="icons text-center rounded-3" target="_blank">
                        <a href="https://www.instagram.com/jre.media/">
                            <Icon icon="lucide:instagram" />
                        </a>
                    </div>
                </div>
                <div class="col-md-5 col-12 ms-md-auto">
                    <h5 class="fw-bolder mb-4">TEMUKAN KAMI</h5>
                    <p>PT. Jogja Rekayasa Engineering</p>
                    <p>Jl. Menur No. 150, Maguwoharjo, Depok, Sleman DIY</p>
                    <p>(0274) 2802418</p>
                </div>
            </div>
        </div>
    </section>
    <footer class="py-2 mt-3">
        <p>
            Copyright @JRE Media 2019 <br>
            Reinterpretation Design based on
            <a href="https://media.jogjarekayasa.co.id/" target="_blank"
            class="fw-bold">
                JRE Media
            </a>
        </p>
    </footer>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'Closing',
  components: {
    Icon,
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}
a:hover {
    color: #fff;
}
.sosmed .icons {
    background-color: transparent;
    border: solid 1px black;
    width: fit-content;
    padding: 0 5px 0 5px;
    font-size: 30px;
    display: inline-block;
    transition: .5s ease;
    color: #000;
}
.sosmed .icons:hover {
    background-color: black;
    color: #fff;
    transform: translateY(-15px);
}

ul li {
    margin-top: 1em;
}

.footnote p {
    font-weight: 500;
}
footer a {
    text-decoration: none;
}
footer a:hover {
    color: darkgoldenrod;
}
</style>
