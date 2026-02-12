import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

interface UsageTimeCardProps {
  percentage: number;
  remainingMinutes: number;
  subtitle?: string;
}

export default function UsageTimeCard({
  percentage,
  remainingMinutes,
  subtitle = 'Hoy',
}: UsageTimeCardProps) {
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const styles = {
    container: `bg-white rounded-3xl p-5 flex-1 ml-2`,
    header: `flex-row items-center justify-between mb-1`,
    title: `text-base font-semibold text-gray-900`,
    subtitle: `text-xs text-gray-400 mb-4`,
    circleContainer: `items-center justify-center mb-4`,
    percentageText: `text-3xl font-bold text-gray-900`,
    footer: ``,
    remainingText: `text-sm text-gray-600 text-center`,
  };

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <Text className={styles.title}>Tiempo uso</Text>
        <Ionicons name="timer-outline" size={20} color="#60A5FA" />
      </View>
      <Text className={styles.subtitle}>{subtitle}</Text>

      <View className={styles.circleContainer}>
        <Svg width={size} height={size}>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#60A5FA"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <View style={{ position: 'absolute' }}>
          <Text className={styles.percentageText}>{percentage}%</Text>
        </View>
      </View>

      <Text className={styles.remainingText}>{remainingMinutes} minutos restantes</Text>
    </View>
  );
}
