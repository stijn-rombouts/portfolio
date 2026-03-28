<template>
  <ProjectPageLayout name="Medication Support System (SKIL2 Semester 1)" icon="/projects/skill2_1/skill2_1.png"
    status="Finished" github="https://github.com/stijn-rombouts/skill-2-project-week/"

    :technologies="['Vue.js', 'Quasar', 'Mobile App', 'Security']">

    <template #default>
      <h2 class="text-h4 text-weight-bold q-mb-md">Project Overview</h2>
      <p class="text-h6 text-grey-8 leading-relaxed font-light q-mb-xl">
        This project was developed during the SKIL2 project week at Thomas More Geel. The goal was to create a
        secure, reliable, and user-friendly Proof of Concept (PoC) for a medication support system,
        specifically
        aimed at elderly users and their caregivers.
      </p>

      <div class="row q-col-gutter-xl q-mb-xl">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="user-role-card q-pa-lg text-center">
            <q-icon name="elderly" size="lg" color="primary" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Elderly User</h3>
            <p class="text-body1 text-grey-7">Simple interface for reminders (including voice) and intake confirmation
              via button or voice.</p>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="user-role-card q-pa-lg text-center">
            <q-icon name="family_restroom" size="lg" color="secondary" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Caregiver</h3>
            <p class="text-body1 text-grey-7">Monitoring of intakes, management of schedules, and automatic email
              notifications for missed intakes.</p>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="user-role-card q-pa-lg text-center">
            <q-icon name="medical_services" size="lg" color="accent" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Healthcare Professional</h3>
            <p class="text-body1 text-grey-7">Detailed overview of intake history and the ability to adjust
              medical schedules.</p>
          </q-card>
        </div>
      </div>

      <div class="security-priority-section q-mb-xl q-pa-xl bg-orange-1 rounded-borders">
        <h2 class="text-h4 text-weight-bold q-mb-md"><q-icon name="security" class="q-mr-sm" />Security &
          Reliability</h2>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <div class="text-h6 font-bold q-mb-xs">Secure Access</div>
            <p class="text-body1">Implementation of 2FA authentication and Role Based Access Control (RBAC) for all
              user roles.</p>
          </div>
          <div class="col-12 col-sm-6">
            <div class="text-h6 font-bold q-mb-xs">Always Available</div>
            <p class="text-body1">Offline-first architecture with encrypted local storage and automatic
              synchronization after reconnection.</p>
          </div>
        </div>
      </div>

      <div class="roadmap-section q-mb-xl">
        <h2 class="text-h4 text-weight-bold q-mb-lg">Development Roadmap:</h2>
        <q-timeline color="primary">
          <q-timeline-entry title="Crawl (Sprint 1 - PoC)" subtitle="Project Week" icon="directions_walk">
            <div>Focus on the core: 2FA login, viewing medication schedules, offline confirmation, and monitoring by the
              caregiver.</div>
          </q-timeline-entry>

          <q-timeline-entry title="Walk" subtitle="Phase 2" icon="transfer_within_a_station">
            <div>Expansion with reporting exports, improved synchronization algorithms, and advanced
              voice functionality.</div>
          </q-timeline-entry>

          <q-timeline-entry title="Run" subtitle="Future" icon="directions_run">
            <div>Direct connection with pharmacies/GPs and advanced analytics.</div>
          </q-timeline-entry>
        </q-timeline>
      </div>

    </template>

    <template #extra>
      <div class="q-pa-md bg-slate-100 rounded-borders border-dashed">
        <h4 class="text-h5 text-weight-bold q-mb-md">Proof of Concept Architecture</h4>
        <p class="text-body1 text-grey-8">
          The system consists of a hybrid architecture with a mobile web app for the elderly, a web application for
          administrators, and a secure backend with an encrypted database. Database access is restricted, and
          communication occurs exclusively via HTTPS.
        </p>
      </div>
    </template>
  </ProjectPageLayout>
</template>

<script setup lang="ts">
import ProjectPageLayout from 'src/components/ProjectPageLayout.vue';
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

.font-bold {
  font-weight: 700;
}

.user-role-card {
  border-radius: 20px;
  height: 100%;
  transition: transform 0.3s ease;
  background: var(--card-bg);
  border-color: var(--card-border);

  &:hover {
    transform: translateY(-5px);
  }
}

.security-priority-section {
  border-left: 8px solid #fb8c00;
}

.body--dark .bg-orange-1 {
  background-color: rgba(251, 140, 0, 0.1) !important;
}

.border-dashed {
  border: 2px dashed rgba(0, 0, 0, 0.1);
}

.body--dark .border-dashed {
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
