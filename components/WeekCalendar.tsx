import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

interface DayItem {
  day: string;
  date: number;
}

const daysOfWeek: DayItem[] = [
  { day: 'Dom', date: 30 },
  { day: 'Lun', date: 1 },
  { day: 'Mar', date: 2 },
  { day: 'Mie', date: 3 },
  { day: 'Jue', date: 4 },
];

export default function WeekCalendar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const styles = {
    container: `px-6 py-4`,
    scrollContainer: `flex-row gap-3`,
    dayButton: `items-center justify-center px-5 py-3 rounded-2xl min-w-[60px]`,
    dayButtonSelected: `items-center justify-center px-5 py-3 rounded-2xl min-w-[60px] bg-blue-400`,
    dayButtonUnselected: `items-center justify-center px-5 py-3 rounded-2xl min-w-[60px] bg-gray-100`,
    dayText: `text-sm text--600 mb-1`,
    dayTextSelected: `text-sm text-white mb-1`,
    dateText: `text-lg font-semibold text-gray-900`,
    dateTextSelected: `text-lg font-semibold text-white`,
  };

  return (
    <View className={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className={styles.scrollContainer}>
          {daysOfWeek.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={
                selectedIndex === index ? styles.dayButtonSelected : styles.dayButtonUnselected
              }
              onPress={() => setSelectedIndex(index)}>
              <Text className={selectedIndex === index ? styles.dayTextSelected : styles.dayText}>
                {item.day}
              </Text>
              <Text className={selectedIndex === index ? styles.dateTextSelected : styles.dateText}>
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
