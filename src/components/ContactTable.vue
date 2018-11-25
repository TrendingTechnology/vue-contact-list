<template>
  <div class="table">
    <h1>Contact List</h1>

        <div class="gridContainer">
        
            <div>
                Full Name
            </div>
            <div>
                Email Address
            </div>
            <div>
                Phone Number
            </div>
            <div></div>
            </div>
        
        <div class="gridContent" v-for="contactNames of contacts"
            v-bind:key = "contactNames['.key']">
            <div>
                {{contactNames.name}}
            </div>
            <div>
                {{contactNames.email}}
            </div>
            <div>
                {{contactNames.phone}}
            </div>
            <div>
                <button>Edit</button>
                <button>Remove</button>
            </div>
        </div>


        <div class = "addContainer">
            <div>
                <input type="text" v-model="name">
            </div>
             <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <input type="text" v-model="phone">
            </div>
            <div>
                <button @click="submitContact()">Add</button>
              
            </div>

        </div>
    </div>
 
</template>

<script>
import { contactsRef } from "../firebase";
export default {
  name: "ContactTable",
  data() {
    return {
      name: "",
      phone: "",
      email: ""
    };
  },
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
    },
    removeContact(key) {
      contactsRef.child(key).remove();
    },
    setEditContact(key) {
      contactsRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      contactsRef.child(key).update({ edit: false });
    },
    saveEdit(contact) {
      const key = contact[".key"];
      contactsRef.child(key).set({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        edit: false
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gridContainer,
.gridContent,
.addContainer {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-auto-rows: 3fr;
}
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
