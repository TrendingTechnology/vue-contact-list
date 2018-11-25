<template>
  <div class="table">

    <h1>Contact List</h1>

        <div class="gridHeader">
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
        
        <div v-for="contactNames of contacts"
            v-bind:key = "contactNames['.key']">
            <div  class="gridContent" v-if="!contactNames.edit">
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
                <button @click="setEditContact(contactNames['.key'])">Edit</button>
                <button @click="removeContact(contactNames['.key'])">Remove</button>
            </div>
            </div>
            <div class="gridContent" v-else>
                <div>
                    <input type="text" v-model="contactNames.name" />
                </div>
                <div>
                     <input type="text" v-model="contactNames.email" />
                </div>
                <div>
                    <input type="text" v-model="contactNames.phone" />
                </div>
                <div>
                    <button @click="saveEdit(contactNames)">Save</button>
                    <button @click="cancelEdit(contactNames['.key'])">Cancel</button>
                </div>
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
.gridHeader,
.gridContent,
.addContainer {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-auto-rows: 3fr;
  gap: 10px 5px;
}
.table {
}
</style>
