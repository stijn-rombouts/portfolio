<template>
  <q-page :class="[$q.screen.gt.xs ? 'q-pa-xl' : 'q-pa-md', 'about-page-bg']">
    <div class="container cv-view-container q-pa-lg">
      <div class="cv-header row items-center justify-between full-width q-mb-lg">
        <h1 :class="$q.screen.gt.xs ? 'text-h3' : 'text-h5'" class="text-weight-bold q-ma-none text-slate-800">CV</h1>
        <q-btn outline no-caps color="secondary" label="Download PDF" icon="download" href="/CV_stijnrombouts.pdf"
          target="_blank" download="CV_Stijn_Rombouts.pdf" class="q-px-md" />
      </div>

      <div class="pdf-wrapper shadow-2">
        <iframe src="/CV_stijnrombouts.pdf#toolbar=0" class="pdf-iframe" title="Stijn Rombouts CV"></iframe>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Page logic for CV viewing
</script>

<style lang="scss" scoped>
.cv-view-container {
  width: 100%;
  height: calc(100vh - 150px);
  max-height: 1100px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid var(--card-border);
  background-color: var(--card-bg);
}

.cv-header {
  flex: 0 0 auto;
}

.pdf-wrapper {
  position: relative;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0; // Crucial for flex child to be able to shrink/not overflow
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-color);
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.hover-scale {
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

// Mobile adjustments
@media (max-width: 600px) {
  .cv-page-fixed {
    padding: 12px;
  }

  .cv-view-container {
    padding: 16px !important;
    max-height: 95vh;
  }
}
</style>
