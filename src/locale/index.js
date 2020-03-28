import en_US from './en_US'
import zh_TW from './zh_TW'
// import jp from './jp.json'


/*
    locale: 根據不同地區顯示不同之時間格式，使用相對時間之 Element 時，會顯對應文字。
    messages: 多國語系之文字翻譯 JSON 檔案
*/

const maplang = {
    'default': { locale: 'zh-Hant', messages: zh_TW },
    'zh': { locale: 'zh-Hant', messages: zh_TW },
    'zh-TW': { locale: 'zh-TW', messages: zh_TW },
    'en': { locale: 'en', messages: en_US },
    'en-US': { locale: 'en', messages: en_US },
}

export default (langs = navigator.languages) => {

    if (!Array.isArray(langs)) langs = [langs]

    for (let i = 0; i < langs.length; i++)
        if (maplang[langs[i]])
            return maplang[langs[i]]

    return maplang['default']

}