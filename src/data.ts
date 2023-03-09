import { ResumeData } from "./types/data"

const data: ResumeData = {
    name: "黄凯升",
    englishName: "Huang Kaisheng",
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
            content: `软件工程专业`
        }]
    },
        {
            title: "实践经历",
            details: [{
                title: {
                    text: "2020.9 至今",
                    icon: "· "
                },
                location: "红岩网校工作站",
                badge: {
                    text: "校级组织",
                },
                content: `
*运维安全部（SRE）* *副站长*

负责红岩网校的基础架构，包括 Kubernetes 高可用平台运维、机房 IDC 设备维护、CI/CD 和内部 IT 系统的构建，并承担培养下一届学员的任务。  
在职期间维护在校内每日使用数千次的掌上重邮服务运行，承办了 ACM 校赛、红岩杯 CTF 信息安全大赛等校内赛事，设计了网校现有的高可用架构。

#### 基础架构
*Kubernetes* *Ceph* *Proxmox VE*

基于 Proxmox VE 作为基础系统、Ceph、Kubernetes 构建了当前网校的生产集群，Ceph 作为 Kubernetes CSI，通过 MetalLB 实现服务的高可用和负载均衡，通过 Kube-Karp 实现 kube-apiserver 的高可用，Ceph 生产数据划分不同存储类进行双副本和三副本存储，从而实现对故障的容忍。

#### Redrock SSO
*2022* *Keycloak* *LDAP* *JavaScript*

主导重构了红岩网校内部统一认证系统，基于 Node.js 开发了 Virtual-LDAP 的飞书账户同步插件，通过 Keycloak API 批量完成账号绑定，完成了 SSO 单点登录，OpenID Connect 对部分资产（如 KubeSphere）的访问进行鉴权。

#### CI/CD
*2023* *K8s开发* *GitLab CI/CD*

基于 GitLab 主导重构了红岩网校的 CI/CD 系统，基于 Kaniko 实现了安全的容器打包，通过 Helm Chart 实现了对部署的管理，通过 Kubernetes RBAC 实现了严格限制权限的 CI/CD。

#### 红岩网关
*2020-2021* *Linux* *iptables* *libvirt*

使用运行 Ubuntu 的 Linux 物理机从零搭建了红岩网校工作区的路由网关，通过 iptables 实现了防火墙和透明代理以更好地控制流量，通过 libvirt 部署了虚拟机中的流量审计系统。
`
            }]
        }],
    experiences2: [{
        title: "专业能力",
        details: [`
- *7年* Linux服务器学习和实践经验，*3年*校内 bare-metal 实际运维经验，具备扎实的计算机网络等知识基础
- 熟悉主流的 Linux 发行版，对 iptables 等 Linux 组件有丰富的实践经验
- 对 *Docker*、*Kubernetes* 等容器和容器编排技术有丰富的实践经验，了解云原生相关概念，熟悉 *Nginx*、*Traefik* 等业务网关
- 精通 *shell*、*Python*、*JavaScript*、*TypeScript*，对 *Golang*、*PHP*、*C/C++*、*Java* 有一定了解，独立使用以上语言编写过程序
  + 有能力编写脚本进行自动化运维，并能够独立进行小规模项目的前后端开发
  + 前端方面：熟练使用浏览器 DevTools 进行调试，熟悉 *React* 框架，使用过 *Vue*（[本简历使用 React 编写](https://github.com/qwqVictor/resume)）
  + 后端方面：能够基于 *Node.js* 的 Express + TypeORM 或 Python 的 Flask、FastAPI 进行小型工程的后端开发，对 JSON Web Token 等常见鉴权方式有所了解。
- 了解 MySQL 数据库的基本使用，能够编写 SQL 语句进行一定程度的数据库运维
- 了解软件项目开发流程，能够使用 *Git* 进行版本管理和编写 CI/CD 脚本
- 具有创新精神，持续关注业内前沿技术。工作上积极执行有责任心，具有良好的沟通合作能力、分析解决问题能力以及较强的学习能力
- 具备英文资料检索、阅读能力，通过 *CET-4* 和 *CET-6* 英语能力考试`]
    },{
        title: "获奖经历",
        details: [`
- 🥇第十三届蓝桥杯C/C++省赛 B 组一等奖
- 🥈全国信息学奥林匹克竞赛省赛(NOIP) 2018 二等奖`]
    },{
        title: "个人作品",
        details: [`
- HomeIDC: 喜欢折腾一些有趣的东西，在家购置了一台二手服务器，基于 Proxmox VE 作为虚拟化平台，通过 Samba 搭建了 NAS 系统，通过 Windows Server 的 Active Directory 和 Keycloak 构建了家中的统一认证系统，K3S 作为 Kubernetes 发行版，[个人博客](https://qwq.ren)运行于家中
- [CQUPT-ics](https://github.com/qwqVictor/CQUPT-ics): 基于 Python 异步 FastAPI 后端编写的课表-日历订阅转换 API
- [LyricsV-core](https://github.com/qwqVictor/LyricsV-core): 通过 TypeScript、winax 实现的 iTunes 滚动歌词核心实现，GUI 部分尚未完工
`]
    }]
}

export default data