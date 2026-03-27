<template>
  <q-page :class="[$q.screen.gt.xs ? 'q-pa-xl' : 'q-pa-md', 'about-page-bg']">
    <div class="container">
      <!-- Profile Header -->
      <div class="row q-col-gutter-xl items-center q-mb-xl">
        <div class="col-12 col-md-4 text-center">
          <q-avatar size="250px" class="shadow-10 profile-avatar">
            <q-img src="/profile.jpg" alt="Stijn Rombouts" />
          </q-avatar>
        </div>
        <div class="col-12 col-md-8">
          <h2 :class="$q.screen.gt.xs ? 'text-h3' : 'text-h4'" class="text-weight-bold q-mb-sm text-slate-800">About Me
          </h2>
          <p class="text-h6 text-slate-700 line-height-1-6">
            I’m a Digital Innovation student with a deep passion for the complex infrastructures and automated cloud
            ecosystems that power our world. I thrive on solving technical challenges and building robust systems that
            bridge the gap between hardware and software.
          </p>
          <div class="q-mt-lg flex items-center q-gutter-sm">
            <q-chip outline color="primary" icon="school" label="Digital Innovation" />
            <q-chip outline color="secondary" icon="place" label="Belgium" />
            <q-chip outline :color="$q.dark.isActive ? 'white' : 'dark'" icon="mdi-github" icon-right="open_in_new" label="GitHub" tag="a"
              href="https://github.com/stijn-rombouts" target="_blank" />
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-xl">
        <!-- Left Column: Career & Ambitions -->
        <div class="col-12 col-md-7">
          <section class="q-mb-xl">
            <h3 :class="$q.screen.gt.xs ? 'text-h4' : 'text-h5'" class="text-weight-bold q-mb-md text-slate-700">My
              Educational Path</h3>
            <p class="text-body1 text-slate-700 line-height-1-8">
              I began my journey in Applied Computer Science with a focus on building practical, high-impact solutions.
              I chose the Digital Innovation track because of its intensive, project-based learning, where we solve
              real-world problems for actual clients instead of just following traditional coursework. This hands-on
              experience deepened my fascination with the infrastructure powering our digital world, leading me to
              specialize in Cloud & Cyber Security (CCS). I’m driven by the complexities of cloud ecosystems and the
              technical challenges of managing secure, automated server architectures.
            </p>
          </section>

          <section class="q-mb-xl">
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Future Dreams & Ambitions</h3>
            <p class="text-body1 text-slate-700 line-height-1-8">
              I aim to carve out a path in the world of high-scale infrastructure and advanced automation. My passion
              lies in mastering the complexities of modern datacenters and cloud ecosystems, with a focus on building
              resilient, automated workflows. I aspire to design and manage the robust foundations that power our
              digital world, effectively bridging the gap between physical hardware and cloud-native orchestration.
            </p>
          </section>

          <section class="q-mb-xl">
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Digital Innovation @ Thomas More</h3>
            <div class="row q-col-gutter-lg items-center q-mb-lg">
              <div class="col-12 col-sm-4 text-center">
                <q-img src="/DI.png" alt="Digital Innovation @ Thomas More"
                  class="rounded-borders school-image shadow-4" ratio="1" />
              </div>
              <div class="col-12 col-sm-8">
                <p class="text-body1 text-slate-700 line-height-1-8">
                  Digital Innovation is a special part of the IT factory @ Thomas More in Geel. Instead of studying, we
                  make projects for real clients to develop real skill. We need to research, develop, present, connect
                  to develop our skills and complete our learning goals. We are free to use our own tech stacks and get
                  the opportunity to work on projects that aren't taught in the normal courses.
                </p>
                <p class="text-body1 text-slate-700 line-height-1-8 q-mt-md">
                  I've learned a lot here. I work together with an amazing & talented team of students. We make projects
                  in group or alone and deliver products used in the real world.
                </p>
              </div>
            </div>

            <div class="row items-center q-gutter-md">
              <q-btn outline no-caps color="primary" label="Check out our open-source projects" icon="mdi-github"
                icon-right="open_in_new" type="a" href="https://github.com/Thomas-More-Digital-Innovation"
                target="_blank" class="q-px-md" />
              <q-btn outline no-caps color="secondary" label="Learn more about Digital Innovation" icon="school"
                icon-right="open_in_new" type="a"
                href="https://thomasmore.be/nl/opleidingen/professionele-bachelor/toegepaste-informatica/digital-innovation/geel/basistraject"
                target="_blank" class="q-px-md" />
            </div>
          </section>

          <section>
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Hobbies</h3>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <q-card flat bordered class="hobby-card">
                  <q-card-section>
                    <div class="text-h6"><q-icon name="dns" color="primary" class="q-mr-sm" /> Homelab</div>
                    <div class="text-caption text-slate-700">Architecting personal lab environments with Proxmox and
                      TrueNAS, focusing on virtualization, Linux systems, and smart home automation.</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-12 col-sm-6">
                <q-card flat bordered class="hobby-card">
                  <q-card-section>
                    <div class="text-h6"><q-icon name="music_note" color="primary" class="q-mr-sm" /> Drumming</div>
                    <div class="text-caption text-slate-700">Expressing rhythm and creativity behind the drum kit,
                      focusing on technique, timing, and musical exploration.</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Column: Skills -->
        <div class="col-12 col-md-5">
          <q-card flat bordered class="skills-card shadow-2">
            <q-card-section>
              <h3 class="text-h5 text-weight-bold q-mb-lg text-slate-800">Skills & Expertise</h3>

              <div class="q-mb-md">
                <div class="text-subtitle1 text-weight-medium q-mb-sm">Technical Skills</div>
                <div class="q-gutter-xs">
                  <q-chip v-for="skill in technicalSkills" :key="skill"
                    :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'"
                    :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" :label="skill" />
                </div>
              </div>

              <q-separator class="q-my-md" />

              <div class="q-mb-md">
                <div class="text-subtitle1 text-weight-medium q-mb-sm">Soft Skills</div>
                <div class="q-gutter-xs">
                  <q-chip v-for="skill in softSkills" :key="skill" :color="$q.dark.isActive ? 'teal-9' : 'teal-1'"
                    :text-color="$q.dark.isActive ? 'teal-1' : 'teal-9'" :label="skill" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const technicalSkills = [
  'Proxmox VE',
  'Proxmox Backup Server',
  'TrueNAS',
  'Infrastructure as Code (Terraform / Ansible)',
  'Docker',
  'Kubernetes',
  'TypeScript',
  'Vue.js / Quasar',
  'Python',
];

const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Leadership',
  'Adaptability'
];
</script>

<style lang="scss">
.about-page-bg {
  background-color: var(--bg-color);
}

.text-slate-800 {
  color: var(--text-main);
}

.text-slate-700 {
  color: var(--text-secondary);
}

.profile-avatar {
  border: 4px solid white;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.hobby-card {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 12px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px var(--card-border);
    border-color: var(--q-primary);
  }
}

.hobby-card {
  background-color: var(--card-bg) !important;
  border-color: var(--card-border) !important;
}

.school-image {
  border-radius: 12px;
  max-width: 250px;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.skills-card {
  background-color: var(--card-bg) !important;
  border-color: var(--card-border) !important;
  border-radius: 16px;
  position: sticky;
  top: 100px;
}

.line-height-1-8 {
  line-height: 1.8;
}
</style>
