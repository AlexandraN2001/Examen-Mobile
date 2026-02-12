import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import WeekCalendar from './WeekCalendar';
import RiskProgressBar from './RiskProgressBar';
import StressChart from './StressChart';
import UsageTimeCard from './UsageTimeCard';
import ProgramCard from './ProgramCard';
import BottomNavigation from './BottomNavigation';

export default function HomeScreen() {
  const styles = {
    container: `flex-1 bg-gray-50`,
    content: `flex-1`,
    sectionHeader: `flex-row items-center justify-between px-6 pt-6 pb-3`,
    sectionTitle: `text-xl font-bold text-gray-900`,
    seeMoreButton: `text-sm text-blue-400`,
    statsContainer: `px-6 flex-row`,
    programsContainer: `px-6 pb-4`,
  };

  return (
    <SafeAreaView className={styles.container} edges={['top']}>
      <ScrollView className={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header userName="Daniel" />

        {/* Week Calendar */}
        <WeekCalendar />

        {/* Risk Progress Bar */}
        <RiskProgressBar percentage={75} />

        {/* Statistics Section */}
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>Tus estadísticas</Text>
        </View>

        <View className={styles.statsContainer}>
          <StressChart />
          <UsageTimeCard percentage={85} remainingMinutes={20} />
        </View>

        {/* Programs Section */}
        <View className={styles.sectionHeader}>
          <Text className={styles.sectionTitle}>Programas</Text>
          <TouchableOpacity>
            <Text className={styles.seeMoreButton}>Ver más</Text>
          </TouchableOpacity>
        </View>

        <View className={styles.programsContainer}>
          <ProgramCard
            title="Almuerzo con familia"
            timeRange="13h00 - 14h00"
            icon="restaurant-outline"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </SafeAreaView>
  );
}
