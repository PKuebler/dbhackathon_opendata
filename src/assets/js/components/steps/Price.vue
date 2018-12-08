<template>
  <section>
    <div class="desc">
      <h1>Wer?</h1>
      <img class="svg" src="img/undraw_group_selfie_ijc6.svg">
      <p class="hide-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </div>
    <div class="content">
      <h2>Max Preis p.P. wählen</h2>

      <vue-slider
        ref="slider-price"
        class="slider-price"
        v-bind="slider.price"
        v-model="price">
      </vue-slider>

      <h2>Personen</h2>

      <div class="select-persons">
        <div
          class="material-icons"
          v-for="n in 6"
          v-on:click="selectPersons(n)"
          v-bind:key="n">
          {{ getIcon(n) }}
        </div>
      </div>
      <div class="toolbar">
        <div class="btn" v-on:click="nextSite">
          Weiter
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vueSlider from 'vue-slider-component'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      price: 20,
      persons: 1,
      slider: {
        price: {
          min: 20,
          max: 200,
          width: '80%',
          formatter: '{value}€'
        }
      }
    }
  },
  components: {
    vueSlider
  },
  computed: {
    ...mapState(['select'])
  },
  methods: {
    getIcon (n) {
      return (n > this.persons) ? 'person_outline' : 'person'
    },
    selectPersons (n) {
      this.persons = n
    },
    nextSite () {
      this.$store.commit('SET_PERSONS', this.persons)
      this.$store.commit('SET_PRICE', this.price)
      this.$store.commit('SELECT_SITE', 'select_cities')
    }
  },
  mounted () {
    this.price = this.select.price
    this.persons = this.select.persons
  }
}
</script>

<style lang="less">
.slider-price {
  margin: 30px auto;
}
.select-persons {
  text-align: center;

  .material-icons {
    font-size: 30px;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
