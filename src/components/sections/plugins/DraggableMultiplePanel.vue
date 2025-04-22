<script setup lang="ts">
import { onMounted, ref } from 'vue'
import draggableComponent from 'vuedraggable'

import { generateFakes } from '@/helpers/fakeHelpers'

import type { FakeUser } from '@/types/fakes'

const users1 = ref<FakeUser[]>([])
const users2 = ref<FakeUser[]>([])
const users3 = ref<FakeUser[]>([])

onMounted(() => {
  users1.value = generateFakes('user', 5)
  users2.value = generateFakes('user', 5)
  users3.value = generateFakes('user', 5)
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 3" :key="i" cols="3">
        <div class="h-4">Group{{ i }}</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <draggableComponent
          v-model="users1"
          item-key="id"
          class="draggable-handle"
          ghost-class="draggable-ghost"
          animation="200"
          group="users"
        >
          <template #item="{ element }">
            <v-card :title="element.name" prepend-icon="mdi-account" class="mt-4 mb-4">
              <v-card-item>
                <p>都道府県: {{ element.state }}</p>
                <p>郵便番号: {{ element.zipCode ?? '' }}</p>
              </v-card-item>
            </v-card>
          </template>
        </draggableComponent>
      </v-col>
      <v-col cols="3">
        <draggableComponent
          v-model="users2"
          item-key="id"
          ghost-class="draggable-ghost"
          animation="200"
          group="users"
        >
          <template #item="{ element }">
            <v-card :title="element.name" prepend-icon="mdi-account" class="mt-4 mb-4">
              <v-card-item>
                <p>都道府県: {{ element.state }}</p>
                <p>郵便番号: {{ element.zipCode ?? '' }}</p>
              </v-card-item>
            </v-card>
          </template>
        </draggableComponent>
      </v-col>
      <v-col cols="3">
        <draggableComponent
          v-model="users3"
          item-key="id"
          ghost-class="draggable-ghost"
          animation="200"
          group="users"
        >
          <template #item="{ element }">
            <v-card :title="element.name" prepend-icon="mdi-account" class="mt-4 mb-4">
              <v-card-item>
                <p>都道府県: {{ element.state }}</p>
                <p>郵便番号: {{ element.zipCode ?? '' }}</p>
              </v-card-item>
            </v-card>
          </template>
        </draggableComponent>
      </v-col>
    </v-row>
  </v-container>
</template>
