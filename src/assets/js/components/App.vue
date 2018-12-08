<template>
  <div class="app" ref="viewport">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    ...mapState(['currentSite'])
  },
  methods: {
    scrollToTop () {
      this.$el.scrollTop = 0
    }
  },
  mounted () {
  },
  destroyed () {
  },
  watch: {
    $route (to, from){
      this.scrollToTop()
    },
  }
}
</script>

<style lang="less">
body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  background: #ebecf0;
}
h1 {
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  font-size: 20px;
}
h2 {
  background: #353535;
  color: #ffffff;
  font-weight: 700;
  padding: 12px 10px;
  margin: 20px 20px 30px;
  font-size: 14px;
  border-radius: 3px;
}
p {
  padding: 10px 30px 20px;
}
.toolbar {
  text-align: center;
  padding: 30px 0px 40px;
}
.btn {
  border-radius: 5px;
  background: #ff0000;
  color: #ffffff;
  display: inline-block;
  padding: 10px;
  cursor: pointer;
}
img.svg {
  width: 50%;
  display: block;
  margin: 20px auto;
}

.hide-mobile {
  display: none;
}

@media (min-width: 360px) {
  .app {
    width: 360px;
    margin: 0px auto;
    position: relative;
  }
}

@media (min-width: 600px) {
  body {
    background-color: #e12929;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ff0000' fill-opacity='0.42' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .app {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 600px;
    height: 400px;
    margin-left: -300px;
    margin-top: -250px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    overflow-y: auto;

    .view {
      background: linear-gradient(90deg, #ebecf0 55%, #ffffff 45%);
      min-height: 400px;

      section {
        position: relative;
      }

      .desc {
        width: 45%;
        float: right;
      }
      .content {
        width: 55%;
      }
    }
  }

  .hide-mobile {
    display: block;
  }
}

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
