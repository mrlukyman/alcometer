import react from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Styles/global-style'

export const Header = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.headerText}>Alcometer</Text>
    </View>
  );
}