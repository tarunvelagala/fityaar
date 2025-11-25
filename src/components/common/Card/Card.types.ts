// src/components/common/Card/Card.types.ts

import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type CardVariant =
    | 'default'
    | 'pastel-blue'
    | 'pastel-beige'
    | 'pastel-green'
    | 'pastel-yellow'
    | 'pastel-pink'
    | 'pastel-purple';

export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps {
    /**
     * Visual variant of the card
     * @default 'default'
     */
    variant?: CardVariant;

    /**
     * Padding size inside the card
     * @default 'medium'
     */
    padding?: CardPadding;

    /**
     * Border radius of the card
     * @default 20
     */
    borderRadius?: number;

    /**
     * Callback when card is pressed (makes card interactive)
     */
    onPress?: () => void;

    /**
     * Whether the card is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether to show shadow
     * @default false
     */
    shadow?: boolean;

    /**
     * Custom style overrides
     */
    style?: ViewStyle;

    /**
     * Card content
     */
    children: ReactNode;
}
