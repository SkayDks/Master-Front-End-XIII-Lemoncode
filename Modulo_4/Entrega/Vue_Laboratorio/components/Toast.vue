<template>
  <Teleport to="body">
    <ul class="toaster__wrapper" v-for="toast in toastStore.toasts">
      <li
        v-for="toast in toastStore.toasts"
        class="toaster__list"
        :key="toast.text"
      >
        <span class="toaster__list-text">{{ toast.text }}</span>
      </li>
    </ul>
  </Teleport>
</template>

<script setup lang="ts">
const toastStore = useToasterStore();
/* 
let toast = "alert";
//Store org

const displeyToast = () => {
  toast = "alert";
};

const errorToast = () => {
  toast = "alert show";

  setTimeout(() => toast ="alert" , 5000);
};

errorToast(); */
</script>
