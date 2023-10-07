import "./App.css";

import IconDetails from "./Components/IconDetails/IconDetails";
import Main from "./Components/MainComponent/Main";
import { useState } from "react";

function App() {
  const [ticketType, setTicketType] = useState("Standard");
  const [quanityOfTicker, setQuantityOfTicker] = useState("");

  const ticketTypeHandler = (event) => {
    setTicketType(event.target.value);
  };

  const quantityHandler = (event) => {
    setQuantityOfTicker(event.target.value);
  };

  return (
    <div className="outer_container">
      
      <div className="main_container">
        <div className="main_container_inner">
          <div className="App">
            <div className="dropdown">
              <label htmlFor="tickettype">Ticket </label>
              <select
                id="tickettype"
                value={ticketType}
                onChange={ticketTypeHandler}
              >
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

              <label htmlFor="Quantity">How Many Seats? :</label>
              <select
                id="Quantity"
                value={quanityOfTicker}
                onChange={quantityHandler}
              >
                <option value="">QTY</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="left">
              <Main
                type={ticketType}
                quanityOfTicker={quanityOfTicker}
                resetTicker={setQuantityOfTicker}
              />
            </div>
            <IconDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
