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
      d="M194.022-110.913v-671.935q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h435.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v671.935L480-233.304 194.022-110.913Z"
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
      d="M194.022-110.913v-671.935q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h435.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v671.935L480-233.304 194.022-110.913Zm68.13-103.435L480-306.191l217.848 91.843v-568.5H262.152v568.5Zm0-568.5h435.696-435.696Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookmarkIcon",
  props: {
    selected: Boolean,
    color: String,
    width: String,
    height: String,
  },
});
</script>
