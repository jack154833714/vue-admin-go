<script setup lang="ts">
import {
  IconApps,
  IconBug,
  IconBulb,
  IconMenu,
  IconSun,
  IconDown
} from '@arco-design/web-vue/es/icon'

import type {Component} from "vue"

interface Menutype {
  key: string,
  title: string,
  icon?: Component,
  name?: string,
  child: Menutype
}

const menuList: Menutype[] [
  {
    key: "1",title: "首页",
  }
  ]

defineOptions({
  name: 'adminPage'
})
</script>
<template>
  <div class="gvb_admin">
    <Aside>
      <div class="gvb_logo">
        <img src="/image/logo.png" alt="" srcset="" />
        <div class="logo_head">
          <div>测试代码</div>
          <div>测试代码2</div>
        </div>
      </div>
      <div class="gvb_menu">
        <A-menu :default-open-keys="['0']" :default-selected-keys="['0_2']">

            <A-menu-item key="0">
              <template #icon><icon-apps></icon-apps></template>
              首页
            </A-menu-item>
          <A-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>个人中心</template>
            <A-menu-item key="1_0">我的信息</A-menu-item>
          </A-sub-menu>
          <A-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>文章管理</template>
            <a-menu-item key="2_0">文章列表</a-menu-item>
          </A-sub-menu>
          <A-sub-menu key="3">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>用户管理</template>
            <a-menu-item key="3_0">用户列表</a-menu-item>
          </A-sub-menu>
          <A-sub-menu key="4">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>群聊管理</template>
            <a-menu-item key="3_0">群聊列表</a-menu-item>
          </A-sub-menu>
          <A-sub-menu key="5">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>系统管理</template>
            <a-menu-item key="3_0">菜单列表</a-menu-item>
          </A-sub-menu>
        </A-menu>
      </div>
    </Aside>
    <main>
      <div class="gvb_head">
        <div class="gvb_bread_curums">
          <A-breadcrumb>
            <A-breadcrumb-item>Home</A-breadcrumb-item>
            <A-breadcrumb-item>Channel</A-breadcrumb-item>
            <A-breadcrumb-item>News</A-breadcrumb-item>
          </A-breadcrumb>
        </div>
        <div class="gvb_function_area">
          <IconMenu class="action_icon"></IconMenu>
          <div class="gvb_theme">
            <IconSun class="action_icon"></IconSun>
          </div>
          <div class="gvb_user_info_menu">
            <a-dropdown>
              <div class="gvb_user_info_menu_dropdown">
                <img src="/image/icon.png" alt="" srcset="" />
                <span>枫枫</span>
                <IconDown></IconDown>
              </div>
              <template #content>
                <A-doption disabled>Option 2</A-doption>
                <A-doption>Option 3</A-doption>
                <A-doption>Option 1</A-doption>
                <A-doption>Option 4</A-doption>
                <A-doption>Option 5</A-doption>
                <A-doption>Option 6</A-doption>
                <A-doption>Option 7</A-doption>
                <A-doption>Option 8</A-doption>
                <A-doption>Option 9</A-doption>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
      <div class="gvb_tabs">
        <span class="gvb_tab active">首页</span>
        <span class="gvb_tab">用户列表</span>
        <span class="gvb_tab">文章列表</span>
      </div>
      <div class="gvb_container">
        <RouterView />
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.gvb_admin {
  display: flex;
  color: var(--color-text-1);
  aside {
    width: 240px;
    border-right: 1px solid var(--bg);
    height: 100vh;
    .gvb_logo {
      height: 90px;
      display: flex;
      padding: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .logo_head {
        > div:nth-child(1) {
          font-size: 22px;
          font-weight: bold;
        }
        > div:nth-child(2) {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }
  main {
    width: calc(100% - 240px);
    .gvb_head {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid var(--bg);
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      align-items: center;
    }
  }

  .gvb_function_area {
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    display: flex;
    align-items: center;
    // .gvb_theme {
    //   margin: 0 20px;
    // }
    .gvb_user_info_menu {
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .gvb_user_info_menu_dropdown {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .action_icon {
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
  }

  .gvb_tabs {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid var(--bg);
    padding: 0 20px;
    display: flex;
    align-items: center;
    .gvb_tab {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid var(--bg);
      padding: 2px 6px;
      margin-right: 10px;

      &.active {
        background-color: skyblue;
      }
    }
  }

  .gvb_container {
    background-color: var(--bg);
    min-height: calc(100vh - 90px);
  }
}
</style>
