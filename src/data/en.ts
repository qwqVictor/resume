export default {
    name: "Huang Kaisheng",
    altName: "黄凯升",
    job: "DevOps / Full Stack",
    sex: "Male",
    birthday: new Date("2002-05-10"),
    university: {
        name: "CQUPT",
        type: "Bachelor",
        begin: 2020,
        subject: "Software Engineering"
    },
    url: "https://qwq.ren",
    mail: "i@qwq.ren",
    phone: "+86 147-5398-6559",
    github: "qwqVictor",
    experiences1: [{
        title: "Education Experiences",
        details: [{
            title: {
                text: "2020.9 - Now",
                icon: "🏫"
            },
            location: "CQUPT",
            badge: {
                text: "Undergraduate",
            },
            content: `Chongqing University of Posts and Telecommunications.

Major in Software Engineering. Rated at top 20%. Weighted average score of compulsory courses is 82.73.`
        }]
    },
    {
        title: "Practices",
        details: [{
            title: {
                text: "2023.7 - 2023.9",
                icon: ""
            },
            location: "JD.com",
            badge: {
                text: "Summer Intern",
            },
            content: `
*JD Cloud* *Platform Operation Engineer*

Involved in the operation and maintenance of JD Cloud. Will participate in the maintenance work and troubleshooting of JD.com's infrastructure. And undertaken some development tasks of auto-ops products.
`
        }, {
            title: {
                text: "2020.9 - 2023.6",
                icon: ""
            },
            location: "Redrock Team",
            badge: {
                text: "School Association",
            },
            content: `
*SRE Team* *Vice President*

Responsible for the infrastructure of Redrock, including Kubernetes HA platform maintenance, IDC, CI/CD and internal IT system, and the task of training the next grade of students.  
During my tenure, I maintained the HandheldCQUPT that was used thousands of times daily by students, organized school competitions such as the ACM Campus Competition and the Redrock Cup CTF, and designed the existing Ceph + Kubernetes + MetalLB HA architecture for Redrock.

#### Redrock SSO

Led the refactor of the internal unified authentication system of Redrock Team. Developed the Virtual-LDAP Lark account synchronization plug-in based on Node.js, completed account binding in batches through the Keycloak API, and achieved single-sign-on authentication for some systems such as KubeSphere by OpenID Connect.

#### CI/CD

Refactored the CI/CD system based on GitLab, with secure container packaging implemented based on Kaniko, deployment management implemented through Helm Chart and strictly limited permissions by Kubernetes RBAC.

#### Redrock Gateway

Built the office Linux router from scratch using Ubuntu, with firewall and transparent proxy implemented by iptables and traffic auditing system deployed in VM by libvirt.
`
        }]
    }],
    experiences2: [{
        title: "Professional Abilities",
        details: [`
- Rich experience in Linux server. Rich bare-metal operation experience in school. Knowledged in computer networking.
- Familiar with popular Linux distributions. Well practiced in Linux components such as iptables.
- Well practiced in container and container orchestration with *Docker* and *Kubernetes*. Know the concept of Cloud Native. Familiar with L7 gateways like *Nginx* and *Traefik*.
- Proficient in *shell*, *Python*, *JavaScript* and *TypeScript*, skilled in *C/C++*, and have basic knowledge of *Golang*, *PHP* and *Java*. Can independently develop using these PLs.
    + Capable to write scripts for automatical maintenance and develop a small full-stack project.
    + Frontend part: Debugging expertly with DevTools in browser. Familiar with *React*, and have used *Vue*. \([This resume is built with React](https://github.com/qwqVictor/resume)\)
    + Backend part: Can develop the backend of small projects based on Express + TypeORM of *Node.js* or Flask and FastAPI of *Python*. Understanding JSON Web Token.
- Know the basic usage of MySQL and can write SQL statements to do some DBA work.
- Understand the development phase of software projects. Capable to use *Git* to control versions and write CI/CD scripts.
- Understand part of compilation theory. Capable to write simple compiler frontend or parse a DSL.
- Innovative and keeping track of industry-leading technologies. Responsible and enthusiastic at work. Cooperative and good at troubleshooting and studying.
- Skilled in searching and reading English documents. Passed *CET-4* and *CET-6*.
`]
    }, {
        title: "Awards",
        details: [`
- 🥇13th Lanqiao Contest (C/C++) in Provinces: **1st award** in group B`]
    }, {
        title: "Personal Projects",
        details: [`
- HomeIDC: Be a geek! Got a 2nd-handed server at home. Based on Proxmox VE, I built NAS system with Samba, built the SSO with Active Directory and Keycloak. Used K3S and [Personal blog](https://qwq.ren) is running on the infra.
- [CQUPT-ics](https://github.com/qwqVictor/CQUPT-ics): Async class schedule to calendar subscription converter API based on FastAPI backend, written in Python
- [LyricsV-core](https://github.com/qwqVictor/LyricsV-core): Core component of iTunes scrolling lyrics, implemented with TypeScript and winax
- [Future Program: Edited](https://blog.qwq.ren/posts/how-to-ac-future-program-edit-1-compiler-frontend-and-interpreter/): Compiler frontend and runtime of a C++ subset. It can run simple programs now.
`]
    }]
}