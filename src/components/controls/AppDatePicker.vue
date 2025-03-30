<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ja } from 'date-fns/locale'

const { format = 'yyyy/MM/dd', teleport = true } = defineProps<{
  format?: string
  teleport?: boolean
}>()

const date = defineModel<string>('date')
</script>

<template>
  <VueDatePicker
    v-model="date"
    :format-locale="ja"
    :format="format"
    :model-type="format"
    :text-input="{ format }"
    :auto-apply="true"
    :enable-time-picker="false"
    :teleport="teleport"
  >
  </VueDatePicker>
</template>
