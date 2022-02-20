import react from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Styles/global-style'
import { Options } from '../App'

// TOTO: figure out the type
export const RadioButton = ({ options, selectedOption, onSelect }: {options: Options[], selectedOption: Options | null | undefined, onSelect: any}) => {
  return (
    <View style={styles.radioWrapper}>
      {options.map((item: Options) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                onSelect(item)
              }}>
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checkedCircle} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}