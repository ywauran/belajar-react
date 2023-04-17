import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setName(response.data.name);
      setPrice(response.data.price);
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {name.length !== 0 && price !== 0 ? (
        <>
          <Card name={name} price={price} />
        </>
      ) : (
        <>
          <h1>Tidak data</h1>
        </>
      )}
    </>
  );
};

export default DetailPage;
