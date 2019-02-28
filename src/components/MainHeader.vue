<template>
  <header class="flex p-8 items-end">
    <img
      src="@/assets/headshot.jpg"
      alt="Adrian Rocke's face"
      class="h-12 rounded-full mr-4"
    />
    <span class="text-lg sm:text-3xl leading-none font-bold mb-2 mr-2">
      ADRIAN ROCKE
    </span>
    <div class="flex-grow h-12" />
    <button
      type="button"
      class="mb-2 w-10 h-10 bg-menu bg-6 bg-no-repeat bg-bottom lg:hidden"
      @click="toggleMenu"
    />
    <nav
      class="absolute mt-20 pin sm:pin-none sm:pin-x lg:pin-none lg:static lg:mt-0 lg:opacity-100 lg:visible"
      :class="{ invisible: !menuVisible, 'opacity-0': !menuVisible, 'transition-opacity': transitioning }"
      @transitionend="finishTransition"
    >
      <ul
        class="list-reset h-full flex flex-col items-center justify-center bg-black overflow-y-hidden sm:flex-row sm:pb-6 lg:pb-0 lg:pin-none lg:max-h-full lg:mb-0 lg:pb-0"
      >
        <li class="nav-link"><a href="/" class="no-underline">HOME</a></li>
        <li class="nav-link"><a herf="#" class="no-underline">ABOUT ME</a></li>
        <li class="nav-link"><a href="#" class="no-underline">MY WORK</a></li>
        <li class="nav-link"><a href="#" class="no-underline">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      menuVisible: false,
      transitioning: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      this.transitioning = true;
    },
    finishTransition() {
      this.transitioning = false;
    }
  }
};
</script>
