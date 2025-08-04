// Toggling a class
console.log("=== Toggling a Class ===");

const pic = document.querySelector(".nice");

// This will add 'round' if it's not there, and remove it if it is.
pic.classList.toggle('round');
console.log('ClassList After First Toggle:', pic.classList);