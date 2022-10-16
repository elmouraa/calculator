import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";
import { numericKeys } from "./utils";

type Key = {
  value: string;
  color: "primary" | "secondary";
  callback?: (expression: string) => string;
};

const keysOperations: Key[] = [
  {
    value: "x",
    color: "primary",
  },
  {
    value: "÷",
    color: "primary",
  },
  {
    value: "+",
    color: "primary",
  },
  {
    value: "-",
    color: "primary",
  },
  {
    value: "=",
    color: "primary",
  },
];

const keys = [...keysOperations, ...numericKeys];

type Props = {
  onKeyPress: Dispatch<SetStateAction<string>>;
};

export const Keyboard = ({ onKeyPress }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-0.5">
      {keys.map(({ value, color, callback }) => (
        <Button
          color={color}
          onClick={() => onKeyPress(callback || ((curr: string) => curr))}
        >
          {value}
        </Button>
      ))}
    </div>
  );
};
