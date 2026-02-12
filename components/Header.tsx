import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  userName: string;
  subtitle?: string;
}

export default function Header({ userName, subtitle = 'Desconecta para conectar' }: HeaderProps) {
  const styles = {
    container: `flex-row items-center justify-between px-6 pt-4 pb-2`,
    leftSection: `flex-1`,
    greeting: `text-2xl font-bold text-gray-900`,
    subtitle: `text-sm text-gray-500 mt-1`,
    notificationButton: `w-10 h-10 items-center justify-center`,
  };

  return (
    <View className={styles.container}>
      <View className={styles.leftSection}>
        <Text className={styles.greeting}>Hola, {userName}</Text>
        <Text className={styles.subtitle}>{subtitle}</Text>
      </View>
      <View className={styles.notificationButton}>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </View>
    </View>
  );
}
