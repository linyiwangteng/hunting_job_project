<template>
  <div>
      <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="Tab 1" key="1"><a href="/home.html#/">home pave</a></a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" forceRender><a href="/center.html#/">center page</a></a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
    methods: {
        callback(val){
            console.log(val)
        }
    }
}
</script>

<style>

</style>