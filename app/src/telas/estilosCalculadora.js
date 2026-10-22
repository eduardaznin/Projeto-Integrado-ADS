import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'flex-end',
    padding: 12,
  },
  visor: {
    padding: 20,
    alignItems: 'flex-end',
  },
  textoVisor: {
    color: '#fff',
    fontSize: 64,
  },
  linha: {
    flexDirection: 'row',
  },
  botao: {
    flex: 1,
    margin: 6,
    height: 76,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoZero: {
    flex: 2,
  },
  botaoNumero: { backgroundColor: '#333' },
  botaoFuncao: { backgroundColor: '#666' },
  botaoOperador: { backgroundColor: '#ff9500' },
  textoBotao: {
    color: '#fff',
    fontSize: 28,
  },
});

export default estilos;