# Vue 3 Blog Application

## 📌 Project Description

This project is a simple **Blog Application** built with **Vue 3** using the **Composition API**.  
The application demonstrates core Vue concepts such as directives, component-based architecture, reactivity, props, emits, and parent–child communication.

The project was created as an educational assignment to practice Vue fundamentals and good reactivity practices.

---

## 🧩 Project Structure

src/
│
├─ App.vue
├─ main.js
│
├─ components/
│ ├─ NavBar.vue
│ ├─ BlogPage.vue
│ ├─ BlogList.vue
│ ├─ BlogPost.vue
│ ├─ PostFilter.vue
│ ├─ CommentList.vue
│ └─ CommentForm.vue


The application consists of **7 components**, which satisfies the requirement of having 6–8 components.

---

## 🧠 Component Responsibilities & Communication

### App.vue
- Root component
- Renders the main blog page

### BlogPage.vue
- Main parent component
- Stores application state (posts, search query)
- Uses `ref`, `computed`, and `watch`
- Passes data to child components via **props**
- Handles events emitted from child components

### NavBar.vue
- Displays navigation
- Uses conditional rendering with `v-if`
- Handles click events with `v-on`

### PostFilter.vue
- Input field for searching posts
- Uses `v-model` for two-way data binding
- Emits `update:modelValue` to parent

### BlogList.vue
- Displays a list of blog posts
- Uses `v-for`
- Passes each post to `BlogPost` via props
- Re-emits events to the parent

### BlogPost.vue
- Displays a single blog post
- Receives post data via props
- Emits events when a new comment is added

### CommentList.vue
- Displays comments for a post
- Uses `v-for` and `v-show`

### CommentForm.vue
- Allows adding new comments
- Uses `ref`, `v-model`, and `emit`

---

## 🔁 Directives Used

The project uses all required Vue directives:

- `v-bind` — binding props and attributes
- `v-if / v-else` — conditional rendering
- `v-show` — conditional visibility
- `v-for` — rendering lists
- `v-on` — event handling
- `v-model` — two-way data binding

---

## ⚙️ Reactivity & Composition API

The project demonstrates advanced reactivity features:

- `ref` — reactive primitive values
- `computed` — derived reactive state (filtered posts)
- `watch` — observing reactive changes (search input)
- Proper reactivity practices:
  - Props are never mutated directly
  - All state changes occur in parent components

---

## 🔄 Parent–Child Communication

- **Props** are used to pass data from parent to child components
- **Emits** are used to send events from child to parent
- Custom events allow adding comments and updating search state

---

## 🎯 Educational Goals Achieved

✔ Component-based architecture  
✔ Vue directives usage  
✔ Props & emits communication  
✔ Composition API reactivity  
✔ Clean separation of concerns  

---

## 🛠 Technologies Used

- Vue 3
- Composition API
- Single File Components (SFC)

---

## 📚 Conclusion

This project demonstrates a clear understanding of Vue 3 fundamentals, component interaction, and reactivity patterns. It follows best practices and meets all the requirements of the assignment.
