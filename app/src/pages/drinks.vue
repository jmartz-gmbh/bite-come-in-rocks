<template>
  <div class="vp-getränke">
    <div class="grid grid-cols-6 gap-2">
      <div
        v-for="(category, index) in categories"
        class="col-span-6 md:col-span-3"
      >
        <h2 class="font-bold text-xl mb-2">{{ category.attributes.name }}</h2>

        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-6">Name</div>
            <div class="col col-span-12 md:col-span-6">Preis</div>
            <div class="col col-span-12">Beschreibung</div>
          </div>
          <div
            v-for="(product, i) in category.attributes.products.data"
            class="row grid grid-cols-12 px-2 py-2"
          >
            <div class="col col-span-12 md:col-span-6 font-bold">
              {{ product.attributes.name }}
            </div>
            <div class="col col-span-12 md:col-span-6">
              {{ product.attributes.price }} €
            </div>
            <div class="col col-span-12">
              {{ product.attributes.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Getränke",
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
      fetch("https://catalog.come-in.rocks/api/categories?populate=products")
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
