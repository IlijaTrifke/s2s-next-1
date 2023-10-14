import { NextResponse } from "next/server";
import usersData from "@/usersData.json";

export async function GET() {
  return NextResponse.json(usersData);
}
