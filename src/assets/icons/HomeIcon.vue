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
      d="M154.022-114.022v-489.007L480-847.652l326.218 244.543v489.087H561.435v-287.413h-162.87v287.413H154.022Z"
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
      d="M222.152-182.152h143.783v-251.913h228.13v251.913h143.783v-386.891L480-762.37 222.152-568.964v386.812Zm-68.13 68.13v-489.087L480-847.652l326.218 244.543v489.087H528.565v-254.543h-97.13v254.543H154.022ZM480-472.761Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
