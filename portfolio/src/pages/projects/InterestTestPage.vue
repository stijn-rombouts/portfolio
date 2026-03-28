<template>
  <ProjectPageLayout name="The Interest Test" icon="/projects/mpi/test.png" status="Finished"
    github="https://github.com/Thomas-More-Digital-Innovation/2526-MPI-001-Employment-Interest-Tool"
    :technologies="['PHP', 'Laravel', 'MySQL', 'Redis', 'Pest Stress Testing', 'Pest Browser Testing']">

    <template #default>
      <div class="project-overview-content text-left">
        <h2 class="text-h4 text-weight-bold q-mb-md relative-position">Project Vision</h2>
        <p class="text-h6 text-grey-8 leading-normal font-light q-mb-xl glass-container q-pa-lg">
          Developed for <strong><a href="https://www.mpi-oosterlo.be/" target="_blank"
              class="text-primary text-weight-bold" style="text-decoration: none;">MPI Oosterloo</a></strong>,
          this tool replaces traditional text-based intake forms with a sleek, <strong>behavior-driven visual
            test</strong>.
          Specifically designed for <strong>people with disabilities</strong>, the interface uses activity photos to
          allow users to
          intuitively map their professional preferences, providing more accessible and accurate data for career
          counselors.
        </p>
        <h2 class="text-h4 text-weight-bold q-mb-lg">My Technical Contributions</h2>
        <div class="contributions-grid row q-col-gutter-md q-mb-xl">
          <div v-for="task in tasks" :key="task.title" class="col-12 col-sm-6">
            <q-card flat bordered class="task-card full-height hover-lift">
              <q-card-section class="row items-center no-wrap">
                <div class="col-auto">
                  <q-avatar :icon="task.icon" color="primary" text-color="white" size="48px" />
                </div>
                <div class="col q-ml-md">
                  <div class="text-h6 font-bold">{{ task.title }}</div>
                  <div class="text-caption text-primary text-weight-medium text-uppercase ls-1">Core Task</div>
                </div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <p class="text-body1 text-grey-8">{{ task.desc }}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="technical-gallery q-mb-xl">
          <h2 class="text-h4 text-weight-bold q-mb-lg">Screenshots</h2>
          <div class="row q-col-gutter-lg">
            <div class="col-12 col-md-12">
              <q-card flat bordered class="overflow-hidden">
                <ImageLightbox src="/projects/mpi/test.png" alt="Testing Interface" class="full-width" />
                <q-card-section>
                  <div class="text-subtitle1 text-weight-bold">Test Interface</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12">
              <q-card flat bordered class="overflow-hidden">
                <ImageLightbox src="/projects/mpi/result.png" alt="Result Dashboard" class="full-width" />
                <q-card-section>
                  <div class="text-subtitle1 text-weight-bold">Test Result</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12">
              <q-card flat bordered class="overflow-hidden">
                <ImageLightbox src="/projects/mpi/use-case-diagram.jpeg" alt="Use Case Diagram" class="full-width" />
                <q-card-section>
                  <div class="text-subtitle1 text-weight-bold">Use case diagram</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #extra>
      <div class="tech-deep-dive q-pa-xl bg-slate-900 text-white rounded-borders shadow-10">
        <h2 class="text-h3 text-weight-bold q-mb-xl text-center glow-text">Technical Deep Dive</h2>
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <h3 class="text-h5 text-weight-bold q-mb-md text-primary flex items-center">
              <q-icon name="dns" class="q-mr-sm" /> Backend Engineering
            </h3>
            <p class="text-body1 text-grey-4">
              The project leverages <strong>Laravel</strong> and its built-in <strong>ORM (Eloquent)</strong> for its
              robust API ecosystem. I implemented a modular
              database architecture using migrations and Eloquent relationships to handle complex mappings between
              activity categories and
              user response data.
            </p>
            <q-list dark sparse class="q-mt-md">
              <q-item><q-item-section avatar><q-icon name="check"
                    color="positive" /></q-item-section><q-item-section>Production-ready Migrations &
                  Seeders</q-item-section></q-item>
              <q-item><q-item-section avatar><q-icon name="check"
                    color="positive" /></q-item-section><q-item-section>Redis In-memory Image
                  Caching</q-item-section></q-item>
              <q-item><q-item-section avatar><q-icon name="check"
                    color="positive" /></q-item-section><q-item-section>Sanctum-powered Login
                  Flow</q-item-section></q-item>
            </q-list>
          </div>
          <div class="col-12 col-md-6">
            <h3 class="text-h5 text-weight-bold q-mb-md text-secondary flex items-center">
              <q-icon name="speed" class="q-mr-sm" /> Resilience & Testing
            </h3>
            <p class="text-body1 text-grey-4">
              Stability was paramount for a government-associated project. I was responsible for the
              <strong>stress testing</strong> phase using <strong>Pest PHP</strong>, simulating real user behavior
              through automated <strong>browser testing</strong> to ensure the system remained responsive under peak
              traffic.
            </p>
            <q-list dark sparse class="q-mt-md">
              <q-item>
                <q-item-section avatar><q-icon name="check" color="secondary" /></q-item-section>
                <q-item-section>Pest PHP Browser Testing</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar><q-icon name="check" color="secondary" /></q-item-section>
                <q-item-section>Real-user Load Simulations</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar><q-icon name="check" color="secondary" /></q-item-section>
                <q-item-section>CI/CD Automated Flow</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div class="q-mt-xl text-center">
          <q-btn href="/projects/mpi/docs.pdf" target="_blank" color="white" text-color="dark" icon="description"
            label="Read Full Technical Documentation" no-caps size="lg" rounded class="shadow-5 hover-glow" />
        </div>
      </div>
    </template>

  </ProjectPageLayout>
</template>

<script setup lang="ts">
import ProjectPageLayout from 'src/components/ProjectPageLayout.vue';
import ImageLightbox from 'src/components/ImageLightbox.vue';

const tasks = [
  {
    icon: 'storage',
    title: 'Database Implementation',
    desc: 'Translated the database layout into production-ready migrations and developed custom seeders to populate the environment with activity data.'
  },
  {
    icon: 'bolt',
    title: 'Performance Optimization',
    desc: 'Implemented Redis in-memory caching for images, significantly reducing latency and enhancing the performance of the visual test.'
  },
  {
    icon: 'lock',
    title: 'Identity Management',
    desc: 'Engineered the login flow using secure authentication patterns for both counselors and individual testers.'
  },
  {
    icon: 'analytics',
    title: 'Pest Stress Testing',
    desc: 'Led the performance validation using Pest PHP, simulating high concurrency to ensure zero throughput degradation.'
  }
];
</script>

<style lang="scss" scoped>
.leading-normal {
  line-height: 1.6;
}

.font-light {
  font-weight: 300;
}

.font-bold {
  font-weight: 700;
}

.section-title {
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--q-primary);
    margin-top: 4px;
    border-radius: 2px;
  }
}

.glass-container {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

.body--dark .glass-container {
  background: rgba(15, 23, 42, 0.4);
  border-color: rgba(255, 255, 255, 0.05);
}

.task-card {
  border-radius: 16px;
  background: var(--card-bg);
  border-color: var(--card-border);
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

.ls-1 {
  letter-spacing: 1px;
}

.bg-slate-900 {
  background-color: #0f172a;
}

.glow-text {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.hover-glow:hover {
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.4) !important;
}

.tech-deep-dive {
  border-left: 8px solid var(--q-primary);
}
</style>
