<template>
  <SlideView key="checkout">
    <section>
      <div class="desc">
        <h1>Bestätigung</h1>
        <img class="svg" src="img/undraw_confirmation_2uy0.svg">
        <div class="details">Reise am {{ select.date.day }}.{{ select.date.month }}.</div>
      </div>
      <div class="content">
        <p>Vor 8 Uhr:</p>
        <div class="details">Hamburg 15,-</div>

        <p>Mittags:</p>
        <div class="details">München 15,-</div>

        <p>Nach 16 Uhr:</p>
        <div class="details">Köln 15,-</div>
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
    ...mapState(['select'])
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.details {
  background: #353535;
  color: #ffffff;
  font-weight: 700;
  padding: 12px 10px;
  margin: 20px 20px 30px;
  font-size: 14px;
  border-radius: 3px;
}

p {
  padding: 10px 20px 0px;
}
</style>
