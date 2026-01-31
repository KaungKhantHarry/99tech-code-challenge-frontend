import { Token } from "@/lib/problem2/types";

interface Props {
  tokens: Token[];
  value: Token | null;
  onChange: (token: Token) => void;
}

export default function TokenSelect({ tokens, value, onChange }: Props) {
  return (
    <select
      className="border rounded px-3 py-2 w-full"
      value={value?.symbol || ""}
      onChange={(e) => {
        const token = tokens.find(t => t.symbol === e.target.value);
        if (token) onChange(token);
      }}
    >
      <option value="" disabled>Select token</option>
      {tokens.map(token => (
        <option key={token.symbol} value={token.symbol}>
          {token.symbol}
        </option>
      ))}
    </select>
  )
}
