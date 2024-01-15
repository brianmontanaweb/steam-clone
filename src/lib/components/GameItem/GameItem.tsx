import { GameInfo } from "@/lib/utils/game/index.types";
import { FC } from "react";

interface GameItemProps extends GameInfo {}

const GameItem: FC<GameItemProps> = ({ name, imageUrl, description }) => (
  <div data-testid="GameItem">
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

export default GameItem;
