<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
</template>

<script>

import navBar from '@/components/NavBar'

export default {
  
  components : {
    navBar
  }

};
</script>

