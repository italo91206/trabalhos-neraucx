<template>
  <div id="media_gallery" class="slider">
    <carousel :per-page="1" :navigate-to="0" :mouse-drag="false">
      <slide v-for="(i,index) in images" :key="index">
        <img :src="getImage(i)" alt="">
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
export default {
    name: 'Media',
    components: {
        Carousel,
        Slide
    },
    props:['images'],
    methods: {
        getImage(image) {
            if (image) {
                image = MagentoMediaUrl + image.file;
            }

            return image;
        }
    },
}
</script>
