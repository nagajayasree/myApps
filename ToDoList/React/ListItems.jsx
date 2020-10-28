import React from "react";
import "./ListItems.css";

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          {item.text}
          <span>
            <i
              className="icon fa fa-trash"
              aria-hidden="true"
              onClick={() => props.deleteItem(item.key)}
            ></i>
          </span>
        </p>
      </div>
    );
  });
  return <>{listItems}</>;
};

export default ListItems;
