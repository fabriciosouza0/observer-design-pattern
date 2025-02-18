import Observable from "./observable.js";

const observer = new Observable(); // Creates a new instance of Observable

// Mapping DOM elements
const input = document.getElementById("input_text");
const subBtn1 = document.getElementById("sub_btn_1");
const subBtn2 = document.getElementById("sub_btn_2");
const subBtn3 = document.getElementById("sub_btn_3");
const unSubBtn1 = document.getElementById("un_sub_btn_1");
const unSubBtn2 = document.getElementById("un_sub_btn_2");
const unSubBtn3 = document.getElementById("un_sub_btn_3");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

// Function to update text in DOM elements
const updateText1 = (text) => (text1.innerText = text);
const updateText2 = (text) => (text2.innerText = text);
const updateText3 = (text) => (text3.innerText = text);

// Subscribing functions to the observable
observer.subscribe(updateText1);
observer.subscribe(updateText2);
observer.subscribe(updateText3);

// Adds an event listener for keyup on the input element
input.addEventListener("keyup", (event) => {
  const text = event.target.value;
  observer.notify(text); // Notifies all subscribers when the user types in the input field
});

// Event listeners to subscribe/unsubscribe subscribers using buttons
subBtn1.addEventListener("click", () => {
  if (observer.isSubscribed(updateText1)) return;

  observer.subscribe(updateText1);
});

subBtn2.addEventListener("click", () => {
  if (observer.isSubscribed(updateText2)) return;

  observer.subscribe(updateText2);
});

subBtn3.addEventListener("click", () => {
  if (observer.isSubscribed(updateText3)) return;

  observer.subscribe(updateText3);
});

unSubBtn1.addEventListener("click", () => {
  if (!observer.isSubscribed(updateText1)) return;

  observer.unsubscribe(updateText1);
});

unSubBtn2.addEventListener("click", () => {
  if (!observer.isSubscribed(updateText2)) return;

  observer.unsubscribe(updateText2);
});

unSubBtn3.addEventListener("click", () => {
  if (!observer.isSubscribed(updateText3)) return;

  observer.unsubscribe(updateText3);
});
