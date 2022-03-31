<script setup></script>

<template>
  <div class="scanning flex items-center justify-center h-full">
    <div>
      <div class="scanning-qr-code block m-auto mb-10 rounded-xl flex items-center justify-center">
        <img src="@/assets/image/qrcode.png" alt="" />
      </div>
      <div class="flex items-center justify-around mt-10">
        <div>
          <div
            class="h-14 w-14 rounded-full theme-bg-color flex items-center justify-center text-3xl"
          >
            <font-awesome-icon size="large" :icon="['fas', 'qrcode']" />
          </div>
          <span>收款</span>
        </div>
        <div>
          <div
            class="h-14 w-14 rounded-full theme-bg-color flex items-center justify-center text-3xl"
          >
            <font-awesome-icon size="large" :icon="['fas', 'image']" />
          </div>
          <span>相簿</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scanning {
  .scanning-qr-code {
    height: 300px;
    width: 300px;
    background-color: rgb(214, 211, 211);
  }
}
</style>
