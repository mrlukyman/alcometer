import react from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Styles/global-style'

// TOTO: figure out the type
export const RadioButton = ({ options, selectedOption, onSelect }: any) => {
  return (
    <View>
      {options.map((item: { key: react.Key | null | undefined; text: boolean | react.ReactChild | react.ReactFragment | react.ReactPortal | null | undefined }) => {
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