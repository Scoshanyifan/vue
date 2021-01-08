<template>
  <div>
    <Computed />

    <p></p>
    <p></p>

    <Watch/>

    <p></p>
    <p></p>

    <ComputedWatch></ComputedWatch>
  </div>
</template>
<script>
import Computed from './Computed'
import Watch from './Watch'
import ComputedWatch from './ComputedWatch'

export default {
  components: {
    Computed,
    Watch,
    ComputedWatch
  }
}
</script>
