import { useState } from 'react'
import './App.css'
import Barcelona from './assets/img/Barcelona.png'
import PSG from './assets/img/PSG.png'
import Real from './assets/img/Real Madrid.png'

import BoneSP from './assets/img/Boné São Paulo.png'
import BoneSFC from './assets/img/Boné Santos.png'
import BoneFLA from './assets/img/Boné Flamengo.png'

import CopoCNC from './assets/img/Copo Náutico.png'
import CopoSAN from './assets/img/Copo Santa Cruz.png'
import CopoSPT from './assets/img/Copo Sport.png'

import Nike from './assets/img/Nike.png'
import Puma from './assets/img/Puma.png'
import Adidas from './assets/img/Adidas.png'

import Futsal from './assets/img/Bola Futsal.png'
import Campo from './assets/img/Bola Campo.png'
import Futmesa from './assets/img/Bola Futmesa.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav class="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="h-8 w-auto" />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" aria-current="page" class="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Carrinho</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contato</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Localização</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Quem Somos</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <el-dropdown class="relative ml-3">
          <button class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">Open user menu</span>
            <img src="https://avatars.githubusercontent.com/u/205174950?v=4" alt="" class="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          </button>

          
        </el-dropdown>
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3">
      <a href="#" aria-current="page" class="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">Carrinho</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contato</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Localização</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Quem Somos</a>
    </div>
  </el-disclosure>
</nav>
<br />
<br />




<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    
    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={PSG} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Camisa PSG 2026</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>

    
    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Real} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Camisa Real Madrid 2026</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>

   
    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Barcelona} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Camisa Barcelona 2026</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>

    
    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={BoneSP} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Boné São Paulo</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>

    
    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={BoneSFC} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Boné Santos FC</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>

    
    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={BoneFLA} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Boné Flamengo</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={CopoCNC} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Copo Náutico</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={CopoSAN} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Copo Santa Cruz</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={CopoSPT} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Copo Sport</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Nike} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Bolsa da Nike</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Puma} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Bolsa da Puma</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Adidas} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Bolsa Adidas</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Futsal} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Bola de Futsal</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Campo} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Bola de Campo</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>


    <div class="bg-neutral-primary-soft border border-default rounded-base shadow-xs">
        <img class="rounded-t-base w-full" src={Futmesa} />
        <div class="p-6 text-center">
            <h5 class="mt-3 mb-6 text-xl font-semibold">Bola de Futmesa</h5>
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Comprar</button>
        </div>
    </div>

</div>





    </>
  )
}

export default App
