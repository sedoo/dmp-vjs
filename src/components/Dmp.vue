<template>
  <v-container>
    <div v-if="loading">
    <v-progress-linear :indeterminate="true">
    </v-progress-linear>
    Loading...
    </div>
    <div v-else>

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
    </div>
  </v-container>
</template>

<script>
//import dmpDataJson from '../resources/ex9-dmp-long.json'
//import dmpDataJson from '../resources/DMP_P2OA.json'
import Contact from './Contact.vue';
import Contributors from './Contributors.vue';
import EthicalIssues from './EthicalIssues.vue';
import DataSets from './DataSets.vue';
import Projects from './Projects.vue';
export default {
  components: { Contact, Contributors, EthicalIssues, DataSets, Projects },
    name: 'Dmp',

    data: () => ({
      dmpData: {},
      loading: false
    }),

    created: function() {
      this.loadDmp();
    },

     methods: {

    loadDmp: function() {
      let self =this
      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      this.loading=true
      let project = urlParams.get('project')
      if (project) {
        let url = this.$urls[project.toLowerCase()];
        if (url) {
           this.axios
        .get(url)
        .then(function(response) {
          self.dmpData = response.data;
        })
        .catch(function(error) {
          console.log(error)
        })
        .finally(function() {
          self.loading = false;
        });
        }
      }
    }
     }
  }
</script>
