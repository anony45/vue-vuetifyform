<template>
  <v-app>
    <v-main   >
    
      <v-form >
        <v-row align="center" justify="space-around">
        <v-col >
        <v-col cols="11" sm="8">

      <v-text-field v-model="name" label="Name" required outlined dense color="orange" :rules="nameRules">
      </v-text-field>
       <v-text-field v-model="email" label="Email" :rules="emailRules"  required outlined dense  color="orange">
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
       <v-select v-model="gender" label="Gender" required outlined dense color="orange" :items="items">
      </v-select>
       <v-select v-model="county" label="County" required outlined dense color="orange" :items="counties">
      </v-select>
       <v-text-field v-model="password" label="Password" :rules="passwordRules" required outlined dense color="orange">
      </v-text-field>
       <v-text-field v-model="confirmpassword" label="Confirm Password" :rules="[(password === confirmPassword) || 'Password must match']" required outlined dense color="orange">
      </v-text-field>
     
    

        <v-btn color="orange" >
      REGISTER
    </v-btn>
    
    </v-col>
    </v-col>

    </v-row>  
    
    </v-form>
   
    </v-main>
  
  
  
  </v-app>
</template>

<script>


  export default {
    name: 'register',

    data: () => ({
      phone:"",
      name:"",
      email:"",
      countrycode:"",
      phonenumber:"",
      profession:"",
      gender:"",
      county:"",
      password:"",
      confirmpassword:"",
       nameRules: [
      v => !!v || 'name is required',
      ],
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must be 8  characters or more!',
      ],

      items:['male','female'],
      counties:['Nairobi','Mombasa','Kwale','kilifi','Tana River','Taita Taveta','Garissa','Wajir','Mandera','Marsabit','Isiolo','Kitui','Machakos','Makueni','Nyandarua','Nyeri','Kirinyaga','Muranga','Lamu','Tharaka nithi','Kiambu','Turkana','West Pokot','Samburu','Transzoia','Uasin Gishu','Elgeyo Marakwet','Nandi','Baringo','Laikipia','Meru','Embu','Kisumu','Kajiado','Kericho','nakuru','narok','vihiga'],



     
    }),
  }
</script>
