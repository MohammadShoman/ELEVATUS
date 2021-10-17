import React from "react";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import "./add.css";
const AddItem = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  //-------------   add item   -------------
  const add = (e) => {
    e.preventDefault();

    if (name) {
      setData([...data, name]);
      setName("");
    }
  };

  //-------------   delete item   -------------
  const deleteItem = (index) => {
    data.splice(index, 1);
    setData([...data]);
    console.log(data, index);
  };

  return (
    <>
      <div>
        <div className="search-add">
          <input
            type="text"
            placeholder="Search item"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />

          <form onSubmit={add}>
            <input
              className="search"
              name="name"
              placeholder="add item"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button>
              <BsFillPlusCircleFill
                type="submit"
                style={{ color: "B0D6E6", marginLeft: "10" }}
                size={35}
              />
            </button>
          </form>
        </div>

        {/* -------------   search and add   --------------*/}
        {data &&
          data
            .filter((item) => {
              if (searchItem == "") {
                return item;
              } else if (
                item.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return item;
              }
            })
            .map((elem, i) => {
              return (
                <div className="items" key={i}>
                  <p>{elem}</p>
                  <button
                    style={{ float: "right" }}
                    onClick={() => {
                      deleteItem(i);
                    }}
                  >
                    <AiFillMinusCircle
                      type="submit"
                      style={{ color: "FC0000", marginTop: "10" }}
                      size={35}
                    />
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
};
export default AddItem;
