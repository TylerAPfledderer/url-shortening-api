<template>
  <div class="DesktopWrapper">
    <slot></slot>
  </div>
</template>
<style scoped>
.DesktopWrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;
}
</style>
