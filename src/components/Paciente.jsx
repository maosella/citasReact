import React from 'react'

const Paciente = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl '>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>Juan</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>Correo@correo.com</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
                <span className='font-normal normal-case'>10 de Diciembre de 2022</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aut? Eum aliquid excepturi, accusamus autem temporibus at esse est asperiores corporis voluptates ea dicta alias sequi pariatur velit. Veniam, autem.</span>
          </p>

    </div>
  )
}

export default Paciente