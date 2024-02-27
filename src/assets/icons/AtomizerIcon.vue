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
      d="M264.87-74.022q-26.109 0-46-17.152-19.892-17.152-22.131-43.022l-82.717-752.022h732.196L763.5-134.196q-2.478 25.87-22.25 43.022-19.772 17.152-45.88 17.152h-430.5Zm-19.479-241.761h469.218l55.282-502.065H190.109l55.282 502.065Z"
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
      d="M264.87-74.022q-25.993 0-45.786-17.081-19.793-17.082-22.345-43.093l-82.717-752.022h732.196L763.5-134.196q-2.791 26.011-22.406 43.093-19.616 17.081-45.724 17.081h-430.5Zm-11.283-172.63 11.283 104.5h430.5l11.282-104.5H253.587Zm-8.227-69.131h469.297l55.234-502.065H190.109l55.251 502.065Zm8.227 173.631h453.065-453.065Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomizerIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
