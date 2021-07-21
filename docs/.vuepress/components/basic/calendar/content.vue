<template>
  <div class="full-width">
    <el-calendar v-model="value">
      <template
        v-slot:dateCell="{date, data}"
      >
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  },
  watch: {
    value(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
  .is-selected {
    color: #1989FA;
  }
</style>
