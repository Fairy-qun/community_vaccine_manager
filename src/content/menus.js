const admin_menus = [
  {
    id: 1,
    path: '/home',
    name: '后台首页',
    icon: 'Aim',
    children: [
      {
        id: 101,
        path: '/home',
        name: '主控台',
        icon: 'HomeFilled'
      }
    ]
  },
  {
    id: 2,
    path: '/resident',
    name: '居民管理',
    icon: 'User',
    children: [
      {
        id: 201,
        path: '/resident/list',
        name: '居民列表',
        icon: 'UserFilled'
      }
    ]
  },
  {
    id: 3,
    path: '/vaccine',
    name: '疫苗管理',
    icon: 'Collection',
    children: [
      {
        id: 301,
        path: '/vaccine/type',
        name: '疫苗类型分类',
        icon: 'SetUp'
      },
      {
        id: 302,
        path: '/vaccine/list',
        name: '疫苗列表',
        icon: 'SetUp'
      }
    ]
  },
  {
    id: 4,
    path: '/inoculate',
    name: '接种管理',
    icon: 'Calendar',
    children: [
      {
        id: 401,
        path: '/inoculate/add_info',
        name: '添加接种信息',
        icon: 'TrendCharts'
      },
      {
        id: 402,
        path: '/inoculate/list',
        name: '接种列表',
        icon: 'TrendCharts'
      }
    ]
  },
  {
    id: 5,
    path: '/inoculate_point',
    name: '接种点管理',
    icon: 'TakeawayBox',
    children: [
      {
        id: 501,
        path: '/inoculate_point/list',
        name: '接种点列表',
        icon: 'Briefcase'
      }
    ]
  },
  {
    id: 6,
    path: '/system',
    name: '系统管理',
    icon: 'Setting',
    children: [
      {
        id: 601,
        path: '/system/user',
        name: '用户管理',
        icon: 'User'
      },
      {
        id: 602,
        path: '/system/role',
        name: '系统角色',
        icon: 'HelpFilled'
      }
      // {
      //   id: 603,
      //   path: '/system/access',
      //   name: '系统权限',
      //   icon: 'PictureRounded'
      // }
    ]
  }
]

// 普通用户菜单
const menus = [
  {
    id: 1,
    path: '/home',
    name: '后台首页',
    icon: 'Aim',
    children: [
      {
        id: 101,
        path: '/home',
        name: '主控台',
        icon: 'HomeFilled'
      }
    ]
  },
  {
    id: 3,
    path: '/vaccine',
    name: '疫苗管理',
    icon: 'Collection',
    children: [
      {
        id: 301,
        path: '/vaccine/vaccine_getinfo',
        name: '疫苗信息查询',
        icon: 'SetUp'
      }
    ]
  },
  {
    id: 4,
    path: '/inoculate',
    name: '接种管理',
    icon: 'Calendar',
    children: [
      {
        id: 401,
        path: '/inoculate/my_inoculate_info',
        name: '我的接种信息',
        icon: 'TrendCharts'
      }
    ]
  },
  {
    id: 5,
    path: '/inoculate_point',
    name: '接种点管理',
    icon: 'TakeawayBox',
    children: [
      {
        id: 501,
        path: '/inoculate_point/inoculate_point_info',
        name: '接种点查询',
        icon: 'Briefcase'
      }
    ]
  }
]

module.exports = { admin_menus, menus }
