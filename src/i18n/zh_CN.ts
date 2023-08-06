import { UITextSlot } from ".";

const i18n = function (slot: UITextSlot, ...format: string[]): string {
    const data: Record<UITextSlot, () => string> = {
        "T_LastUpdate": () => `最后更新于 ${format[0]}。`,
        "T_Age": () => `${format[0].toString()} 岁`,
        "T_Print": () => "打印本页",
        "T_PDF": () => "PDF 简历"
    }
    return data[slot]()
}

i18n.LANG = "中文"
i18n.LANGPROMPT = "语言选择"

export default i18n;