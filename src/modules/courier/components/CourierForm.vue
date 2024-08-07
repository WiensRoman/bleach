<script setup>
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'

let formData = reactive({
  fullName: '',
  email: '',
  phone: '',
  address: '',
  numberOfShoes: ''
})

const rules = computed(() => {
  return {
    fullName: { required },
    email: { required, email },
    phone: { required, numeric },
    address: { required },
    numberOfShoes: { required, numeric }
  }
})

const v$ = useVuelidate(rules, formData)

let blockErrorMessages = false

const submitForm = async () => {
  let result = await v$.value.$validate()
  if (result) {
    formData.fullName = ''
    formData.email = ''
    formData.phone = ''
    formData.address = ''
    formData.numberOfShoes = ''
    block()
  }
}
const block = () => {
  blockErrorMessages = true
}
</script>

<template>
  <div className="courier-form">
    <div className="form-title"><span>Вызвать курьера</span></div>
    <div className="name">
      <span>Фамилия и имя</span><input type="text" v-model="formData.fullName" />
      <div v-if="!blockErrorMessages">
        <span className="error-message" v-for="error in v$.fullName.$errors" :key="error.$uid">{{
          error.$message
        }}</span>
      </div>
    </div>
    <div className="phone">
      <span>Телефон</span><input type="text" v-model="formData.phone" />
      <div v-if="!blockErrorMessages">
        <span className="error-message" v-for="error in v$.phone.$errors" :key="error.$uid">{{
          error.$message
        }}</span>
      </div>
    </div>
    <div className="addres">
      <span>Адрес</span><input type="text" v-model="formData.address" />
      <div v-if="!blockErrorMessages">
        <span className="error-message" v-for="error in v$.address.$errors" :key="error.$uid">{{
          error.$message
        }}</span>
      </div>
    </div>
    <div className="count">
      <span>Количество пар</span><input type="text" v-model="formData.numberOfShoes" />
      <div v-if="!blockErrorMessages">
        <span
          className="error-message"
          v-for="error in v$.numberOfShoes.$errors"
          :key="error.$uid"
          >{{ error.$message }}</span
        >
      </div>
    </div>
    <div className="email">
      <span>E-mail</span><input type="text" v-model="formData.email" />
      <div v-if="!blockErrorMessages">
        <span className="error-message" v-for="error in v$.email.$errors" :key="error.$uid">{{
          error.$message
        }}</span>
      </div>
    </div>
    <button type="submit" className="form-button" @click="submitForm">Отправить</button>
  </div>
</template>
