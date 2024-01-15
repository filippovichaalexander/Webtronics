<script setup>
  import { ref, onMounted } from 'vue';
  import fetchUser from '../compositions/useGetUser.js';
  const props = defineProps({
    ticket: {
      required: false,
      default: () => ({
        title: null
      })
    },
    posts: {
      type: Array
    }
  });

  const user = ref({
    firstName: null
  })

  onMounted(async () => {
    user.value = await fetchUser();
  });

  const toTickets = () => {
    navigateTo('/tickets');
  };
</script>

<template>
  <q-card dark bordered class="bg-grey-7 my-card q-mx-auto" style="width: 50%">
    <q-card-section>
      <div class="text-subtitle2">Title:</div>
      <div class="text-h6">{{ props.ticket?.title }}</div>
      <p class="text-subtitle2">Ticket:</p>
      <div class="text-subtitle2"> {{ props.ticket?.body }}</div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section>
      <div class="text-subtitle2">Author: {{ user.firstName }} {{ user.lastName }}</div>
      <div class="text-subtitle2">Date: 10-02-2023</div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section>
      <q-btn label="Tickets" color="grey" @click="toTickets" class="q-mt-md q-mb-md text-center"/>
    </q-card-section>
  </q-card>
</template>
