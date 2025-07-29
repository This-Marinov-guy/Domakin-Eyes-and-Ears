import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { cardStyles } from '../theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'standard' | 'property' | 'elevated';
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'standard',
  style,
}) => {
  const getCardStyle = () => {
    const baseStyle = cardStyles[variant];
    return [baseStyle, style];
  };

  return (
    <View style={getCardStyle()}>
      {children}
    </View>
  );
}; 