<template>
  <SlideView key="start">
    <section>
      <div class="desc">
        <h1>Weg von hier</h1>
        <img class="svg" src="img/undraw_map_1r69.svg" />
        <p>Finde den billigsten Zug weg von hier!</p>
      </div>
      <div class="content">
        <div class="toolbar">
          <div class="btn" v-on:click="nextSite">
            Weiter
          </div>
        </div>
      </div>
    </section>
  </SlideView>
</template>

<script>
import SlideView from '../elements/View'

export default {
  data () {
    return {
    }
  },
  components: {
    SlideView
  },
  computed: {
  },
  methods: {
    nextSite () {
      this.$router.push('/location')
    }
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="less">
</style>
