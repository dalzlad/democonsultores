import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)



/*Acordar Plan de Mejoramiento de Python:

Nicole Miranda.
Definiciones:
Definir que es algoritmo, variable, consntante, función, condicional, ciclo, lista.

Realizar un programa en python  con un menú que tenga las siguientes opciones:
1. Ciclos
2. Listas
3. Salir

Si la opción es 1 deberá:
Realizar un algoritmo que permita leer números mientras no se digite el número -99
Calcular y mostrar:
Cantidad de números positivos
Cantidad de números negativos
Suma de números positivos
Suma de números negativos
Cantidad de pares positivos
Cantidad de números entre 10 y 30
Cantidad de ceros.

Si la opción es 2 deberá:
Realizar un algoritmo que permita almacenar en una lista N números.
Luego de agregados los números ordenarlos.
Calcular y mostrar:
Suma de números
Promedio de números
Número mínimo
Número máximo
Mostrar la lista sin ordenar y ordenada.

Si la opción es 3 deberá finalizar el programa

Sustentación: ciclos y condicionales 8 de Abril

Sustentación: Listas 11 de Abril

Enviar la solución al email: dilopezz@sena.edu.co
*/