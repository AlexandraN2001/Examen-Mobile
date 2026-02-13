import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; /* Agregado */


export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();/* Agregado */

  const tabs = [
    { icon: 'home', iconOutline: 'home-outline', route: 'Home' },
    { icon: 'stats-chart', iconOutline: 'stats-chart-outline', route: 'StaticDetails' },
    { icon: 'settings', iconOutline: 'settings-outline', route: 'Settings' }, /* Agregando route en las 3 */
  ];

  const styles = {
    container: `flex-row items-center justify-around bg-white border-t border-gray-200 py-3 px-6`,
    tabButton: `flex-1 items-center justify-center py-2`,
  };

  /* Agregado */
  const handlePress = (index: number) => {
    setActiveTab(index);
    navigation.navigate(tabs[index].route as never);
  };

  return (
    <View className={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          className={styles.tabButton}
          onPress={() =>  handlePress(index)}>
          <Ionicons
            name={activeTab === index ? tab.icon : tab.iconOutline}
            size={26}
            color={activeTab === index ? '#60A5FA' : '#9CA3AF'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
