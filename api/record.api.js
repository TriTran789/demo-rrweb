import RecordModel from "@/database/record.model";
import { connectToDatabase } from "@/lib/moongose";

export async function postRecord(data) {
  try {
    connectToDatabase();
    const record = await RecordModel.create(data);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(record)),
    };
  } catch (error) {
    console.log(error);
  }
}
