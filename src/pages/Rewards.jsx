import React from "react";
import { Button } from "../components/ui/Button"; 
import RollingGallery from './RollingGallery';

const Rewards = () => {
  const points = 200;
  const rewards = [
    {
      id: 1,
      name: "TIE Voucher - 40% Discount",
      image: "./TieVoucher.png",
      cost: 100,
    },
    {
      id: 2,
      name: "Quanta Calculus Voucher - 20% Discount",
      image: "./QuantaCalculus.png",
      cost: 100,
    },
    {
      id: 3,
      name: "Vastav Intellect Voucher - 30% Discount",
      image: "./VastavIntellect.png",
      cost: 100,
    },
    {
        id: 4,
        name: "Geek For Geeks Voucher - 30% Discount",
        image: "./GeekForGeeks.png",
        cost: 100,
      },
  ];

  return (
    <div className="h-[110vh] flex flex-col items-center justify-center bg-[#C9C9C9] text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[85vw] ">
        <h1 className="text-2xl font-bold text-black mb-4">Green Points</h1>
        <p className="text-lg font-medium text-gray-700 mb-6">
          Your current points:
        </p>
        <div className="text-4xl font-bold text-green-500 mb-8">{points}</div>

        <RollingGallery autoplay={true} pauseOnHover={true} />

        <h2 className="text-3xl mt-10 font-bold text-gray-700 mb-4">
          Available Rewards
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="flex flex-col items-center bg-gray-50 shadow-md rounded-xl p-4 w-64"
            >
              <img
                src={reward.image}
                alt={reward.name}
                className="w-full h-full rounded-lg mb-3"
              />
              <h3 className="text-lg font-medium text-gray-800">{reward.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Cost: {reward.cost} Green Points
              </p>
              <Button
                variant="primary"
                disabled={points < reward.cost}
                className="px-4 py-2 text-white rounded-lg shadow-md"
              >
                {points >= reward.cost ? "Redeem" : "Insufficient Points"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;