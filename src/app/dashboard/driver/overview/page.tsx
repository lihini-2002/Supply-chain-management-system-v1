import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

export const metadata: Metadata = {
    title:
      "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Home page for NextAdmin Dashboard Kit",
  };
  

  export default function Home() {
    return (
      <>
        <DefaultLayout>
          {/* <h1>This is the Driver overview page</h1> */}
          <TableTwo />
        </DefaultLayout>
      </>
    );
  }