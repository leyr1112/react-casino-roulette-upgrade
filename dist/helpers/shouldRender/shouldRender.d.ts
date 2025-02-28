import { IRouletteTableProps } from '../../components/RouletteTable';
export declare const shouldRenderTopCatcher: (currentNumber: number) => boolean;
export declare const shouldRenderRightCatcher: (currentNumber: number) => boolean;
export declare const shouldRenderBottomCatcher: (currentNumber: number) => boolean;
export declare const shouldRenderCornerBetCatcher: (currentNumber: number) => boolean;
export declare const shouldRenderSixLineBetCatcher: (currentNumber: number) => boolean;
export declare const shouldRenderChip: (id: string, bets: IRouletteTableProps['bets']) => boolean;
export declare const shouldRenderTopStreetCatcher: (currentNumber: number) => boolean;
export declare const shouldRenderTopRightDoubleStreetCatcher: (currentNumber: number) => boolean;
