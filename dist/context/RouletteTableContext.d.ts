import type { MouseEvent } from 'react';
import type { IRouletteTableProps } from '../components/RouletteTable';
export interface IRouletteTableContextProps {
    bets: IRouletteTableProps['bets'];
    onBetCatcherHover: (event: MouseEvent<HTMLDivElement>) => void;
}
export declare const RouletteTableContext: import("react").Context<IRouletteTableContextProps>;
