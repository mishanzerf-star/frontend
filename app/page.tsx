"use client";

import { useState } from "react";

export default function Home() {
  const [connected, setConnected] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}