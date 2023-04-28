import { createStore } from 'vuex'

import Journal from '../modules/daybook/store/journal'

const store = createStore({
    modules:{
        Journal
    }
})

export default store