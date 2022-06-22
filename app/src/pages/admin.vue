<template>
  <div class="vp-admin">
    <h2 class="font-bold text-xl">Admin Dashboard</h2>
    <div class="grid grid-cols-6 gap-2 space-y-5">
      <div v-for="(item, index) in items" class="col-span-6 md:col-span-2">
        <h2 class="font-bold">{{ item.name }}</h2>
        <p>{{ item.desc }}</p>
        <button class="float-right">
          <a :href="item.link" class="px-2 py-2 bg-white border border-black"
            >Zu den {{ item.label }}</a
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminDashboard",
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/admin",
      label: "Admin Dashboard",
    });
  },
  data() {
    return {
      items: [
        {
          name: "Events",
          desc: "Dort findest du die Einstellungen für die Events",
          link: "https://events.come-in.rocks",
          label: "Events",
        },
        {
          name: "Galerie",
          desc: "Dort findest du die Einstellungen für die Bilder",
          link: "https://gallery.come-in.rocks",
          label: "Bildern",
        },
        {
          name: "Katalog",
          desc: "Dort findest du die Einstellungen für die Getränke",
          link: "https://catalog.come-in.rocks",
          label: "Getränken",
        },
        {
          name: "Mitarbeiter",
          desc: "Dort findest du die Einstellungen für die Mitarbeiter",
          link: "https://members.come-in.rocks",
          label: "Mitarbeitern",
        },
      ],
    };
  },
};
</script>
