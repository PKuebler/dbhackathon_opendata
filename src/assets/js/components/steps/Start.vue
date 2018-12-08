<template>
  <section>
    <div class="desc">
      <h1>Weg von hier</h1>
      <img class="svg" src="img/undraw_map_1r69.svg" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </div>
    <div class="content">
      <div class="toolbar">
        <div class="btn" v-on:click="nextSite">
          Weiter
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    nextSite () {
      this.$emit('change_site')
      this.$store.commit('SELECT_SITE', 'start_location')
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
