<template>
  <section>
    <div class="desc">
      <h1>Startpunkt</h1>
      <img class="svg" src="img/undraw_map_1r69.svg" />
      <p class="hide-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </div>
    <div class="content">

      <vue-bootstrap-typeahead
        :data="addresses"
        v-model="addressSearch"
        size="lg"
        :serializer="s => s.text"
        placeholder="Type an address..."
        @hit="selectedAddress = $event">
      </vue-bootstrap-typeahead>
      <div class="toolbar">
        <div class="btn" v-on:click="nextSite">
          Weiter
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const API_URL = 'https://api-url-here.com?query=:query'

export default {
  data () {
    return {
      addresses: [],
      addressSearch: '',
      selectedAddress: null
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    async getAddresses(query) {
      const res = await fetch(API_URL.replace(':query', query))
      const suggestions = await res.json()
      this.addresses = suggestions.suggestions
    },
    nextSite () {
      this.$store.commit('SELECT_SITE', 'date')
    }
  },
  mounted () {
  },
  destroyed () {
  },
  watch: {
//    addressSearch: _.debounce(function(addr) { this.getAddresses(addr) }, 500)
  }
}
</script>

<style lang="less">
</style>
