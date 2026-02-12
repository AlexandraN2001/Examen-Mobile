import React from 'react';
import { View, Text } from 'react-native';

interface RiskProgressBarProps {
  percentage: number;
  label?: string;
}

export default function RiskProgressBar({
  percentage,
  label = 'Riesgo de bloqueo',
}: RiskProgressBarProps) {
  const styles = {
    container: `px-6 py-3`,
    progressBarContainer: `h-2 bg-gray-200 rounded-full overflow-hidden`,
    progressBar: `h-full bg-blue-400 rounded-full`,
    labelContainer: `flex-row items-center justify-between mt-2`,
    label: `text-sm text-gray-500`,
    percentage: `text-sm font-semibold text-gray-700`,
  };

  return (
    <View className={styles.container}>
      <View className={styles.progressBarContainer}>
        <View className={styles.progressBar} style={{ width: `${percentage}%` }} />
      </View>
      <View className={styles.labelContainer}>
        <Text className={styles.label}>{label}</Text>
        <Text className={styles.percentage}>{percentage}%</Text>
      </View>
    </View>
  );
}
