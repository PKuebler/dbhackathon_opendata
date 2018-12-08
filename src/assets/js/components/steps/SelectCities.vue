<template>
  <SlideView key="cities">
    <section>
      <div class="desc">
        <h1>Städte ausschließen</h1>
        <img class="svg" src="img/undraw_post_online_dkuk.svg">
        <p class="hide-mobile">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
      </div>
      <div class="content">
        <div class="select-cities">
          <div
            class="select-cities-entry"
            v-for="(city, key) in cities"
            v-on:click="toggle(key)"
            v-bind:key="key">
            <div class="material-icons">{{ getIcon(key) }}</div>
            <div class="label">{{ city }}</div>
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
    }
  },
  components: {
    SlideView
  },
  computed: {
    ...mapState(['cities', 'select'])
  },
  methods: {
    toggle (key) {
      this.$store.commit('TOGGLE_SELECT', key)
    },
    getIcon (key) {
      return (this.select.selected.indexOf(key) > -1) ? 'check' : 'close'
    },
    nextSite () {
      this.$router.push('/checkout')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.select-cities-entry {
  padding: 10px;
  background: #fff;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  margin: 5px;
  line-height: 20px;
  cursor: pointer;

  .material-icons {
    line-height: 20px;
    float: left;
    padding-right: 10px;
  }

  .label {
    display: inline-block;
  }
}
</style>
