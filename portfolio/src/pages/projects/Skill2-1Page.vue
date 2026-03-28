<template>
  <ProjectPageLayout name="Medication Support System (SKIL2)" icon="/projects/skill2_1/skill2_1.png"
    github="https://github.com/stijn-rombouts/skill-2-project-week/"
    :technologies="['Vue.js', 'Quasar', 'Mobile App', 'Security']">
    <template #default>
      <h2 class="text-h4 text-weight-bold q-mb-md">Project Overzicht</h2>
      <p class="text-h6 text-grey-8 leading-relaxed font-light q-mb-xl">
        Dit project is ontwikkeld tijdens de SKIL2 projectweek bij Thomas More Geel. Het doel was het creëren van een
        veilig, betrouwbaar en gebruiksvriendelijk Proof of Concept (PoC) voor een medicatie-ondersteuningssysteem,
        specifiek
        gericht op oudere gebruikers en hun mantelzorgers.
      </p>

      <div class="row q-col-gutter-xl q-mb-xl">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="user-role-card q-pa-lg text-center">
            <q-icon name="elderly" size="lg" color="primary" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Oudere Gebruiker</h3>
            <p class="text-body1 text-grey-7">Eenvoudige interface voor herinneringen (ook spraak) en innamebevestiging
              via knop of stem.</p>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="user-role-card q-pa-lg text-center">
            <q-icon name="family_restroom" size="lg" color="secondary" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Mantelzorger</h3>
            <p class="text-body1 text-grey-7">Opvolging van innames, beheer van schema's en automatische e-mail
              notificaties bij gemiste innames.</p>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="user-role-card q-pa-lg text-center">
            <q-icon name="medical_services" size="lg" color="accent" />
            <h3 class="text-h5 text-weight-bold q-my-sm">Zorgverlener</h3>
            <p class="text-body1 text-grey-7">Gedetailleerd overzicht van inname-historiek en de mogelijkheid om
              medische schema's aan te passen.</p>
          </q-card>
        </div>
      </div>

      <div class="security-priority-section q-mb-xl q-pa-xl bg-orange-1 rounded-borders">
        <h2 class="text-h4 text-weight-bold q-mb-md"><q-icon name="security" class="q-mr-sm" />Security &
          Betrouwbaarheid</h2>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <div class="text-h6 font-bold q-mb-xs">Veilige Toegang</div>
            <p class="text-body1">Implementatie van 2FA-authenticatie en Role Based Access Control (RBAC) voor alle
              gebruikersrollen.</p>
          </div>
          <div class="col-12 col-sm-6">
            <div class="text-h6 font-bold q-mb-xs">Altijd Beschikbaar</div>
            <p class="text-body1">Offline-first architectuur met versleutelde lokale opslag en automatische
              synchronisatie na herverbinding.</p>
          </div>
        </div>
      </div>

      <div class="roadmap-section q-mb-xl">
        <h2 class="text-h4 text-weight-bold q-mb-lg">Ontwikkelingstraject:</h2>
        <q-timeline color="primary">
          <q-timeline-entry title="Crawl (Sprint 1 - PoC)" subtitle="Projectweek" icon="directions_walk">
            <div>Focus op de kern: 2FA login, medicatieschema's bekijken, offline bevestiging en monitoring door de
              mantelzorger.</div>
          </q-timeline-entry>

          <q-timeline-entry title="Walk" subtitle="Fase 2" icon="transfer_within_a_station">
            <div>Uitbreiding met rapportage-exports, verbeterde synchronisatie-algoritmes en geavanceerde
              spraakfunctionaliteit.</div>
          </q-timeline-entry>

          <q-timeline-entry title="Run" subtitle="Toekomst" icon="directions_run">
            <div>Directe koppeling met apotheken/huisartsen en geavanceerde analytics.</div>
          </q-timeline-entry>
        </q-timeline>
      </div>

    </template>

    <template #extra>
      <div class="q-pa-md bg-slate-100 rounded-borders border-dashed">
        <h4 class="text-h5 text-weight-bold q-mb-md">Proof of Concept Architectuur</h4>
        <p class="text-body1 text-grey-8">
          Het systeem bestaat uit een hybride architectuur met een mobiele webapp voor ouderen, een webapplicatie voor
          beheerders en een beveiligde backend met versleutelde database. Toegang tot de database is afgeschermd en
          communicatie verloopt uitsluitend via HTTPS.
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
