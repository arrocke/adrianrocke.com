<template>
  <div id="app" class="flex flex-col font-sans text-white min-h-screen">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";

export default {
  name: "App",
  components: {
    MainHeader
  }
};
</script>
