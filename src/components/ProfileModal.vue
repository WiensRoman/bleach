<script setup>
import { inject, ref, reactive, computed } from 'vue'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

const { closeProfileModal } = inject('modal')
let { thisUserData } = inject('user')
let loginForm = ref(true)
let successMessage = false

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

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
// const fullName = defineModel('fullName')
// const email = defineModel('email')
// const password = defineModel('password')

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
      closeProfileModal()
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
    ><div className="shadow"></div>
    <div className="profile-modal">
      <div className="modal-container">
        <div className="close-button" @click="closeProfileModal">
          <img src="../assets/icons8-cross-50.png" />
        </div>
        <div className="form-login" v-if="loginForm">
          <div className="modal-title"><h2>Login</h2></div>
          <div className="fields-block">
            <div className="email">
              <span className="modal-field-title">E-mail</span
              ><input type="text" v-model="formLoginData.email" />
              <span
                className="error-message"
                v-for="error in v$Login.email.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
            </div>
            <div className="password">
              <span className="modal-field-title">Password</span
              ><input type="password" v-model="formLoginData.password" />
              <span
                className="error-message"
                v-for="error in v$Login.password.$errors"
                :key="error.$uid"
                >{{ error.$message }}</span
              >
            </div>
          </div>
          <div className="buttons-row">
            <button className="modal-button" @click="submitLoginForm">Login</button
            ><button className="modal-button-second" @click="loginForm = !loginForm">
              Registration
            </button>
          </div>
        </div>

        <div className="form-register" v-else>
          <div className="modal-title"><h2>Registration</h2></div>
          <div className="fields-block">
            <div className="fio">
              <span className="modal-field-title">Full name</span
              ><input type="text" v-model="formRegistrationData.fullName" />
              <div v-if="!blockErrorMessages">
                <span
                  className="error-message"
                  v-for="error in v$.fullName.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
            <div className="email">
              <span className="modal-field-title">E-mail</span
              ><input type="text" v-model="formRegistrationData.email" />
              <div v-if="!blockErrorMessages">
                <span
                  className="error-message"
                  v-for="error in v$.email.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
            <div className="password">
              <span className="modal-field-title">Password</span
              ><input type="password" v-model="formRegistrationData.password.password" />
              <div v-if="!blockErrorMessages">
                <span
                  className="error-message"
                  v-for="error in v$.password.password.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
            <div className="password">
              <span className="modal-field-title">Repeat password</span
              ><input type="password" v-model="formRegistrationData.password.confirm" />
              <div v-if="!blockErrorMessages">
                <span
                  className="error-message"
                  v-for="error in v$.password.confirm.$errors"
                  :key="error.$uid"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
          </div>
          <div className="buttons-row">
            <button className="modal-button" @click="submitRegistrationForm">Register</button
            ><button className="modal-button-second" @click="loginForm = !loginForm">Login</button>
          </div>
          <div className="success-message" v-if="successMessage"><span>Успешно!</span></div>
        </div>

        <div className="form-border">
          <span className="form-border-undertitle">Sign in with</span>
        </div>
        <div className="buttons-row">
          <button className="access-button">
            <img src="../assets/x-twitter-brands-solid.svg" />
            <p>X-twitter</p></button
          ><button className="access-button">
            <img src="../assets/icons8-google.svg" />
            <p>Google</p>
          </button>
        </div>
        <div className="forgot-button">
          <button className="modal-button-second">Forgot password</button>
        </div>
      </div>
    </div></Teleport
  >
</template>
