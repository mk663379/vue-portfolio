export const MODAL_IDS = {
  FEATURE_SIMPLE: 'featureSimple',
  FEATURE_SETTINGS: 'featureSettings',
} as const

export type ModalId = (typeof MODAL_IDS)[keyof typeof MODAL_IDS]
