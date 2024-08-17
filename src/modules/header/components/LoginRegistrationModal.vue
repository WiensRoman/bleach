<script setup>
import { inject, ref, reactive, computed } from 'vue'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

const { closeLoginRegistrationModal } = inject('modal')
let { thisUserData } = inject('user')
let loginForm = ref(true)
let successMessage = false

const formRegistrationData = reactive({
  fullName: '',
  email: '',
  password: {
    password: '',
    confirm: ''
  }
})

const formLoginData = reactive({
  email: '',
  password: ''
})

const registrationRules = computed(() => {
  return {
    fullName: { required },
    password: {
      password: { required, minLength: minLength(6) },
      confirm: { required, sameAs: sameAs(formRegistrationData.password.password) }
    },
    email: { required, email }
  }
})

const loginRules = computed(() => {
  return {
    password: { required, minLength: minLength(6) },
    email: { required, email }
  }
})

const v$ = useVuelidate(registrationRules, formRegistrationData)
const v$Login = useVuelidate(loginRules, formLoginData)

const createUser = async () => {
  try {
    const obj = {
      fullName: formRegistrationData.fullName,
      email: formRegistrationData.email,
      password: formRegistrationData.password.password
    }
    console.log(obj)
    await axios.post('https://d8618ff445c5b9a8.mokky.dev/register', obj)
  } catch (err) {
    console.log(err)
  }
}

const getAccess = async () => {
  try {
    const obj = {
      email: formLoginData.email,
      password: formLoginData.password
    }

    const res = await axios.post('https://d8618ff445c5b9a8.mokky.dev/auth', obj)
    return res
  } catch (err) {
    return false
  }
}

let blockErrorMessages = false

const submitRegistrationForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    createUser()
    formRegistrationData.fullName = ''
    formRegistrationData.email = ''
    formRegistrationData.password.password = ''
    formRegistrationData.password.confirm = ''
    block()
    loginForm.value = true
    successMessage = true
  }
}

const submitLoginForm = async () => {
  const result = await v$Login.value.$validate()
  if (result) {
    const access = await getAccess()
    if (access) {
      formLoginData.email = ''
      formLoginData.password = ''
      block()
      closeLoginRegistrationModal()
      thisUserData.value = access.data.data
    }
  }
}

const block = () => {
  blockErrorMessages = true
}
</script>

<template>
  <Teleport to="body"
    ><div class="shadow"></div>
    <div class="profile-modal">
      <div class="modal-container">
        <div class="close-button" @click="closeLoginRegistrationModal">
          <img src="../../../assets/icons/icons8-cross-50.png" />
        </div>
        <div class="form-login" v-if="loginForm">
          <div class="form-login__title"><h2>Login</h2></div>
          <div class="fields-block">
            <div class="email">
              <span class="fields-block__title">E-mail</span
              ><input type="text" v-model="formLoginData.email" />
              <span
                class="error-message"
                v-for="error in v$Login.email.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
            </div>
            <div class="password">
              <span class="fields-block__title">Password</span
              ><input type="password" v-model="formLoginData.password" />
              <span
                class="error-message"
                v-for="error in v$Login.password.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
            </div>
          </div>
          <div class="bottom">
            <button class="form-button" @click="submitLoginForm">Login</button
            ><button class="form-button--second" @click="loginForm = !loginForm">
              Registration
            </button>
          </div>
        </div>

        <div class="form-register" v-else>
          <div class="form-register__title"><h2>Registration</h2></div>
          <div class="fields-block">
            <div class="fio">
              <span class="fields-block__title">Full name</span
              ><input type="text" v-model="formRegistrationData.fullName" />
              <div v-if="!blockErrorMessages">
                <span
                  class="error-message"
                  v-for="error in v$.fullName.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
            <div class="email">
              <span class="fields-block__title">E-mail</span
              ><input type="text" v-model="formRegistrationData.email" />
              <div v-if="!blockErrorMessages">
                <span class="error-message" v-for="error in v$.email.$errors" :key="error.$uid">{{
                  error.$message
                }}</span>
              </div>
            </div>
            <div class="password">
              <span class="fields-block__title">Password</span
              ><input type="password" v-model="formRegistrationData.password.password" />
              <div v-if="!blockErrorMessages">
                <span
                  class="error-message"
                  v-for="error in v$.password.password.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
            <div class="password">
              <span class="fields-block__title">Repeat password</span
              ><input type="password" v-model="formRegistrationData.password.confirm" />
              <div v-if="!blockErrorMessages">
                <span
                  class="error-message"
                  v-for="error in v$.password.confirm.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
          </div>
          <div class="bottom">
            <button class="form-button" @click="submitRegistrationForm">Register</button
            ><button class="form-button--second" @click="loginForm = !loginForm">Login</button>
          </div>
          <div class="success-message" v-if="successMessage"><span>Успешно!</span></div>
        </div>

        <div class="form-border">
          <span class="form-border__undertitle">Sign in with</span>
        </div>
        <div class="social-buttons">
          <button class="access-button">
            <img src="../../../assets/icons/x-twitter-brands-solid.svg" />
            <p>X-twitter</p></button
          ><button class="access-button">
            <img src="../../../assets/icons/icons8-google.svg" />
            <p>Google</p>
          </button>
        </div>
        <div class="forgot-button">
          <button class="form-button--second">Forgot password</button>
        </div>
      </div>
    </div></Teleport
  >
</template>
