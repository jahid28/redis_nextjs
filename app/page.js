"use client";
// import Image from "next/image";
// import { Redis } from '@upstash/redis'
import axios from "axios";
// import { Redis } from "ioredis";
// import redis from "@/utils/db";

export default function Home() {
  const insert = async () => {
    try {
      const response = await axios.post("api/add_data", {
        key: "exp",
        value: "haahaha",
      });
      // const data = await response.json();
      console.log("wow ",response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const get = async () => {
    try {
      const response = await axios.put("api/add_data", {
        key: "exp",
      });
      // const data = await response.json();
      console.log("getting now ",response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <input type="submit" value="insert" onClick={insert} />
      <br />
      <input type="submit" value="get" onClick={get} />
    </>
  );
}
