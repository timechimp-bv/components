<template>
  <span class="badge" :class="[`badge__${size}`]">
    {{ value }}
  </span>
</template>

<script lang="ts" src="./badge.ts"></script>

<style lang="scss" src="./badge.scss"></style>
