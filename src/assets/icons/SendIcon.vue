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
      d="M114.5-154.261v-245.717L424.63-480 114.5-562.022v-243.717L887.174-480 114.5-154.261Z"
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
      d="M114.5-154.261v-651.478L887.174-480 114.5-154.261ZM180-255.63 717.304-480 180-707.37v162.74L424.63-480 180-417.37v161.74Zm0 0v-451.74 451.74Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SendIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
