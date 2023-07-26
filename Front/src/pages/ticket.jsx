import { useEffect } from "react";
import TicketCard from "../components/ticket/TicketCard";
import ticketIcon from "../img/ticket.png";
import "./ticket.css";
import Navbar from "../components/navbar/Navb";
import TicketModal from "../components/ticket/TicketModal";

function Ticket() {
  useEffect(() => {
    document.title = "Ticket";
  });
  if (localStorage.getItem("isAdmin") === "true") {
    return (
      <>
        <Navbar active="ticket" />
        <div className="container">
          <img
            src={ticketIcon}
            alt="ticketIcon"
            className="ticketIcon mb-4 mt-4"
          />
          <div className="TicketContainer">
            <TicketCard />
            <TicketModal />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar active="ticket" />
        <div className="container">
          <img
            src={ticketIcon}
            alt="ticketIcon"
            className="ticketIcon mb-4 mt-4"
          />
          <TicketCard />
        </div>
      </>
    );
  }
}
export default Ticket;
