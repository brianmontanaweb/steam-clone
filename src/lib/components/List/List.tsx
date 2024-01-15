import React, { FC } from "react";
import GameItem from "../GameItem/GameItem";
import { GameInfo } from "@/lib/utils/game/index.types";

interface ListProps {
  items: GameInfo[];
  className?: string;
}

const List: FC<ListProps> = ({ items, ...restProps }) => {
  const { className } = restProps;
  return (
    <ul
      data-testid="List"
      className={`list-group ${className ? className : ""}`}
    >
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          <GameItem {...item}></GameItem>
        </li>
      ))}
    </ul>
  );
};

export default List;
