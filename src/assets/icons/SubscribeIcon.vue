<template>
  <svg
    v-if="selected"
    :style="{ fill: color, width: `${width}rem`, height: `${height}rem` }"
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path
      d="M142.152-74.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-435.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v435.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H142.152ZM407-211l221-149-221-148v297ZM149-706.218v-60h662v60H149Zm131-120v-60h400v60H280Z"
    />
  </svg>
  <svg
    v-else
    :style="{ fill: color, width: `${width}rem`, height: `${height}rem` }"
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path
      d="M142.152-74.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-435.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v435.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H142.152Zm0-68.13h675.696v-435.696H142.152v435.696ZM407-211l221-149-221-148v297ZM149-706.218v-60h662v60H149Zm131-120v-60h400v60H280ZM142.152-142.152v-435.696 435.696Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubscribeIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
