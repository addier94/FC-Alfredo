<template>
  <div class="bg-black flex flex-col items-center px-4 py-8 mt-12">
    <div class="social mb-2">
      <a class="facebook pr-4" href="#">
        <font-awesome-icon size="lg" :icon="[ 'fab', 'facebook' ]" />
      </a>
      <a class="twitter pr-4" href="#">
        <font-awesome-icon size="lg" :icon="[ 'fab', 'twitter' ]" />
      </a>
      <a class="instagram pr-4" href="#">
        <font-awesome-icon size="lg" :icon="[ 'fab', 'instagram' ]" />
      </a>
      <a class="github pr-4" href="#">
        <font-awesome-icon size="lg" :icon="[ 'fab', 'github' ]" />
      </a>
      <a class="youtube" href="#">
        <font-awesome-icon size="lg" :icon="[ 'fab', 'youtube' ]" />
      </a>
    </div>
    <div class="text-gray-700">
      <p>© 2020 Mix. All Rights Reserved | Design by <strong class="text-white">Alfredo</strong></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .social{
    color: $primary;
    a.facebook:hover{color:#4267B2;}
    a.twitter:hover{color:#1DA1F2;}
    a.instagram:hover{color:#3f729b;}
    a.github:hover{color:#333;}
    a.youtube:hover{color:#FF0000;}
  }
</style>