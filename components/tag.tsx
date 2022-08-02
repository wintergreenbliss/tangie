import clsx from "clsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";

type TagProps = {
  text: String;
  selected?: boolean;
};

export const Tag = ({ text, selected = false }: TagProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  return (
    <Switch
      checked={isSelected}
      onChange={setIsSelected}
      className={clsx(
        "inline-block text-black font-bold py-4 px-5 rounded-full border-2",
        {
          "bg-tangie-blurple-500 border-transparent text-white": isSelected,
          "border-tangie-blurple-500 text-green": !isSelected,
        }
      )}
    >
      <div>{text}</div>
    </Switch>
  );
};

export default Tag;
