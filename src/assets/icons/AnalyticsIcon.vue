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
      d="M285.196-277h60v-205h-60v205Zm329.847 0h60v-420h-60v420ZM450-277h60v-118h-60v118Zm0-205h60v-60h-60v60ZM182.152-114.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H182.152Z"
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
      d="M285.196-277h60v-205h-60v205Zm329.847 0h60v-420h-60v420ZM450-277h60v-118h-60v118Zm0-205h60v-60h-60v60ZM182.152-114.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h595.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v595.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H182.152Zm0-68.13h595.696v-595.696H182.152v595.696Zm0-595.696v595.696-595.696Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnalyticsIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
