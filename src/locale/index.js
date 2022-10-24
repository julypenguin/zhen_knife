import en from './en'
import zh from './zh'

/*
    locale: 根據不同地區顯示不同之時間格式，使用相對時間之 Element 時，會顯對應文字。
    messages: 多國語系之文字翻譯 JSON 檔案
*/
export const maplang = {
    'default': { locale: 'zh', messages: zh },
    'zh': { locale: 'zh', messages: zh },
    'zh-TW': { locale: 'zh', messages: zh },
    // 'en': { locale: 'en', messages: en },
    // 'en-US': { locale: 'en', messages: en },
}


export default (langs = localStorage.getItem('language')) => {
    
    if (!langs) langs = navigator.languages
    if (!Array.isArray(langs)) langs = [langs]

    for (let i = 0; i < langs.length; i++) {
        if (maplang[langs[i]]) {
            localStorage.setItem('language', langs[i])
            return maplang[langs[i]]
        }
    }
    localStorage.setItem('language', 'default')
    return maplang['default']
}