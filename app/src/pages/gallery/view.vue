<template>
  <div class="vp-gallery-view">
    <h2 class="font-bold text-xl mb-2 flex justify-between">
      <span> {{ media.alternativeText }}</span>
      <span class="text-sm text-blue-400 mt-2"><button @click="$router.go(-1)">Zurück zur Gallery</button></span>
    </h2>
    <img :src="'https://gallery.come-in.rocks' + media.url" alt="" />
  </div>
</template>

<script>
export default {
  name: "GalleryView",
  data() {
    return {
      media: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      const that = this;
      fetch(
        "https://gallery.come-in.rocks/api/upload/files/" +
          this.$route.params.id
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.media = json;
        });
    },
  },
};
</script>
