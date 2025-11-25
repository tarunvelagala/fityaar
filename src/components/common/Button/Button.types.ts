// src/components/common/Button/Button.types.ts

import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
    /**
     * Visual variant of the button
     * @default 'primary'
     */
    variant?: ButtonVariant;

    /**
     * Size of the button
     * @default 'medium'
     */
    size?: ButtonSize;

    /**
     * Callback when button is pressed
     */
    onPress: () => void;

    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Whether the button is in loading state
     * @default false
     */
    loading?: boolean;

    /**
     * Whether the button should take full width
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Icon to display (for icon variant or with text)
     */
    icon?: ReactNode;

    /**
     * Position of the icon when used with text
     * @default 'left'
     */
    iconPosition?: 'left' | 'right';

    /**
     * Button label (not used for icon variant)
     */
    children?: ReactNode;

    /**
     * Custom style overrides
     */
    style?: ViewStyle;

    /**
     * Custom text style overrides
     */
    textStyle?: TextStyle;
}
