<template>
  <SlideView key="date">
    <section ref="view">
      <div class="desc">
        <h1>Startdatum wählen</h1>
        <img class="svg" src="img/undraw_schedule_pnbk.svg">
        <p class="hide-mobile">Wann willst du los? Schiebe die Regler hoch oder runter.</p>
      </div>
      <div class="content">
        <div class="currentDate">
          <div>{{ day }}</div>
          <div>.</div>
          <div>{{ month }}</div>
          <div>.</div>
        </div>
        <div class="slider-wrapper">
          <vue-slider
            ref="slider-day"
            class="slider-day"
            v-bind="slider.day"
            v-model="day">
          </vue-slider>
          <vue-slider
            ref="slider-month"
            class="slider-month"
            v-bind="slider.month"
            v-model="month">
          </vue-slider>
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
import vueSlider from 'vue-slider-component'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      day: 1,
      month: 12,
      slider: {
        day: {
          min: 1,
          max: 31,
          direction: 'vertical',
          height: '300px',
          'tooltip-dir': 'right',
          tooltipStyle: {
            padding: '10px'
          }
        },
        month: {
          min: 1,
          max: 12,
          direction: 'vertical',
          height: '300px',
          'tooltip-dir': 'left',
          tooltipStyle: {
            padding: '10px'
          }
        }
      }
    }
  },
  components: {
    vueSlider,
    SlideView
  },
  computed: {
    ...mapState(['select'])
  },
  methods: {
    nextSite () {
      this.$store.commit('SET_DATE', {
        day: this.day,
        month: this.month
      })
      this.$router.push('/price')
    }
  },
  mounted () {
    this.day = this.select.date.day
    this.month = this.select.date.month
  }
}
</script>

<style lang="less" scoped>
section {
  text-align: center;

  .currentDate {
    padding: 60px 0 30px;
    div {
      font-family: 'Work Sans', sans-serif;
      font-weight: 600;
      display: inline-block;
      font-size: 40px;
    }
  }

  .slider-wrapper {
    .slider-day {
      position: absolute;
      left: 5px;
      top: 30%;

      @media (min-width: 600px) {
        top: 30px;
      }
    }
    .slider-month {
      position: absolute;
      right: 15px;
      top: 30%;

      @media (min-width: 600px) {
        top: 30px;
        right: 48%;
      }
    }
  }
}
</style>
