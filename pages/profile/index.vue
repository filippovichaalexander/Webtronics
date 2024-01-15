<script setup>
  import {logout} from '../compositions/useLogout';
</script>

<template>

<div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-grey-3 text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-right">
            <q-btn label="Log out" color="grey" @click="logout"/>
          </q-toolbar-title>
        </q-toolbar>
        <BreadCrumbs />
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md flex flex-start main">
          <UserCard />
        </q-page>
      </q-page-container>

    </q-layout>
  </div>

</template>
