<template>
  <div>
    <h2 class="headline font-weight-bold">
      Contact
    </h2>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ contact.name }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ contact.mbox }}
        </v-list-item-subtitle>
        <v-list-item-subtitle v-if="contact.contact_id">
          {{ contact.contact_id.identifier }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
  export default {
    name: 'contact',

    props: {
        contact: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
  }
</script>
