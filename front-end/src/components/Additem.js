import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Additem = () => {
  const [post, setPost] = useState([]);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [IMG, setIMG] = useState("");
  const [fromDate, setStartDate] = useState("");
  const [toDate, setEndDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const CreateAllPost = (infoArgumnt) => {
    console.log(infoArgumnt);

    axios
      .post("http://localhost:5000/post/create", infoArgumnt)
      .then((response) => {
        console.log("response", response);
        const newArray = [...post];
        newArray.push(response.data);
        setPost(newArray);
      })
      .catch((err) => {
        console.log("RESULT: ", err);
      });
  };

  const SavePost = () => {
    CreateAllPost({
      price: price,
      category: category,
      title: title,
      description: description,
      location: location,
      fromdate: fromDate,
      todate: toDate,
      PhoneNumber: phoneNumber,
      img_url: IMG,
    });
  };
  return (
    <div className="padding-all">
      <div className="design">
        <div className="mail-form-agile">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Name What are you renting"
          ></input>

          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="Number"
            placeholder="Price"
          ></input>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="Select Category"
          >
            <option>Tools</option>
            <option>Device</option>
            <option>Electrical Machines</option>
            <option>Instrument</option>
            <option>apparatus</option>
          </select>
          <select
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option value="0">Select City:</option>
            <option value="1">Amman</option>
            <option>Zarqa</option>
            <option>Irbid</option>
            <option>Karak</option>
            <option>Tafila</option>
          </select>
          <span>Start Date</span>
          <input
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            type="Date"
          ></input>
          <span>End Date</span>
          <input
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            type="Date"
          ></input>
          <input
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="tel"
            placeholder="Phone Number"
          ></input>
          <textarea
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <input
            onChange={(e) => {
              setIMG(e.target.value);
            }}
            type="file"
            name="image"
          ></input>
          <Link className="link" to="/showpost">
            <input onClick={SavePost} type="submit" value="Save"></input>
          </Link>
        </div>
        <div className="clear"> </div>
      </div>
    </div>
  );
};
export default Additem;
