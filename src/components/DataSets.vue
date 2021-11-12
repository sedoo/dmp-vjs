<template>
  <div>
    <h2 class="headline font-weight-bold mb-5">
      Datasets
    </h2>
   <v-container fluid>

    <v-data-table 
      :headers="headers" 
      :items="dataSets" 
      :expanded.sync="expanded"
      single-expand
      show-expand
      item-key="title"
      sort-by="title"
      class="elevation-1">
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <template v-if="item.distribution != null">
              <v-card flat outlined class="my-5">
                <v-card-title>Distribution</v-card-title>
                <v-card-text>
                  <v-data-table 
                    :headers="headersDistribution" 
                    :items="item.distribution" 
                    :expanded.sync="hostExpanded"
                    single-expand
                    show-expand
                    item-key="title"
                    hide-default-footer>
                      <template v-slot:item.byte_size="{ item }">
                        {{ bytesToSize(item.byte_size) }}
                      </template> 
                      <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">
                        <template v-if="item.host">
                            <v-list-item-content>
                                <v-list-item-title>Host {{ item.host.title  }}</v-list-item-title>
                                <v-list-item-subtitle class="wrap-text">
                                Description: {{ item.host.description }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                URL: {{ item.host.url }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                Storage Type: {{ item.host.storage_type }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle v-if="item.host.backup_frequency">
                                Backup frequency: {{ item.host.backup_frequency }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                        </td>
                      </template>
                  </v-data-table>
                </v-card-text>
              </v-card>
              </template>
            <template v-if="item.technical_resource != null">
              <v-card flat outlined class="my-5">
                <v-card-title>Technical resources</v-card-title>
                <v-card-text>
                  <v-data-table 
                    :headers="headersTechResources" 
                    :items="item.technical_resource" 
                    hide-default-footer>
                  </v-data-table>
                </v-card-text>
              </v-card>
              </template>
          </td>
        </template>
    </v-data-table>

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

    data() {
      return {
        headers: [],
        headersDistribution: [],
        expanded: [],
        hostExpanded: [],
      }
    },

    created: function() {
      this.headers =  [
          { text: 'Nom', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Personal data', value: 'personal_data' },
          { text: 'Sensitive data', value: 'sensitive_data' },
          { text: '', value: 'data-table-expand' }
          ],
      this.headersDistribution =  [
          { text: 'Nom', value: 'title' },
          { text: 'Description', value: 'description' },
          { text: 'Download URL', value: 'download_url' },
          { text: 'Data access', value: 'data_access' },
          { text: 'Available until', value: 'available_until' },
          { text: 'Volume', value: 'byte_size' },
          { text: '', value: 'data-table-expand' }
          ]
      this.headersTechResources =  [
          { text: 'Nom', value: 'name' },
          { text: 'Description', value: 'description' }
          ]
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
