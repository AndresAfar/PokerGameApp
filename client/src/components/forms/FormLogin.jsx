import React from 'react'

export const FormLogin = () => {
  return (

    <>
    <div className='max-w-sm mx-auto bg-slate-800 rounded-lg border-4 border-slate-700 p-10'>
      <div className='py-4'>
        <label className='text-4xl'>Iniciar Sesión</label>
      </div>
      <form action="" className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-white'>Correo Electrónico</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-e-0 border-gray-500 rounded-s-md">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>
              </span>
              <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-500 text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="name@dominio.com" required/>
            </div>
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-white">Contraseña</label>
            <div className='flex'>
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-e-0 border-gray-500 rounded-s-md">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
                </svg>
              </span>
              <input type="password" id="password" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-500 text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 block flex-1 min-w-0 w-full text-sm p-2.5" required/>
            </div>
          </div>
          <button type="submit" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Iniciar Sesión</button>
      </form>
    </div>
    </>
    
  )
}
