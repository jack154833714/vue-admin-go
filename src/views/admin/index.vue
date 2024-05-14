<script setup lang="ts">
import { IconApps, IconBug, IconBulb } from '@arco-design/web-vue/es/icon'

defineOptions({
  name: 'adminPage'
})
</script>
<template>
  <div class="gvb_admin">
    <Aside>
      <div class="gvb_logo">
        <img src="/image/logo.png" alt="" srcset="" />
        <div>测试代码</div>
      </div>
      <div class="gvb_menu">
        <A-menu
          :style="{ width: '200px', borderRadius: '4px' }"
          theme="dark"
          :default-open-keys="['0']"
          :default-selected-keys="['0_2']"
        >
          <A-sub-menu key="0">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Navigation 1</template>
            <A-menu-item key="0_0">Menu 1</A-menu-item>
            <A-menu-item key="0_1">Menu 2</A-menu-item>
            <A-menu-item key="0_2">Menu 3</A-menu-item>
            <A-menu-item key="0_3">Menu 4</A-menu-item>
          </A-sub-menu>
          <A-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>Navigation 2</template>
            <A-menu-item key="1_0">Menu 1</A-menu-item>
            <A-menu-item key="1_1">Menu 2</A-menu-item>
            <Amenu-item key="1_2">Menu 3</Amenu-item>
          </A-sub-menu>
          <A-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>Navigation 3</template>
            <a-menu-item key="2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_1">Menu 2</a-menu-item>
            <a-sub-menu key="2_2" title="Navigation 4">
              <a-menu-item key="2_2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_2_1">Menu 2</a-menu-item>
            </a-sub-menu>
          </A-sub-menu>
        </A-menu>
      </div>
    </Aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.gvb_admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  aside {
    width: 240px;
    .gvb_logo {
      height: 90px;
      display: flex;
      padding: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  main {
    width: calc(100% - 240px);
  }
}
</style>
