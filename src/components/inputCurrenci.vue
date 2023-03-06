<template>
    <div>
      <label for="number-input">Ingrese un número:</label>
      <input id="number-input" type="number" v-model="number" />
      <p>El número formateado es: {{ formattedNumber }}</p>
    </div>
  </template>
  
  <script setup>
    import { ref, computed} from 'vue';
  
    // Definimos la función formatNumber
    const formatNumber = (number) => {
      const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 4,
      });
  
      return formatter.format(number);
    };
  
    // Definimos una variable "number" en el estado de Vue con el valor del input
    const number = ref('');
  
    // Definimos una variable "formattedNumber" que llama a la función formatNumber con el valor actual de "number"
    const formattedNumber = computed(() => {
      return formatNumber(number.value);
    });
  </script>
  3256.65484