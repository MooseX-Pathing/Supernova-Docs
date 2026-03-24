<template>
  <div class="custom-code-group">
    <div v-if="description" class="code-description" v-html="description"></div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(['description'])
</script>

<style scoped>
.custom-code-group {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

.code-description {
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.5;
}

/* This forces the VitePress code-group to merge into our box */
:deep(.vp-code-group) {
  margin-top: 0 !important;
}
:deep(.vp-code-group div[class*='language-']) {
  border-radius: 0 !important;
  margin: 0 !important;
}
</style>
