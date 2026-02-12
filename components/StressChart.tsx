import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StressChartProps {
  level?: string;
  subtitle?: string;
}

export default function StressChart({
  level = 'Alto',
  subtitle = 'Últimas 24 horas',
}: StressChartProps) {
  const barHeights = [40, 60, 50, 70, 45, 80, 55]; // Percentages for each bar

  const styles = {
    container: `bg-white rounded-3xl p-5 flex-1 mr-2`,
    header: `flex-row items-center justify-between mb-1`,
    title: `text-base font-semibold text-gray-900`,
    icon: ``,
    subtitle: `text-xs text-gray-400 mb-4`,
    chartContainer: `flex-row items-end justify-between h-24 mb-4`,
    bar: `bg-blue-300 rounded-t-sm flex-1 mx-0.5`,
    footer: ``,
    level: `text-lg font-bold text-gray-900`,
  };

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>Estrés</Text>
        <Ionicons name="pulse-outline" size={20} color="#60A5FA" />
      </View>
      <Text className={styles.subtitle}>{subtitle}</Text>

      <View className={styles.chartContainer}>
        {barHeights.map((height, index) => (
          <View key={index} className={styles.bar} style={{ height: `${height}%` }} />
        ))}
      </View>

      <Text className={styles.level}>{level}</Text>
    </View>
  );
}
