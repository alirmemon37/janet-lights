"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col text-center gap-8">
      <h1 className="head_text">{error.message}</h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={reset} className="black_btn">
          Try again
        </button>
        <button onClick={() => router.push("/")} className="outline_btn">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
