import React, { useState, useEffect } from "react";
import "../style/store.css";
import { MdDelete } from "react-icons/md";

function Store({ cartItems = [], handleDeleteFromCart }) {
  const TelegramBotToken = "5234710753:AAEY6A7bw3TW1ZI4EFLca2WVqXILSpG-TUU";
  const ChatID = 916210487;

  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState("");

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item._id] = item.quantity || 1; // Initialize with item.quantity if available
      return acc;
    }, {})
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = cartItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleQuantityChange = (itemId, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(1, prevQuantities[itemId] + change),
    }));
  };

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * (quantities[item._id] || 1);
    }, 0);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [quantities, cartItems]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!firstName || number.length < 9) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const order = {
      firstName: firstName,
      phone: number,
      items: cartItems.map((item) => ({
        name: item.name,
        image: item.image, // Use item.image directly from cartItems
        quantity: quantities[item._id],
      })),
    };

    localStorage.setItem("order", JSON.stringify(order));

    const message = `Ism: ${firstName}\nTelefon number: ${number}\nJami narx: $${totalPrice}`;

    try {
      for (const item of order.items) {
        // Fetch the image from localStorage
        const imageBlob = await fetch(item.image).then((res) => res.blob());

        // Create form data to send the photo
        const formData = new FormData();
        formData.append("chat_id", ChatID);
        formData.append("photo", imageBlob, "photo.jpg");
        formData.append("caption", `${item.name} - ${item.quantity} ta`);

        // Send the photo to Telegram
        await fetch(
          `https://api.telegram.org/bot${TelegramBotToken}/sendPhoto`,
          {
            method: "POST",
            body: formData,
          }
        );
      }

      // Send the message with order details
      await fetch(
        `https://api.telegram.org/bot${TelegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: ChatID,
            text: message,
          }),
        }
      );

      // Clear input fields after sending the message
      setFirstName("");
      setNumber("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="section-store">
      <form className="container-store" onSubmit={handleSubmit}>
        <div className="store-main">
          <div className="storeInput">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="store-input"
              type="text"
              placeholder="Name"
              required
            />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="store-input"
              type="text"
              placeholder="Phone"
              required
              minLength="9"
            />
          </div>
          <div className="store-items">
            {currentItems.map((item) => (
              <div key={item._id} className="store-item">
                <div className="storeflex">
                  <img
                    className="stores-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <p className="stores-name">{item.name}</p>
                </div>
                <div className="storeflex2">
                  <p className="stores-price">${item.price}</p>

                  <div className="stock-add stock-margin">
                    <button onClick={() => handleQuantityChange(item._id, 1)}>
                      +
                    </button>
                    <p>{quantities[item._id]}</p>
                    <button onClick={() => handleQuantityChange(item._id, -1)}>
                      -
                    </button>
                  </div>
                  <MdDelete
                    className="hidden-delete"
                    onClick={() => handleDeleteFromCart(item._id)}
                  />
                </div>

                <button
                  className="store-delete"
                  onClick={() => handleDeleteFromCart(item._id)}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                className={`pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="total-price">
          <div className="totalprice-flex">
            <p className="totalprice-name">Total: </p>
            <p className="totalprice-count">${totalPrice}</p>
          </div>
          <div>
            <input
              type="submit"
              value="Place Order!"
              className="stores-button"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Store;
