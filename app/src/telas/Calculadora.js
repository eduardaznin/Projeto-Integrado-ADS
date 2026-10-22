import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilosCalculadora';

const BOTOES = [
  ['C', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const OPERADORES = ['+', '-', '×', '÷'];

function calcular(a, b, operador) {
  switch (operador) {
    case '+':
       return a + b;
    case '-':
       return a - b;
    case '×':
       return a * b;
    case '÷':
       return b === 0 ? null : a / b;
    default:
       return b;
  }
}

function formatar(numero) {
  if (numero === null) return 'Erro';
  // evita resultados como 0.30000000000000004
  return String(parseFloat(numero.toFixed(10)));
}

export default function Calculadora() {
  const [tela, setTela] = useState('0');
  const [anterior, setAnterior] = useState(null);
  const [operador, setOperador] = useState(null);
  const [novoNumero, setNovoNumero] = useState(true);

  function limpar() {
    setTela('0');
    setAnterior(null);
    setOperador(null);
    setNovoNumero(true);
  }

  function digitar(digito) {
    if (novoNumero || tela === 'Erro') {
      setTela(digito);
      setNovoNumero(false);
    } else {
      setTela(tela === '0' ? digito : tela + digito);
    }
  }

  function digitarPonto() {
    if (novoNumero || tela === 'Erro') {
      setTela('0.');
      setNovoNumero(false);
    } else if (!tela.includes('.')) {
      setTela(tela + '.');
    }
  }

  function escolherOperador(op) {
    if (tela === 'Erro') return;
    const atual = parseFloat(tela);

    // encadeamento: 2 + 3 + ... calcula o 2 + 3 antes de seguir
    if (operador && !novoNumero) {
      const resultado = calcular(anterior, atual, operador);
      setTela(formatar(resultado));
      setAnterior(resultado);
    } else {
      setAnterior(atual);
    }
    setOperador(op);
    setNovoNumero(true);
  }

  function igual() {
    if (!operador || anterior === null || tela === 'Erro') return;
    const resultado = calcular(anterior, parseFloat(tela), operador);
    setTela(formatar(resultado));
    setAnterior(null);
    setOperador(null);
    setNovoNumero(true);
  }

  function inverterSinal() {
    if (tela === 'Erro' || tela === '0') return;
    setTela(formatar(-parseFloat(tela)));
  }

  function porcentagem() {
    if (tela === 'Erro') return;
    setTela(formatar(parseFloat(tela) / 100));
  }

  function aoPressionar(valor) {
    if (valor === 'C') limpar();
    else if (valor === '=') igual();
    else if (valor === '.') digitarPonto();
    else if (valor === '±') inverterSinal();
    else if (valor === '%') porcentagem();
    else if (OPERADORES.includes(valor)) escolherOperador(valor);
    else digitar(valor);
  }

  function estiloBotao(valor) {
    if (OPERADORES.includes(valor) || valor === '=') return estilos.botaoOperador;
    if (['C', '±', '%'].includes(valor)) return estilos.botaoFuncao;
    return estilos.botaoNumero;
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.visor}>
        <Text style={estilos.textoVisor} numberOfLines={1} adjustsFontSizeToFit>
          {tela}
        </Text>
      </View>

      {BOTOES.map((linha, i) => (
        <View key={i} style={estilos.linha}>
          {linha.map((valor) => (
            <TouchableOpacity
              key={valor}
              style={[
                estilos.botao,
                estiloBotao(valor),
                valor === '0' && estilos.botaoZero,
              ]}
              onPress={() => aoPressionar(valor)}
            >
              <Text style={estilos.textoBotao}>{valor}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}