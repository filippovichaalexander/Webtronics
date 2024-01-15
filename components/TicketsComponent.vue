<!-- <script setup>
import { ref, computed, onMounted } from 'vue';
import _ from 'lodash';

import fetchTickets from '../compositions/useGetTickets.js';

const tickets = ref({
  posts: [],
})
const sortBy = ref(['id'])
const filterBy = ref(null)

onBeforeMount(async () => {
  tickets.value = await fetchTickets()
});

import fetchUser from '../compositions/useGetUser.js';
  const user = ref({})
  
onBeforeMount(async () => {
  user.value = await fetchUser()
});


const truncateText = (ticketBody) => {
  if (ticketBody.length > 20) {
    return ticketBody.substring(0, 20) + '...';
  }
  return ticketBody;
}

const items = computed(() => {
  const filtered = _.isEmpty(filterBy.value) ? tickets.value.posts : _.filter(tickets.value.posts, filterBy.value)

  return _.sortBy(filtered, sortBy.value)
})

const toUser = id => {
  return navigateTo(`/profile/${id}`);
}

// const truncatedTickets = computed(() => {
//   return tickets.value.map(ticket => Object.assign({}, ticket, {body: truncateText(ticket.body)}))
// });
</script>

  <template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Автор</th>
          <th class="text-right">Id</th>
          <th class="text-right">Заголовок</th>
          <th class="text-right">Текст</th>
          <th class="text-right">Дата создания</th>
          <th class="text-right">Подробности</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in items" :key="ticket.id">
          <td class="text-left"><button @click="toUser(ticket.userId)">Автор {{ user.name }}</button></td>
          <td class="text-left"> {{ticket.id }}</td>
          <td class="text-left">{{ ticket.title }}</td>
          <td class="text-left">{{ truncateText(ticket.body) }}</td>
          <td class="text-left">11-02-2022</td>
          <td class="text-left" @click="toDetails(ticket.id)"></td> 
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
 -->














 <script setup>
 import { ref, computed, onMounted } from 'vue';
 import fetchTickets from '../compositions/useGetTickets.js';
 
 import fetchUser from '../compositions/useGetUser.js';
 const user = ref({})
 let filter = ref('')
 
 onBeforeMount(async () => {
   tickets.value = await fetchTickets()
 });
 
 onBeforeMount(async () => {
   user.value = await fetchUser()
 });
 
 const tickets = ref({
   posts: [],
 })
 
 
 const filteredRows = computed(() => {
   if (!filter.value) {
     return tickets.value.posts;
   }
   const filterLower = filter.value.toLowerCase();
   return tickets.value.posts.filter(row =>
     Object.values(row).some(val =>
       String(val).toLowerCase().includes(filterLower)
     )
   );
 })
 
 const truncateText = (ticketBody) => {
   if (ticketBody.length > 20) {
     return ticketBody.substring(0, 20) + '...';
   }
   return ticketBody;
 }

 const toDetails = id => {
   return navigateTo(`/tickets/${id}`);
 }
 
 const columns = ref([
     {
       name: 'name',
       required: true,
       label: 'Автор',
       align: 'left',
       field: row => row.name,
       format: val => `${val}`,
       sortable: true
     },
     { name: 'id', align: 'center', label: 'Id', field: 'id', sortable: true },
     { name: 'title', label: 'Заголовок', field: 'title', sortable: true },
     { name: 'body', label: 'Тикет', field: 'body' },
     { name: 'date', label: 'Дата создания', field: 'date' },
     { name: 'details', label: 'Подробности', field: 'details' },])
 </script> 
 
 
  <template>
   <div class="q-pa-md">
     <input
       class="input"
       v-model="filter"
       placeholder="Поиск"
     />
 
     <q-table
     class="bg-grey-3"
       flat bordered
       title="Tickets"
       :rows="filteredRows"
       :columns="columns"
       row-key="name"
     >
       <template v-slot:body="props">
         <q-tr :props="props">
           <q-td key="name" :props="props">
             <q-badge color="grey-7" class="badge">
               {{ user.firstName }}
             </q-badge>
           </q-td>
           <q-td key="id" :props="props">
             <q-badge color="grey-7" class="badge">
               {{ props.row.id }}
             </q-badge>
           </q-td>
           <q-td key="title" :props="props">
             <q-badge color="grey-7" class="badge">
               {{ props.row.title }}
             </q-badge>
           </q-td>
           <q-td key="body" :props="props">
             <q-badge color="grey-7" class="badge">
               {{truncateText(props.row.body)}}
             </q-badge>
           </q-td>
           <q-td key="date" :props="props">
             <q-badge color="grey-7" class="badge">
               10-02-2023
             </q-badge>
           </q-td>
           <q-td key="details" :props="props">
             <q-badge color="grey-7" class="badge btn-badge">
               <button class="btn" icon="settings" @click="toDetails(props.row.id)">Details</button>
             </q-badge>
           </q-td>
         </q-tr>
       </template>
     </q-table>
   </div>
 </template>
 
 <style scoped>
   .badge {
     padding: 0.5rem;
   }
   .btn {
     background: #767575;
     color: white;
     outline: none;
     border: none;
     transition: all 0.5s ease;
   }
   .btn:hover {
     cursor: pointer;
   }
   .input {
     outline: none;
     border: 1px solid grey;
     width: 100%;
     height: 2.5rem;
   }
   .input::placeholder {
     padding-left: 1rem;
   }
 </style>