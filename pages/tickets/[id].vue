<script setup>
  import { ref, computed, onBeforeMount } from 'vue';
  import fetchTickets from '../compositions/useGetTickets.js';
  import {logout} from '../compositions/useLogout';

  const route = useRoute()
  const tickets = ref({
    posts: [],
  })
  onBeforeMount(async () => {
    tickets.value = await fetchTickets()
  });

  const getPost = computed(() => {
    return tickets.value.posts.find(post => post.id === Number(route.params.id))
  })

</script>
<template>
  
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
      <q-header reveal elevated class="bg-grey-3 text-primary">
        <q-toolbar class="row justify-between">
          <BreadCrumbs />
          <q-btn label="Log out" color="grey" @click="logout" class="text-right"/>
        </q-toolbar>
      </q-header>
      
      
      <q-page-container>
        <q-page class="q-pa-md main">
          <TicketComponent :ticket="getPost" :posts="tickets.posts"/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>