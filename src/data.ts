import { ResumeData } from "./types/data"

export const title: string = "Resume | 黄凯升"
const data: ResumeData = {
    name: "黄凯升",
    altName: "Huang Kaisheng",
    job: "运维开发 / 全栈开发",
    sex: "男",
    birthday: new Date("2002-05-10"),
    university: {
        name: "重庆邮电大学",
        type: "本科",
        begin: 2020,
        subject: "软件工程"
    },
    url: "https://qwq.ren",
    mail: "i@qwq.ren",
    phone: "+86 147-5398-6559",
    github: "qwqVictor",
    experiences1: [{
        title: "教育经历",
        details: [{
            title: {
                text: "2020.9 至今",
                icon: "🏫"
            },
            location: "重庆邮电大学",
            badge: {
                text: "本科在读",
            },
            content: `软件工程专业，学业水平在专业内前 20%，必修课加权均分 83.44。`
        }]
    },
        {
            title: "实践经历",
            details: [{
                title: {
                    text: "2023.7 至今",
                    icon: ""
                },
                location: "京东集团",
                badge: {
                    text: "暑期实习",
                },
                content: `
*京东云事业部* *系统运维工程师*

参与京东集团京东云事业部运行维护工作。将深入参与京东集团自研 Kubernetes 发行版 JDOS 的运维工作、故障处理等。
`
            },{
                title: {
                    text: "2020.9 - 2023.6",
                    icon: ""
                },
                location: "红岩网校工作站",
                badge: {
                    text: "校级组织",
                },
                content: `
*运维安全部（SRE）* *副站长*

负责红岩网校的基础架构，包括 Kubernetes 高可用平台运维、机房 IDC 设备维护、CI/CD 和内部 IT 系统的构建，并承担培养下一届学员的任务。  
在职期间维护在校内每日使用数千次的掌上重邮服务运行，承办了 ACM 校赛、红岩杯 CTF 信息安全大赛等校内赛事，设计了网校现有的 Ceph + Kubernetes + MetalLB 高可用架构。

#### Redrock SSO
主导重构了红岩网校内部统一认证系统，基于 Node.js 开发了 Virtual-LDAP 的飞书账户同步插件，通过 Keycloak API 批量完成账号绑定，完成了 SSO 单点登录，OpenID Connect 对部分资产（如 KubeSphere）的访问进行鉴权。

#### CI/CD
基于 GitLab 主导重构了红岩网校的 CI/CD 系统，基于 Kaniko 实现了安全的容器打包，通过 Helm Chart 实现了对部署的管理，通过 Kubernetes RBAC 实现了严格限制权限的 CI/CD。

#### 红岩网关
使用运行 Ubuntu 的 Linux 物理机从零搭建了红岩网校工作区的路由网关，通过 iptables 实现了防火墙和透明代理以更好地控制流量，通过 libvirt 部署了虚拟机中的流量审计系统。
`
            }]
        }],
    experiences2: [{
        title: "专业能力",
        details: [`
- Linux 服务器学习和实践经验丰富，校内有丰富的 bare-metal 实际运维经验，具备扎实的计算机网络等知识基础
- 熟悉主流的 Linux 发行版，对 iptables 等 Linux 组件有丰富的实践经验
- 对 *Docker*、*Kubernetes* 等容器和容器编排技术有丰富的实践经验，了解云原生相关概念，熟悉 *Nginx*、*Traefik* 等业务网关
- 熟练掌握 *shell*、*Python*、*JavaScript*、*TypeScript*，掌握 *C/C++*，对 *Golang*、*PHP*、*Java* 有一定了解，独立使用以上语言编写过程序
  + 有能力编写脚本进行自动化运维，并能够独立进行小规模项目的前后端开发
  + 前端方面：熟练使用浏览器 DevTools 进行调试，熟悉 *React* 框架，使用过 *Vue*（[本简历使用 React 编写](https://github.com/qwqVictor/resume)）
  + 后端方面：能够基于 *Node.js* 的 Express + TypeORM 或 Python 的 Flask、FastAPI 进行小型工程的后端开发，对 JSON Web Token 等常见鉴权方式有所了解。
- 了解 MySQL 数据库的基本使用，能够编写 SQL 语句进行一定程度的数据库运维
- 了解软件项目开发流程，能够使用 *Git* 进行版本管理和编写 CI/CD 脚本
- 了解编译原理的部分知识，能够编写简单的编译器前端或解析 DSL
- 具有创新精神，持续关注业内前沿技术。工作上积极执行有责任心，具有良好的沟通合作能力、分析解决问题能力以及较强的学习能力
- 具备英文资料检索、阅读能力，通过 *CET-4* 和 *CET-6* 英语能力考试`]
    },{
        title: "获奖经历",
        details: [`
- 🥇第十三届蓝桥杯C/C++省赛 B 组一等奖`]
    },{
        title: "个人作品",
        details: [`
- HomeIDC: 喜欢折腾一些有趣的东西，在家购置了一台二手服务器，基于 Proxmox VE 作为虚拟化平台，通过 Samba 搭建了 NAS 系统，通过 Active Directory 和 Keycloak 构建了家中的统一认证系统，K3S 作为 Kubernetes 发行版，[个人博客](https://qwq.ren)运行于家中
- [CQUPT-ics](https://github.com/qwqVictor/CQUPT-ics): 基于 Python 异步 FastAPI 后端编写的课表-日历订阅转换 API
- [LyricsV-core](https://github.com/qwqVictor/LyricsV-core): 通过 TypeScript、winax 实现的 iTunes 滚动歌词核心实现
- [未来程序·改](https://blog.qwq.ren/posts/how-to-ac-future-program-edit-1-compiler-frontend-and-interpreter/): 一个 C++ 子集的编译器前端和运行时，已经能运行简单的程序
`]
    }]
}

export default data
