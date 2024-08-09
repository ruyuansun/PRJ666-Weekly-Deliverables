"use client";

import { useEffect, useState } from "react";
import Sidemenu from "../../components/SideMenu";
import { BACKEND_URL } from "../constants";

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    async function fetchSubscription() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${BACKEND_URL}/api/getSubscription`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setSubscription(data);
        } else {
          setSubscription(null);
        }
      } catch (error) {
        console.error("Error fetching subscription:", error);
      }
    }

    fetchSubscription();
  }, []);

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex">
        <Sidemenu />
        <div className="w-8/12 px-10">
          <h1 className="text-3xl font-semibold mb-5">Subscription Level</h1>
          {subscription ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Current Level: {subscription.level}
              </h2>
              <p className="text-lg mb-2">{subscription.description}</p>
              <p className="text-lg font-semibold">
                Price: ${subscription.price}
              </p>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg">No subscription found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
