import type { FC } from 'react';
import './RouletteWheel.css';
declare const availableWinningBets: string[];
export interface IRouletteWheelProps {
    start: boolean;
    winningBet: (typeof availableWinningBets)[number];
    onSpinningEnd?: () => void;
    withAnimation?: boolean;
    addRest?: boolean;
}
export declare const RouletteWheel: FC<IRouletteWheelProps>;
export {};
