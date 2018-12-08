<template>
  <SlideView key="checkout">
    <section>
      <div class="desc">
        <h1>Bestätigung</h1>
        <img class="svg" src="img/undraw_confirmation_2uy0.svg">
        <div class="details">
          Reise am {{ select.date.day }}.{{ select.date.month }}.<br />
          Personen: {{ select.persons }}<br />
          Von: {{ select.address }}
        </div>
      </div>
      <div class="content">
        <p>Vor 8 Uhr:</p>
        <div class="details button">
          {{ stations.before }} 19,00 &euro;
          <i class="material-icons">arrow_forward_ios</i>
        </div>

        <p>Nach 8 Uhr:</p>
        <div class="details button">
          {{ stations.after }} 24,00 &euro;
          <i class="material-icons">arrow_forward_ios</i>
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
    ...mapState(['select', 'cities']),
    stations() {
      const stations = this.shuffle(Object.keys(this.cities).filter((key) => {
        return this.select.selected.indexOf(key) > -1
      }));

      return {
        before: (stations.length > 0)?this.cities[stations[0]]:'',
        after: (stations.length > 1)?this.cities[stations[1]]:''
      }
    }
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
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
  position: relative;

  &.button {
    background: #ff0000;
    cursor: pointer;

    &:hover {
      background: #353535;
    }

    .material-icons {
      position: absolute;
      right: 10px;
      font-size: 16px;
    }
  }
}

p {
  padding: 10px 20px 0px;
}
</style>
