<template>
  <div>
    <h2 class="headline font-weight-bold">
      Contributors
    </h2>
    <v-list-item v-for="(item, i) in contributors"
          :key="i">
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ item.mbox }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{ item.contributor_id.identifier }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
  export default {
    name: 'Contributors',

    props: {
        contributors: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
  }
</script>
