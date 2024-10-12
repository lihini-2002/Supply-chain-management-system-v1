import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
    title:
      "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Home page for NextAdmin Dashboard Kit",
  };
  

  export default function Home() {
    return (
      <>
        <DefaultLayout>
          <h1>This is the Store Manager overview page</h1>
        </DefaultLayout>
      </>
    );
  }