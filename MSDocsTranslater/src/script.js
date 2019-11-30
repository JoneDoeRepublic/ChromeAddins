// F3キーで日本語ページと英語ページを切り替えます。
function switchLanguage(event) {
    // F3キー以外の入力は無視
    const keyName = event.key;
    if (keyName !== 'Shift') {
        return;
    }

    // 置き換え対象のURLを取得
    const thisUrl = location.href;
    let switchedUrl;
    if (thisUrl.match(/ja-jp/)) {
        switchedUrl = thisUrl.replace('ja-jp', 'en-us');
    } else if (thisUrl.match(/en-us/)) {
        switchedUrl = thisUrl.replace('en-us', 'ja-jp');
    } else {
        return;
    }

    // ページ切り替え
    window.location.href = switchedUrl;
}

// 初期関数(即時実行)
(function initialize() {
    document.onkeydown = switchLanguage;
}());