import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import ImageOne from "../assets/img-one.png";
import ImageTwo from "../assets/img-two.png";
import axios from "axios";

const ExplorePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      console.log(response);
      setData(response.data);
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // const data = [
  //   {
  //     image: ImageOne,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  //   {
  //     image: ImageTwo,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  //   {
  //     image: ImageOne,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  //   {
  //     image: ImageOne,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  //   {
  //     image: ImageOne,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  //   {
  //     image: ImageOne,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  //   {
  //     image: ImageOne,
  //     name: "Vadim Bogulov",
  //     picture: "Monalisa Digital Arts #001",
  //     price: 0.01,
  //   },
  // ];
  return (
    <>
      {/* <Header /> */}
      <div className="grid grid-cols-2 gap-y-4">
        {data.map((item) => (
          <Card name={item.name} price={item.price} id={item.id} />
        ))}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4418624979676!2d124.87020481066048!3d1.5050641610507072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870aae543928bb%3A0x70d2e63601685dec!2sCatholic%20University%20of%20De%20La%20Salle%20Manado!5e0!3m2!1sen!2sid!4v1681692876457!5m2!1sen!2sid"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ExplorePage;
