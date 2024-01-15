<script setup>

import { ref, onMounted, onBeforeMount } from 'vue';
import fetchUser from '../compositions/useGetUser.js';
const user = ref({
  firstName: null,
  lastName: null,
  age: null,
  address: {
    city: null,
  },
  birthDate: null,
})

onBeforeMount(async () => {
  user.value = await fetchUser()
});

import editUser from '../compositions/useEditUser.js';

onMounted(() => {
  editUser()
});

const setUser = async () => {
  const data = {
    city: user.value.address.city,
    birthDate: user.value.birthDate
  }
 await editUser(data);
}

const toUserTickets = () => {
  return navigateTo('/tickets');
}

const cities = ref(['Washington', 'Manchester', 'Nashville', 'Glendale'])
</script>

<template>  
  <q-card dark bordered class="bg-grey-5 my-card user" >
    <q-card-section>
      <div class="text-subtitle2">First name:{{ user.firstName }}</div>
      <div class="text-h6">Last name: {{ user.lastName }}</div>
    </q-card-section>

    <q-separator dark inset />

    <q-card-section >
      <div class="text-subtitle2 q-mb-md">Date of birth:{{ user.birthDate }}</div>

      <q-date
        v-model="user.birthDate"
        @change.prevent="setUser"
        mask="YYYY-MM-DD"
        dark
        class="bg-grey-6 q-mb-md"
        minimal
      />
      <div class="text-subtitle2">Age: {{ user.age }}</div>
      <q-select class="q-mt-md" filled color="primary" v-model="user.address.city" :options="cities" label="City" @change.prevent="setUser"/>
    </q-card-section >
    <q-card-section>
      <q-btn @click="toUserTickets">All Tickets</q-btn>
    </q-card-section>
  </q-card>
</template>



