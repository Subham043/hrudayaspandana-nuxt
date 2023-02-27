<template>
    <span>{{ displayValue }}</span>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
export default {
  name: 'CounterIncrementComponent',
  props:{
      value:{
          type: Number,
          default: 0
      },
  },
  data() {
    return {
      displayValue: this.value,
      tweenValue: this.value,
    }
  },
  watch: {
    value() {
      gsap.to(this, {
        tweenValue: this.value,
        duration: 5,
        ease: "strong.inOut",
        onUpdate: () => {
          this.displayValue = Math.ceil(this.tweenValue);
        },
      });
    },
  },
}
</script>

