"use client";

import { useEffect, useState } from "react";
import TokenSelect from "./TokenSelect";
import { Token } from "@/lib/problem2/types";
import { fetchToken } from "@/lib/problem2/fetchPrices";

export default function Problem2() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token | null>(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchToken().then(setTokens);
  }, []);

  const output =fromToken && toToken && amount
      ? (Number(amount) * fromToken.price) / toToken.price
      : 0;

  const handleSwapTokens = async () => {
    setLoading(true);
    await new Promise(res => setTimeout(res, 1000));
    setLoading(false);
    if (!fromToken || !toToken) return;
    setFromToken(toToken);
    setToToken(fromToken);
  };

  return (
    <section className="border rounded-xl p-6 space-y-4 max-w-md">
      <h2 className="text-lg font-semibold">
        Problem 2: Fancy Form
      </h2>

      <TokenSelect tokens={tokens} value={fromToken} onChange={setFromToken} />

      <input
        type="number"
        placeholder="Amount"
        className="border rounded px-3 py-2 w-full"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <TokenSelect tokens={tokens} value={toToken} onChange={setToToken} />

      <div className="text-sm text-gray-600">
        Output: {output.toFixed(4)}
      </div>

      <button
        type="button"
        onClick={handleSwapTokens}
        disabled={!fromToken || !toToken}
        className="bg-black text-white rounded py-2 w-full disabled:opacity-50"
      >
        {loading ? "Swapping..." : "Swap"}
      </button>
    </section>
  )
}
