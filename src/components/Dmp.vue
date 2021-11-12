<template>
  <v-container>
    <v-row justify="center">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ dmpData.title }}
        </h1>
    </v-row>
    <v-row class="text-left">

      <v-col>
        <p class="subheading font-weight-regular">
          {{ dmpData.description }}
        </p>
      </v-col>

      <v-col
        cols="12"
      >
        <contact :contact="dmpData.contact" />
      </v-col>

      <v-col
        cols="12"
      >
        <contributors :contributors="dmpData.contributor" />
      </v-col>

      <v-col
        cols="12"
      >
        <ethical-issues :exist="dmpData.ethical_issues_exist" 
            :report="dmpData.ethical_issues_report"
            :description="dmpData.ethical_issues_report"
          />
      </v-col>

      <v-col
        cols="12"
      >
        <projects :projects="dmpData.project" />
      </v-col>

      <v-col
        cols="12"
      >
        <data-sets :dataSets="dmpData.dataset" />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
//import dmpDataJson from '../resources/ex9-dmp-long.json'
import dmpDataJson from '../resources/DMP_P2OA.json'
import Contact from './Contact.vue';
import Contributors from './Contributors.vue';
import EthicalIssues from './EthicalIssues.vue';
import DataSets from './DataSets.vue';
import Projects from './Projects.vue';
export default {
  components: { Contact, Contributors, EthicalIssues, DataSets, Projects },
    name: 'Dmp',

    data: () => ({
      dmpData: dmpDataJson.dmp,
    }),

    created: function() {
      // REMPLACER le json statique par un appel de service
    },
  }
</script>
