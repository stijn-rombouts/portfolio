<template>
  <q-page class="q-pa-xl flex flex-center cv-page-bg">
    <div class="cv-view-container shadow-24 q-pa-lg">
      <div class="row items-center justify-between q-mb-lg">
        <div>
          <div class="text-overline text-primary q-mb-xs">Curriculum Vitae</div>
          <h1 class="text-h3 text-weight-bold q-mb-none text-slate-800">Professional Profile</h1>
        </div>
        <q-btn
          color="primary"
          icon="download"
          label="Download PDF"
          href="/CV.pdf"
          target="_blank"
          download="CV_Stijn_Rombouts.pdf"
          unelevated
          class="q-px-lg rounded-borders hover-scale"
        />
      </div>

      <div class="pdf-wrapper">
        <iframe
          src="/CV.pdf#toolbar=0"
          class="pdf-iframe"
          title="Stijn Rombouts CV"
        >
          <div class="flex flex-center q-pa-xl text-center">
            <q-icon name="picture_as_pdf" size="100px" color="grey-4" />
            <p class="text-h6 q-mt-md">It seems your browser doesn't support PDF embedding.</p>
            <q-btn flat color="primary" label="Download PDF instead" href="/CV.pdf" />
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
.cv-page-bg {
  background-color: var(--bg-color);
}

.cv-view-container {
  max-width: 1000px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--card-border);
  background-color: var(--card-bg);
}

.pdf-wrapper {
  position: relative;
  width: 100%;
  height: 75vh;
  min-height: 600px;
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
  .cv-view-container {
    padding: 16px;
  }
  
  .pdf-wrapper {
    height: 60vh;
  }
}
</style>
