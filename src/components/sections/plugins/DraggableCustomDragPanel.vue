<script setup lang="ts">
import { onMounted, ref } from 'vue'
import draggableComponent from 'vuedraggable'

import { makeFakeUsers } from '@/helpers/fakeHelpers'

import type { FakeUser } from '@/types/fakes'

const users = ref<FakeUser[]>([])

onMounted(() => {
  users.value = makeFakeUsers(5)
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <div class="h-4">Group1</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <draggableComponent
          v-model="users"
          item-key="id"
          ghost-class="draggable-ghost"
          animation="200"
          handle=".draggable-handle"
        >
          <template #item="{ element }">
            <v-card class="mt-4 mb-4">
              <v-card-item :title="element.name">
                <template v-slot:prepend>
                  <v-icon icon="mdi-drag" class="draggable-handle" />
                </template>
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
