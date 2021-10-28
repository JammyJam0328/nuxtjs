<template>
  <div class="py-6">
    <shared-page-title pageName="Manage Queue" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-5">
      <process-create-queue />
    </div>
  </div>
</template>

<script>
import CreateQueue from '~/components/process/CreateQueue.vue'
export default {
  components: { CreateQueue },
  layout: 'Accommodator',
}
</script>
