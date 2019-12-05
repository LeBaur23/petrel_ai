import Vue from 'vue'

import CardComponent from '~/components/CardComponent.vue'
import HeaderComponent from '~/components/HeaderComponent.vue'
import ShowsComponent from '~/components/ShowsComponent.vue'

const components = { CardComponent, HeaderComponent, ShowsComponent }


Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
