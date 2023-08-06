import { UITextSlot } from ".";

const i18n = function (slot: UITextSlot, ...format: string[]): string {
    const data: Record<UITextSlot, () => string> = {
        "T_LastUpdate": () => `Last update: ${format[0]}`,
        "T_Age": () => `Age of ${format[0].toString()}`,
        "T_Print": () => "Print Page",
        "T_PDF": () => "PDF Resume"
    }
    return data[slot]()
}

i18n.LANG = "English"
i18n.LANGPROMPT = "Language Chooser"

export default i18n;