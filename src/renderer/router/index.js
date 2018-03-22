import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import DefaultContent from '@/components/MainPage/DefaultContent'
import Sidebar from '@/components/MainPage/Sidebar'
import SidebarEmpty from '@/components/MainPage/SidebarEmpty'
import Workspace from '@/components/PreLaunch/Workspace'
import DownloadRepo from '@/components/PreLaunch/DownloadRepo'
import Dashboard from '@/components/MainPage/Dashboard'
import SSH from '@/components/MainPage/SSH'
import InstallSoftware from '@/components/MainPage/InstallSoftware'
import Raspbian from '@/components/MainPage/Raspbian'
import Python from '@/components/MainPage/Python'
import NodeRed from '@/components/MainPage/NodeRed'
import Docker from '@/components/MainPage/Docker'
import Welcome from '@/components/PreLaunch/Welcome'
import CheckShell from '@/components/PreLaunch/CheckShell'

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
          path: '/first-run',
          name: 'first-run',
          components: {
            default: Workspace,
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
          path: '/checkshell',
          name: 'check-shell',
          components: {
            default: CheckShell,
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
        }
      ]
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.name === 'main-page') {
    if (preLaunch()) {
      next({ name: 'welcome' })
    } else {
      next({ name: 'dashboard' })
    }
  } else {
    next()
  }
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

function preLaunch () {
  const workspacePathStorage = path.resolve(storage.getDataPath(), 'workspacePath.json')

  let isWorkspacePathStorage
  try {
    fs.statSync(workspacePathStorage)
    isWorkspacePathStorage = false
  } catch (err) {
    isWorkspacePathStorage = true
  }

  return isWorkspacePathStorage
}

export default routes
