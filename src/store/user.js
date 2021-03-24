import { reactive } from 'vue'

const userInitialState = {
  currentUser: {}
}

// eslint-disable-next-line import/no-mutable-exports
let state = reactive(userInitialState)

export default state

export function resetUserStore () {
  state = reactive(userInitialState)
}

export function cleanCurrentUser () {
  state.currentUser = {}
}

export function setCurrentUser (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
