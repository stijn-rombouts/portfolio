<template>
  <q-page class="q-pa-xl projects-page-bg">
    <div class="container">
      <div class="text-center q-mb-xl">
        <h1 class="text-h2 text-weight-bold gradient-text q-mb-md">Projects</h1>
        <p class="text-h5 text-grey-7">Explore my work, from academic projects to personal explorations.</p>
      </div>

      <div class="row q-col-gutter-xl justify-center">
        <div v-for="project in projects" :key="project.id" class="col-12 col-sm-6 col-md-4">
          <q-card class="project-card cursor-pointer" @click="$router.push(`/projects/${project.id}`)">
            <q-img :src="project.icon" :ratio="16 / 9" class="project-image">
              <div class="absolute-bottom text-h6 project-title-overlay">
                {{ project.name }}
              </div>
            </q-img>

            <q-card-section class="q-pa-md">
              <p class="text-body1 text-grey-8 line-clamp-2">
                {{ project.description }}
              </p>

              <div class="q-gutter-xs q-mt-sm">
                <q-chip v-for="tech in project.technologies?.slice(0, 3)" :key="tech" size="sm" outline color="primary"
                  class="tech-chip">
                  {{ tech }}
                </q-chip>
                <q-chip v-if="project.technologies && project.technologies.length > 3" size="sm" outline color="grey-7">
                  +{{ project.technologies.length - 3 }}
                </q-chip>
              </div>
            </q-card-section>

            <q-card-actions align="right" class="q-px-md q-pb-md">
              <q-btn flat color="primary" label="View Details" icon-right="arrow_forward" no-caps />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { projects } from 'src/data/projects';
</script>

<style lang="scss" scoped>
.projects-page-bg {
  background-color: var(--bg-color);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #ffffff;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.body--dark .project-card {
  background: #1e293b;
  border-color: rgba(255, 255, 255, 0.1);
}

.project-image {
  border-bottom: 4px solid var(--q-primary);
}

.project-title-overlay {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  width: 100%;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-chip {
  font-weight: 500;
}
</style>
