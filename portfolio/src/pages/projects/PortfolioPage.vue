<template>
  <ProjectPageLayout name="Personal Portfolio" icon="/projects/portfolio/image.png"
    status="In Progress" github="https://github.com/stijn-rombouts/portfolio/"
    :technologies="['Vue.js', 'Quasar', 'Vite', 'TypeScript']">

    <template #default>
      <h2 class="text-h4 text-weight-bold q-mb-md">About This Project</h2>
      <p class="text-h6 text-grey-8 leading-relaxed font-light q-mb-xl">
        This portfolio website was designed to showcase my skills and projects. It uses Quasar Framework for its rich
        set of UI components and Vue 3 for a modern, reactive development experience.
      </p>

      <div class="row q-col-gutter-xl q-mb-xl">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="feature-card q-pa-md">
            <q-icon name="speed" size="md" color="primary" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Performance</h3>
            <p class="text-body1 text-grey-7">Built with Vite for lightning-fast HMR and optimized production builds.
            </p>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat bordered class="feature-card q-pa-md">
            <q-icon name="dark_mode" size="md" color="primary" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Design</h3>
            <p class="text-body1 text-grey-7">Full dark mode support with glassmorphism and smooth transitions.</p>
          </q-card>
        </div>
      </div>

      <div class="features-section q-mb-xl">
        <h2 class="text-h4 text-weight-bold q-mb-md">Key Features</h2>
        <q-list class="q-gutter-sm">
          <q-item v-for="feature in features" :key="feature" class="feature-item">
            <q-item-section avatar>
              <q-icon name="check_circle" color="primary" />
            </q-item-section>
            <q-item-section class="text-h6 font-medium">
              {{ feature }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </template>

    <template #extra>
      <h2 class="text-h4 text-weight-bold q-mb-md">Tech Stack Details</h2>
      <div class="row q-gutter-md">
        <div v-for="stack in techStack" :key="stack.name" class="col-12 col-sm-auto">
          <q-chip outline color="primary" class="q-pa-lg">
            <q-avatar color="primary" text-color="white" icon="settings" />
            <div class="q-ml-sm">
              <div class="text-weight-bold">{{ stack.name }}</div>
              <div class="text-caption">{{ stack.use }}</div>
            </div>
          </q-chip>
        </div>
      </div>
    </template>
  </ProjectPageLayout>
</template>

<script setup lang="ts">
import ProjectPageLayout from 'src/components/ProjectPageLayout.vue';

const features = [
  'Responsive design with dark mode',
  'Dynamic project pages',
  'Glassmorphism UI',
  'SEO optimized'
];

const techStack = [
  { name: 'Vue 3', use: 'Core Framework' },
  { name: 'Quasar', use: 'UI Components' },
  { name: 'Vite', use: 'Build Tool' },
  { name: 'TypeScript', use: 'Language' }
];
</script>

<style lang="scss" scoped>
.leading-relaxed {
  line-height: 1.8;
}

.font-light {
  font-weight: 300;
}

.font-medium {
  font-weight: 500;
}

.feature-item {
  padding: 8px 0;
}

.feature-card {
  border-radius: 12px;
  background: var(--card-bg);
  border-color: var(--card-border);
}
</style>
