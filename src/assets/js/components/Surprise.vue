<template>
  <div class="view-wrapper">
    <transition name="slide">
      <SlideView v-if="currentSite == 'start'" key="start">
        <Start></Start>
      </SlideView>
      <SlideView v-if="currentSite == 'start_location'" key="start_location">
        <StartLocation></StartLocation>
      </SlideView>
      <SlideView v-if="currentSite == 'date'" key="date">
        <Date></Date>
      </SlideView>
      <SlideView v-if="currentSite == 'price'" key="price">
        <Price></Price>
      </SlideView>
      <SlideView v-if="currentSite == 'select_cities'" key="select_cities">
        <SelectCities></SelectCities>
      </SlideView>
      <SlideView v-if="currentSite == 'checkout'" key="checkout">
        <Checkout></Checkout>
      </SlideView>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Start from './steps/Start'
import StartLocation from './steps/StartLocation'
import Date from './steps/Date'
import Price from './steps/Price'
import SelectCities from './steps/SelectCities'
import Checkout from './steps/Checkout'
import SlideView from './elements/View'

export default {
  data () {
    return {
    }
  },
  components: {
    SlideView,
    Start,
    StartLocation,
    Date,
    Price,
    SelectCities,
    Checkout
  },
  computed: {
    ...mapState(['currentSite'])
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less">
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
