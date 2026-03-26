<template>
  <q-page class="q-pa-xl about-page-bg">
    <div class="container">
      <!-- Profile Header -->
      <div class="row q-col-gutter-xl items-center q-mb-xl">
        <div class="col-12 col-md-4 text-center">
          <q-avatar size="250px" class="shadow-10 profile-avatar">
            <q-img src="/profile.png" alt="Stijn Rombouts" />
          </q-avatar>
        </div>
        <div class="col-12 col-md-8">
          <h2 class="text-h3 text-weight-bold q-mb-sm text-slate-800">About Me</h2>
          <p class="text-h6 text-slate-700 line-height-1-6">
            I'm a student of Applied Computer Science / Electronics-ICT, driven by a deep curiosity for how technology shapes our world. I enjoy solving complex problems and building tools that make a difference.
          </p>
          <div class="q-mt-lg">
            <q-chip outline color="primary" icon="school" label="Applied Computer Science" />
            <q-chip outline color="secondary" icon="place" label="Belgium" />
          </div>
        </div>
      </div>

      <div class="row q-col-gutter-xl">
        <!-- Left Column: Career & Ambitions -->
        <div class="col-12 col-md-7">
          <section class="q-mb-xl">
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Why Applied Computer Science?</h3>
            <p class="text-body1 text-slate-700 line-height-1-8">
              I chose Applied Computer Science / Electronics-ICT because I've always been fascinated by the intersection of hardware and software. The ability to create something from nothing but code, and to understand the underlying electronics that make it all possible, is incredibly empowering. I want to be at the forefront of technological innovation, building robust systems that solve real-world challenges.
            </p>
          </section>

          <section class="q-mb-xl">
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Future Dreams & Ambitions</h3>
            <p class="text-body1 text-slate-700 line-height-1-8">
              My dream is to become a Lead Systems Architect, designing scalable and secure infrastructures for global-scale applications. I'm particularly interested in Cloud Computing and AI integration. I aspire to contribute to open-source projects and eventually lead a team of talented developers to create impactful software that improves people's lives.
            </p>
          </section>

          <section class="q-mb-xl">
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Digital Innovation @ Thomas More</h3>
            <div class="row q-col-gutter-lg items-center q-mb-lg">
              <div class="col-12 col-sm-4 text-center">
                <q-img
                  src="/DI.png"
                  alt="Digital Innovation @ Thomas More"
                  class="rounded-borders school-image shadow-4"
                  ratio="1"
                />
              </div>
              <div class="col-12 col-sm-8">
                <p class="text-body1 text-slate-700 line-height-1-8">
                  Digital Innovation is a special part of the IT factory @ Thomas More in Geel. Instead of studying, we make projects for real clients to develop real skill. We need to research, develop, present, connect to develop our skills and complete our learning goals. We are free to use our own tech stacks and get the opportunity to work on projects that aren't taught in the normal courses.
                </p>
                <p class="text-body1 text-slate-700 line-height-1-8 q-mt-md">
                  I've learned a lot here. I work together with an amazing & talented team of students. We make projects in group or alone and deliver products used in the real world.
                </p>
              </div>
            </div>
            
            <div class="row items-center q-gutter-md">
              <q-btn
                outline
                no-caps
                color="primary"
                label="Check out our open-source projects"
                icon="open_in_new"
                type="a"
                href="https://github.com/Thomas-More-Digital-Innovation"
                target="_blank"
                class="q-px-md"
              />
              <q-btn
                outline
                no-caps
                color="secondary"
                label="Learn more about Digital Innovation"
                icon="school"
                type="a"
                href="https://thomasmore.be/nl/opleidingen/professionele-bachelor/toegepaste-informatica/digital-innovation/geel/basistraject"
                target="_blank"
                class="q-px-md"
              />
            </div>
          </section>

          <section>
            <h3 class="text-h4 text-weight-bold q-mb-md text-slate-700">Unique Hobbies</h3>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <q-card flat bordered class="hobby-card">
                  <q-card-section>
                    <div class="text-h6"><q-icon name="explore" color="primary" class="q-mr-sm" /> Urban Exploration</div>
                    <div class="text-caption text-slate-700">Discovering hidden architectural gems and documenting history through photography.</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-12 col-sm-6">
                <q-card flat bordered class="hobby-card">
                  <q-card-section>
                    <div class="text-h6"><q-icon name="psychology" color="primary" class="q-mr-sm" /> Chess Strategy</div>
                    <div class="text-caption text-slate-700">Analyzing grandmaster games to sharpen logical thinking and pattern recognition.</div>
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
                  <q-chip :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'" :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" label="TypeScript" />
                  <q-chip :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'" :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" label="Vue.js / Quasar" />
                  <q-chip :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'" :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" label="Node.js" />
                  <q-chip :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'" :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" label="Python" />
                  <q-chip :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'" :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" label="Docker" />
                  <q-chip :color="$q.dark.isActive ? 'indigo-9' : 'indigo-1'" :text-color="$q.dark.isActive ? 'indigo-1' : 'indigo-9'" label="Cloud Architectures" />
                </div>
              </div>

              <q-separator class="q-my-md" />

              <div class="q-mb-md">
                <div class="text-subtitle1 text-weight-medium q-mb-sm">Soft Skills</div>
                <div class="q-gutter-xs">
                  <q-chip :color="$q.dark.isActive ? 'teal-9' : 'teal-1'" :text-color="$q.dark.isActive ? 'teal-1' : 'teal-9'" label="Problem Solving" />
                  <q-chip :color="$q.dark.isActive ? 'teal-9' : 'teal-1'" :text-color="$q.dark.isActive ? 'teal-1' : 'teal-9'" label="Communication" />
                  <q-chip :color="$q.dark.isActive ? 'teal-9' : 'teal-1'" :text-color="$q.dark.isActive ? 'teal-1' : 'teal-9'" label="Team Leadership" />
                  <q-chip :color="$q.dark.isActive ? 'teal-9' : 'teal-1'" :text-color="$q.dark.isActive ? 'teal-1' : 'teal-9'" label="Adaptability" />
                </div>
              </div>

              <q-separator class="q-my-md" />

              <div class="text-center q-mt-lg">
                <q-btn
                  color="primary"
                  icon="download"
                  label="Download Full CV"
                  to="/cv"
                  unelevated
                  class="full-width"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Logic for about page
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
