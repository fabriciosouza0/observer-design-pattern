export default class Observable {
  observable; // Array of subscribers

  constructor() {
    this.observable = []; // Initializing with an empty array
  }

  /* 
    @function subscribe
    Adds a new subscriber to the observable array.
    @param {Function} subscriber - The function to be subscribed.
    @return {void}
  */
  subscribe(subscriber) {
    this.observable.push(subscriber);
  }

  /* 
    @function unsubscribe
    Removes a subscriber from the observable array.
    @param {Function} subscriber - The function to be unsubscribed.
    @return {void}
  */
  unsubscribe(subscriber) {
    this.observable = this.observable.filter((s) => s !== subscriber);
  }

  /* 
    @function notify
    Iterates through the observable array and delivers the data to all subscribed subscribers.
    @param {any} data - The data to be sent to subscribers.
    @return {void}
  */
  notify(data) {
    this.observable.forEach((observer) => observer(data));
  }

  /* 
    @function isSubscribed
    Checks if the observable already contains an identical subscriber.
    @param {Function} subscriber - The function to check.
    @return {boolean} - Returns true if the subscriber exists, otherwise false.
  */
  isSubscribed(subscriber) {
    return this.observable.includes(subscriber);
  }
}
