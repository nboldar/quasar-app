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
          ref="form"
          v-model="valid"
          validation
        >
          <q-input
            filled
            v-model="email"
            label="Your email *"
            hint="Type E-mail"
            lazy-rules
            :rules="emailRules"
          >
            <template v-slot:prepend>
              <q-icon name="perm_identity"/>
            </template>
          </q-input>

          <q-input
            filled
            type="password"
            v-model="password"
            label="Your password *"
            hint="Type password"
            lazy-rules
            :rules="passwordRules"
          >
            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-input
            filled
            type="password"
            v-model="password_repeat"
            label="Confirm password *"
            hint="Repeat password"
            lazy-rules
            :rules="passwordRepeatRules"
          >
            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-toggle
            v-model="accept"
            label="I accept the license and terms"
            lazy-rules
            :rules="acceptRules"
          />

          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              :disabled="!valid"
            />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
          </div>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data() {
    return {
      email: null,
      emailRules: [val => !!val || 'Email is required',
        val => /.+@.+/.test(val) || 'E-mail must be valid',
      ],
      password: null,
      passwordRules: [
        val => !!val || 'Please type your password',
        val => val.length >= 6 || 'Password must have length 6 or more characters',
      ],
      password_repeat: null,
      passwordRepeatRules: [
        val => !!val || 'Please confirm your password',
        val => val === this.password || 'Passwords not matched',
      ],

      accept: false,
      acceptRules: [
        val => val || 'You have to accept terms and policy',
      ],
      valid: false,
    };
  },
  computed: {
    },
  },
};
</script>

<style scoped>
  img {
    width: 150px;
    height: auto;
  }
</style>
