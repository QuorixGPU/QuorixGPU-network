import { NextResponse } from "next/server";
import { runInference } from "@/inferenceEngine";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await runInference(
    body.prompt
  );

  return NextResponse.json(result);
}
