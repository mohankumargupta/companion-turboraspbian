import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import DefaultContent from '@/components/MainPage/DefaultContent'
import Sidebar from '@/components/MainPage/Sidebar'
import SidebarEmpty from '@/components/MainPage/SidebarEmpty'
import SetupProfile from '@/components/PreLaunch/SetupProfile'
import DownloadRepo from '@/components/PreLaunch/DownloadRepo'
import Dashboard from '@/components/MainPage/Dashboard'
import SSH from '@/components/MainPage/SSH'
import InstallSoftware from '@/components/MainPage/InstallSoftware'
import Raspbian from '@/components/MainPage/Raspbian'
import Python from '@/components/MainPage/Python'
import NodeRed from '@/components/MainPage/NodeRed'
import Docker from '@/components/MainPage/Docker'
import Welcome from '@/components/PreLaunch/Welcome'
import LaunchOptions from '@/components/PreLaunch/LaunchOptions'
import Summary from '@/components/MainPage/Summary'
import NetworkStorage from '@/components/MainPage/NetworkStorage'
import Run from '@/components/MainPage/Run'
import RunBash from '@/components/MainPage/RunBash'
import Miscellaneous from '@/components/MainPage/Miscellaneous'

const storage = require('electron-json-storage')
const path = require('path')
const fs = require('fs')

Vue.use(Router)

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          components: {
            default: Welcome,
            sidebar: SidebarEmpty
          }
        },
        {
          path: '/setup-profile',
          name: 'setup-profile',
          components: {
            default: SetupProfile,
            sidebar: SidebarEmpty
          }
        },
        {
          path: '/download-repo',
          name: 'download-repo',
          components: {
            default: DownloadRepo,
            sidebar: SidebarEmpty
          }
        },
        {
          path: '/launch-options',
          name: 'launch-options',
          components: {
            default: LaunchOptions,
            sidebar: SidebarEmpty
          }
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          components: {
            default: Dashboard,
            sidebar: Sidebar
          }
        },
        {
          path: '/ssh',
          name: 'ssh',
          components: {
            default: SSH,
            sidebar: Sidebar
          }
        },
        {
          path: '/installsoftware',
          name: 'installsoftware',
          components: {
            default: InstallSoftware,
            sidebar: Sidebar
          }
        },
        {
          path: '/raspbian',
          name: 'raspbian',
          components: {
            default: Raspbian,
            sidebar: Sidebar
          }
        },
        {
          path: '/python',
          name: 'python',
          components: {
            default: Python,
            sidebar: Sidebar
          }
        },
        {
          path: '/nodered',
          name: 'nodered',
          components: {
            default: NodeRed,
            sidebar: Sidebar
          }
        },
        {
          path: '/docker',
          name: 'docker',
          components: {
            default: Docker,
            sidebar: Sidebar
          }
        },
        {
          path: '/default',
          name: 'default',
          components: {
            default: DefaultContent,
            sidebar: Sidebar
          }
        },
        {
          path: '/network-storage',
          name: 'networkstorage',
          components: {
            default: NetworkStorage,
            sidebar: Sidebar
          }
        },
        {
          path: '/miscellaneous',
          name: 'miscellaneous',
          components: {
            default: Miscellaneous,
            sidebar: Sidebar
          }
        },
        {
          path: '/summary',
          name: 'summaryscreen',
          components: {
            default: Summary,
            sidebar: Sidebar
          }
        },
        {
          path: '/run',
          name: 'runscreen',
          components: {
            default: Run,
            sidebar: Sidebar
          }
        },
        {
          path: '/runbash',
          name: 'runbash',
          components: {
            default: RunBash,
            sidebar: Sidebar
          }
        }
      ]
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.name === 'main-page') {
    if (doesWorkspacePathExist()) {
      next({ name: 'dashboard' })
    } else {
      next({ name: 'welcome' })
    }
  } else {
    next()
  }
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

function doesWorkspacePathExist () {
  const workspacePathStorage = path.resolve(storage.getDataPath(), 'workspacePath.json')

  let isWorkspacePathStorage
  try {
    fs.statSync(workspacePathStorage)
    isWorkspacePathStorage = true
  } catch (err) {
    isWorkspacePathStorage = false
  }

  return isWorkspacePathStorage
}

export default routes
