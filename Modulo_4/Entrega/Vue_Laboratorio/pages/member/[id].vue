<template>
  <div class="container">
    <NuxtLink to="/" class="back button">	&lArr; Go back</NuxtLink>
    <article v-if="member" class="flex">
      <img class="img" :src="member.avatar_url" :alt="member.login" />
      <div class="info flex">
        <h3>Full name: {{ member?.name }}</h3>
        <span>Nick Github: {{ member.login }}</span>
        <span>Company: {{ member.company }}</span>
        <span>Email: {{ member.email }}</span>
        <span>Bio: {{ member.bio }}</span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { membersService } from "~~/services/members";
import { Member } from "~~/types";

const route = useRoute();
const id = route.params.id as string;

const { data: member } = useAsyncData<Member>(() =>
  membersService.getMemberById(id)
);
</script>

<style scoped>
h3{
  margin-top: 10px;
  margin-bottom: 17px;
}
.back {
  text-align: center;
  width: 125px;
  display: block;
  margin: 1rem 0;
  border: 1px black solid;
}

.info {
  font-size: 1.5rem;
  flex-direction: column;
  gap: 1rem;
}
.img{
  margin-right: 1rem;
  width: 225px;
}
</style>
