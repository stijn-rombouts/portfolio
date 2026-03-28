<template>
  <q-page class="q-pa-xl project-details-page">
    <div class="row q-col-gutter-xl container">
      <!-- Back Button -->
      <div class="col-12 q-mb-md">
        <slot name="back-button">
          <q-btn flat icon="arrow_back" label="Back to Projects" to="/projects" no-caps class="text-primary" />
        </slot>
      </div>

      <!-- Main Content Column -->
      <div class="col-12 col-md-8">
        <!-- Hero Section -->
        <slot name="hero">
          <div class="project-header q-mb-xl">
            <q-img :src="icon" class="project-hero-image" :ratio="16 / 9" />
            <h1 class="text-h2 text-weight-bold gradient-text q-mt-xl">{{ name }}</h1>
          </div>
        </slot>

        <!-- Content Area -->
        <div class="description-section q-mb-xl">
          <slot name="default">
            <!-- Normal description area -->
          </slot>
        </div>

        <!-- Custom Content Area (for additional sections) -->
        <div class="extra-content">
          <slot name="extra"></slot>
        </div>
      </div>

      <!-- Sticky Sidebar Column -->
      <div class="col-12 col-md-4">
        <div class="project-sidebar sticky-top">
          <slot name="sidebar">
            <q-card class="sidebar-card q-pa-md bordered shadow-sm">
              <q-card-section>
                <div class="text-h6 q-mb-md font-bold">Project Details</div>

                <div class="sidebar-info-item q-mb-lg">
                  <div class="text-subtitle2 text-grey-7 q-mb-xs">Repository</div>
                  <q-btn v-if="github" :href="github" target="_blank" outline color="primary" class="full-width q-py-sm"
                    icon="mdi-github" label="View on GitHub" icon-right="open_in_new" no-caps />
                  <span v-else class="text-grey-6 italic">Private Repository</span>
                </div>

                <div v-if="technologies && technologies.length" class="sidebar-info-item q-mb-lg">
                  <div class="text-subtitle2 text-grey-7 q-mb-xs">Technologies</div>
                  <div class="row q-gutter-xs">
                    <q-chip v-for="tech in technologies" :key="tech" color="primary" text-color="white" size="sm">
                      {{ tech }}
                    </q-chip>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </slot>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  icon?: string;
  github?: string | undefined;
  technologies?: string[] | undefined;
}>();
</script>

<style lang="scss" scoped>
.project-details-page {
  background-color: var(--bg-color);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.project-hero-image {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.sidebar-card {
  border-radius: 16px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
}

.sticky-top {
  position: sticky;
  top: 100px;
}

.font-bold {
  font-weight: 700;
}
</style>
