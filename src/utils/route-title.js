import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Element Admin'

export function generateTitle(title) {
  return route[title] || title
}

export function getPageTitle(key) {
  if (route[key]) {
    return `${route[key]} - ${title}`
  }
  return `${title}`
}

export const route = {
  dashboard: '首页',
  Table: 'Table',
  dynamicTable: '动态 Table',
  dragTable: '拖拽 Table',
  inlineEditTable: 'Table 内编辑',
  complexTable: '综合 Table',
  errorPages: '错误页面',
  page401: '401',
  page404: '404',
  profile: '个人中心'
}
