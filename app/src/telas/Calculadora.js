import { View, Text, Pressable, StyleSheet } from 'react-native';

const TECLAS = [
  ['AC', '+/−', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', ',', '='],
];

const OPERADORES = ['÷', '×', '−', '+'];

function estiloDaTecla(tecla) {
  if (tecla === '=') return [estilos.tecla, estilos.teclaIgual];
  if (OPERADORES.includes(tecla)) return [estilos.tecla, estilos.teclaOperador];
  if (tecla === '0') return [estilos.tecla, estilos.teclaLarga];
  return estilos.tecla;
}

export default function Calculadora() {
  return (
    <View style={estilos.tela}>
      {}
      <View style={estilos.visor}>
        <Text style={estilos.conta}>12.580 + 945</Text>
        <Text style={estilos.resultado}>13.525</Text>
      </View>

      {}
      <View style={estilos.teclado}>
        {TECLAS.map((linha, indice) => (
          <View key={indice} style={estilos.linha}>
            {linha.map((tecla) => (
              <Pressable key={tecla} style={estiloDaTecla(tecla)}>
                <Text style={[estilos.textoTecla, tecla === '=' && estilos.textoIgual]}>
                  {tecla}
                </Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#0B0D17', paddingTop: 56 },

  visor: { flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', padding: 24 },
  conta: { color: '#8A8FA3', fontSize: 22 },
  resultado: { color: '#FFFFFF', fontSize: 56, fontWeight: '600' },

  teclado: { padding: 12, paddingBottom: 32 },
  linha: { flexDirection: 'row' },

  tecla: {
    flex: 1,
    height: 72,
    margin: 6,
    borderRadius: 20,
    backgroundColor: '#1C1F2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teclaLarga: { flex: 2 },
  teclaOperador: { backgroundColor: '#262A3B' },
  teclaIgual: { backgroundColor: '#B8F02A' },

  textoTecla: { color: '#FFFFFF', fontSize: 26 },
  textoIgual: { color: '#0B0D17' },
});