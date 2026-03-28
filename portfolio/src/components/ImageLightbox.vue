<template>
  <div class="image-lightbox-wrapper cursor-pointer" @click="isOpen = true">
    <!-- Thumbnail/Inline Image -->
    <q-img :src="src" :alt="alt" :ratio="ratio" class="rounded-borders hover-zoom shadow-2" v-bind="$attrs">
      <template v-slot:loading>
        <q-spinner-oval color="primary" />
      </template>
    </q-img>

    <!-- Dialog for Full-size Image -->
    <q-dialog v-model="isOpen" full-width full-height class="lightbox-dialog" transition-show="scale" transition-hide="scale">
      <q-card class="bg-dark-opaque no-shadow no-border flex flex-center full-width full-height relative-position overflow-hidden" @click="isOpen = false">
        <!-- Close Button -->
        <q-btn icon="close" flat round dense color="white" class="absolute-top-right q-ma-lg z-max close-btn shadow-5"
          @click="isOpen = false" />
        
        <!-- Large Image -->
        <div class="full-width full-height flex flex-center q-pa-md">
          <q-img :src="src" :alt="alt" fit="contain" class="full-width full-height rounded-borders box-shadow-xl" 
            style="max-width: 95vw; max-height: 90vh;" @click.stop />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  src: string;
  alt?: string;
  ratio?: string | number;
}>();

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.hover-zoom {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
  }
}

.bg-dark-opaque {
  background: rgba(15, 23, 42, 0.9) !important;
  backdrop-filter: blur(8px);
}

.close-btn {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff !important;
  }
}

.box-shadow-xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

// Ensure the dialog inner padding is removed for full-screen feel
:deep(.q-dialog__inner--minimized) {
  padding: 0;
}
</style>
