<template>
  <SlideView key="location">
    <section>
      <div class="desc">
        <h1>Startpunkt</h1>
        <img class="svg" src="img/undraw_map_1r69.svg" />
        <p class="hide-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
      <div class="content">
        <h2>Aktuelle Position</h2>
        <p>
          <i class="material-icons">place</i> {{ coordinates.lat.toFixed(3) }} : {{ coordinates.lng.toFixed(3) }}
        </p>
        <p>
          <vue-bootstrap-typeahead
            :data="addresses"
            v-model="addressSearch"
            size="lg"
            :serializer="s => s.text"
            placeholder="Type an address..."
            @hit="selectedAddress = $event">
          </vue-bootstrap-typeahead>
        </p>
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

const API_URL = 'https://api-url-here.com?query=:query'

export default {
  data () {
    return {
      coordinates: { lat: 0, lng: 0 },
      addresses: [],
      addressSearch: '',
      selectedAddress: null
    }
  },
  components: {
    SlideView
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
      this.$router.push('/date')
    }
  },
  mounted () {
    this.$getLocation()
      .then(coordinates => {
        this.coordinates = coordinates
      });
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
