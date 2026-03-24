<template>
  <div class="custom-code-block-wrapper" ref="wrapper">
    <div v-if="description" class="code-description" ref="desc" v-html="description"></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
defineProps(['description'])

const wrapper = ref(null)
const desc = ref(null)

onMounted(() => {
  if (wrapper.ref && desc.value) {
    // Find the VitePress tab bar
    const tabs = wrapper.value.querySelector('.tabs')
    if (tabs) {
      // Insert our description immediately after the tabs
      tabs.after(desc.value)
    }
  }
})
</script>

<style scoped>
.custom-code-block-wrapper {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

/* Style the description area */
.code-description {
  padding: 12px 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.5;
}

/* Ensure the tab bar looks integrated */
:deep(.tabs) {
  margin-bottom: 0 !important;
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

/* Remove default VitePress margins */
:deep(.vp-code-group) {
  margin: 0 !important;
}

:deep(div[class*='language-']) {
  margin: 0 !important;
  border-radius: 0 !important;
}

/* The 'pill' look for code inside the description */
:deep(.code-description code) {
  background-color: var(--vp-c-bg-mute);
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>
