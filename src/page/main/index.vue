<template>
  <div>
      <div style="min-width:1340px;overflow:hidden">
      <div class="sider">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            </el-menu>
      </div>
      <div class="main">
          <router-view />
      </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped >
.sider{
    background-color: gray;
    width:15%;
    min-width:200px;
    float:left;
}
.main{
    background-color:green;
    width:85%;
    min-width:1135px;
    height:100px;
    float:left;
}
</style>
