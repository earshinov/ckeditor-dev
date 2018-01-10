/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Japanese language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'ja' ] = {
	// ARIA description.
	editor: 'リッチテキストエディタ',
	editorPanel: 'リッチテキストエディタパネル',

	// Common messages and labels.
	common: {
		// Screenreader titles. Please note that screenreaders are not always capable
		// of reading non-English words. So be careful while translating it.
		editorHelp: 'ヘルプは ALT 0 を押してください',

		browseServer: 'サーバブラウザ',
		url: 'URL',
		protocol: 'プロトコル',
		upload: 'アップロード',
		uploadSubmit: 'サーバーに送信',
		image: 'イメージ',
		flash: 'Flash',
		form: 'フォーム',
		checkbox: 'チェックボックス',
		radio: 'ラジオボタン',
		textField: '１行テキスト',
		textarea: 'テキストエリア',
		hiddenField: '不可視フィールド',
		button: 'ボタン',
		select: '選択フィールド',
		imageButton: '画像ボタン',
		notSet: '<なし>',
		id: 'Id',
		name: 'Name属性',
		langDir: '文字表記の方向',
		langDirLtr: '左から右 (LTR)',
		langDirRtl: '右から左 (RTL)',
		langCode: '言語コード',
		longDescr: 'longdesc属性(長文説明)',
		cssClass: 'スタイルシートクラス',
		advisoryTitle: 'Title属性',
		cssStyle: 'スタイルシート',
		ok: 'OK',
		cancel: 'キャンセル',
		close: '閉じる',
		preview: 'プレビュー',
		resize: 'ドラッグしてリサイズ',
		generalTab: '全般',
		advancedTab: '高度な設定',
		validateNumberFailed: '値が数値ではありません',
		confirmNewPage: '変更内容を保存せず、 新しいページを開いてもよろしいでしょうか？',
		confirmCancel: 'オプション設定を変更しました。ダイアログを閉じてもよろしいでしょうか？',
		options: 'オプション',
		target: 'ターゲット',
		targetNew: '新しいウインドウ (_blank)',
		targetTop: '最上部ウィンドウ (_top)',
		targetSelf: '同じウィンドウ (_self)',
		targetParent: '親ウィンドウ (_parent)',
		langDirLTR: '左から右 (LTR)',
		langDirRTL: '右から左 (RTL)',
		styles: 'スタイル',
		cssClasses: 'スタイルシートクラス',
		width: '幅',
		height: '高さ',
		align: '行揃え',
		alignLeft: '左',
		alignRight: '右',
		alignCenter: '中央',
		alignJustify: '両端揃え',
		alignTop: '上',
		alignMiddle: '中央',
		alignBottom: '下',
		alignNone: 'なし',
		invalidValue: '不正な値です。',
		invalidHeight: '高さは数値で入力してください。',
		invalidWidth: '幅は数値で入力してください。',
		invalidCssLength: '入力された "%1" 項目の値は、CSSの大きさ(px, %, in, cm, mm, em, ex, pt, または pc)が正しいものである/ないに関わらず、正の値である必要があります。',
		invalidHtmlLength: '入力された "%1" 項目の値は、HTMLの大きさ(px または %)が正しいものである/ないに関わらず、正の値である必要があります。',
		invalidInlineStyle: '入力されたインラインスタイルの値は、"名前 : 値" のフォーマットのセットで、複数の場合はセミコロンで区切られている形式である必要があります。',
		cssLengthTooltip: 'ピクセル数もしくはCSSにセットできる数値を入力してください。(px,%,in,cm,mm,em,ex,pt,or pc)',

		// Put the voice-only part of the label in the span.
		unavailable: '%1<span class="cke_accessibility">, 利用不可能</span>',

		// Keyboard keys translations used for creating shortcuts descriptions in tooltips, context menus and ARIA labels.
		keyboard: {
			8: 'Backspace',
			13: 'Enter',
			16: 'Shift',
			17: 'Ctrl',
			18: 'Alt',
			32: 'Space',
			35: 'End',
			36: 'Home',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			124: 'F13',
			125: 'F14',
			126: 'F15',
			127: 'F16',
			128: 'F17',
			129: 'F18',
			130: 'F19',
			131: 'F20',
			132: 'F21',
			133: 'F22',
			134: 'F23',
			135: 'F24',
			224: 'Command'
		},

		// Prepended to ARIA labels with shortcuts.
		keyboardShortcut: 'キーボードショートカット',

		optionDefault: 'Default' // MISSING
	}
};
