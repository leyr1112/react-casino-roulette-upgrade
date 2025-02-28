import type { FC } from 'react';
import { ACTION_TYPES } from '../../constants';
import './RouletteTable.css';
export interface IOnBetParams {
    bet: keyof typeof ACTION_TYPES;
    payload: string[];
    id: string;
}
export type BetType = {
    icon?: string;
};
export interface IRouletteTableProps {
    onBet: (params: IOnBetParams) => void;
    bets: {
        [key: string]: BetType;
    };
    isDebug?: boolean;
}
export declare const RouletteTable: FC<IRouletteTableProps>;
