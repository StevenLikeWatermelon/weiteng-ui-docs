<template>
  <div class="full-width">
    <div class="custom-tree-container">
      <div class="block">
        <p>使用 render-content</p>
        <el-tree
          :data="treeData"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        />
      </div>
      <div class="block">
        <p>使用 scoped slot</p>
        <el-tree
          :data="treeData"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <span slot-scope="{ node, data }" class="custom-tree-node">
            <el-icon :type="data.icon" />
            <span>{{ node.label }}</span>
            <span>
              <el-button
                type="text"
                size="mini"
                @click="() => append(data)"
              >
                Append
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)"
              >
                Delete
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
let id = 1000

export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      icon: 'ios-home',
      children: [{
        id: 4,
        label: '二级 1-1',
        icon: 'ios-home',
        children: [{
          id: 9,
          icon: 'ios-home',
          label: '三级 1-1-1'
        }, {
          id: 10,
          icon: 'ios-home',
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      icon: 'ios-home',
      children: [{
        id: 5,
        label: '二级 2-1',
        icon: 'ios-key'
      }, {
        id: 6,
        label: '二级 2-2',
        icon: 'ios-leaf'
      }]
    }, {
      id: 3,
      label: '一级 3',
      icon: 'ios-leaf',
      children: [{
        id: 7,
        label: '二级 3-1',
        icon: 'ios-leaf'
      }, {
        id: 8,
        label: '二级 3-2',
        icon: 'ios-medical'
      }]
    }]
    return {
      treeData: JSON.parse(JSON.stringify(data))
    }
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [], icon: 'ios-restaurant' }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <el-icon type={data.icon} />
          <span>{node.label}</span>
          <span>
            <el-button size='mini' type='text' on-click={ () => this.append(data) }>Append</el-button>
            <el-button size='mini' type='text' on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
        </span>)
    }
  }
}
</script>

<style scoped>
.custom-tree-container {
  display: flex;
  align-items: center;
}
.block {
  width: 50%;
  text-align: center;
}
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
