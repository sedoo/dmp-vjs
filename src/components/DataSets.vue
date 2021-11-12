<template>
  <div>
    <h2 class="headline font-weight-bold mb-5">
      Datasets
    </h2>
   <v-container fluid>

    <v-data-table :items="dataSets">
    </v-data-table>

    <v-data-iterator
      :items="dataSets"
      item-key="name"
      :items-per-page="4"
      hide-default-footer
    >
      <template v-slot:default="{ items }">
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.title"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card>
              <v-card-title>
                <h4>{{ item.title }}</h4>
                <div class="icons-right" v-if="item.dataset_id">
                    <v-btn icon :href="item.dataset_id.identifier" target="_blank">
                    <v-icon>mdi-link</v-icon>
                    </v-btn>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-list>
                <v-list-item>
                  <v-list-item-content>Description:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.description }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Personal data:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.personal_data }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Sensitive data:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.sensitive_data }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="item.type">
                  <v-list-item-content>Type:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.type }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-group>
                    <v-list-item slot='activator'>
                        <v-list-item-title>Distribution</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="(subItem, y) in item.distribution"
                        :key="y">
                    <v-card class="ma-1" flat outlined>
                    <v-list-item-content class="ml-2">
                        <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                        <v-list-item-subtitle>
                        URL: {{ subItem.access_url }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        Data access: {{ subItem.data_access }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle v-if="subItem.byte_size">
                        Volume: {{ bytesToSize(subItem.byte_size) }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle v-if="subItem.license">
                        License:
                            <a
                                v-for="(link, i) in subItem.license"
                                :key="i"
                                :href="link.license_ref"
                                class="subheading mx-3"
                                target="_blank"
                            >
                                {{ link.license_name }}
                            </a>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle v-if="subItem.available_until">
                            Available until: {{ subItem.available_until }}
                        </v-list-item-subtitle>
                        <template v-if="subItem.host">
                            <v-list-item-content>
                                <v-list-item-title>Host {{ subItem.host.title  }}</v-list-item-title>
                                <v-list-item-subtitle class="wrap-text">
                                Description: {{ subItem.host.description }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                URL: {{ subItem.host.url }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                Storage Type: {{ subItem.host.storage_type }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle v-if="subItem.host.backup_frequency">
                                Backup frequency: {{ subItem.host.backup_frequency }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-list-item-content>
                    </v-card>
                    </v-list-item>
                </v-list-group>
                <v-list-group v-if="item.technical_resource">
                    <v-list-item slot='activator'>
                        <v-list-item-title>Technical resources</v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="(subItem, y) in item.technical_resource"
                        :key="y">
                    <v-card class="ma-1" flat outlined>
                        <v-list-item-content class="ml-2">
                            <v-list-item-title>{{ subItem.name }}</v-list-item-title>
                            <v-list-item-subtitle class="wrap-text">
                                <span v-html="subItem.description"></span>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-card>
                    </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
  </div>
</template>

<script>
  export default {
    name: 'dataSets',

    props: {
        dataSets: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },

    computed: {
      headers: function() {
        return [
          { text: 'Nom', value: 'name' },
          { text: 'Description', value: 'creationDate' },
          { text: 'Personal data', value: 'latestValidReportUpdateDate' },
          { text: this.$t('repository.table.column.report.inprogress.health'), value: 'latestInProgressReportUpdateDate' }
          ]
      } 
    },

    created: function() {
        console.log(this.dataSets);
    },

    methods: {
        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        }
    }
  }
</script>

<style scoped>
.icons-right{
  position: absolute;
  right: 0;
  margin-right: 5px
}
.wrap-text {
   white-space: normal;
}
</style>
