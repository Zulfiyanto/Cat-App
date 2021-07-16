import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  userName: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  titleHome: {
    fontSize: 40,
    fontWeight: '700',
  },
  TextInput: {
    backgroundColor: '#f6f6f6',
    borderRadius: 25,
    marginHorizontal: 5,
    width: '80%',
    height: 58,
    fontSize: 20,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    borderRadius: 25,
    borderColor: '#F3F3F3',
    borderWidth: 2,
    alignItems: 'center',
    height: 70,
  },
  //   box slide
  boxSlide: {
    backgroundColor: '#F3F3F3',
    borderRadius: 50,

    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },

  // card Home
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
