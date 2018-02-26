<template>
  <div v-swiper:mySwiper="swiperOption">
    <ul class="swiper-wrapper">
      <li class="swiper-slide" v-for="banner in slider" :key="banner.image">
        <img :src="banner.image">
      </li>
    </ul>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
  export default {
    props: ['slider'],
    data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 0,
          effect: 'slide',
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            waitForTransition: true,
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            slideChange() {
              //console.log('onSlideChangeEnd', this);
            },
            tap() {
              //console.log('onTap', this);
            }
          }
        }
      }
    }
  }
</script>