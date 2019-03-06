<template>
  <header class="flex px-6 py-4 sm:py-6 lg:p-8 items-end">
    <img
      src="@/assets/headshot.jpg"
      alt="Adrian Rocke's face"
      class="h-12 rounded-full mr-4"
    />
    <span class="text-xl xs:text-3xl leading-none font-bold mb-2 mr-2">
      ADRIAN ROCKE
    </span>
    <div class="flex-grow h-12" />
    <button
      type="button"
      class="mb-2 w-10 h-10 bg-menu bg-no-repeat bg-bottom lg:hidden"
      @click="toggleMenu"
    />
    <nav
      class="fixed pin lg:pin-none lg:static lg:mt-0 lg:opacity-100 lg:visible"
      :class="{
        invisible: !menuVisible,
        'opacity-0': !menuVisible,
        'transition-opacity': transitioning
      }"
      @click="hideMenu"
    >
      <button
        type="button"
        class="mt-4 mr-6 w-10 h-10 bg-menu bg-no-repeat bg-bottom absolute pin-t pin-r lg:hidden"
        @click="toggleMenu"
      />
      <ul
        class="list-reset h-full flex flex-col items-center bg-black justify-center overflow-y-hidden lg:flex-row lg:pin-none lg:mb-0 lg:pb-0"
      >
        <li class="nav-link">
          <router-link :to="{ name: 'home' }" class="no-underline"
            >HOME</router-link
          >
        </li>
        <li class="nav-link">
          <router-link :to="{ name: 'home' }" class="no-underline"
            >ABOUT ME</router-link
          >
        </li>
        <li class="nav-link">
          <router-link :to="{ name: 'my-work' }" class="no-underline"
            >MY WORK</router-link
          >
        </li>
        <li class="nav-link">
          <router-link :to="{ name: 'home' }" class="no-underline"
            >CONNECT</router-link
          >
        </li>
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
      this.setScrollLock()
      setTimeout(() => {
        this.transitioning = false;
      }, 1000)
    },
    hideMenu() {
      this.menuVisible = false;
      this.transitioning = true;
      this.setScrollLock()
      setTimeout(() => {
        this.transitioning = false;
      }, 1000)
    },
    setScrollLock() {
      document.body.classList.toggle('overflow-hidden', this.menuVisible)
    }
  }
};
</script>
