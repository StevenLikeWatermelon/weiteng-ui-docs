<template>
  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    @check-change="handleCheckChange"
  />
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'isLeaf'
      },
      count: 1
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2', isLeaf: true }])
      }
      if (node.level > 8) return resolve([])

      let hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      }

      setTimeout(() => {
        let data
        if (hasChild) {
          data = [{
            name: 'zone' + this.count++
          }, {
            name: 'zone' + this.count++
          }]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    }
  }
}
</script>
