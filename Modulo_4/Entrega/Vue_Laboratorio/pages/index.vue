<template>
  <div class="grid">
    <MemberList />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  margin: 1rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}
</style>
