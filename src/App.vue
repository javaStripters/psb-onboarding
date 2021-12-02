<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('./reset.css');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
#app {
  font-family: 'PT Sans', sans-serif;
}

:root {
  /* Primary Colors */
  --primary_orange: #FA4616 ;
  --primary_blue: #009FDA ;
  --primary_linear: #FA4616 ;
  /* Text */
  --body_text: #30353B ;
  --body_text_blue: #0087B4 ;
  --warning_text: #FF1A1A ;
  --neutral_text: #979A9D ;
  /* Description text */
  --description_text_primary: #747F8B ;
  --description_text_secondary: #E3E5E8 ;
  /* Alert text */
  --alert_text_green: #00B45A ;
  --alert_text_yellow: #E19600 ;
  /* Alerts */
  --success: #E1FFE6;
  --important_notifications: #FFFADC;
  --error_warning: #FFE6E6;
  --information: #E6F5FA;
  /* Buttons */
  --buttons_default: #FA4616 ;
  --buttnos_hover: #F03200 ;
  --buttons_active: #F03200 ;
  /* Banners */
  --banners_light_yellow: #FEEFBF ;
  --banners_light_emerald: #BFECD6 ;
  --banners_light_purple: #C7BBD7 ;
  --banners_light_green: #DDECBF ;
}

</style>
