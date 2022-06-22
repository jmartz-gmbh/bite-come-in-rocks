<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-lg mt-5">Willkommen</h2>
        <p>
          auf der neuen Webseite des Come In's. <br />
          Hier findest du alle Informationen zu den Getränken, <br />
          unserer Musik und unseren DJ's.
        </p>
        <br />
        <h2 class="font-bold">Öffnungszeiten</h2>
        <p>
          <span>Freitag: 18:00 - 4:00</span><br />
          <span>Samstag: 18:00 - 4:00</span>
        </p>
      </div>
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold mb-2 mt-5">Inhaber: Jonathan Martz</h2>
        <img
          src="https://avatars.githubusercontent.com/u/20771653?v=4"
          alt=""
          class="w-32 rounded-full mx-auto"
        />
        <p class="text-sm">
          Ich leite seit 2006 die bekannte Bar
          <span class="font-bold">Come in</span> in Bergneustadt
        </p>
      </div>
      <div class="col-span-6">
        <hr class="mt-5 mb-5" />
      </div>
    </div>
    <div class="grid grid-cols-8">
      <div class="col-span-8"><h2 class="text-lg font-bold">Team:</h2></div>
      <div
        v-for="(member, index) in members"
        class="col-span-4 md:col-span-2 text-center"
      >
        <div class="card bg-white px-2 py-2">
          <img
            :src="'https://members.come-in.rocks' + member.attributes.media.data.attributes.url"
            alt=""
            class="w-16 rounded-full mx-auto"
          />
          <h2 class="font-bold text-lg">{{ member.attributes.name }}</h2>
          <p class="text-sm">
            {{ member.attributes.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 md:col-span-5">
        <h2 class="text-xl font-bold mb-2">Events</h2>
        <div class="flyer">
          <img :src="images[4]" alt="" />
        </div>
      </div>
      <div class="col-span-12 md:col-span-7">
        <h2 class="text-xl font-bold">Bilder</h2>
        <div class="images">
          <div class="grid grid-cols-6 gap-2">
            <div class="col-span-6 md:col-span-3">
              <div
                v-for="(image, index) in gallery[2]"
                class="card px-2 py-2 bg-white border border-black mt-2"
              >
                <router-link :to="'/gallery/view/' + image">
                  <img :src="images[image]" alt=""
                /></router-link>
              </div>
            </div>
            <div class="col-span-6 md:col-span-3">
              <div
                v-for="(image, index) in gallery[1]"
                class="card px-2 py-2 bg-white border border-black mt-2"
              >
                <router-link :to="'/gallery/view/' + image">
                  <img :src="images[image]" alt=""
                /></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      posts: [{}],
      images: [],
      event: 4,
      gallery: {
        1: [1, 2, 3],
        2: [7, 5],
      },
      members: [],
    };
  },
  mounted() {
    this.getMediaById(this.event);
    for (let i = 0; i < this.gallery[1].length; i++) {
      console.log(i);
      this.getMediaById(this.gallery[1][i]);
    }
    for (let i = 0; i < this.gallery[2].length; i++) {
      this.getMediaById(this.gallery[2][i]);
    }
    this.loadMembers();
  },
  methods: {
    gotoGallery: function () {
      this.$router.push("/gallery");
    },
    loadMembers: function () {
      const that = this;
      fetch("https://members.come-in.rocks/api/members?populate=media")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.members = json.data;
        });
    },
    getMediaById(id) {
      const that = this;
      fetch("https://gallery.come-in.rocks/api/upload/files/" + id)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          that.images[id] = "https://gallery.come-in.rocks" + json.url;
        });
    },
  },
};
</script>
