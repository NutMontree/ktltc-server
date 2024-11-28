import React from "react";
import TicketCard from "@/app/(components)/TicketCard";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Post = async () => {
  const data = await getTickets();

  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }

  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <>
      <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div icon={faHome} className="icon" />
          </Link>
          <Link href="/TicketPage/new">
            <div icon={faTicket} className="icon" />
          </Link>
        </div>
        <div>
          <p className=" text-default-text">Ktltc Post</p>
        </div>
      </nav>
      <div className="p-5 flex-grow overflow-y-auto bg-page text-default-text">
        <div>
          {tickets &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                  {tickets
                    .filter((ticket) => ticket.category === uniqueCategory)
                    .map((filteredTicket, _index) => (
                      <TicketCard
                        id={_index}
                        key={_index}
                        ticket={filteredTicket}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Post;
