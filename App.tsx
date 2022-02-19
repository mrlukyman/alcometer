import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles/global-style'
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Footer />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

