import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, buttonStyles, typography } from '../theme';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onPress,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    const baseStyle = buttonStyles[variant];
    const sizeStyle = getSizeStyle(size);
    const disabledStyle = disabled ? styles.disabled : {};
    
    return [baseStyle, sizeStyle, disabledStyle, style];
  };

  const getTextStyle = () => {
    const baseTextStyle = getTextColorStyle(variant);
    const sizeTextStyle = getTextSizeStyle(size);
    const disabledTextStyle = disabled ? styles.disabledText : {};
    
    return [baseTextStyle, sizeTextStyle, disabledTextStyle, textStyle];
  };

  const getSizeStyle = (size: string): ViewStyle => {
    switch (size) {
      case 'sm':
        return { paddingVertical: 8, paddingHorizontal: 16 };
      case 'lg':
        return { paddingVertical: 16, paddingHorizontal: 32 };
      default:
        return {};
    }
  };

  const getTextColorStyle = (variant: string): TextStyle => {
    switch (variant) {
      case 'primary':
        return { color: colors.neutral.white };
      case 'secondary':
        return { color: colors.primary.orange };
      case 'outline':
        return { color: colors.neutral.black };
      default:
        return { color: colors.neutral.white };
    }
  };

  const getTextSizeStyle = (size: string): TextStyle => {
    switch (size) {
      case 'sm':
        return { fontSize: typography.fontSize.sm };
      case 'lg':
        return { fontSize: typography.fontSize.lg };
      default:
        return { fontSize: typography.fontSize.base };
    }
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.baseText, getTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: typography.fontWeight.medium,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  disabledText: {
    color: colors.neutral.mediumGray,
  },
}); 