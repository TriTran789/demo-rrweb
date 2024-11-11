'use server';
import record from "@/database/record";
import { connectToDatabase } from "@/lib/moongose";

export async function postRecord(params) {
  try {
    connectToDatabase();
    console.log("data", params.data);
    const response = await record.create(params.data);
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
  }
}
