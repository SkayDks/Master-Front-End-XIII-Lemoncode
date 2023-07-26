<template>
  <nav class="nav flex align-items-center justify-content-between container">
    <div class="container-img flex align-items-center">
      <img class="img" :src="org?.avatar_url" :alt="org?.login" />
      <span class="text">{{ org?.login }}</span>
    </div>
    <div>
      <Filter />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

//Store org
const filteredOrgStore = useFilteredOrgStore();
const { storeOrg, filteredOrg } = storeToRefs(filteredOrgStore);

const { orgApi } = await useOrgApi("Lemoncode");
console.log("tt", orgApi);

filteredOrgStore.setOrg(orgApi);

const org = computed(() => storeOrg.value);

//Store member
const memberListStorage = useMemberList();

watchEffect(
  async () => {    
    const { list } = await useMembersApi(filteredOrg.value);
    console.log(list);
    memberListStorage.setMemberList(list);
  },
  { flush: "post" }
);
</script>

<style lang="scss" scoped>
.nav {
  background-color: #242415;
  border-bottom: 0.4rem solid #d9d900;
  position: sticky;
  top: 0;
}
.container-img {
  color: white;
}
.img {
  margin-right: 10px;
  background-color: white;
  width: 75px;
}
.text {
  font-size: 15px;
  text-transform: capitalize;
  font-weight: bold;
}
</style>
