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
            precio_full: 53900,
            precio_descuento: 84900,
            url: 'url imagen',
            description: 'Vive la mágica experiencia del Salitre Mágico con todas las atracciones del parque incluyendo el ingreso por primera vez al Castillo del Terror, Carros chocones y Pista de karts.',
            quantity: 0
          },
          {
            id: 2,
            precio_full: 59900,
            precio_descuento: 39900,
            url: 'url imagen',
            description: 'Incluye todas las atracciones del parque excepto Karts, Chocones y Castillo del terror.',
            quantity: 0
          },
          {
            id: 3,
            precio_full: 29900,
            precio_descuento: 24900,
            url: 'url imagen',
            description: 'Diseñado para los más chiquitos de nuestras familias, incluye una amplia variedad de atracciones infantiles y familiares.',
            quantity: 0
          }
        ]
      },
      {
        nombre: 'Mejora tu visita',
        tipo: 'Calendario' as 'Calendario',
        tickets: [
          {
            id: 3,
            precio_full: 0,
            precio_descuento: 40000,
            url: 'url imagen',
            description: 'Adicional a tú pasaporte, no incluye Karts, Chocones ni Castillo del terror.',
            quantity: 0
          },
          {
            id: 4,
            precio_full: 0,
            precio_descuento: 8000,
            url: 'url imagen',
            description: 'Si la lluvia llegó, puedes adquirir tu seguro de lluvia que te permitirá regeresar al parque cuando las condiciones mejoren "Este bono cuenta con una vigencia de un mes para hacerce efectivo.".',
            quantity: 0
          },
          {
            id: 5,
            precio_full: 0,
            precio_descuento: 30000,
            url: 'url imagen',
            description: 'Combo pizza margarita + gaseosa 250ml.',
            quantity: 0
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

export const listExperience = [
  {
    id: 4,
    description: 'Adicional a tu pasaporte. No cubre Karts, Chocones ni Castillo del Terror',
    total: 40000
  },
  {
    id: 5,
    description: 'Si la lluvia llego, puedes adquirir tu seguro de lluvia, que te premitira regresar al parque cuando las condiciones mejoren. "Este bono cuenta con una vigencia de un mes para hacerse efectivo".',
    total: 8000
  },
  {
    id: 6,
    description: 'Combo pizza margarita + Gaseosa 250ml',
    total: 30000
  }
]
