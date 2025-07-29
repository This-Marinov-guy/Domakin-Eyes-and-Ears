import React from 'react';
import { TextInput, Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Input as RNEInput } from 'react-native-elements';
import { inputStyles, colors, typography, spacing } from '../theme';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
  multiline?: boolean;
  numberOfLines?: number;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      <RNEInput
        label={label}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral.mediumGray}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        secureTextEntry={secureTextEntry}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        errorMessage={error}
        inputContainerStyle={[
          styles.inputContainer,
          multiline && styles.multilineContainer,
          error && styles.errorInput,
        ]}
        inputStyle={[styles.input, inputStyle]}
        labelStyle={styles.label}
        errorStyle={styles.errorText}
        containerStyle={styles.rneContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing[2],
  },
  rneContainer: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    backgroundColor: inputStyles.standard.backgroundColor,
    borderRadius: inputStyles.standard.borderRadius,
    borderWidth: inputStyles.standard.borderWidth,
    borderColor: inputStyles.standard.borderColor,
    paddingVertical: inputStyles.standard.paddingVertical,
    paddingHorizontal: inputStyles.standard.paddingHorizontal,
    borderBottomWidth: inputStyles.standard.borderWidth, // Override RNE's border bottom
  },
  input: {
    fontSize: inputStyles.standard.fontSize,
    color: inputStyles.standard.color,
    textAlignVertical: 'top',
  },
  multilineContainer: {
    minHeight: 120,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.neutral.black,
    marginBottom: spacing[2],
  },
  errorInput: {
    borderColor: colors.semantic.error,
  },
  errorText: {
    fontSize: typography.fontSize.xs,
    color: colors.semantic.error,
    marginTop: spacing[1],
  },
}); 