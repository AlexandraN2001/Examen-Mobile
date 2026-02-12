import { StatusBar } from 'expo-status-bar';
import HomeScreen from 'components/HomeScreen';

import './global.css';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
