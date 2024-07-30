<script setup>
defineProps({
  openModal: Boolean
})
</script>

<template>
  <Teleport to="body"
    ><div className="profile-modal">
      <div className="modal-container">
        <div
          className="close-button"
          @click="
            () => {
              openModal
            }
          "
        >
          <img src="../assets/icons8-cross-50.png" />
        </div>

        <div className="modal-title"><h2>Войти</h2></div>
        <div className="fields-block">
          <div className="email">
            <span className="modal-field-title">E-mail</span><input type="text" />
          </div>
          <div className="password">
            <span className="modal-field-title">Password</span><input type="text" />
          </div>
        </div>
        <div className="buttons-row">
          <button className="modal-button">Login</button
          ><button className="modal-button-second">Registration</button>
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
