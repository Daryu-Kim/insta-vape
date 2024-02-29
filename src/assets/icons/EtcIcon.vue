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
      d="M95-203v-95h771v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z"
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
      d="M114.022-231.152v-68.37h732.196v68.37H114.022Zm0-214.783v-68.13h732.196v68.13H114.022Zm0-214.543v-68.37h732.196v68.37H114.022Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EtcIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
