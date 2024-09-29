import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import theme, { SpacingKeys } from '../theme'; // Adjust the import path as necessary

interface RowProps {
  children: ReactNode;
  spacing?: SpacingKeys;
  className?: string;
}

export const Row: React.FC<RowProps> = ({
  children,
  spacing = 'medium',
  className
}) => {
  const spacingValue = theme.spacing[spacing] || theme.spacing.medium; // Default to medium spacing

  return (
    <View
      style={[styles.row, { marginBottom: spacingValue }]}
      className={className}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
