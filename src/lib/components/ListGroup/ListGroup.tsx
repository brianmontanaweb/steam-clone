"use client";

import { FC, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading?: string;
  onSelectItem: (item: string) => void;
}

const ListGroup: FC<ListGroupProps> = ({
  items,
  heading = "List",
  onSelectItem,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getMessage = () => {
    return items.length === 0 && <p>No list</p>;
  };

  return (
    <>
      <h2>{heading}</h2>
      {getMessage()}
      <ul data-testid="ListGroup" className="list-group">
        {items.map((item, index) => (
          <li
            key={item + index}
            className={`list-group-item ${
              selectedIndex === index ? "bg-blue-600" : ""
            }`}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
