<template>
  <div v-if="projects && projects.length > 0">
    <h2 class="headline font-weight-bold">
      Projects
    </h2>
    <v-list-item v-for="(item, i) in projects"
          :key="i">
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>
         Dates: {{ item.start }} - {{ item.end }}
        </v-list-item-subtitle>
        <v-list-item-subtitle >
          Funding: 
          <span v-for="(item, i) in item.funding"
          :key="i">{{ item.funder_name }} </span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
  export default {
    name: 'projects',

    props: {
        projects: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
  }
</script>