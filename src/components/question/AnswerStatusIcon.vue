<script setup lang="ts">
import checkIcon from '../../assets/images/check.svg'
import checkIconError from '../../assets/images/check-error.svg'

defineProps<{ status: 'correct' | 'incorrect' }>()
</script>

<template>
  <div>
    <img
      :src="status === 'correct' ? checkIcon : checkIconError"
      alt=""
      class="icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
