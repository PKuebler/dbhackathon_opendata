<template>
  <SlideView key="location">
    <section>
      <div class="desc">
        <h1>Startpunkt</h1>
        <img class="svg" src="img/undraw_map_1r69.svg" />
        <p class="hide-mobile">Es geht direkt von deiner Position aus los!</p>
      </div>
      <div class="content">
        <h2>Aktuelle Position</h2>
        <p>
          <i class="material-icons">place</i> {{ coordinates.lat.toFixed(3) }} : {{ coordinates.lng.toFixed(3) }}
        </p>
        <p>
          {{ address }}
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
import axios from 'axios';

export default {
  data () {
    return {
      coordinates: { lat: 0, lng: 0 },
      address: "",
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
        axios.get(`https://geocode.xyz/${coordinates.lat},${coordinates.lng}?geoit=json`)
          .then((response) => {
            // handle success
            this.address = response.data.staddress + ", " + response.data.region + ", " + response.data.country
            this.$store.commit('SET_ADDRESS', this.address)
          })
      });
  },
  destroyed () {
  }
}
</script>

<style lang="less">
</style>
