<template>
  <v-app>
    <v-main>
      <Dmp/>
    </v-main>
  </v-app>
</template>

<script>
import Dmp from './components/Dmp';

export default {
  name: 'App',

  components: {
    Dmp,
  },

  data: () => ({
    //
  }),
};
</script>
