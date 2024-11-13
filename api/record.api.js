'use server';
import record from "@/database/Record";
import { connectToDatabase } from "@/lib/moongose";

export async function postRecord(params) {
  try {
    connectToDatabase();
    console.log("data", params.data);
    const response = await record.create(params.data);
    if (!response) {
      return {
        success: false,
        message: "Failed to create record",
      };
    }
    return {
      success: true,
      message: "Record created successfully",
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getRecord() {
  try {
    connectToDatabase();
    const response = await record.find({});
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.log(error);
  }
}
