// Import main css
import '~/assets/style/index.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import ResumeLayout from '~/layouts/ResumeLayout.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  router.options.linkActiveClass = 'is-active';
  Vue.use(Vuetify);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('ResumeLayout', ResumeLayout);
  head.script.push({src: '/hotjar.js'});
}

