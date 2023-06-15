<template>
    <div class="notes">
        <h1>Notes</h1>
        <ul>
            <li v-for="note in notes">
                <h2>{{ note.title }}</h2>
                <p>{{ note.body }}</p>
            </li>
        </ul>
        <input v-model="newNoteTitle" placeholder="New Note Title">
        <textarea v-model="newNoteBody" placeholder="New Note Body"></textarea>
        <button @click="addNewNote">Add New Note</button>
    </div>
</template>
  
<script>
  export default {
    name: 'Note',
    data() {
      return {
        notes: [],
        newNoteTitle: "",
        newNoteBody: ""
      }
    },
    methods: {
        addNewNote() {
  // Create a new note object
  const newNote = {
    title: this.newNoteTitle,
    body: this.newNoteBody,
  };

  // Add the new note to the store
  this.notes.push(newNote);

  // Clear the input fields
  this.newNoteTitle = "";
  this.newNoteBody = "";
}
    }
  }
  </script>