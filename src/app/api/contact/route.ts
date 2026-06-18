import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://api.hsforms.com/submissions/v3/integration/submit/246523228/6033f158-7ef9-49e8-b2e3-f5ab7cfe0e04",
    
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            name: "firstname",
            value: body.firstName,
          },
          {
            name: "lastname",
            value: body.lastName,
          },
          {
            name: "email",
            value: body.email,
          },
          {
            name: "phone",
            value: body.phone,
          },
          {
            name: "message",
            value: body.message,
          },]
       
      }),
    }
  );

  return NextResponse.json({
    success: response.ok,
  });
}