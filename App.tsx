import { StatusBar } from 'expo-status-bar'
import { styles } from './Styles/global-style'
import { Text, View, SafeAreaView, ScrollView, Button, TextInput, Alert, TouchableOpacity } from 'react-native'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import react, { useCallback, useState } from 'react'
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker'
import { RadioButton } from './Components/RadioButton'
//import Cocktail from './assets/cocktail-svgrepo-com.svg'

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
  const [result, setResult] = useState<number>(0)
  DropDownPicker.setListMode("SCROLLVIEW")

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
    { label: '7 hours', value: 7 },
    { label: '8 hours', value: 8 },
    { label: '9 hours', value: 9 },
    { label: '10 hours', value: 10 },
    { label: '11 hours', value: 11},
    { label: '12 hours', value: 12},
  ])

  const [selectedOption, setSelectedOption] = useState<Options | null>()
  
  const onSelect = (item: Options) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  }
  const onSubmit = () => {
    console.log(selectedOption);
    console.log(value)
    alcoholLevel()
  }

  const alert = () =>
  Alert.alert(
    "Data missing!",
    "You have to enter your weight.",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  const alcoholLevel= () => {
    if (weight) {
      if(selectedOption && value && scndValue) {
        if(selectedOption.key === 'male') {
          let litres = value * 0.33
          let grams = litres * 8 * 4.5
          let burning = parseInt(weight) / 10
          let gramsLeft = grams - burning * scndValue
          let result = gramsLeft / (parseFloat(weight) * 0.7)
          setResult(result.toFixed(2))
        } else if(selectedOption.key === 'female') {
          let litres = value * 0.33
          let grams = litres * 8 * 4.5
          let burning = parseInt(weight) / 10
          let gramsLeft = grams - burning * scndValue
          let result = gramsLeft / (parseFloat(weight) * 0.6)
          setResult(result.toFixed(2))
        }
      }
    } else {
      alert()
    }
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
            keyboardAppearance='dark'
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
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          {/* <Button style={styles.button} title="SUBMIT" onPress={onSubmit} /> */}
          <View style={styles.resultWrapper}>
            <Text style={[styles.resultText, 
              result < 0.5 
              ? styles.resultGreen 
              : result < 1.5 
              ? styles.resultYellow
              : styles.resultRed
              
            ]}>
              {result < 0 ? '0.00' : result}
            </Text>
          </View>
        </View>
      </ScrollView>
          <Footer />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

