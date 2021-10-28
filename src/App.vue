<template>
  <v-app>
  <v-system-bar app dense color="orange " class="text--white">  COAST PEOPLE'S FORUM</v-system-bar><br><br>
  <v-app-bar  prominent color="white" >
   <v-img class="shrink mr-lg-1" src="./assets/logo.png" height="30px" width="70px"></v-img>
  
  <v-spacer></v-spacer>
  <v-btn text outlined color="orange">LOGIN</v-btn>
  </v-app-bar>
 
  
    <v-main>
      <router-view/>
      <v-main color="orange" text-color="primary">
      
      
      
      </v-main>
    </v-main>
    <v-footer dark cardless>
   
          <span >© 2021 Coast People's Forum</span>
          <v-spacer></v-spacer>
          <span>Powered by Alumnipad</span>
  

    
    
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
