import en from "./en"
import zh_CN from "./zh_CN"

export const langSet = ["zh_CN", "en"] as const

export type Language = typeof langSet[number]
export interface i18nConverter {
    (slot: UITextSlot, ...format: string[]): string
    LANG: string
    LANGPROMPT: string
}

const langMap: Record<Language, i18nConverter> = {
    zh_CN: zh_CN,
    en: en
}

export const langNameMap: Record<Language, string> = ((langNameMap: Record<Language, any>) => {
    for (const key in langNameMap)
        langNameMap[(key as Language)] = langMap[(key as Language)].LANG
    return langNameMap
})({...langMap})

export const langPrompt = langSet.map((lang) => langMap[lang].LANGPROMPT).reduce((pre, cur) => `${pre} / ${cur}`)

export type UITextSlot =
    "T_LastUpdate" |
    "T_Age" |
    "T_Print" |
    "T_PDF"

export function resolveI18n(languages: readonly string[]): Language {
    for (const lang of languages) {
        if (lang in langSet)
            return (lang as Language)
    }
    return langSet[0]
}
export function makeI18n(language: Language) {
    return langMap[language] ?? langMap[langSet[0]]
}