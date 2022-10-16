type Props = {
  result: string;
};

export const Result = ({ result }: Props) => {
  return (
    <div className="h-[100px] flex items-end justify-end p-2">
      <input
        className="text-white/80 text-4xl bg-transparent w-full outline-none text-right"
        type="text"
        dir="ltr"
        value={result}
      />
    </div>
  );
};
