<template>
    <v-card v-if="gallery">
        <div class="carousel-container">
        <el-carousel :interval="3000" :type="carouselType" height="300px">
            <el-carousel-item v-for="(slide, i) in gallery" :key="i">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="slide.file"
                    :alt="slide.description ? slide.description : ''"
                    :title="slide.description ? slide.description : ''"
                    class="slide-image">
            </el-card>
            </el-carousel-item>
        </el-carousel>
        </div>
    </v-card>  
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    carouselType () {
      return (this.$vuetify.breakpoint.mdAndUp ? 'card' : '')
    },
    ...mapState(['gallery'])
  },
  created () {
    const client = this.$route.params.clientID;
    this.$store.dispatch('LOAD_GALLERY', client)
  },
}
</script>
<style scoped>
.slide-image {
  height: 100%;
  width: 100%;
}
.carousel-container {
  padding: 15px;
}
</style>