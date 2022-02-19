import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles/global-style'
import { Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import react, { useState } from 'react';
import { RadioButton } from './Components/RadioButton';

const options: {key: string, text: string}[] = [
  {
    key: 'male',
    text: 'Male',
  },
  {
    key: 'female',
    text: 'Female',
  },
];

const state = { value: null }

export default function App() {
  
  const [selectedOption, setSelectedOption] = useState<({key: string, text: string}) | null>()
  

  const onSelect = (item: {key: string, text: string}) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };
  const onSubmit = () => {
    console.log(selectedOption);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <RadioButton
          selectedOption={selectedOption}
          onSelect={onSelect}
          options={options}
        />
        <Button title="SUBMIT" onPress={onSubmit} />
        <Footer />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

