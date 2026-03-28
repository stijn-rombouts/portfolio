<template>
  <div v-if="project">
    <!-- Check if a specific component exists for this project (future-proofing) -->
    <!-- For now, we use the ProjectPageLayout to render the project content -->
    <ProjectPageLayout 
      :name="project.name" 
      :icon="project.icon"
      :github="project.github"
      :status="project.status"
      :technologies="project.technologies"
    >

      <template #default>
        <!-- Standard dynamic content -->
        <h2 class="text-h4 text-weight-bold q-mb-md">About This Project</h2>
        <p class="text-h6 text-grey-8 leading-relaxed font-light q-mb-xl">
          {{ project.description }}
        </p>

        <!-- Dynamic content can be added here via htmlContent if needed -->
        <div v-if="project.htmlContent" v-html="project.htmlContent"></div>
      </template>

      <!-- If we have a gallery, we could put it here -->
      <template #extra v-if="project.images && project.images.length">
        <h2 class="text-h4 text-weight-bold q-mb-md">Gallery</h2>
        <div class="row q-col-gutter-md">
          <div v-for="(img, idx) in project.images" :key="idx" class="col-12 col-sm-6">
            <q-img :src="img" class="rounded-borders shadow-4" />
          </div>
        </div>
      </template>
    </ProjectPageLayout>
  </div>
  <q-page v-else class="flex flex-center">
    <div class="text-center">
      <h3 class="text-h4 text-weight-bold text-grey-8">Project Not Found</h3>
      <q-btn flat color="primary" label="Back to Projects" to="/projects" class="q-mt-md" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { projects } from 'src/data/projects';
import ProjectPageLayout from 'src/components/ProjectPageLayout.vue';

const props = defineProps({
  id: String
});

const project = computed(() => projects.find(p => p.id === props.id));
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
</style>
