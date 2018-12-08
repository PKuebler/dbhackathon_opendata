<template>
  <SlideView key="price">
    <section>
      <div class="desc">
        <h1>Mitfahrer</h1>
        <img class="svg" src="img/undraw_group_selfie_ijc6.svg">
        <p class="hide-mobile">Wer darf dich begleiten?</p>
      </div>
      <div class="content">
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
  </SlideView>
</template>

<script>
import SlideView from '../elements/View'
import { mapState } from 'vuex'

export default {
  data () {
    return {
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
    SlideView
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
      this.$router.push('/cities')
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
