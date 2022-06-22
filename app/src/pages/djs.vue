<template>
  <div class="vp-djs">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3">
        <div v-for="(dj, index) in djs" class="card">
          <h2>{{ dj.name }} [{{ dj.genre }}]</h2>
          <p>{{ dj.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Djs",
  data() {
    return {
      djs: [
        {
          name: "Jonathan Martz",
          genre: "Dubstep",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem ratione, laudantium quasi doloremque odio commodi consequatur, laboriosam vero atque, distinctio enim soluta earum aut accusamus reprehenderit dolores quisquam repudiandae.",
          songs: [
            {
              name: "Hello",
              interpret: "Modestep",
              time: "1:00",
              genre: ["Dubstep"],
              tags: ["Dubstep", "Modestep"],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/djs",
      label: "Dj's",
    });
  },
};
</script>
