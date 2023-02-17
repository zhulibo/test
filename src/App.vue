<template>
  <RouterView />
</template>

<style lang="pcss">
/* 定义css级联层 */
@layer base;
@layer common;

@import url(./assets/css/base.pcss) layer(base);
@import url(./assets/css/common.pcss) layer(common);

#app{
  height: 100%;
}
</style>