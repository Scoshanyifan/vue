<template>
  <div>
    <instructions></instructions>
    <json-util></json-util>
  </div>
</template>
<script>
import Instructions from './Instructions'
import jsonUtil from './jsonUtil'

export default {
  components: {
    Instructions,
    jsonUtil
  }
}
</script>
