<template>
  <div id="app" class="flex flex-col font-sans text-white min-h-screen">
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
