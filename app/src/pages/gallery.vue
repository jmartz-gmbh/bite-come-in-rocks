<template>
  <div class="vp-gallery">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 md:col-span-3" v-for="(c, i) in categories">
        <div class="card px-2 py-2 bg-white border border-black mt-2">
          <h2 class="font-bold mb-2 flex justify-between">
            <span>{{ c.attributes.name }}</span>
            <router-link :to="'/gallery/category/' + c.id" class="mt-2 text-sm"
              >mehr</router-link
            >
          </h2>
          <router-link :to="'/gallery/category/' + c.id">
            <img
              :src="
                'https://gallery.come-in.rocks' +
                c.attributes.media.data[0].attributes.url
              "
              alt=""
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      const that = this;
      fetch("https://gallery.come-in.rocks/api/categories?populate=media")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.categories = json.data;
        });
    },
  },
};
</script>
