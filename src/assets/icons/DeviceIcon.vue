<template>
  <svg
    v-if="selected"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ fill: color, width: `${width}rem`, height: `${height}rem` }"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path
      d="M74.022-154.022v-98.13h80v-485.696q0-28.447 19.89-48.408 19.891-19.962 48.24-19.962h624.066v68.37H222.152v485.696h235.696v98.13H74.022Zm477.891 0q-14.424 0-24.245-9.82-9.82-9.821-9.82-24.245v-455.695q0-14.424 9.82-24.245 9.821-9.821 24.245-9.821h300q14.394 0 24.349 9.821 9.956 9.821 9.956 24.245v455.695q0 14.424-9.956 24.245-9.955 9.82-24.349 9.82h-300Z"
    />
  </svg>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    :style="{ fill: color, width: `${width}rem`, height: `${height}rem` }"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path
      d="M74.022-154.022v-98.13h80v-485.696q0-28.447 19.89-48.408 19.891-19.962 48.24-19.962h624.066v68.37H222.152v485.696h235.696v98.13H74.022Zm477.891 0q-14.424 0-24.245-9.82-9.82-9.821-9.82-24.245v-455.695q0-14.424 9.82-24.245 9.821-9.821 24.245-9.821h300q14.394 0 24.349 9.821 9.956 9.821 9.956 24.245v455.695q0 14.424-9.956 24.245-9.955 9.82-24.349 9.82h-300Zm30.717-98.13h238.805v-361.152H582.63v361.152Zm0 0h238.805H582.63Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DeviceIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
