import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import TableOne from "@/components/Tables/TableOne";
import TableTwo from "@/components/Tables/TableTwo";
import TableThree from "@/components/Tables/TableThree";
import TableThreeFinTrain from "@/components/Tables/TableThreeFinTrain";

export const metadata: Metadata = {
    title:
      "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
    description: "This is Next.js Home page for NextAdmin Dashboard Kit",
  };
  

  export default function Home() {
    return (
      <>
        <DefaultLayout>
            <h1>Trains to go</h1>
            <TableThreeFinTrain />
          {/* <TableTwo /> */}
        </DefaultLayout>
      </>
    );
  }