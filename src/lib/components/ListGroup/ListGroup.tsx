"use client";

import { FC } from "react";
import List from "@/lib/components/List/List";
import { GameInfo } from "@/lib/utils/game/index.types";

interface ListGroupProps {
  items: GameInfo[];
  heading?: string;
}

const ListGroup: FC<ListGroupProps> = ({
  items,
  heading = "Your video game library",
}) => {
  const getMessage = () => {
    return items.length === 0 && <p>No games listed</p>;
  };

  return (
    <>
      <h2>{heading}</h2>
      {getMessage()}
      <section data-testid="ListGroup">
        <List className="w-full grid grid-cols-4 gap-4" items={items}></List>
      </section>
    </>
  );
};

export default ListGroup;
