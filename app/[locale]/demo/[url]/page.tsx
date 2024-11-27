import React from "react";

type Params = Promise<{ url: string }>;

export default async function DemoPage({ params }: { params: Params }) {
  const { url } = await params;
  if (!url) {
    return null;
  }
  return (
    <div>
      {/* Embed the page */}
      <iframe
        src={`https://${url}`}
        style={{ width: "100%", height: "100vh" }}
      ></iframe>
      <h1>{url}</h1>
      <p>This is a demo page</p>
    </div>
  );
}
