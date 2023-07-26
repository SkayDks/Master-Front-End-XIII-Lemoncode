<template>
  <div class="flex" v-for="member in members" :key="member.id">
    <NuxtLink :to="`/member/${member.login}`">
      <Card :member="member"></Card>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

//Storage
const memberListStorage = useMemberList();
const { memberList } = storeToRefs(memberListStorage);

const members = computed(() => memberList.value);
</script>
