import { useState } from "react";
import { Keyboard } from "./Keyboard";
import { Result } from "./Result";

export const Calculator = () => {
  const [expression, setExpression] = useState("1 + 2");
  return (
    <div className="bg-gray-800 max-w-[256px] w-full rounded border border-white/10 p-0.5">
      <Result result={expression} />
      <Keyboard onKeyPress={setExpression} />
    </div>
  );
};
