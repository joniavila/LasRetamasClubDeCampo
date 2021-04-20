import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        href: '#!',
      },
      {
        text: 'Informacion',
        href: '#about',
      },
      {
        text:'imagenes',
        href:'#feed'
      },
      {
        text: 'Mapa Interactivo',
        href: '/mapa'
      },
    ],
    dialogImagen: false
  },
  getters: {
    // categories: state => {
    //   const categories = []

    //   for (const article of state.articles) {
    //     if (
    //       !article.category ||
    //       categories.find(category => category.text === article.category)
    //     ) continue

    //     const text = article.category

    //     categories.push({
    //       text,
    //       href: '#!',
    //     })
    //   }

    //   return categories.sort().slice(0, 4)
    // },
    links: (state, getters) => {
      return state.items
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
  },
  actions: {

  },
})