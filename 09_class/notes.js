

// function capitalizeFirst(text) {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }



// function toTitleCase(str) {
//   return str.split(' ').map(word =>
//     word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//   ).join(' ');
// }



const todoApp = {
  tasks: [],
  addTask(text) {
    this.tasks.push(text);
    this.render();
  },
  render() {
    // update the DOM
  }
};


class TodoApp {
  constructor() {
    this.tasks = [];
  }

  addTask(text) {
    this.tasks.push(text);
    this.render();
  }

  render() {
    // Clear and redraw task list
  }
}

const app = new TodoApp();
app.addTask("Learn JavaScript");
