import React from "react";
import { useState} from "react";
import './add.css'
const AddItem = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (name) {
      setData([...data, name]);
      setName("");
    }
  };

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
          placeholder="Search.."
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
          <button>+</button>
        </form>
        </div>
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
                <div key={i} style={{ display: "flex" }}>
                  <h1>{elem}</h1>
                  <button
                    onClick={() => {
                      deleteItem(i);
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
};
export default AddItem;
