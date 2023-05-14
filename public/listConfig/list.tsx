export const listMenu = {
  position: 'Top' as 'Top',
  direction: 'Right' as 'Right',
  widthLogo: '10%',
  heightLogo: 'auto',
  backgroundColor: '#20477d',
  textColor: '#fff',
  level1: [
    { id: 1, name: 'INICIO', type: 'btn-round-small' as 'btn-round-small', color: 'bg-blue' as 'bg-blue' },
    { id: 2, name: 'COMPRAR', type: 'btn-round-medium' as 'btn-round-medium', color: 'bg-yellow' as 'bg-yellow' }
  ]
}

export const listSteps = [
  {
    activo: true,
    nombre: 'Día de la madre',
    ofertas: [
      {
        nombre: 'Fecha de visita',
        tipo: 'Calendario' as 'Calendario',
        tickets: [
          {
            id: 1,
            url: 'url imagen',
            description: 'Vive la mágica experiencia del Salitre Mágico con todas las atracciones del parque incluyendo el ingreso por primera vez al Castillo del Terror, Carros chocones y Pista de karts.'
          },
          {
            id: 2,
            url: 'url imagen',
            description: 'Incluye todas las atracciones del parque excepto Karts, Chocones y Castillo del terror.'
          },
          {
            id: 3,
            url: 'url imagen',
            description: 'Diseñado para los más chiquitos de nuestras familias, incluye una amplia variedad de atracciones infantiles y familiares.'
          }
        ]
      },
      {
        nombre: 'Mejora tu visita',
        tipo: 'Calendario' as 'Calendario',
        tickets: [
          {
            id: 1,
            url: 'url imagen',
            description: 'Adicional a tú pasaporte, no incluye Karts, Chocones ni Castillo del terror.'
          },
          {
            id: 2,
            url: 'url imagen',
            description: 'Si la lluvia llegó, puedes adquirir tu seguro de lluvia que te permitirá regeresar al parque cuando las condiciones mejoren "Este bono cuenta con una vigencia de un mes para hacerce efectivo.".'
          },
          {
            id: 3,
            url: 'url imagen',
            description: 'Combo pizza margarita + gaseosa 250ml.'
          }
        ]
      },
      {
        nombre: 'Datos de la compra',
        tipo: 'Datos' as 'Datos'
      },
      {
        nombre: 'Finalizar la compra',
        tipo: 'Finalizar' as 'Finalizar'
      }
    ]
  }
]
