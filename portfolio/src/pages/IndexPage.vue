<template>
  <q-page class="flex flex-center hero-page overflow-hidden" :class="$q.dark.isActive ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'">
    <div class="row full-width q-px-xl container items-center">
      <div class="col-12 col-md-6 q-pa-lg animate-fade-in-left">
        <h1 class="text-h2 text-weight-bold q-mb-md gradient-text">
          Welcome to My Professional Portfolio
        </h1>
        <p class="text-h5 q-mb-xl line-height-1-6" :class="$q.dark.isActive ? 'text-grey-4' : 'text-slate-700'">
          Hello, I'm <span class="text-primary text-weight-medium">Stijn Rombouts</span>. <br />
          Highly motivated Applied Computer Science student with a passion for building innovative and efficient digital solutions.
        </p>
        <div class="q-gutter-sm">
          <q-btn
            unelevated
            color="primary"
            label="About Me"
            size="lg"
            to="/about"
            class="q-px-xl"
          />
          <q-btn
            outline
            :color="$q.dark.isActive ? 'white' : 'primary'"
            label="View CV"
            size="lg"
            to="/cv"
            class="q-px-xl"
          />
        </div>
      </div>

      <div class="col-12 col-md-6 flex flex-center q-pa-lg animate-fade-in-right">
        <div class="hero-image-container">
          <div class="hero-image-glow"></div>
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            class="hero-image shadow-24"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="decorator circle-1"></div>
    <div class="decorator circle-2"></div>
  </q-page>
</template>

<script setup lang="ts">
// No complex logic needed for the landing page
</script>

<style lang="scss">
.bg-slate-900 {
  background: radial-gradient(circle at top right, #1e293b, #0f172a);
}

.gradient-text {
  background: linear-gradient(135deg, var(--text-main) 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.line-height-1-6 {
  line-height: 1.6;
}

.hero-image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.hero-image {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-image-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  z-index: -1;
  filter: blur(20px);
}

.decorator {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: rgba(99, 102, 241, 0.1);
  top: -100px;
  right: -50px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: rgba(14, 165, 233, 0.05);
  bottom: -150px;
  left: -100px;
}

.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 1s ease-out;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
