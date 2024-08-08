<script setup>
import { inject, reactive, computed } from 'vue'
import axios from 'axios'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const { closeMyProfileModal } = inject('user')
let { thisUserData } = inject('user')
// const fullnameField = ref()
// const emailField = ref()
let blockErrorMessages = false

const formUpdateData = reactive({
  emailField: thisUserData.value.email,
  fullnameField: thisUserData.value.fullName
})

const updateRules = computed(() => {
  return {
    fullnameField: { required },
    emailField: { required, email }
  }
})

const v$ = useVuelidate(updateRules, formUpdateData)

const submitForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    const result = await updateUser()
    if (result) {
      block()
      closeMyProfileModal()
      thisUserData.value = result
    }
  }
}

const block = () => {
  blockErrorMessages = true
}

const updateUser = async () => {
  try {
    const obj = {
      email: formUpdateData.emailField,
      fullName: formUpdateData.fullnameField
    }
    const { data } = await axios.patch(
      'https://d8618ff445c5b9a8.mokky.dev/users/' + thisUserData.value.id,
      obj
    )
    return data
  } catch (err) {
    return false
  }
}
const exit = () => {
  thisUserData.value = null
  closeMyProfileModal()
}
</script>

<template>
  <div class="my-profile-modal">
    <div class="close-button" @click="closeMyProfileModal">
      <img src="../../../assets/icons/icons8-cross-50.png" />
    </div>
    <div class="avatar"><img src="../../../assets/images/avatar1.png" /></div>

    <div class="full-name">
      <span class="modal-field-title">Full name</span>
      <input type="text" v-model="formUpdateData.fullnameField" />
      <div v-if="!blockErrorMessages" class="error-message-wrapper">
        <span class="error-message" v-for="error in v$.fullnameField.$errors" :key="error.$uid">{{
          error.$message
        }}</span>
      </div>
    </div>
    <div class="email">
      <span class="modal-field-title">E-mail</span>
      <input type="text" v-model="formUpdateData.emailField" />
      <div v-if="!blockErrorMessages">
        <span class="error-message" v-for="error in v$.emailField.$errors" :key="error.$uid">{{
          error.$message
        }}</span>
      </div>
    </div>

    <div class="buttons-row">
      <button class="modal-button" @click="submitForm">Сохранить</button
      ><button class="modal-button-second" @click="exit">Выйти</button>
    </div>
  </div>
</template>
