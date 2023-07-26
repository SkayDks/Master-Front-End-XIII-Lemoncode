<template>
  <div>
    <input class="input" type="text" v-model="textFilter" />
    <button class="button" type="button" @click="addItem">Search</button>
  </div>
  <Toast />
</template>

<script setup lang="ts">
const filteredOrgStore = useFilteredOrgStore();
const memberListStorage = useMemberList();
const textFilter = ref(filteredOrgStore.filteredOrg);
const toastStore = useToasterStore();

const addItem = async () => {
  const { orgApi } = await useOrgApi(textFilter.value);
  if (orgApi.id !== -1) {
    filteredOrgStore.setOrg(orgApi);
  } else {
    toastStore.error();
    memberListStorage.setMemberList([]);
  }
};
</script>

<style lang="scss" scoped>
.input {
  margin-right: 10px;
}
</style>
