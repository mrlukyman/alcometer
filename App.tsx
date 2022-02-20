import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles/global-style'
import { Text, View, SafeAreaView, ScrollView, Button, TextInput } from 'react-native';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import react, { useCallback, useState } from 'react';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import { RadioButton } from './Components/RadioButton';

type Options = {
  key: string;
  text: string;
}

const options: Options[] = [
  {
    key: 'male',
    text: 'Male',
  },
  {
    key: 'female',
    text: 'Female',
  },
];

export default function App() {
  const [weight, setWeight] = useState('')
  const [isBottlesOpen, setBottlesOpen] = useState(false)
  const [isTimeOpen, setTimeOpen] = useState(false)
  const [value, setValue] = useState<ValueType | null>(null)
  const [scndValue, setScndValue] = useState<ValueType | null>(null)
  DropDownPicker.setListMode("SCROLLVIEW");

  const onBottlesOpen = useCallback(() => {
    setTimeOpen(false)
  }, [])

  const onTimeOpen = useCallback(() => {
    setBottlesOpen(false)
  }, [])

  const [bottles, setBottles] = useState([    
    { label: '1 bottle', value: 1 },
    { label: '2 bottles', value: 2 },
    { label: '3 bottles', value: 3 },
    { label: '4 bottles', value: 4 },
    { label: '5 bottles', value: 5},
  ])

  const [time, setTime] = useState([
    { label: '1 hour', value: 1 },
    { label: '2 hours', value: 2 },
    { label: '3 hours', value: 3 },
    { label: '4 hours', value: 4 },
    { label: '5 hours', value: 5 },

  ])

  const [selectedOption, setSelectedOption] = useState<Options | null>()
  

  const onSelect = (item: Options) => {
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
        <View style={styles.contentWrapper}>
          <Header />
          <TextInput
            placeholder="Enter your weight" 
            placeholderTextColor={'#C0C7D4'}
            keyboardType="decimal-pad"
            style={styles.input}
            onChangeText={setWeight}
          />
          <View style={styles.dropdown}>
          <DropDownPicker 
            placeholder='Select how many bottles you have drank'
            zIndex={2}
            open={isBottlesOpen}
            onOpen={onBottlesOpen}
            value={value}
            setOpen={setBottlesOpen}
            setValue={setValue}
            setItems={setBottles}
            multiple={false}
            items={bottles}
            theme='DARK'
          />
          <DropDownPicker
            placeholder='How long has it been since your last drink?'
            zIndex={1}
            open={isTimeOpen}
            onOpen={onTimeOpen}
            value={scndValue}
            setOpen={setTimeOpen}
            setValue={setScndValue}
            setItems={setTime}
            multiple={false}
            items={time}
            theme='DARK'
          />
          </View>
          <RadioButton
            selectedOption={selectedOption}
            onSelect={onSelect}
            options={options}
          />
          <Button title="SUBMIT" onPress={onSubmit} />
          <Footer />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

