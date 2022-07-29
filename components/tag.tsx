import clsx from "clsx";
import { ReactNode, useState } from "react";
import { Switch } from "@headlessui/react";

type TagProps = {
  text: String;
  selected?: boolean;
};

export default function Tag({ text, selected = false }: TagProps) {
  const [isSelected, setIsSelected] = useState(selected);

  return (
    <div className="py-16">
      <Switch
        checked={isSelected}
        onChange={setIsSelected}
        className={clsx(
          "inline-block text-black font-bold py-4 px-2 rounded-full",
          {
            "bg-tangie-mint-500 border-2 box-border border-transparent": isSelected,
            "border-tangie-mint-500 border-2 box-border border-black": !isSelected,
          }
        )}
      >
        <div>{text}</div>
      </Switch>
    </div>
  );
}
