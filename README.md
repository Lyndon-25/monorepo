# monorepo

monorepo/
├── apps/                 # 业务应用层
│   ├── merchant-h5/      # H5 移动端应用
│   └── merchant-pc/      # PC 管理后台
└── shared/               # 共享能力层
    ├── apis/             # 统一接口封装
    ├── components/       # 通用组件
    ├── constants/        # 全局常量
    ├── types/            # 类型定义
    └── utils/            # 工具函数

## apps

merchant-h5/src/
├── pages/              # 业务模块
│   ├── user/             # 用户模块
│   │   ├── components/   # 模块内组件
│   │   ├── api.ts        # 接口调用
│   │   └── index.tsx     # 页面入口
│   └── order/            # 订单模块
├── routes/               # 路由配置
└── App.tsx               # 应用入口

- merchant-h5

商家端 H5 页面。内嵌 webview，运行在 xxx 端内，通过 jsbridge 进行 native 交互

- merchant-pc

商家端 PC 页面。功能完全版的商家管理后台，相比 H5 功能更丰富，操作更加便捷，让商家管理更简单

## shared

这个是 monorepo 的共享核心。采用 rollup 进行打包，集成业务中的 api、components、constants、utils 等相关模块。
通过 vitest 进行单元测试，保证代码质量，每个模块通过 index.ts or index.tsx 进行统一导出