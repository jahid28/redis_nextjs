// import Note from "@/models/note";
// import { Redis } from "@upstash/redis";
import redis from "@/utils/db";
import { connectToDB } from "@/utils/mongodb";
import productModel from "@/utils/productModel";
// import productCollection from "@/utils/mongodb";
// import { connectToDB } from "@/utils/database";
// import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from 'next';
export async function POST(req) {
  try {
    const data = await req.json();
    await redis.set(`${data.key}`, `${data.value}`);
    // await redis.expire(`${data.key}`,10)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Inserted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "not Inserted",
      }),
      { status: 400 }
    );
  }
}

export async function PUT(req) {
  try {
    // const { searchParams } = new URL(req.url);
    // const query = {
    //   key: searchParams.get("key"),
    // };

    let result = null;
    // console.log("q ",searchParams)
    result = await redis.get(`exp`);

    // if (query.key != null) {
    //   result = await redis.get(`${query.key}`);
    //   console.log("h");
    // } else {
    //   const data = await req.json();
    //   result = await redis.get(`${data.key}`);
    //   console.log("y");
    // }
    // const data = await req.query;
    // console.log("ppp ",query)

    return new Response(
      JSON.stringify({
        success: true,
        message: `${result}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: `${error}`,
      }),
      { status: 400 }
    );
  }
}

export async function GET(req){
  try {
    console.log("tried")
    const redisVal=await redis.get("allproducts")
    
    if(redisVal){
      console.log("hit")
      return new Response(
        JSON.stringify({
          success: true,
          message: `${redisVal}`,
        }),
        { status: 200 }
      );
    }
    else{
      await connectToDB()
      console.log("miss")
      const data=await productModel.find()

      await redis.set("allproducts",`${data}`)
      await redis.expire("allproducts",20)

      return new Response(
        JSON.stringify({
          success: true,
          message: `${JSON.stringify(data)}`,
        }),
        { status: 200 }
      );
    }
    
  } catch (error) {
    console.log("oof",error)
    return new Response(
      JSON.stringify({
        success: false,
        message: `${error}`,
      }),
      { status: 400 }
    );
  }

}
