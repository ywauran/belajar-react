import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import ImageOne from "../assets/img-one.png";
import axios from "axios";

const ExplorePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setData(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 gap-y-4">
        {data.map((item, number) => (
          <Card name={item.name} price={item.price} id={item.id} />
        ))}
      </div>
    </>
  );
};

export default ExplorePage;
