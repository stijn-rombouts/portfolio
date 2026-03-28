<template>
  <ProjectPageLayout name="Custom Multi-Zone Amplifier" icon="/projects/amplifier/overview.png"
    github="https://github.com/Core-i99/diy-muli-zone-amplifier"
    :technologies="['ESP32', 'ATTINY44', 'I2S Audio', 'SPI', 'I2C', 'Analog Electronics', 'CAD/CNC']">
    <template #default>
      <h2 class="text-h4 text-weight-bold q-mb-md">Project Overview</h2>
      <p class="text-h6 text-grey-8 leading-relaxed font-light q-mb-xl">
        This high-end audio project involves the design and construction of a custom multi-zone audio amplifier.
        Controlled by an ESP32, it features dedicated ATTINY-based controllers for each audio zone, a sophisticated
        audio input selection matrix, and a robust multi-rail power supply. The entire system is housed in a
        precision CNC-machined MDF enclosure designed using professional CAD software.
      </p>

      <div class="q-mb-xl">
        <q-btn href="/projects/amplifier/amplifier.pdf" target="_blank" color="primary" icon="picture_as_pdf"
          label="Download Full Documentation (PDF)" no-caps size="lg" rounded class="shadow-5" />
      </div>

      <div class="row q-col-gutter-xl q-mb-xl">
        <div class="col-12 col-md-6">
          <ImageLightbox src="/projects/amplifier/closed.png" alt="Complete MDF Enclosure (Front View)"
            class="rounded-borders" />
          <div class="text-caption text-center q-mt-sm">Complete MDF Enclosure (Front View)</div>
        </div>
        <div class="col-12 col-md-6">
          <ImageLightbox src="/projects/amplifier/back.png" alt="Enclosure (Back View) showing connectors"
            class="rounded-borders" />
          <div class="text-caption text-center q-mt-sm">Enclosure (Back View) showing connectors</div>
        </div>
      </div>

      <div class="system-architecture q-mb-xl">
        <h2 class="text-h4 text-weight-bold q-mb-md">Modular System Architecture</h2>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <q-card flat bordered class="module-card">
              <q-card-section>
                <div class="text-h6 text-weight-bold text-primary">Motherboard (Master)</div>
                <div class="text-body1 text-grey-8">
                  Centered around an <strong>ESP32 Dev Kit C</strong>, this module handles the high-level logic, user input
                  from
                  the main rotary encoder, and the <strong>ILI9488 SPI</strong> display. It manages digital-to-analog audio
                  conversion
                  via a <strong>PCM5102A I2S module</strong> and communicates with sub-modules through I2C.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="module-card">
              <q-card-section>
                <div class="text-h6 text-weight-bold text-secondary">Zone Controllers</div>
                <div class="text-body1 text-grey-8">
                  Each zone is controlled by an <strong>ATTINY44</strong> microcontroller. These modules manage localized
                  volume control using <strong>X9C103S digital potentiometers</strong> and use relays for speaker
                  management. They communicate with the motherboard via I2C using JST XH connectors.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="module-card">
              <q-card-section>
                <div class="text-h6 text-weight-bold text-accent">Audio Input Module</div>
                <div class="text-body1 text-grey-8">
                  A sophisticated module using the <strong>CD4052BE</strong> (4:1, 2-channel multiplexer) to select
                  between various audio sources (RCA or Digital I2S). It includes logic level shifters to bridge
                  3.3V logic to the 5V/9V requirements of the multiplexer.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="module-card">
              <q-card-section>
                <div class="text-h6 text-weight-bold text-warning">Power Management</div>
                <div class="text-body1 text-grey-8">
                  A custom power supply module utilizing an old car battery charger transformer. It provides multiple
                  voltage rails (+18V, +5V, +3.3V, +9V, and -9V) using <strong>LM2596 buck converters</strong> and a
                  dual-output buck-boost converter to handle both digital and analog power needs.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div class="design-section q-mb-xl q-pa-xl bg-blue-grey-1 rounded-borders relative-position">
        <h2 class="text-h4 text-weight-bold q-mb-md">Enclosure & CAD Design</h2>
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-5">
            <p class="text-body1 text-grey-9">
              The enclosure was meticulously designed in <strong>Autodesk Inventor</strong> to ensure a perfect fit
              for all components and connectors. The final design was then translated into instructions for a
              <strong>CNC machine</strong>, ensuring high-precision cuts and holes for the standard 43cm
              "Audio Rack" width.
            </p>
          </div>
          <div class="col-12 col-md-7">
            <ImageLightbox src="/projects/amplifier/topview.png" alt="Top-down design view in CAD"
              class="rounded-borders shadow-3" />
            <div class="text-caption text-center q-mt-sm">Top-down design view in CAD</div>
          </div>
        </div>
      </div>

      <div class="logic-diag-section q-mb-xl">
        <h2 class="text-h4 text-weight-bold q-mb-lg">System Block Diagram</h2>
        <div class="text-center">
          <ImageLightbox src="/projects/amplifier/drawio.png" alt="System Block Diagram" class="rounded-borders"
            style="max-width: 800px; width: 100%; margin: 0 auto;" />
          <div class="text-caption text-grey-7 q-mt-md">High-level architectural diagram detailing component interconnects.
          </div>
        </div>
      </div>

      <div class="gallery-section q-mt-xl">
        <h2 class="text-h4 text-weight-bold q-mb-lg">Project Gallery</h2>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240412110546.jpg" alt="Finished Project Photo 1"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192118.jpg" alt="Finished Project Photo 2"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192202.jpg" alt="Finished Project Photo 3"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192214.jpg" alt="Finished Project Photo 4"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192217.jpg" alt="Finished Project Photo 5"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192222.jpg" alt="Finished Project Photo 6"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192235.jpg" alt="Finished Project Photo 7"
              class="rounded-borders hover-scale shadow-2" />
          </div>
          <div class="col-12 col-sm-6 col-md-4">
            <ImageLightbox src="/projects/amplifier/real/IMG20240506192246.jpg" alt="Finished Project Photo 8"
              class="rounded-borders hover-scale shadow-2" />
          </div>
        </div>
      </div>
    </template>

  </ProjectPageLayout>
</template>

<script setup lang="ts">
import ProjectPageLayout from 'src/components/ProjectPageLayout.vue';
import ImageLightbox from 'src/components/ImageLightbox.vue';
</script>

<style lang="scss" scoped>
.leading-relaxed {
  line-height: 1.8;
}

.font-light {
  font-weight: 300;
}

.module-card {
  height: 100%;
  border-radius: 16px;
  transition: all 0.3s ease;
  background: var(--card-bg);
  border-color: var(--card-border);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
  }
}

.shadow-hover {
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15) !important;
  }
}

.hover-scale {
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
}

.design-section {
  border-right: 8px solid var(--q-primary);
}

.body--dark .bg-blue-grey-1 {
  background-color: rgba(69, 90, 100, 0.1) !important;
}

.bg-dark {
  background-color: #1a1a1a !important;
}

.transition-all {
  transition: all 0.3s ease;
}
</style>
