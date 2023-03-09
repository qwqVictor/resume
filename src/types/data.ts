export type ResumeData = {
    name: string,
    englishName?: string
    job: string,
    sex: string,
    birthday: Date,
    university: {
        name: string,
        subject: string,
        type: string,
        begin: number,
        duration?: number
    },
    url?: string,
    mail?: string,
    phone?: string,
    github?: string,
    experiences1: ResumeExperience[],
    experiences2: ResumeExperience[]
}

export type ResumeExperience = {
    title: string,
    details: ResumeExperienceDetail[] | string[]
}

export type ResumeLink = {
    text: string,
    url?: string,
    icon?: string
}

export type ResumeExperienceDetail = {
    title: ResumeLink,
    content?: string,
    location?: string,
    badge?: ResumeLink,
}