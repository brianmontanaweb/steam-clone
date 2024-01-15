import React, { FC, FormHTMLAttributes } from "react";
import Input from "@/lib/components/Input/Input";
import Button from "@/lib/components/Button/Button";

interface AddGameFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  cancelHandler: () => void;
}

const AddGameForm: FC<AddGameFormProps> = ({ cancelHandler, ...restProps }) => {
  const { className } = restProps;
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      data-testid="AddGameForm"
      className={className}
    >
      <Input type="text" placeholder="Add Game Name" data-testid="GameName" />
      <Input
        type="textarea"
        placeholder="Add Game Description"
        data-testid="GameDescription"
      />
      <Input
        type="text"
        placeholder="Add Game Image URL"
        data-testid="GameImageURL"
      />
      <Button type="button" className="self-start">
        Add game
      </Button>
      <Button onClick={cancelHandler} type="button" className="self-start">
        Cancel
      </Button>
    </form>
  );
};

export default AddGameForm;
