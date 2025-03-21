import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  textBienvenida: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    
    width: '50%',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '80%',
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonCustom: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonTextCustom: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});