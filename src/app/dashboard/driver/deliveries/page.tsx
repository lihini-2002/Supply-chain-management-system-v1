import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import TableOne from "@/components/Tables/TableOne";
import TableTwo from "@/components/Tables/TableTwo";
import Image from "next/image";
import { Product } from "@/types/product";


type Delivery = {
    deliveryId: string;
    truckId: string;
    assistantDriver: string;
    routeId: string;
    departureTime: string;
    departureDate: string;
};

// Updated dummy data to match the new Delivery type
const deliveryData: Delivery[] = [
    {
        deliveryId: "D001",
        truckId: "T001",
        assistantDriver: "John Doe",
        routeId: "R001",
        departureTime: "08:00 AM",
        departureDate: "2023-10-01",
    },
    {
        deliveryId: "D002",
        truckId: "T002",
        assistantDriver: "Jane Smith",
        routeId: "R002",
        departureTime: "09:00 AM",
        departureDate: "2023-10-01",
    },
    // ... additional dummy data ...
];

export default function Home() {
    return (
      <>
        <DefaultLayout>
            {/* <h1>This is the orders page</h1> */}
            <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                <div className="px-4 py-6 md:px-6 xl:px-9">
                    <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
                    Assigned Deliveries
                    </h4>
                </div>

                <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-12 md:px-6 2xl:px-7.5">
                    <div className="col-span-2 flex items-center">
                    <p className="font-medium">Delivery ID</p>
                    </div>
                    <div className="col-span-2 flex items-center">
                    <p className="font-medium">Truck ID</p>
                    </div>
                    <div className="col-span-2 flex items-center">
                    <p className="font-medium">Assistant Driver</p>
                    </div>
                    <div className="col-span-2 flex items-center">
                    <p className="font-medium">Route ID</p>
                    </div>
                    <div className="col-span-2 flex items-center">
                    <p className="font-medium">Departure Time</p>
                    </div>
                    <div className="col-span-2 flex items-center">
                    <p className="font-medium">Departure Date</p>
                    </div>
                </div>

                {deliveryData.map((delivery, key) => (
                    <div
                    className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-dark-3 sm:grid-cols-12 md:px-6 2xl:px-7.5"
                    key={key}
                    >
                    <div className="col-span-2 flex items-center">
                        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                            {delivery.deliveryId}
                        </p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                            {delivery.truckId}
                        </p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                            {delivery.assistantDriver}
                        </p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                            {delivery.routeId}
                        </p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                            {delivery.departureTime}
                        </p>
                    </div>
                    <div className="col-span-2 flex items-center">
                        <p className="text-body-sm font-medium text-dark dark:text-dark-6">
                            {delivery.departureDate}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
        </DefaultLayout>
      </>
    );
  }