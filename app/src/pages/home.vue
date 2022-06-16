<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 md:col-span-3 text-center">
        <h2 class="font-bold text-lg mt-12">Willkommen</h2>
        <p>
          auf der neuen Webseite des Come In's. <br />
          Hier findest du alle Informationen zu den Getränken <br />
          m unserer Musik und unseren DJ's.
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
      <div class="col-span-8"><h2>Team:</h2></div>
      <div class="col-span-4 md:col-span-2 text-center">
        <div class="card bg-white px-2 py-2">
          <img
            src="https://avatars.githubusercontent.com/u/20771653?v=4"
            alt=""
            class="w-16 rounded-full mx-auto"
          />
          <h2 class="font-bold text-lg">Jonathan Martz</h2>
          <p class="text-sm">
            Türsteher Jonathan lässt nur ordentliche Leute rein
          </p>
        </div>
      </div>
      <div class="col-span-4 md:col-span-2 text-center">
        <div class="card bg-white px-2 py-2">
          <img
            src="https://avatars.githubusercontent.com/u/20771653?v=4"
            alt=""
            class="w-16 rounded-full mx-auto"
          />
          <h2 class="font-bold text-lg">Jonathan Martz</h2>
          <p class="text-sm">
            Türsteher Jonathan lässt nur ordentliche Leute rein
          </p>
        </div>
      </div>
      <div class="col-span-4 md:col-span-2 text-center">
        <div class="card bg-white px-2 py-2">
          <img
            src="https://avatars.githubusercontent.com/u/20771653?v=4"
            alt=""
            class="w-16 rounded-full mx-auto"
          />
          <h2 class="font-bold text-lg">Jonathan Martz</h2>
          <p class="text-sm">
            Türsteher Jonathan lässt nur ordentliche Leute rein
          </p>
        </div>
      </div>
      <div class="col-span-4 md:col-span-2 text-center">
        <div class="card bg-white px-2 py-2">
          <img
            src="https://avatars.githubusercontent.com/u/20771653?v=4"
            alt=""
            class="w-16 rounded-full mx-auto"
          />
          <h2 class="font-bold text-lg">Jonathan Martz</h2>
          <p class="text-sm">
            Türsteher Jonathan lässt nur ordentliche Leute rein
          </p>
        </div>
      </div>

    </div>
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 md:col-span-5">
        <h2 class="text-xl font-bold mb-2">Events</h2>
        <div class="flyer">
          <img
            src="http://disco-come-in.de/wp-content/uploads/2013/05/IMG-20220518-WA0000-620x924.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-12 md:col-span-7">
        <h2 class="text-xl font-bold">Bilder</h2>
        <div class="images">
          <div class="grid grid-cols-6 gap-2">
            <div class="col-span-6 md:col-span-3">
              <div class="card px-2 py-2 bg-white border border-black mt-2">
                <img
                  src="http://disco-come-in.de/wp-content/gallery/halloween-2019/00000001.jpg"
                  alt=""
                />
              </div>
              <div class="card px-2 py-2 bg-white border border-black mt-2">
                <img
                  src="http://disco-come-in.de/wp-content/gallery/halloween-2019/00000003.jpg"
                  alt=""
                />
              </div>
              <div class="card px-2 py-2 bg-white border border-black mt-2">
                <img
                  src="http://disco-come-in.de/wp-content/gallery/halloween-2019/00000009.jpg"
                  alt=""
                />
              </div>
              <div class="buttons">
                <button
                  @click="gallery()"
                  class="w-full bg-gray-400 text-white font-bold mt-2 px-2 py-2"
                >
                  Zur Bilder Galerie
                </button>
              </div>
            </div>
            <div class="col-span-6 md:col-span-3">
              <div class="card px-2 py-2 bg-white border border-black mt-2">
                <img
                  src="http://disco-come-in.de/wp-content/gallery/halloween-2019/00000002.jpg"
                  alt=""
                />
              </div>
              <div class="card px-2 py-2 bg-white border border-black mt-2">
                <img
                  src="http://disco-come-in.de/wp-content/gallery/halloween-2019/00000004.jpg"
                  alt=""
                />
              </div>
              <div class="card px-2 py-2 bg-white border border-black mt-2">
                <img
                  src="http://disco-come-in.de/wp-content/gallery/halloween-2019/00000006.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3">Öffnungszeiten</div>
      <div class="col-span-6 md:col-span-3">Playlist</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      posts: [{}],
    };
  },
  mounted() {
  },
  methods: {
    gallery: function () {
      this.$router.push("/gallery");
    },
  },
};
</script>
