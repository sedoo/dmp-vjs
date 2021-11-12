<template>
  <div>
    <h2 class="headline font-weight-bold mb-5">
      Ethical issues
    </h2>
    <span v-if="exist=='no'" class="pl-4">This is no ethical issue related to data for this SNO.</span>
  </div>
</template>

<script>
  export default {
    name: 'ethicalIssues',

    props: {
        exist: {
            type: String,
            default: () => {
                return null;
            },
        },
        report: {
            type: String,
            default: () => {
                return null;
            },
        },
        description: {
            type: String,
            default: () => {
                return null;
            },
        },
    },
  }
</script>
