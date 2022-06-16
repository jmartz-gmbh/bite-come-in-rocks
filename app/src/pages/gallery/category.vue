<template>
  <div class="vp-gallery-categorie" v-if="category.attributes">
    <h2 class="font-bold text-xl flex justify-between">
      <span>{{ category.attributes.name }}</span>
      <span class="text-sm text-blue-400 mt-2"
        ><button @click="$router.go(-1)">Zurück zur Gallery</button></span
      >
    </h2>
    <div class="grid grid-cols-6 gap-2">
      <div
        v-for="(m, i) in category.attributes.media.data"
        class="col-span-6 md:col-span-2"
      >
        <router-link :to="'/gallery/view/' + m.id">
          <img
            :src="'https://gallery.come-in.rocks' + m.attributes.url"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryCategory",
  data() {
    return {
      category: [],
    };
  },
  mounted() {
    this.load();
    this.$store.commit("breadcrumb-add", {
      link: "/gallery",
      label: "Gallery",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/gallery/category/" + this.$route.params.id,
      label: "Category",
    });
  },
  methods: {
    load: function () {
      const that = this;
      fetch(
        "https://gallery.come-in.rocks/api/categories/" +
          this.$route.params.id +
          "?populate=media"
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.category = json.data;
        });
    },
  },
};
</script>
