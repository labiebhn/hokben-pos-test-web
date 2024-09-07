import React, { FC } from "react";

export interface CardSummaryProps {
  label: string;
  value: string;
}

const CardSummary: FC<CardSummaryProps> = (props) => {
  const { label, value } = props;
  return (
    <div className="p-4 border-2 rounded-md w-[500px]">
      <p className="text-lg">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default CardSummary;
