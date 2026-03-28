<template>
  <ProjectPageLayout name="Hosting Platform (SKIL2 Semester 2)" icon="/projects/skill2_2/RKE2.png"
    status="In Progress" :technologies="['RKE2', 'Kubernetes', 'Longhorn', 'Rancher', 'GitHub Actions', 'Grafana', 'OPNsense']">


    <template #default>
      <div class="row q-col-gutter-xl">
        <div class="col-12">
          <h2 class="text-h4 text-weight-bold q-mb-md">Project Overview</h2>
          <p class="text-h6 text-grey-8 leading-relaxed font-light q-mb-xl">
            For the SKIL2 project in semester 2, we developed a fully scalable and secure hosting platform.
            This platform is designed to host PHP, Laravel, and static websites in a containerized environment,
            where security and isolation are central.
          </p>

          <div class="architecture-diagram q-mb-xl">
            <h3 class="text-h5 text-weight-bold q-mb-md">Architecture Diagram <q-icon name="zoom_in" size="xs" color="grey-6" /></h3>
            <ImageLightbox src="/projects/skill2_2/skill2_2.png" alt="Architecture Diagram" class="rounded-borders" />
          </div>

          <h3 class="text-h5 text-weight-bold q-mb-lg">Core Infrastructure</h3>
          <div class="features-grid row q-col-gutter-lg q-mb-xl">
            <div class="col-12 col-sm-6">
              <div class="feature-item">
                <q-icon name="hub" color="primary" size="sm" class="q-mr-sm" />
                <span class="text-h6 text-weight-bold">RKE2 Kubernetes</span>
                <p class="text-body1 text-grey-7 q-mt-xs">A security-focused Kubernetes distribution for maximum reliability.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="feature-item">
                <q-icon name="storage" color="secondary" size="sm" class="q-mr-sm" />
                <span class="text-h6 text-weight-bold">Longhorn Storage</span>
                <p class="text-body1 text-grey-7 q-mt-xs">Distributed block storage for persistent data of websites.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="feature-item">
                <q-icon name="security" color="accent" size="sm" class="q-mr-sm" />
                <span class="text-h6 text-weight-bold">Network Isolation</span>
                <p class="text-body1 text-grey-7 q-mt-xs">Each website runs in its own namespace with strict network isolation.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="feature-item">
                <q-icon name="analytics" color="positive" size="sm" class="q-mr-sm" />
                <span class="text-h6 text-weight-bold">Grafana Monitoring</span>
                <p class="text-body1 text-grey-7 q-mt-xs">Real-time monitoring of resource usage and global health checks.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="feature-item">
                <q-icon name="router" color="blue-2" size="sm" class="q-mr-sm" />
                <span class="text-h6 text-weight-bold">OPNsense Firewall</span>
                <p class="text-body1 text-grey-7 q-mt-xs">Advanced security gateway with IDS/IPS and firewall rules for all traffic.</p>
              </div>
            </div>
          </div>

          <h3 class="text-h5 text-weight-bold q-mb-lg">Platform Features</h3>
          <div class="row q-col-gutter-lg q-mb-xl">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="feature-card q-pa-lg bg-indigo-1 rounded-borders border-indigo">
                <h4 class="text-h6 text-weight-bold q-mb-sm">Client Dashboard</h4>
                <p class="text-body2 text-grey-8">
                  Clients can log in to our dashboard to manage their websites, view logs, and push updates.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="feature-card q-pa-lg bg-green-1 rounded-borders border-green">
                <h4 class="text-h6 text-weight-bold q-mb-sm">GitHub Integration</h4>
                <p class="text-body2 text-grey-8">
                  Seamless deployment via GitHub Actions. Push your code and our platform handles the rest.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="feature-card q-pa-lg bg-orange-1 rounded-borders border-orange">
                <h4 class="text-h6 text-weight-bold q-mb-sm">Managed by Rancher</h4>
                <p class="text-body2 text-grey-8">
                  The entire cluster is managed via Rancher, providing a powerful interface for cluster operations.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
              <div class="feature-card q-pa-lg bg-red-1 rounded-borders border-red">
                <h4 class="text-h6 text-weight-bold q-mb-sm">Backup Strategy</h4>
                <p class="text-body2 text-grey-8">
                  Backups of Longhorn volumes are stored on a dedicated VM via an NFS share for data security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </template>
  </ProjectPageLayout>
</template>

<script setup lang="ts">
import ProjectPageLayout from 'src/components/ProjectPageLayout.vue';
import ImageLightbox from 'src/components/ImageLightbox.vue';
</script>

<style lang="scss" scoped>
.leading-relaxed {
  line-height: 1.8;
}

.font-light {
  font-weight: 300;
}

.feature-item {
  padding: 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
}

.border-indigo { border-left: 5px solid #3f51b5; }
.border-green { border-left: 5px solid #4caf50; }
.border-orange { border-left: 5px solid #ff9800; }
.border-red { border-left: 5px solid #f44336; }

.body--dark {
  .bg-indigo-1 { background: rgba(63, 81, 181, 0.1) !important; color: #fff; }
  .bg-green-1 { background: rgba(76, 175, 80, 0.1) !important; color: #fff; }
  .bg-orange-1 { background: rgba(255, 152, 0, 0.1) !important; color: #fff; }
  .bg-red-1 { background: rgba(244, 67, 54, 0.1) !important; color: #fff; }
  
  .feature-card p {
    color: #cbd5e1 !important;
  }
}

.bg-slate-900 {
  background-color: #0f172a;
}
</style>
