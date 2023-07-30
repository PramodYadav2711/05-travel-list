import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    // if there's no description entered on the page then the page wouldn't submit the data and immediately return nothing
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItem(newItem);

    // setting both description and quantity to their initial state after the data hass been captured
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        // these are controlled elements, value change recorder by onChange method on the target element
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {/* important method for creating array */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
