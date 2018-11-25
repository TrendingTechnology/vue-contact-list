<template>
  <div class="table">
    <h1>Contact List</h1>
    <table>
        <tr>
            <th>
                Full Name
            </th>
            <th>
                Email Address
            </th>
            <th>
                Phone Number
            </th>
            <th></th>
        </tr>
        <tr v-for="contactNames of contacts"
            v-bind:key = "contactNames['.key']">
            <td>
                    {{contactNames.name}}
            </td>
                        <td>
                {{contactNames.email}}
            </td>
                        <td>
                {{contactNames.phone}}
            </td>
            <td>
                <button>Edit</button>
                <button>Remove</button>
            </td>
        </tr>


                <tr>
            <td>
                <input type="text" v-model="name">
            </td>
                        <td>
                <input type="text" v-model="email">
            </td>
                        <td>
                <input type="text" v-model="phone">
            </td>
            <td>
                <button @click="submitContact()">Add</button>
              
            </td>

        </tr>
    </table>
  </div>
</template>

<script>
import { contactsRef } from "../firebase";
export default {
  name: "ContactTable",
  firebase: {
    contacts: contactsRef
  },
  methods: {
    submitContact() {
      contactsRef.push({
        name: this.name,
        phone: this.phone,
        email: this.email,
        edit: false
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
