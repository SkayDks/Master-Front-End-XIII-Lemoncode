<template>
  <div class="card">
    <img class="img" :src="member.avatar_url" :alt="member.login" />
    <div>
      <span>{{ member.login }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Member } from "~/types";

const props = defineProps<{
  member: Member;
}>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img {
  width: 195px;
  margin-bottom: 0.5rem;
}
</style>
