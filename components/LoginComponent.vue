<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

  const $q = useQuasar()

  const login = ref(null)
  const password = ref(null)
  const isPwd = ref(true)


  const onSubmit = () => {
    if (login.value == '' && password.value == '') {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'You need to accept the license and terms first'
      })
    }
    else {
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    }
  }

  const onReset = () => {
    login.value = null
    password.value = null
  }
  const logIn = () => {
    if(login.value === 'admin' && password.value === 'admin') {
      
      // localStorage.setItem('username', JSON.stringify(login.value));
      localStorage.setItem('isLoggedIn', true);
      return navigateTo('/');
    }
  }

  
</script>
<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="login"
        label="Your login *"
        hint="Login"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <!-- <q-input
        filled
        v-model="password"
        label="Your password *"
        hint="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      /> -->
      <q-input 
        v-model="password" 
        filled 
        :type="isPwd ? 'password' : 'text'" 
        label="Your password *"
        hint="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div>
        <q-btn @click.prevent="logIn" label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        
      </div>
    </q-form>

  </div>
</template>

