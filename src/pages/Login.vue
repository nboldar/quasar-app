<template>
<div class="row justify-center">
  <div class="col-lg-3 col-md-4 col-sm-12 q-gutter-md shadow-5 q-mt-md q-pa-md q-field--rounded">
  <q-card class="my-card ">
    <div class="row justify-center q-pb-md ">
      <img alt="Login" src="~assets/accountlogin-icon.png">
    </div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="Type E-mail"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      >
        <template v-slot:prepend>
          <q-icon name="perm_identity" />
        </template>
      </q-input>

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        hint="Type password"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      accept: false,
      email: null,
      password: null,
    };
  },
};
</script>

<style scoped>
img{
  width: 150px;
  height: auto;
}
</style>
