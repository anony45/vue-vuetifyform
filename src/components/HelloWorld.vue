<template>
  <v-app>
    <v-main>
    <v-main>
    <v-form >
    <v-row class="center" justify="center">
    <v-col>
    <v-col cols="12" sm="8">

      <v-text-field v-model="name" label="Name" required outlined dense color="orange">
      </v-text-field>
       <v-text-field v-model="email" label="Email" required outlined dense  color="orange">
      </v-text-field>

      <v-row >
        <v-col cols="12" sm="4">
           <v-select v-model="countrycode" label="Country Code" outlined dense color="orange" ></v-select>
        </v-col>
        <v-col cols="12" sm="8">
          <v-text-field v-model="phonenumber" label="Phone number" required outlined dense color="orange">
          </v-text-field>
         </v-col>
      </v-row>
      
       
       <v-text-field v-model="profession" label="Profession" required outlined dense color="orange">
      </v-text-field>
       <v-text-field v-model="gender" label="Gender" required outlined dense color="orange">
      </v-text-field>
       <v-text-field v-model="country" label="Country" required outlined dense color="orange">
      </v-text-field>
       <v-text-field v-model="password" label="Password" required outlined dense color="orange">
      </v-text-field>
       <v-text-field v-model="confirmpassworrd" label="Confirm Password" required outlined dense color="orange">
      </v-text-field>

        <v-btn color="orange" >
      REGISTER
    </v-btn>
    
    </v-col>
    </v-col>

    </v-row>
    
    
    
    
    </v-form>
    
    </v-main>
    </v-main>
  
  
  </v-app>
</template>

<script>
  export default {
    name: 'register',

    data: () => ({

      name:"",
      email:"",
      countrycode:"",
      phonenumber:"",
      profession:"",
      gender:"",
      country:"",
      password:"",
      confirmpassword:"",

     
    }),
  }
</script>
