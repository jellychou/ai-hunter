<script setup>
// import MemberInfoMasterArea from "@/components/MemberInfoMasterArea.vue";
import MemberInfoMasterApply from "@/components/MemberInfoMasterApply.vue";
</script>
<template>
  <!-- <MemberInfoMasterArea /> -->
  <MemberInfoMasterApply />
</template>

<style lang="scss">
.card {
  background-color: #4a551663;
  .member-info-head {
    height: 120px;
    width: 120px;
    object-fit: cover;
  }
}
.financial-card {
  border: 1px solid #b9bbb2;
  border-radius: 5px;
}

.button-footer {
  position: absolute;
  bottom: -35px;
  left: 0;
  right: 0;
}
</style>
