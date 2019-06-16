<template>
  <a-locale-provider :locale="zhCN">
    <div id="app">
      {{chensy}}
      123
    </div>
  </a-locale-provider>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
@Component
export default class App extends Vue {
	zhCN = zhCN;
	chensy: string = '林晨曦';
}
</script>
