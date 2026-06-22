import { NextResponse } from "next/server";
import { findBestRoute } from "@/routingEngine";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json(
    await findBestRoute(body)
  );
}
