"use client";

import ListGroup from "@/lib/components/ListGroup/ListGroup";
import BasicModal from "@/lib/components/BasicModal/BasicModal";
import { useState } from "react";
import { createGameInfoFromFixture } from "@/lib/mocks/fixtures";
import { GameInfo } from "@/lib/utils/game/index.types";
import AddGameForm from "@/lib/components/AddGameForm/AddGameForm";

export default function Home() {
  const items: GameInfo[] = [
    createGameInfoFromFixture(),
    createGameInfoFromFixture(),
  ];
  const [addGameModalEnabled, setAddGameModalEnabled] = useState(false);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 text-center">
        <ListGroup items={items} heading="Your video games" />
        <button onClick={() => setAddGameModalEnabled(true)}>
          Add a video game
        </button>
      </main>
      {addGameModalEnabled && (
        <BasicModal>
          <AddGameForm
            cancelHandler={() => setAddGameModalEnabled(false)}
            className="flex gap-4 flex-col p-4"
          />
        </BasicModal>
      )}
    </>
  );
}
