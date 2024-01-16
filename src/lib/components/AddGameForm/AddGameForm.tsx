import React, { FC, FormHTMLAttributes } from "react";
import Input from "@/lib/components/Input/Input";
import Button from "@/lib/components/Button/Button";
import { GameInfo } from "@/lib/utils/game/index.types";

interface AddGameFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  cancelHandler: () => void;
  saveHandler: (gameInfo: GameInfo) => void;
}

const AddGameForm: FC<AddGameFormProps> = ({
  saveHandler,
  cancelHandler,
  ...restProps
}) => {
  const { className } = restProps;
  const addGameFormAction = (formData: FormData) => {
    // Using a zod validation flow can convert this into a type instead of casting
    const gameName = formData.get("gameName")?.toString() || "Game name";
    const gameDescription =
      formData.get("gameDescription")?.toString() || "Game description";

    saveHandler({
      name: gameName,
      description: gameDescription,
      imageUrl: "https://picsum.photos/200/300",
    });
    cancelHandler();
  };

  return (
    <form
      action={addGameFormAction}
      data-testid="AddGameForm"
      className={className}
    >
      <h2>Add a video game!</h2>
      <Input
        data-testid="GameName"
        name="gameName"
        type="text"
        placeholder="Add Game Name"
      />
      <Input
        data-testid="GameDescription"
        name="gameDescription"
        type="textarea"
        placeholder="Add Game Description"
      />
      <Button type="submit" className="self-start">
        Add game
      </Button>
      <Button onClick={cancelHandler} type="button" className="self-start">
        Cancel
      </Button>
    </form>
  );
};

export default AddGameForm;
