<script setup>
  import {onBeforeMount, onMounted} from 'vue'
  
  import {checkUser} from '../compositions/useAuthentication';
  import {logout} from '../compositions/useLogout';
  
  onBeforeMount(() => {
    checkUser()
  });
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders ">
      <q-header reveal elevated class="bg-grey-3 text-primary">
        <q-toolbar class="row justify-between">
          <BreadCrumbs />
          <q-btn label="Log out" color="grey" @click="logout" class="text-right"/>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <TicketsComponent />
        </q-page>
      </q-page-container>

    </q-layout>
  </div>
</template>

<style scoped>
.btn {
     background: #767575;
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