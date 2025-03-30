<script setup lang="ts">
import { ref } from 'vue'

import TheWrapper from '@/components/TheWrapper.vue'
import AppDatePicker from '@/components/controls/AppDatePicker.vue'
import AppDateTimePicker from '@/components/controls/AppDateTimePicker.vue'
import AppTimePicker from '@/components/controls/AppTimePicker.vue'
import AppDateRangePicker from '@/components/controls/AppDateRangePicker.vue'

const date = ref<string>('')
const datetime = ref<string>('')
const time = ref<string>('')
const dateRange = ref<string[]>([])
</script>

<template>
  <TheWrapper>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-card title="日付選択">
            <v-card-item>
              <AppDatePicker v-model="date" />
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-card title="日付時刻選択">
            <v-card-item>
              <AppDateTimePicker v-model="datetime" />
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-card title="時刻選択">
            <v-card-item>
              <AppTimePicker v-model="time" />
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-card title="日付範囲選択">
            <v-card-item>
              <AppDateRangePicker v-model="dateRange" />
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </TheWrapper>
</template>
