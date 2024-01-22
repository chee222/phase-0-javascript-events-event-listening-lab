function addingEventListener() {
  // Select the element
  const myButton = document.getElementById('myButton');

  // Define the event listener function
  function handleClick() {
    console.log('Button clicked!');
  }

  // Bind the event listener to the element
  myButton.addEventListener('click', handleClick);
}

// test.js
describe("addingEventListener()", () => {
  it("binds an event listener", () => {
    // Spy on the addEventListener method
    const addEventListenerSpy = sinon.spy(EventTarget.prototype, 'addEventListener');

    // Call the addingEventListener function
    addingEventListener();

    // Expect the addEventListener method to have been called
    expect(addEventListenerSpy.called).to.be.true;

    // Restore the original method
    addEventListenerSpy.restore();
  });
});
