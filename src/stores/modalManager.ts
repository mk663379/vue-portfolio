import { ref } from 'vue'
import { defineStore } from 'pinia'

import { MODAL_IDS, type ModalId } from '@/types/modalIds'

const getInitialState = (): Record<ModalId, boolean> =>
  Object.fromEntries(Object.entries(MODAL_IDS).map((id) => [id, false]))

export const useModalManagerStore = defineStore('modalManager', () => {
  const modals = ref(getInitialState())

  const show = (id: ModalId): void => {
    modals.value[id] = true
  }

  const hide = (id: ModalId): void => {
    modals.value[id] = false
  }

  return { modals, show, hide }
})
