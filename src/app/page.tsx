"use client";

import { useState } from "react";
import ListGroup from "@/lib/components/ListGroup/ListGroup";
import BasicModal from "@/lib/components/BasicModal/BasicModal";
import { createGameInfoFromFixture } from "@/lib/mocks/fixtures";
import { GameInfo } from "@/lib/utils/game/index.types";
import AddGameForm from "@/lib/components/AddGameForm/AddGameForm";
import Button from "@/lib/components/Button/Button";

export default function Home() {
  const [gameItems, setGameItems] = useState<GameInfo[]>([
    createGameInfoFromFixture(),
    createGameInfoFromFixture(),
  ]);
  const [addGameModalEnabled, setAddGameModalEnabled] = useState(false);

  return (
    <>
      <main className="flex gap-4 min-h-screen flex-col items-center p-24 text-center">
        <ListGroup items={gameItems} heading="Your video games" />
        <Button onClick={() => setAddGameModalEnabled(true)}>
          Add a video game
        </Button>
      </main>
      {addGameModalEnabled && (
        <BasicModal closeModalHandler={() => setAddGameModalEnabled(false)}>
          <AddGameForm
            saveHandler={(item) => setGameItems([...gameItems, item])}
            cancelHandler={() => setAddGameModalEnabled(false)}
            className="flex gap-4 flex-col p-4"
          />
        </BasicModal>
      )}
    </>
  );
}
