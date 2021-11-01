<template>
  <v-app>
    <v-system-bar class="orange white--text" app>COAST PEOPLE'S FORUM</v-system-bar><br>
    <br>
     <v-app-bar app color="white" height="100">
       <v-img class="mx-2" src="./assets/logo.png" max-height="100" max-width="150"></v-img>
        <v-spacer></v-spacer>
          <v-btn text outlined color="orange">LOGIN</v-btn>

       </v-app-bar>

     <br>
      <div>
        <v-app-bar class="orange white--text" height="200">  <v-toolbar-title class="white--text flex text-center"><h2> Sign-up for Membership Here</h2> <br/> 
          <h4 class="font-weight-regular">Please complete the form below to join Coast People's Forum. Once you register, your membership will be approved by the admin and you will be able to access our Members Portal</h4>
          </v-toolbar-title>      
         </v-app-bar>
        </div>
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
