<script setup>
import {logout} from '../compositions/useLogout';

  const toUser = () => {
    return navigateTo('/profile');
  }
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
          <TicketsComponent />
          <button class="btn q-ml-md" @click="toUser">User page</button>
        </q-page>
      </q-page-container>
  
    </q-layout>
  </div>
</template>

<style scoped>
  .btn {
    border-radius: 3px;
    text-transform: uppercase;
    padding: 7px 10px;
     background: #858383;
     color: white;
     outline: none;
     border: none;
     transition: all 0.5s ease;
   }
   .btn:hover {
     cursor: pointer;
     background: #919191;
   }
</style>