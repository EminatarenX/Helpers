extend: {
      keyframes: {
        'entrada':{
          '0%':{
            opacity: '0',

          },
          '100%': {
            opacity: '1'
          }
        },
        'slide': {
          '0%': {
            transform: 'traslateX(-400px)'
          },
          '100%': {
            transform: 'traslateX(0px)'
          }
        }
      },
      animation: {
        'entrada': 'entrada 2s'
      },
      colors: {
         'rojo': '#d41935',
         'azul': '#2780c4',
         'a-oscuro': '#041833',
       },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ff00ff, #00ffff)',
      }, 
            
    },
  },
