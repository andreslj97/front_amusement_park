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

export const listTickets = [
  {
    description: 'Vive la mágica experiencia del Salitre Mágico con todas las atracciones del parque incluyendo el ingreso por primera vez al Castillo del Terror, Carros chocones y Pista de karts.'
  },
  {
    description: 'Incluye todas las atracciones del parque excepto Karts, Chocones y Castillo del terror.'
  },
  {
    description: 'Diseñado para los más chiquitos de nuestras familias, incluye una amplia variedad de atracciones infantiles y familiares.'
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
