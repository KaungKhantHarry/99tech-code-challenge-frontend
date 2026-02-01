import { useMemo } from "react";

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: Blockchain;
}

type Blockchain =
  | 'Osmosis'
  | 'Ethereum'
  | 'Arbitrum'
  | 'Zilliqa'
  | 'Neo';

const PRIORITY_MAP: Record<Blockchain, number> = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
};

const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
  const balances = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    return balances
      .filter(balance => balance.amount > 0)
      .map(balance => ({
        ...balance,
        priority: PRIORITY_MAP[balance.blockchain] ?? -99,
        formatted: balance.amount.toFixed(),
      }))
      .filter(balance => balance.priority > -99)
      .sort((a, b) => b.priority - a.priority);
  }, [balances]);

  const rows = useMemo(() => {
    return sortedBalances.map(balance => {
      const usdValue = prices[balance.currency] * balance.amount;

      return (
        <WalletRow
          key={balance.currency}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    });
  }, [sortedBalances, prices]);

  return <div {...rest}>{rows}</div>;
};
