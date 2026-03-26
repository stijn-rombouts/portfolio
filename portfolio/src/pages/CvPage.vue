<template>
  <q-page :class="['flex', 'flex-center', 'cv-page-bg']" class="cv-page-fixed">
    <div class="cv-view-container shadow-24 q-pa-lg">
      <div class="cv-header row items-center justify-between full-width q-mb-lg">
        <h1 :class="$q.screen.gt.xs ? 'text-h3' : 'text-h5'" class="text-weight-bold q-ma-none text-slate-800">CV</h1>
        <q-btn outline no-caps color="secondary" label="Download PDF" icon="download" href="/CV_stijnrombouts.pdf"
          target="_blank" download="CV_Stijn_Rombouts.pdf" class="q-px-md" />
      </div>

      <div class="pdf-wrapper">
        <iframe src="/CV_stijnrombouts.pdf#toolbar=0" class="pdf-iframe" title="Stijn Rombouts CV">
          <div class="flex flex-center q-pa-xl text-center">
            <q-icon name="picture_as_pdf" size="100px" color="grey-4" />
            <p class="text-h6 q-mt-md">It seems your browser doesn't support PDF embedding.</p>
            <q-btn flat color="primary" label="Download PDF instead" href="/CV_stijnrombouts.pdf" />
          </div>
        </iframe>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Page logic for CV viewing
</script>

<style lang="scss" scoped>
.cv-page-fixed {
  height: calc(100vh - 50px); // Basic estimate, Quasar handles min-height
  overflow: hidden;
  padding: 24px;
}

.cv-view-container {
  max-width: 1000px;
  width: 100%;
  height: 100%;
  max-height: 90vh;
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
