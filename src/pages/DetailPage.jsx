import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  // axios.get;
  // axios.post;
  // axios.patch;
  // axios.delete;
  const getdata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Card name={data.name} id={data.id} price={data.price} />
    </>
  );
};

export default DetailPage;
