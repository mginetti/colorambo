<template>
  <div @click="$emit('openModal', color)" class="col-sm-12 col-md-4 d-flex justify-content-center">
    <div :class="`color rounded-circle bg-${color.name} d-flex align-items-center`"/>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    color: {}
  }
};
</script>

<style lang="scss">
.color {
  height: 220px;
  width: 220px;
  opacity: 0.75;
  .text{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.color:hover{
  opacity: 1;
}
</style>