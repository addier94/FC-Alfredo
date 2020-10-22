<template>
  <div>
    <div class="register px-5 my-64 max-w-lg m-auto">
      <div class="login-and-register mb-5 flex justify-center">
        <div class="loginBoxShadow h-8">
          <a href="#" class="px-4 py-2 rounded-l">Login</a>
          <a href="#" class="px-4 py-2 rounded-r active">Registro</a>
        </div>
      </div>
      <div class="small-shadow px-8 pt-6 pb-10 w-full bg-gray-100">
        <h5 class="font-bold text-3xl mb-3">Registro</h5>
        <div class="mb-4">
          <p  class="mb-4">Usuario</p>
          <input type="text" class="bg-info px-2 py-3 rounded w-full" placeholder="Usuario">
          <p class="text-red-700 italic leading-tight text-sm mt-1">The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like</p>
        </div>
        <div class="mb-4">
          <p class="mb-4">Email</p>
          <input type="text" class="bg-info px-2 py-3 rounded w-full" placeholder="Email">
        </div>
        <div class="mb-8">
          <p class="mb-4">Password</p>
          <input type="text" class="bg-info px-2 py-3 rounded w-full" placeholder="Password">
        </div>
        <button class="text-center w-full bg-secondary text-white py-4 rounded transition duration-300">Register</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register{
  font-family: 'Open Sans', sans-serif; 
}
.login-and-register .active{
  @apply bg-primary text-white; 
}
button:hover{
  @apply bg-black text-primary;
}
</style>