<template>
  <div id="app">
    <ContactTable />
  </div>
</template>

<script>
import ContactTable from "./components/ContactTable.vue";

export default {
  name: "app",
  components: {
    ContactTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2980b9;
}
</style>
