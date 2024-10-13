"use client";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import SwitcherFour from "@/components/FormElements/Switchers/SwitcherFour";
import SwitcherOne from "@/components/FormElements/Switchers/SwitcherOne";
import SwitcherThree from "@/components/FormElements/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/FormElements/Switchers/SwitcherTwo";
import TableOne from "@/components/Tables/TableOne";


  

  export default function Home() {
    return (
      <>
        <DefaultLayout>
            {/* <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                    <h3 className="font-medium text-dark dark:text-white">
                    Toggle switch input
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    
                    <div className="flex justify-between items-center">
                        <h3 className="font-medium text-dark dark:text-white">Test</h3>
                        <SwitcherOne />
                    </div>
                    
                    <SwitcherTwo />
                    <SwitcherThree />
                    <SwitcherFour />
                </div>
            </div> */}
            <TableOne />
        </DefaultLayout>
      </>
    );
  }