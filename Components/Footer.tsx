import { styles } from '../Styles/global-style';
import react from 'react'
import { View, Text } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.Wrapper}>
      <Text style={styles.text}>Made by Lukas Haring</Text>
    </View>
  );
}