<template>
  <div class="header">
    <div class="logo" style="margin-left:20px;">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip
            effect="dark"
            :content="fullscreen ? `取消全屏` : `全屏`"
            placement="bottom"
          >
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <div class="message">
            <el-tooltip
              effect="dark"
              :content="message ? `有${message}条未读消息` : `消息中心`"
              placement="bottom"
            >
              <router-link to="/message">
                <i class="el-icon-bell"></i>
              </router-link>
            </el-tooltip>
            <span class="btn-bell-badge" v-if="message"></span>
          </div>
        </div>

        <div class="last">
          <!-- 用户头像 -->
          <div class="user-avator">
            <img src="../assets/img/touxiang.png" />
          </div>
          <!-- 用户名下拉菜单 -->
          <el-dropdown
            class="user-name"
            trigger="click"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              {{ username }}
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided command="theme"
                >更换主题</el-dropdown-item
              >
              <el-dropdown-item divided command="loginout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "./bus";
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: "daidai",
      message: 2,
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    },
  },
  mounted() {},
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }if(command =="theme"){
          this.$router.push("/theme");
      }
    },

    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
    > div {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 80px;
    }
    > div:first-child {
      border-left: none;
    }
  }
}

.btn-fullscreen {
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  // border-radius: 15px;
  cursor: pointer;
}
.btn-bell {
  .message {
    position: relative;
  }
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}

.last {
  .user-name {
    margin-left: 10px;
  }
  .user-avator {
    margin-left: 20px;
  }
  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }
  .el-dropdown-menu__item {
    text-align: center;
  }
}
</style>
