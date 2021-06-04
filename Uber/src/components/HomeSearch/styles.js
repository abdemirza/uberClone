import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
