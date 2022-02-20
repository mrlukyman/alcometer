import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    margin: 20,
  },
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  footerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#30a2c5',
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#30a2c5',
  },
  input: {
    color: '#fff',
    fontSize: 15,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#2A2D3D',
  },
  dropdown: {
    flexDirection: 'column',
    maxWidth: '100%',
    zIndex: 100000,
    marginBottom: 20,
    height: 120,
    justifyContent: 'space-between',
  },
  resultText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultYellow: {
    color: '#ffd900a4',
  },
  resultRed: {
    color: '#ff0000a4',
  },
  resultGreen: {
    color: '#00ff00a4',
  }
});
