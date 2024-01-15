import { GameInfo } from "@/lib/utils/game/index.types";

export const createGameInfoFromFixture = (
  gameInfo?: Partial<GameInfo>
): GameInfo => ({
  name: "Video Game",
  description: "Lorem ipsum",
  imageUrl: "https://picsum.photos/200/300",
  ...gameInfo,
});
