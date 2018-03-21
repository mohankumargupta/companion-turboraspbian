import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import DefaultContent from '@/components/MainPage/DefaultContent'
import Sidebar from '@/components/MainPage/Sidebar'
import Workspace from '@/components/PreLaunch/Workspace'
import DownloadRepo from '@/components/PreLaunch/DownloadRepo'
import Dashboard from '@/components/MainPage/Dashboard'
import SSH from '@/components/MainPage/SSH'
import InstallSoftware from '@/components/MainPage/InstallSoftware'

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
      children: [{
        path: '/default',
        name: 'default',
        components: {
          default: DefaultContent,
          sidebar: Sidebar
        }
      },
      {
        path: '/first-run',
        name: 'first-run',
        components: {
          default: Workspace,
          sidebar: Sidebar
        }
      },
      {
        path: '/download-repo',
        name: 'download-repo',
        components: {
          default: DownloadRepo,
          sidebar: Sidebar
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
      }
      ]
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (to.name === 'main-page') {
    if (preLaunch()) {
      next({ name: 'first-run' })
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
