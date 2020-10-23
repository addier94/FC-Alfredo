<template>
  <div class="mt-20">
    <div class="bg-primary px-2 py-1 mb-4 text-white">
      <h2 class="font-bold text-4xl">Tea Station</h2>
      <p class="leading-5 mb-2 text-lg">css3. css float property used to setup layout.</p>
      <div class="flex items-center mb-4">
        <img class="w-10 h-10 rounded-full" src="@/assets/images/frontend/alfredo.jpeg">
        <p class="ml-2">Por: <strong>alfredo</strong></p>
      </div>
    </div>
    <div class="sm:flex sm:justify-between sm:flex-row-reverse max-w-screen-xl sm:mx-auto">
      <div class="max-w-xs mb-6 m-auto sm:mx-0 small-shadow">
          <img class="rounded-md" src="@/assets/images/frontend/alfredo.jpeg">
        <div class="px-4 pb-4">
          <div class="mt-2 font-semibold text-3xl">11,99 $us <span class="text-secondary line-through text-xl">$22.99</span></div>
          <div class="text-red-600 flex items-center">
            <font-awesome-icon icon="clock" />
            <p class="ml-2">¡Esta oferta termina en <strong>4 días!</strong></p>
          </div>
          <button class="rounded-sm text-white w-full bg-secondary py-2">Unirme al curso</button>
          <h5 class="font-semibold mt-2 mb-1">Requisitos del curso</h5>
          <div class="flex mb-3">
            <font-awesome-icon class="text-secondary" icon="spell-check" />
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
          <div class="flex mb-3">
            <font-awesome-icon class="text-secondary" icon="spell-check" />
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
          <div class="flex mb-3">
            <font-awesome-icon class="text-secondary" icon="spell-check" />
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
        </div>
      </div>
      <div class=" sm:mr-4">
        <div class="small-shadow p-4 mb-6">
          <h3 class="font-semibold mb-1">Lo que vas a aprender</h3>
          <div class="flex mb-3">
            <font-awesome-icon class="text-secondary" icon="check" />
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
          <div class="flex mb-3">
            <font-awesome-icon class="text-secondary" icon="check" />
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
          <div class="flex mb-3">
            <font-awesome-icon class="text-secondary" icon="check" />
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
        </div>
        <div class="small-shadow p-4">
          <h3 class="font-semibold mb-1">Informacion del curso</h3>
          <div class="flex mb-3">
            <p class="ml-1 leading-4">Tea station website built with HTML5 and CSS3. CSS float property used to setup layout.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>