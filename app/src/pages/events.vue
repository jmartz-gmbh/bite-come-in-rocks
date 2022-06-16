<template>
  <div class="vp-gallery">
    <div class="grid grid-cols-6 gap-2">
      <div v-for="(event, index) in events" class="col-span-6 md:col-span-2">
        <div class="card bg-white px-2 py-2">
          <h2 class="font-bold mb-2">
            {{ event.attributes.name }}
          </h2>
          <img
            v-if="event.attributes.media.data"
            :src="
              'https://events.come-in.rocks' +
              event.attributes.media.data.attributes.url
            "
            alt=""
          />
          <div class="date flex justify-between mt-2">
            <span>{{ getDateFormated(event.attributes.start) }} </span>
            <span>-</span>
            <span>{{ getDateFormated(event.attributes.end) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.load();
    this.$store.commit("breadcrumb-add", {
      link: "/events",
      label: "Events",
    });
  },
  methods: {
    getDateFormated: function (tmp) {
      var complete = tmp.split("T");
      let day = complete[0];
      let clock = complete[1];
      let date = day.split("-");
      let time = clock.split(":");

      return (
        date[2] +
        "." +
        date[1] +
        "." +
        date[0] +
        " um " +
        time[0] +
        ":" +
        time[1]
      );
    },
    load: function () {
      const that = this;
      fetch("https://events.come-in.rocks/api/events?sort=start&populate=media")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.events = json.data;
        });
    },
  },
};
</script>
