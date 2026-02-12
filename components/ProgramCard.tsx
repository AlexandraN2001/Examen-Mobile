import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProgramCardProps {
  title: string;
  timeRange: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function ProgramCard({
  title,
  timeRange,
  icon = 'restaurant-outline',
}: ProgramCardProps) {
  const styles = {
    container: `bg-white rounded-2xl p-4 flex-row items-center mb-3`,
    iconContainer: `w-12 h-12 bg-gray-100 rounded-xl items-center justify-center mr-4`,
    textContainer: `flex-1`,
    title: `text-base font-semibold text-gray-900 mb-1`,
    timeRange: `text-sm text-gray-500`,
  };

  return (
    <View className={styles.container}>
      <View className={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="#000" />
      </View>
      <View className={styles.textContainer}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.timeRange}>{timeRange}</Text>
      </View>
    </View>
  );
}
