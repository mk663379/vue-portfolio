<script setup lang="ts">
import icon from '@/assets/icon.jpg'
import TheNavigation from '@/components/TheNavigation.vue'

const drawer = defineModel<boolean>({ default: true })
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-4">
        <v-avatar size="64">
          <v-img :src="icon"></v-img>
        </v-avatar>
      </v-sheet>

      <v-divider class="mx-4"></v-divider>

      <TheNavigation />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Vue Portfolio</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
