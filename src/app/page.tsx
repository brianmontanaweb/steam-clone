"use client";

import Alert from "@/lib/components/Alert/Alert";
import ListGroup from "@/lib/components/ListGroup/ListGroup";
import { useState } from "react";

export default function Home() {
  const items: string[] = ["New York", "Chicago", "Los Angles"];
  const [alertEnabled, setAlertEnabled] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-center">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={() => setAlertEnabled(!alertEnabled)}
      />
      {alertEnabled && <Alert>OH WOW!</Alert>}
    </main>
  );
}
