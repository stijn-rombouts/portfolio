<template>
  <q-page class="q-pa-xl projects-page-bg flex flex-center">
    <div class="text-center">
      <h1 class="text-h2 text-weight-bold gradient-text q-mb-md">Projects</h1>
      <p class="text-h5 text-grey-7 q-mb-xl">Coming Soon...</p>
      <q-icon name="construction" size="150px" color="primary" class="animate-bounce" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Future project data implementation
</script>

<style lang="scss">
.projects-page-bg {
  background-color: var(--bg-color);
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
}
</style>
