window.__ModuleLoader__.load({
  id: 'dsh-hero-motto',
  factory(require) {
    console.info('[hero-motto] client v2.2.1 loaded');
    const React = require('react');
    const h = React.createElement;
    const useSyncExternalStore = React.useSyncExternalStore || React.unstable_useSyncExternalStore;

    // Official logo geometry and hover-swim morph targets, copied from the
    // dsh-client-ui-primitives FishLogo and the EmptyHero swim targets (the
    // bundle-purity gate forbids requiring Harness client packages here; the
    // eye subpaths carry zero weight and stay fixed across all three paths).
    const FISH_LOGO_VIEWBOX = { width: 23.16, height: 17.04 };
    const FISH_LOGO_PATH = 'M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z';
    const SWIM_UP =
      'M22.403 0.567C22.145 0.477 22.068 0.718 21.939 0.85C21.895 0.893 21.86 0.947 21.824 0.997C21.515 1.421 21.13 1.721 20.591 1.77C19.829 1.867 19.221 2.244 18.712 2.958C18.535 2.227 18.116 1.839 17.516 1.626C17.203 1.506 16.887 1.379 16.663 1.064C16.508 0.839 16.462 0.581 16.383 0.329C16.332 0.176 16.283 0.02 16.121 -0.002C15.944 -0.029 15.875 0.133 15.805 0.269C15.52 0.822 15.408 1.43 15.42 2.046C15.449 3.432 16.031 4.532 17.202 5.274C17.337 5.356 17.374 5.445 17.335 5.582C17.261 5.862 17.169 6.134 17.086 6.413C17.032 6.59 16.952 6.63 16.764 6.558C16.118 6.301 15.562 5.909 15.074 5.433C14.248 4.633 13.5 3.751 12.568 3.06C12.349 2.898 12.13 2.748 11.903 2.605C10.952 1.682 12.028 0.923 12.277 0.833C12.537 0.739 12.367 0.416 11.526 0.42C10.684 0.424 9.914 0.706 8.933 1.081C8.789 1.138 8.638 1.179 8.484 1.213C7.593 1.044 6.668 1.006 5.702 1.115C3.883 1.318 2.43 2.178 1.362 3.646C0.079 5.41 -0.223 7.415 0.147 9.506C0.535 11.71 1.66 13.535 3.389 14.962C5.181 16.441 7.246 17.166 9.601 17.027C11.032 16.944 12.624 16.753 14.421 15.232C14.874 15.458 15.35 15.548 16.138 15.615C16.746 15.672 17.331 15.585 17.784 15.491C18.493 15.341 18.444 14.684 18.188 14.564C16.108 13.595 16.565 13.989 16.15 13.67C17.206 12.42 18.82 10.198 19.363 7.086C19.421 6.709 19.484 6.171 19.469 5.866C19.458 5.681 19.493 5.604 19.681 5.556C20.199 5.412 20.691 5.172 21.125 4.806C22.366 3.824 22.758 2.554 22.708 1.1C22.7 0.878 22.649 0.654 22.403 0.567ZM11.175 14.451C9.159 12.726 8.182 12.088 7.778 12.067C7.401 12.047 7.469 12.505 7.552 12.807C7.639 13.103 7.752 13.313 7.91 13.581C8.02 13.758 8.095 14.01 7.801 14.16C7.152 14.487 6.023 13.806 5.97 13.772C4.657 12.85 3.559 11.766 2.785 10.369C2.037 9.025 1.603 7.583 1.532 6.044C1.513 5.672 1.622 5.541 1.992 5.473C2.479 5.383 2.981 5.364 3.468 5.436C5.525 5.736 7.276 6.675 8.744 8.323C9.582 9.299 10.216 10.425 10.869 11.496C11.563 12.592 12.31 13.603 13.262 14.414C13.598 14.696 13.866 14.91 14.123 15.068C13.349 15.154 12.058 15.167 11.175 14.452L11.175 14.451ZM12.141 8.26C12.141 8.095 12.273 7.963 12.439 7.963C12.476 7.963 12.511 7.971 12.541 7.982C12.582 7.997 12.62 8.019 12.65 8.053C12.704 8.106 12.733 8.181 12.733 8.26C12.733 8.425 12.601 8.556 12.435 8.556C12.27 8.556 12.141 8.425 12.141 8.26ZM15.142 9.799C14.949 9.878 14.757 9.945 14.572 9.953C14.284 9.968 13.972 9.851 13.802 9.709C13.537 9.487 13.348 9.363 13.27 8.977C13.236 8.812 13.255 8.556 13.284 8.41C13.352 8.094 13.277 7.892 13.055 7.708C12.873 7.558 12.643 7.516 12.39 7.516C12.296 7.516 12.209 7.475 12.145 7.441C12.039 7.389 11.952 7.257 12.035 7.096C12.062 7.043 12.19 6.916 12.22 6.893C12.563 6.698 12.96 6.762 13.326 6.908C13.665 7.047 13.922 7.302 14.292 7.663C14.669 8.098 14.738 8.218 14.953 8.545C15.123 8.801 15.277 9.063 15.383 9.364C15.447 9.551 15.364 9.705 15.142 9.799Z';
    const SWIM_DOWN =
      'M23.271 2.216C23.039 2.071 22.91 2.287 22.755 2.388C22.703 2.42 22.656 2.464 22.61 2.505C22.214 2.848 21.771 3.054 21.225 2.956C20.412 2.784 19.68 2.919 19.005 3.435C18.92 2.663 18.493 2.157 17.808 1.798C17.446 1.621 17.08 1.449 16.83 1.111C16.656 0.872 16.611 0.612 16.524 0.354C16.469 0.198 16.414 0.039 16.223 0.009C16.017 -0.024 15.936 0.137 15.856 0.271C15.539 0.822 15.418 1.43 15.429 2.046C15.454 3.432 16.041 4.538 17.196 5.36C17.325 5.456 17.356 5.547 17.312 5.674C17.229 5.936 17.134 6.191 17.051 6.454C16.999 6.623 16.921 6.659 16.738 6.58C16.107 6.306 15.56 5.909 15.074 5.433C14.248 4.633 13.5 3.751 12.568 3.06C12.349 2.898 12.13 2.748 11.903 2.605C10.952 1.682 12.028 0.923 12.277 0.833C12.537 0.739 12.367 0.416 11.526 0.42C10.684 0.424 9.914 0.706 8.933 1.081C8.789 1.138 8.638 1.179 8.484 1.213C7.593 1.044 6.668 1.006 5.702 1.115C3.883 1.318 2.43 2.178 1.362 3.646C0.079 5.41 -0.223 7.415 0.147 9.506C0.535 11.71 1.66 13.535 3.389 14.962C5.181 16.441 7.246 17.166 9.601 17.027C11.032 16.944 12.624 16.753 14.421 15.232C14.874 15.458 15.35 15.548 16.138 15.615C16.746 15.672 17.331 15.585 17.784 15.491C18.493 15.341 18.444 14.684 18.188 14.564C16.108 13.595 16.565 13.989 16.15 13.67C17.206 12.42 18.82 10.198 19.278 7.246C19.318 6.948 19.375 6.534 19.371 6.293C19.371 6.145 19.411 6.092 19.597 6.098C20.113 6.109 20.619 6.051 21.096 5.891C22.503 5.375 23.169 4.232 23.448 2.804C23.49 2.586 23.491 2.356 23.271 2.216ZM11.175 14.49C9.159 13.005 8.182 12.567 7.778 12.621C7.401 12.673 7.469 13.087 7.552 13.354C7.639 13.619 7.752 13.797 7.91 14.024C8.02 14.175 8.095 14.406 7.801 14.609C7.152 15.063 6.023 14.63 5.97 14.609C4.657 13.941 3.559 12.965 2.785 11.569C2.037 10.225 1.603 8.783 1.532 7.244C1.513 6.872 1.622 6.741 1.992 6.673C2.479 6.583 2.981 6.564 3.468 6.636C5.525 6.936 7.276 7.843 8.744 9.163C9.582 9.888 10.216 10.783 10.869 11.679C11.563 12.659 12.31 13.617 13.262 14.415C13.598 14.696 13.866 14.91 14.123 15.068C13.349 15.155 12.058 15.177 11.175 14.491L11.175 14.49ZM12.141 8.26C12.141 8.095 12.273 7.963 12.439 7.963C12.476 7.963 12.511 7.971 12.541 7.982C12.582 7.997 12.62 8.019 12.65 8.053C12.704 8.106 12.733 8.181 12.733 8.26C12.733 8.425 12.601 8.556 12.435 8.556C12.27 8.556 12.141 8.425 12.141 8.26ZM15.142 9.799C14.949 9.878 14.757 9.945 14.572 9.953C14.284 9.968 13.972 9.851 13.802 9.709C13.537 9.487 13.348 9.363 13.27 8.977C13.236 8.812 13.255 8.556 13.284 8.41C13.352 8.094 13.277 7.892 13.055 7.708C12.873 7.558 12.643 7.516 12.39 7.516C12.296 7.516 12.209 7.475 12.145 7.441C12.039 7.389 11.952 7.257 12.035 7.096C12.062 7.043 12.19 6.916 12.22 6.893C12.563 6.698 12.96 6.762 13.326 6.908C13.665 7.047 13.922 7.302 14.292 7.663C14.669 8.098 14.738 8.218 14.953 8.545C15.123 8.801 15.277 9.063 15.383 9.364C15.447 9.551 15.364 9.705 15.142 9.799Z';

    // One mixed pool: the interface language no longer picks a list.
    const DEFAULT_PHRASES = [
      '探索未至之境',
      'Into the [Unknown]',
    ];

    const ENTRY_ID = 'hero-motto';
    // 2.1.1 component split: the border marquee is its own bundle row.
    const MARQUEE_ENTRY_ID = 'hero-motto-marquee';
    const ANIMATIONS = ['float', 'blur', 'typewriter', 'none'];
    const LEAVE_MS = 420;
    const TYPE_MS = 45;

    const COPY = {
      zh: {
        cardTitle: '新会话短语轮换',
        phrases: '句子',
        add: '添加',
        remove: '删除',
        interval: '切换间隔',
        intervalUnit: (n) => n + ' 秒',
        animation: '切换动画',
        animLabel: { float: '上浮淡入', blur: '模糊切换', typewriter: '打字机', none: '无动画' },
        font: '字体',
        fontDefault: '回到默认',
        fontPreset: { systemUi: '系统界面', serif: '衬线', mono: '等宽', rounded: '圆润' },
        fontPick: '选择字体文件…',
        fontMyFonts: '我的字体',
        fontRemove: (name) => '删除字体 ' + name,
        fontLoadFailed: '字体文件读取失败，换个文件试试',
        previewBadge: '保留「预览版」徽标',
        previewBadgeHint: '关闭后标题旁的小胶囊不再显示',
        display: '显示',
        accent: '主题色',
        accentHint: '用于关键词高亮等强调处',
        accentCodeHint: '输入 #RGB 或 #RRGGBB 后回车',
        accentPick: '自定义颜色',
        phrasePlaceholder: '写一句想在新会话界面看到的话',
        phrasesHint: '每次进入新会话界面随机抽一句，一轮内不重复',
        intervalHint: '停在这句多久之后换下一句',
        animationHint: '切换时的过渡效果',
        alignHint: '鲸鱼和短句相对输入框的位置',
        fontHint: '内置预设，或上传自己的字体文件',
        align: '对齐方式',
        alignLabel: { left: '左对齐', center: '居中', right: '右对齐' },
        hint: '修改即时生效；新会话界面正开着的话，下一句就会按新设置轮换。',
        highlightHint: '[]内字符将以主题色显示',
        // ---- 边框跑马灯 (2.1.0) ----
        presetLabels: { rainbow: '经典彩虹', aurora: '极光', sunset: '日落', peach: '蜜桃', ocean: '海洋', cyber: '赛博霓虹', brand: '品牌蓝' },
        color: '颜色',
        colorHint: '边框跑马灯使用的色标：内置预设，或自建色组库。',
        paletteSource: '色标来源',
        preset: '预设',
        custom: '自定义',
        presetPalette: '预设色板',
        newGroup: '新建组',
        dupPreset: '复制当前预设',
        renameGroup: '重命名',
        deleteGroup: '删除',
        noCustom: '(暂无可用的自定义色组)',
        groupName: '组名',
        colors: '颜色',
        addColor: '添加颜色',
        minColors: '每组至少 2 个颜色',
        maxColors: '最多 12 个',
        effect: '效果',
        effectHint: '逐个开关灯带 / 辉光 / 跑马灯 / 呼吸。',
        border: '灯带',
        borderHint: '彩色边框环，可调环宽。',
        ringWidth: '环宽',
        ringWidthUnit: (n) => n + ' px',
        glow: '辉光',
        glowHint: '仅输入框外侧的彩色阴影，内部无效果。',
        glowIntensity: '弥散程度',
        glowIntensityUnit: (n) => n + '%',
        marquee: '跑马灯',
        marqueeHint: '色带沿边框流动。',
        flow: '流速',
        flowUnit: (n) => n + ' 秒/圈',
        breathe: '呼吸',
        breatheHint: '整体明暗脉动。',
        breatheRate: '频次',
        breatheRateUnit: (n) => n + ' 次/分',
        scope: '生效范围',
        scopeHint: '选择哪些界面显示边框跑马灯；两个都关则停用，但保留设置。',
        scopeNs: '新会话界面',
        scopeNsHint: '首页鲸鱼旁的输入框。',
        scopeChat: '对话页',
        scopeChatHint: '会话内的输入框。',
        brandGroup: '品牌蓝',
        save: '保存',
        cancel: '取消',
        mottoSection: '首页格言',
        marqueeSection: '跑马灯',
        brightness: '亮度',
        brightnessUnit: (n) => n + '%',
        focusOnly: '仅输入框选中时生效',
        focusOnlyHint: '开启后，只有点击/聚焦输入框时才显示跑马灯与辉光。',
        readonly: '设置通道暂不可写，当前展示默认值。',
      },
      en: {
        cardTitle: 'New-session motto rotation',
        phrases: 'Phrases',
        add: 'Add',
        remove: 'Remove',
        interval: 'Rotation interval',
        intervalUnit: (n) => n + ' s',
        animation: 'Animation',
        animLabel: { float: 'Float in', blur: 'Blur', typewriter: 'Typewriter', none: 'None' },
        font: 'Font',
        fontDefault: 'Back to default',
        fontPreset: { systemUi: 'System UI', serif: 'Serif', mono: 'Mono', rounded: 'Rounded' },
        fontPick: 'Choose font file…',
        fontMyFonts: 'My fonts',
        fontRemove: (name) => 'Remove font ' + name,
        fontLoadFailed: 'Could not read that font file; try another one',
        previewBadge: 'Keep the "Preview" badge',
        previewBadgeHint: 'Hides that pill beside the headline',
        display: 'Display',
        accent: 'Accent colour',
        accentHint: 'Used for keyword emphasis',
        accentCodeHint: 'Type #RGB or #RRGGBB, then Enter',
        accentPick: 'Custom colour',
        phrasePlaceholder: 'Write a line to show on the new-session screen',
        phrasesHint: 'Picked at random, each line once per cycle',
        intervalHint: 'How long a line stays before the next one',
        animationHint: 'How one line hands over to the next',
        alignHint: 'Where the whale and line sit against the composer',
        fontHint: 'A built-in preset, or a font file of your own',
        align: 'Alignment',
        alignLabel: { left: 'Left', center: 'Center', right: 'Right' },
        hint: 'Changes apply immediately; an open new-session view picks them up on the next rotation.',
        highlightHint: 'Text inside [] is shown in the accent colour.',
        // ---- Border marquee (2.1.0) ----
        presetLabels: { rainbow: 'Rainbow', aurora: 'Aurora', sunset: 'Sunset', peach: 'Peach', ocean: 'Ocean', cyber: 'Cyber', brand: 'Brand blue' },
        color: 'Colour',
        colorHint: 'Stops for the border marquee: a built-in preset or your own saved groups.',
        paletteSource: 'Source',
        preset: 'Preset',
        custom: 'Custom',
        presetPalette: 'Preset palette',
        newGroup: 'New group',
        dupPreset: 'Duplicate preset',
        renameGroup: 'Rename',
        deleteGroup: 'Delete',
        noCustom: '(no custom group yet)',
        groupName: 'Group name',
        colors: 'Colours',
        addColor: 'Add colour',
        minColors: 'At least 2 colours per group',
        maxColors: 'Up to 12',
        effect: 'Effects',
        effectHint: 'Toggle the band / glow / marquee / breathing individually.',
        border: 'Band',
        borderHint: 'Coloured border ring; width is adjustable.',
        ringWidth: 'Width',
        ringWidthUnit: (n) => n + ' px',
        glow: 'Glow',
        glowHint: 'A coloured shadow outside the composer only; nothing inside.',
        glowIntensity: 'Spread',
        glowIntensityUnit: (n) => n + '%',
        marquee: 'Marquee',
        marqueeHint: 'The colour band flows along the border.',
        flow: 'Speed',
        flowUnit: (n) => n + ' s / turn',
        breathe: 'Breathe',
        breatheHint: 'Overall brightness pulse.',
        breatheRate: 'Rate',
        breatheRateUnit: (n) => n + ' / min',
        scope: 'Scope',
        scopeHint: 'Choose which surfaces show the marquee; both off disables it but keeps settings.',
        scopeNs: 'New-session view',
        scopeNsHint: 'The composer beside the whale on the home screen.',
        scopeChat: 'Chat page',
        scopeChatHint: 'The composer inside a conversation.',
        brandGroup: 'Brand blue',
        save: 'Save',
        cancel: 'Cancel',
        mottoSection: 'Home motto',
        marqueeSection: 'Border marquee',
        brightness: 'Brightness',
        brightnessUnit: (n) => n + '%',
        focusOnly: 'Only when the composer is focused',
        focusOnlyHint: 'When on, the marquee and glow appear only while the composer has focus.',
        readonly: 'The settings channel is read-only right now; defaults are shown.',
      },
    };

    function lang() {
      if (typeof document === 'undefined') return 'zh';
      return String(document.documentElement.lang || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
    }
    function copy() { return COPY[lang()]; }

    function sanitizeList(value, fallback) {
      if (!Array.isArray(value)) return fallback;
      const list = value.filter((item) => typeof item === 'string' && item.trim() !== '');
      return list.length > 0 ? list : fallback;
    }
    function clampInterval(value, fallback) {
      const n = Number(value);
      if (!Number.isFinite(n)) return fallback;
      return Math.min(120, Math.max(2, Math.round(n)));
    }
    function sanitizeAnimation(value) {
      return ANIMATIONS.includes(value) ? value : 'float';
    }
    function sanitizeAlign(value) {
      return value === 'left' || value === 'right' || value === 'center' ? value : 'center';
    }
    // One accent colour drives the emphasis run and the card's own controls.
    const ACCENT_PRESETS = ['#5B7BFE', '#22C55E', '#F59E0B', '#EC4899', '#8B5CF6', '#06B6D4'];
    function sanitizeAccent(value) {
      if (typeof value !== 'string') return ACCENT_PRESETS[0];
      const hex = value.trim();
      if (/^#?[0-9a-f]{3}$/i.test(hex)) return '#' + hex.replace('#', '').split('').map((c) => c + c).join('');
      if (/^#?[0-9a-f]{6}$/i.test(hex)) return '#' + hex.replace('#', '').toUpperCase();
      return ACCENT_PRESETS[0];
    }
    // #RRGGBB -> "r, g, b", for the translucent variants the card uses.
    function accentRgb(hex) {
      const clean = sanitizeAccent(hex).slice(1);
      return [0, 2, 4].map((i) => parseInt(clean.slice(i, i + 2), 16)).join(', ');
    }
    // ---- Border-marquee palettes. Six built-in presets, each 2–12 hex stops.
    // The "follow theme" source is intentionally NOT here: it degrades to a
    // plain fixed hex group (default name "品牌蓝") stored as a custom group, so
    // runtime only ever feeds `--motto-stops` a concrete list of hex stops.
    const PRESET_PALETTES = {
      rainbow: ['#FF4D4D', '#FF9F1C', '#FFE600', '#36D399', '#37C2FF', '#7C5CFF', '#FF5CA8'],
      aurora: ['#22D3EE', '#34D399', '#A3E635', '#60A5FA', '#818CF8'],
      sunset: ['#FF6B6B', '#FF8E53', '#FFD166', '#F78FB3', '#B56576'],
      peach: ['#FFD3A5', '#FFB1A6', '#FF9AA2', '#FCBAD3', '#FFC8DD'],
      ocean: ['#00B4D8', '#0077B6', '#48CAE4', '#90E0EF', '#0096C7'],
      cyber: ['#FF00E5', '#7A00FF', '#00E5FF', '#00FF85', '#FFE600'],
      // The old "follow the theme" source degraded to a plain fixed hex group.
      brand: ['#5B7BFE', '#7C9BFF', '#4D6BFE'],
    };
    const PRESET_LIST = ['rainbow', 'aurora', 'sunset', 'peach', 'ocean', 'cyber', 'brand'];
    // A custom group's colour list: sanitize each entry to a valid hex, drop the
    // rest; returns null when the result is unusable (fewer than 2 colours).
    function sanitizePaletteColors(value) {
      if (!Array.isArray(value)) return null;
      const colors = value.map((item) => (typeof item === 'string' ? sanitizeAccent(item) : null)).filter(Boolean);
      return colors.length >= 2 ? colors : null;
    }
    // Build the concrete stop list for the active source:
    //  - preset mode → the chosen built-in preset (rainbow by default).
    //  - custom mode → the active custom group's colours (fallback to brand blue).
    // The list is CLOSED: the last stop repeats the first so the conic gradient
    // has no hard seam. Never empty; callers feed this straight into CSS.
    function resolveStops(value) {
      let colors = null;
      if (value.paletteMode === 'custom') {
        const id = value.activeCustomId;
        const group = Array.isArray(value.customPalettes)
          ? value.customPalettes.find((g) => g && g.id === id) : null;
        if (group) colors = sanitizePaletteColors(group.colors);
      }
      if (!colors) {
        const preset = PRESET_LIST.includes(value.presetPalette) ? value.presetPalette : 'rainbow';
        colors = PRESET_PALETTES[preset].slice();
      }
      if (!colors || colors.length < 2) colors = ['#5B7BFE', '#5B7BFE'];
      return colors.concat(colors[0]);
    }
    // A stable-ish id for a new custom group; collisions are avoided per draft.
    function newPaletteId() {
      return 'cp-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
    }
    // Build the `--motto-stops` value from a closed colour list. The list is
    // already closed (last == first), so a bare comma join lets conic-gradient
    // auto-space the stops evenly — the same technique the reference uses.
    function stopsToCss(colors) {
      return colors.join(', ');
    }
    // A font-family declaration from the settings card; empty means inherit.
    // Control characters are dropped and the value is length-capped; the style
    // channel itself refuses anything the browser cannot parse.
    function sanitizeFont(value) {
      if (typeof value !== 'string') return '';
      return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, 200);
    }
    // Built-in typeface presets. Each is a fallback chain so Chinese and Latin
    // both resolve; the empty value means "inherit the shipped headline font".
    const FONT_PRESETS = [
      { key: 'systemUi', value: "system-ui, -apple-system, 'Segoe UI', 'Microsoft YaHei', sans-serif" },
      { key: 'serif', value: "Georgia, 'Noto Serif SC', 'Songti SC', serif" },
      { key: 'mono', value: "ui-monospace, 'Cascadia Code', Consolas, monospace" },
      { key: 'rounded', value: "'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif" },
    ];
    // A stored font-family value is either a CSS list (presets) or one family
    // name the user loaded from a file, which needs quoting to be valid.
    function cssFontFamily(value) {
      if (typeof value !== 'string' || value.trim() === '') return undefined;
      if (/[,\n]/.test(value)) return value;
      if (/^\s*(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-serif|ui-sans-serif|ui-monospace|ui-rounded)\s*$/i.test(value)) return value;
      return '"' + value.replace(/"/g, '') + '"';
    }

    // ---- User font files: bytes live in IndexedDB, faces in document.fonts.
    const FONT_DB = 'hero-motto-fonts';
    const FONT_STORE = 'files';
    function openFontDb() {
      return new Promise((resolve, reject) => {
        try {
          const request = indexedDB.open(FONT_DB, 1);
          request.onupgradeneeded = () => { request.result.createObjectStore(FONT_STORE); };
          request.onsuccess = () => { resolve(request.result); };
          request.onerror = () => { reject(request.error); };
        } catch (error) {
          reject(error);
        }
      });
    }
    async function listStoredFonts() {
      const db = await openFontDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(FONT_STORE, 'readonly');
        const store = tx.objectStore(FONT_STORE);
        const keysRequest = store.getAllKeys();
        const valuesRequest = store.getAll();
        tx.oncomplete = () => {
          db.close();
          const keys = keysRequest.result || [];
          const values = valuesRequest.result || [];
          resolve(keys.map((key, index) => ({ name: String(key), buffer: values[index] })).filter((entry) => entry.buffer));
        };
        tx.onerror = () => { db.close(); reject(tx.error); };
      });
    }
    async function putStoredFont(name, buffer) {
      const db = await openFontDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(FONT_STORE, 'readwrite');
        tx.objectStore(FONT_STORE).put(buffer, name);
        tx.oncomplete = () => { db.close(); resolve(); };
        tx.onerror = () => { db.close(); reject(tx.error); };
      });
    }
    async function deleteStoredFont(name) {
      const db = await openFontDb();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(FONT_STORE, 'readwrite');
        tx.objectStore(FONT_STORE).delete(name);
        tx.oncomplete = () => { db.close(); resolve(); };
        tx.onerror = () => { db.close(); reject(tx.error); };
      });
    }
    /** The family name a picked file is registered under. */
    function fontNameFromFile(fileName) {
      const base = String(fileName || '').replace(/\.[a-z0-9]+$/i, '').trim();
      return base.replace(/["\\]/g, '').slice(0, 60) || 'Custom Font';
    }
    const registeredFaces = new Map();
    async function registerFontFace(name, buffer) {
      if (registeredFaces.has(name) || typeof FontFace !== 'function' || typeof document === 'undefined') return;
      const face = new FontFace(name, buffer);
      await face.load();
      document.fonts.add(face);
      registeredFaces.set(name, face);
    }
    // Published user font names for the settings card; restored fonts republish.
    const userFonts = { names: [], listeners: new Set() };
    function publishUserFonts(names) {
      userFonts.names = names;
      for (const listener of [...userFonts.listeners]) {
        try { listener(); } catch { /* one listener must not strand the rest */ }
      }
    }
    const userFontStore = {
      getSnapshot: () => userFonts.names,
      subscribe: (listener) => {
        userFonts.listeners.add(listener);
        return () => { userFonts.listeners.delete(listener); };
      },
    };
    async function restoreUserFonts() {
      try {
        const stored = await listStoredFonts();
        for (const entry of stored) {
          await registerFontFace(entry.name, entry.buffer);
        }
        publishUserFonts(stored.map((entry) => entry.name));
      } catch (error) {
        console.warn('hero-motto: could not restore saved fonts:', error);
      }
    }

    function reducedMotion() {
      try {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      } catch {
        return false;
      }
    }

    // ---- Effective-settings store (uSES-safe): one cached object per form snapshot.
    let cachedSnap = null;
    let cachedEffective = null;
    function computeEffective(snap) {
      const value = snap && snap.value && typeof snap.value === 'object' ? snap.value : {};
      return {
        phrases: mergePhrases(value),
        intervalSeconds: clampInterval(value.intervalSeconds, 8),
        animation: sanitizeAnimation(value.animation),
        fontFamily: sanitizeFont(value.fontFamily),
        showPreviewBadge: value.showPreviewBadge !== false,
        align: sanitizeAlign(value.align),
        accent: sanitizeAccent(value.accent),
        // ---- Border marquee (2.1.0) ----
        paletteMode: value.paletteMode === 'custom' ? 'custom' : 'preset',
        presetPalette: PRESET_LIST.includes(value.presetPalette) ? value.presetPalette : 'rainbow',
        customPalettes: Array.isArray(value.customPalettes)
          ? value.customPalettes.filter((g) => g && (g.id || g.name) && sanitizePaletteColors(g.colors))
          : [],
        activeCustomId: typeof value.activeCustomId === 'string' ? value.activeCustomId : '',
        borderEnabled: value.borderEnabled !== false,
        glowEnabled: value.glowEnabled !== false,
        glowIntensity: Math.min(100, Math.max(0, Number(value.glowIntensity) || 0)),
        // Brightness defaults to 100%; a stored 0 must stay 0, so guard undefined.
        brightness: (value.brightness === undefined || value.brightness === null)
          ? 100
          : Math.min(200, Math.max(0, Number(value.brightness) || 0)),
        marqueeEnabled: value.marqueeEnabled !== false,
        marqueeFlow: Math.min(10, Math.max(1, Number(value.marqueeFlow) || 4)),
        breatheEnabled: value.breatheEnabled === true,
        breathePerMin: Math.min(60, Math.max(10, Number(value.breathePerMin) || 24)),
        ringWidthPx: Math.min(6, Math.max(1, Number(value.ringWidthPx) || 3)),
        scopeNewSession: value.scopeNewSession !== false,
        scopeChat: value.scopeChat !== false,
        focusOnly: value.focusOnly === true,
        // 2.1.1 component split: `alive` is false when this component's row is
        // disabled on the bundle page (the entry reports unavailable) or when
        // the form channel is absent entirely. UI for that component hides.
        alive: snap ? snap.status !== 'unavailable' : false,
        writable: snap ? snap.writable !== false : false,
      };
    }

    // The single phrase pool. Entries stored before the lists were merged keep
    // living in `phrasesZh`/`phrasesEn` until the first write to `phrases`.
    function mergePhrases(value) {
      if (Array.isArray(value.phrases) && value.phrases.some((item) => typeof item === 'string' && item.trim() !== '')) {
        return sanitizeList(value.phrases, DEFAULT_PHRASES);
      }
      const legacy = []
        .concat(sanitizeList(value.phrasesZh, []))
        .concat(sanitizeList(value.phrasesEn, []));
      return legacy.length > 0 ? legacy : DEFAULT_PHRASES;
    }

    // Split one phrase into plain and [emphasized] runs. Unclosed brackets stay
    // literal so a half-typed phrase never loses characters.
    function splitHighlighted(text) {
      const source = String(text || '');
      const parts = [];
      let rest = source;
      while (rest.length > 0) {
        const open = rest.indexOf('[');
        if (open < 0) { parts.push({ text: rest, emphasis: false }); break; }
        if (open > 0) parts.push({ text: rest.slice(0, open), emphasis: false });
        const close = rest.indexOf(']', open + 1);
        if (close < 0) { parts.push({ text: rest.slice(open), emphasis: false }); break; }
        const inner = rest.slice(open + 1, close);
        parts.push({ text: inner, emphasis: inner.length > 0 });
        rest = rest.slice(close + 1);
      }
      return parts;
    }
    function renderHighlighted(text) {
      const parts = splitHighlighted(text);
      if (!parts.some((part) => part.emphasis)) return text;
      return parts.map((part, position) => (part.emphasis
        ? h('span', { key: position, className: 'hero-motto-em' }, part.text)
        : part.text));
    }

    // ---- Hero mark occupant. Receives the effective-settings store via the
    // registration's inject option (apply's closure owns the settings channel).
    function HeroMotto(props) {
      const store = (props && props.settings) || NULL_STORE;
      const settings = useSyncExternalStore(store.subscribe, store.getSnapshot);
      // NOTE: the alive check intentionally lives AFTER every hook (right
      // before the render). Early-returning here would change the hook count
      // across renders and crash the whole tree ("Rendered fewer hooks than
      // expected") the moment the row's availability flips mid-session.
      const animation = reducedMotion() ? 'none' : settings.animation;
      const settingsRef = React.useRef(settings);
      settingsRef.current = settings;

      const phraseList = () => settingsRef.current.phrases;
      const [index, setIndex] = React.useState(() => Math.floor(Math.random() * phraseList().length));
      const indexRef = React.useRef(index);
      indexRef.current = index;

      const [leaving, setLeaving] = React.useState(false);
      // Typewriter visible character count; a number while erasing or growning,
      // null once the current phrase is fully shown.
      const [typed, setTyped] = React.useState(null);
      const [hovering, setHovering] = React.useState(false);
      const leaveTimer = React.useRef(null);
      const typeTimer = React.useRef(null);
      const swappingRef = React.useRef(false);
      const clearTypeTimer = () => {
        if (typeTimer.current) {
          clearInterval(typeTimer.current);
          typeTimer.current = null;
        }
      };
      React.useEffect(() => () => {
        if (leaveTimer.current) clearTimeout(leaveTimer.current);
        clearTypeTimer();
      }, []);
      // The hero mark only exists on the new-session screen: publish that to the
      // border-marquee scanner so it can tell the two scopes apart reliably.
      React.useEffect(() => {
        heroMounted = true;
        scheduleMottoScan();
        return () => {
          heroMounted = false;
          scheduleMottoScan();
        };
      }, []);

      // Shuffle bag: every phrase is visited once per cycle before any repeats,
      // so a small pool never shows the same line twice in a row by chance.
      const bagRef = React.useRef({ key: '', queue: [] });
      const nextIndex = () => {
        const list = phraseList();
        if (list.length < 2) return 0;
        // A rewritten list invalidates the cycle.
        const key = list.join('\u0000');
        const bag = bagRef.current;
        if (bag.key !== key) {
          bagRef.current = { key, queue: [] };
        }
        const state = bagRef.current;
        // Drop consumed entries and anything pointing outside a shrunken list.
        state.queue = state.queue.filter((item) => item >= 0 && item < list.length);
        if (state.queue.length === 0) {
          const fresh = list.map((_, position) => position);
          for (let i = fresh.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            const swap = fresh[i];
            fresh[i] = fresh[j];
            fresh[j] = swap;
          }
          // The first pick of a new cycle must differ from what is on screen.
          if (fresh.length > 1 && fresh[0] === indexRef.current) {
            const swap = fresh[0];
            fresh[0] = fresh[1];
            fresh[1] = swap;
          }
          state.queue = fresh;
        }
        return state.queue.shift();
      };

      // Typewriter swap: the old phrase loses one character at a time from its
      // last character until empty, then the new phrase grows from its first.
      const runTypewriterSwap = () => {
        if (swappingRef.current) return;
        const list = phraseList();
        const target = nextIndex();
        const targetText = list[target] || '';
        let visible = (list[indexRef.current] || '').length;
        if (target === indexRef.current && visible === 0) return;
        swappingRef.current = true;
        clearTypeTimer();
        setTyped(visible);
        typeTimer.current = setInterval(() => {
          visible -= 1;
          if (visible > 0) {
            setTyped(visible);
            return;
          }
          clearTypeTimer();
          indexRef.current = target;
          setIndex(target);
          let grow = 0;
          setTyped(0);
          typeTimer.current = setInterval(() => {
            grow += 1;
            if (grow >= targetText.length) {
              clearTypeTimer();
              setTyped(null);
              swappingRef.current = false;
              return;
            }
            setTyped(grow);
          }, TYPE_MS);
        }, TYPE_MS);
      };

      const intervalMs = settings.intervalSeconds * 1000;
      const morphs = animation === 'float' || animation === 'blur';
      React.useEffect(() => {
        const timer = setInterval(() => {
          if (typeof document !== 'undefined' && document.hidden) return;
          if (animation === 'typewriter') {
            runTypewriterSwap();
            return;
          }
          const swap = () => {
            const target = nextIndex();
            indexRef.current = target;
            setIndex(target);
            setLeaving(false);
          };
          if (morphs) {
            setLeaving(true);
            leaveTimer.current = setTimeout(swap, LEAVE_MS);
          } else {
            swap();
          }
        }, intervalMs);
        return () => clearInterval(timer);
      }, [intervalMs, morphs, animation]);

      // Leaving the typewriter mode drops any half-drawn state.
      React.useEffect(() => {
        if (animation === 'typewriter') return undefined;
        swappingRef.current = false;
        clearTypeTimer();
        setTyped(null);
        return undefined;
      }, [animation]);

      // 2.1.1: when the motto component row is disabled, the store reports
      // alive:false and the hero mark renders nothing at all. Effects keep
      // running so the heroMounted view signal stays correct either way.
      if (settings.alive === false) return null;
      const list = settings.phrases;
      const safeIndex = Math.min(index, list.length - 1);
      const text = list[safeIndex] || '';
      const shown = animation === 'typewriter' && typed !== null ? text.slice(0, typed) : text;
      // [bracketed] runs are emphasized; the brackets themselves are dropped.
      const rendered = renderHighlighted(shown);
      const textClass = 'hero-motto-text'
        + (morphs && leaving ? ' hero-motto-leave' : '')
        + (animation === 'blur' ? ' hero-motto-blur' : '')
        + (animation === 'typewriter' ? ' hero-motto-type' : '')
        + (animation === 'none' ? ' hero-motto-plain' : '');

      const fish = h('svg', {
        className: props && props.className,
        width: (props && props.size) || 34,
        height: (((props && props.size) || 34) * FISH_LOGO_VIEWBOX.height) / FISH_LOGO_VIEWBOX.width,
        viewBox: '0 0 ' + FISH_LOGO_VIEWBOX.width + ' ' + FISH_LOGO_VIEWBOX.height,
        fill: 'none',
        'aria-hidden': true,
      }, h('path', { d: FISH_LOGO_PATH, fill: 'currentColor' },
        hovering ? h('animate', {
          attributeName: 'd',
          values: FISH_LOGO_PATH + ';' + SWIM_UP + ';' + FISH_LOGO_PATH + ';' + SWIM_DOWN + ';' + FISH_LOGO_PATH,
          keyTimes: '0;0.35;0.55;0.75;1',
          calcMode: 'spline',
          keySplines: '0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1',
          dur: '1.6s',
          repeatCount: 'indefinite',
        }) : null));

      return h('span', {
        style: { display: 'inline-flex', alignItems: 'center', gap: 10, '--hero-motto-accent': settings.accent },
        // Read by the :has() rules above on the shipped headline element.
        'data-hero-motto-align': settings.align,
        // The mark is the sibling the badge-hiding rule keys off.
        'data-hero-motto-badge': settings.showPreviewBadge ? 'on' : 'off',
        onPointerEnter: (event) => {
          if (event.pointerType !== 'touch'
            && window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
            setHovering(true);
          }
        },
        onPointerLeave: () => { setHovering(false); },
      },
        fish,
        h('style', null, STYLES),
        h('span', {
          key: index,
          className: textClass,
          // Typeface only: size and weight stay the shipped headline values.
          style: cssFontFamily(settings.fontFamily) === undefined ? undefined : { fontFamily: cssFontFamily(settings.fontFamily) },
        }, rendered));
    }

    const STYLES = [
      // Hide the shipped headline text only; its second span is the preview
      // badge, which stays unless the settings turn it off.
      '[class*="fishHitbox"] ~ [class*="titleGroup"] > span:first-child { display: none; }',
      // The badge lives in the title group. The mark renders INSIDE the shipped
      // hitbox span, so the hitbox - not the mark - is the title group's
      // sibling: :has() lifts the opt-out state up to that sibling.
      '[class*="fishHitbox"]:has([data-hero-motto-badge="off"]) ~ [class*="titleGroup"] { display: none; }',
      // Alignment: the whole whale+phrase line sits left / center / right
      // against the composer card's width. The mark renders INSIDE the shipped
      // headline, so :has() lifts the setting up to the element that owns the
      // flex line (a CSS variable cannot travel from a child up to its parent).
      '[class*="headline"]:has([data-hero-motto-align="left"]) { justify-content: flex-start !important; }',
      '[class*="headline"]:has([data-hero-motto-align="center"]) { justify-content: center !important; }',
      '[class*="headline"]:has([data-hero-motto-align="right"]) { justify-content: flex-end !important; }',
      '@keyframes hero-motto-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }',
      '@keyframes hero-motto-out { from { opacity: 1; transform: none; } to { opacity: 0; transform: translateY(-8px); } }',
      '.hero-motto-text { display: inline-block; white-space: nowrap; animation: hero-motto-in 0.5s cubic-bezier(0.22, 0.8, 0.36, 1) both; will-change: opacity, transform, filter; }',
      '.hero-motto-text.hero-motto-leave { animation: hero-motto-out 0.42s cubic-bezier(0.5, 0, 0.75, 0.4) both; }',
      // Blur swap: the outgoing phrase dissolves into haze, the incoming one
      // resolves out of it.
      '@keyframes hero-motto-blur-in { from { opacity: 0; filter: blur(10px); transform: scale(0.97); } to { opacity: 1; filter: blur(0); transform: none; } }',
      '@keyframes hero-motto-blur-out { from { opacity: 1; filter: blur(0); transform: none; } to { opacity: 0; filter: blur(10px); transform: scale(1.03); } }',
      '.hero-motto-text.hero-motto-blur { animation: hero-motto-blur-in 0.5s cubic-bezier(0.22, 0.8, 0.36, 1) both; }',
      '.hero-motto-text.hero-motto-blur.hero-motto-leave { animation: hero-motto-blur-out 0.42s cubic-bezier(0.5, 0, 0.75, 0.4) both; }',
      '.hero-motto-text.hero-motto-type { animation: none; }',
      '.hero-motto-text.hero-motto-plain { animation: none; }',
      // [bracketed] runs: a fixed brand blue plus a touch of weight. The theme
      // tokens that would express this are not resolvable inside the hero, so
      // var() chains silently fell back to inherit (white on dark).
      '.hero-motto-text .hero-motto-em { color: var(--hero-motto-accent, #5B7BFE); font-weight: 600; }',
      '@media (prefers-reduced-motion: reduce) { .hero-motto-text { animation: none !important; filter: none !important; } }',
      // ---- Settings card: grouped surface, section headers with captions,
      // segmented controls, toggle switches, and an inset quote field per row.
      '.hero-motto-card { display: flex; flex-direction: column; gap: 18px; color: var(--dsw-alias-label-primary); font-size: 13px; line-height: 20px; }',
      // Group: one bordered block per concern, so the page reads as a form.
      '.hero-motto-card .hero-motto-group { display: flex; flex-direction: column; gap: 12px; padding: 16px 18px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); }',
      '.hero-motto-card .hero-motto-head { display: flex; flex-direction: column; gap: 2px; }',
      '.hero-motto-card .hero-motto-title { margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.01em; color: var(--dsw-alias-label-primary); }',
      '.hero-motto-card .hero-motto-desc { margin: 0; color: var(--dsw-alias-label-caption); font-size: 12px; line-height: 18px; }',
      // Section header: two concerns (home motto / marquee) separated by a rule.
      '.hero-motto-card .hero-motto-section { display: flex; align-items: center; gap: 10px; margin-top: 6px; }',
      '.hero-motto-card .hero-motto-sectionTitle { margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 0.05em; color: var(--dsw-alias-label-caption); white-space: nowrap; }',
      '.hero-motto-card .hero-motto-section::after { content: ""; flex: 1; height: 1px; background: var(--dsw-alias-border-l4); }',
      '.hero-motto-card .hero-motto-row { display: flex; align-items: center; gap: 10px; }',
      '.hero-motto-card .hero-motto-rows { display: flex; flex-direction: column; gap: 8px; }',
      // Phrase row: the field grows, the remove action stays quiet until hover.
      '.hero-motto-card .hero-motto-phrase { display: flex; align-items: center; gap: 8px; }',
      '.hero-motto-card input[type="text"] { flex: 1; min-width: 0; padding: 8px 12px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 8px; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); font-size: 13px; line-height: 18px; outline: none; transition: border-color 0.15s ease, background 0.15s ease; }',
      '.hero-motto-card input[type="text"]:hover { border-color: var(--dsw-alias-border-l2); }',
      '.hero-motto-card input[type="text"]:focus { border-color: var(--dsw-alias-brand-primary, var(--dsw-alias-border-l2)); background: var(--dsw-alias-bg-layer-2); }',
      '.hero-motto-card input[type="text"]::placeholder { color: var(--dsw-alias-label-caption); }',
      // Generic buttons (add / remove / pick).
      '.hero-motto-card button { flex: none; padding: 6px 12px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 8px; background: transparent; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; cursor: pointer; transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease; }',
      '.hero-motto-card button:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }',
      '.hero-motto-card button:disabled { opacity: 0.45; cursor: not-allowed; }',
      '.hero-motto-card .hero-motto-remove { padding: 6px 10px; border-color: transparent; color: var(--dsw-alias-label-caption); }',
      '.hero-motto-card .hero-motto-remove:hover:not(:disabled) { border-color: var(--dsw-alias-state-error-primary, var(--dsw-alias-border-l4)); color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-primary)); background: transparent; }',
      '.hero-motto-card .hero-motto-add { align-self: flex-start; border-style: dashed; }',
      '.hero-motto-card .hero-motto-note { margin: 0; color: var(--dsw-alias-label-caption); font-size: 12px; line-height: 18px; }',
      // Segmented control: one pill track, the active segment filled.
      '.hero-motto-card .hero-motto-segments { display: flex; flex-wrap: wrap; gap: 4px; padding: 3px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 10px; background: var(--dsw-alias-bg-base); }',
      '.hero-motto-card .hero-motto-segment { flex: 1 1 auto; min-width: 0; padding: 6px 12px; border: none; border-radius: 7px; background: transparent; color: var(--dsw-alias-label-caption); font-size: 12px; line-height: 18px; text-align: center; white-space: nowrap; cursor: pointer; transition: background 0.15s ease, color 0.15s ease; }',
      '.hero-motto-card .hero-motto-segment:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary); }',
      '.hero-motto-card .hero-motto-segment[aria-pressed="true"] { background: var(--hero-motto-accent, #5B7BFE); color: #fff; font-weight: 600; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); }',
      '.hero-motto-card .hero-motto-segment[aria-pressed="true"]:hover:not(:disabled) { filter: brightness(1.1); color: #fff; }',
      // Accent swatches: preset dots, a custom colour well, and a hex field.
      '.hero-motto-card .hero-motto-swatches { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }',
      '.hero-motto-card .hero-motto-swatch { position: relative; flex: none; width: 28px; height: 28px; padding: 0; border: 0.5px solid rgba(255, 255, 255, 0.22); border-radius: 50%; cursor: pointer; transition: transform 0.12s ease, box-shadow 0.12s ease; }',
      '.hero-motto-card .hero-motto-swatch:hover:not(:disabled) { transform: scale(1.1); }',
      '.hero-motto-card .hero-motto-swatch-active { box-shadow: 0 0 0 2px var(--dsw-alias-bg-layer-1, #1b1b1f), 0 0 0 3.5px currentColor; }',
      '.hero-motto-card .hero-motto-swatch-custom { display: inline-flex; overflow: hidden; background: conic-gradient(from 0deg, #f43f5e, #f59e0b, #22c55e, #06b6d4, #5b7bfe, #8b5cf6, #f43f5e); }',
      '.hero-motto-card .hero-motto-swatch-custom input[type="color"] { width: 200%; height: 200%; margin: -50%; padding: 0; border: none; background: transparent; opacity: 0; cursor: pointer; }',
      // Palette dots under the preview bar: one per colour stop (closed end dropped).
      '.hero-motto-card .hero-motto-dots { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }',
      '.hero-motto-card .hero-motto-dot { flex: none; width: 14px; height: 14px; border-radius: 50%; border: 0.5px solid rgba(255, 255, 255, 0.25); box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15); }',
      // Colour-well inside a custom-palette swatch: invisible overlay, full hit
      // area. Scoped to the editor row so the accent colour well keeps its 200%.
      '.hero-motto-card .hero-motto-phrase .hero-motto-swatch input[type="color"] { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; padding: 0; border: none; background: transparent; opacity: 0; cursor: pointer; }',
      '.hero-motto-card .hero-motto-stack { display: flex; flex-direction: column; gap: 10px; min-width: 0; }',
      '.hero-motto-card .hero-motto-hex { flex: none !important; width: 120px; min-width: 120px; text-align: center; font-family: var(--ds-font-family-code, ui-monospace, monospace); letter-spacing: 0.02em; text-transform: uppercase; }',
      // Switch: an explicit off/on pair, because the theme's layer tokens sit too
      // close to the card background in a dark theme to read as a control.
      '.hero-motto-card .hero-motto-switchRow { display: flex; align-items: center; justify-content: space-between; gap: 12px; cursor: pointer; }',
      '.hero-motto-card .hero-motto-switchText { display: flex; flex-direction: column; gap: 2px; min-width: 0; }',
      '.hero-motto-card .hero-motto-switch { position: relative; flex: none; width: 40px; height: 22px; }',
      '.hero-motto-card .hero-motto-switch input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; }',
      // Off: a visible grey trough with a light knob, so the control reads even
      // against a near-black card.
      '.hero-motto-card .hero-motto-track { position: absolute; inset: 0; border-radius: 999px; background: rgba(140, 150, 170, 0.42); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14); transition: background 0.18s ease, box-shadow 0.18s ease; pointer-events: none; }',
      '.hero-motto-card .hero-motto-knob { position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; border-radius: 50%; background: #f2f4f8; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45); transition: transform 0.18s cubic-bezier(0.3, 0.8, 0.4, 1), background 0.18s ease; pointer-events: none; }',
      // On: brand trough, pure white knob, no inner ring needed.
      '.hero-motto-card .hero-motto-switch input:checked ~ .hero-motto-track { background: var(--hero-motto-accent, #5B7BFE); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22); }',
      '.hero-motto-card .hero-motto-switch input:checked ~ .hero-motto-knob { transform: translateX(18px); background: #fff; }',
      '.hero-motto-card .hero-motto-switch input:focus-visible ~ .hero-motto-track { outline: 2px solid var(--hero-motto-accent, #5B7BFE); outline-offset: 2px; }',
      '.hero-motto-card .hero-motto-switch input:disabled ~ .hero-motto-track, .hero-motto-card .hero-motto-switch input:disabled ~ .hero-motto-knob { opacity: 0.45; cursor: not-allowed; }',
      // Range: explicit colours so the track reads on a dark card too.
      '.hero-motto-card .hero-motto-range { display: flex; align-items: center; gap: 12px; }',
      '.hero-motto-card input[type="range"] { flex: 1; min-width: 0; height: 4px; margin: 0; border-radius: 999px; appearance: none; background: rgba(140, 150, 170, 0.42); cursor: pointer; }',
      '.hero-motto-card input[type="range"]::-webkit-slider-thumb { appearance: none; width: 16px; height: 16px; border: none; border-radius: 50%; background: var(--hero-motto-accent, #5B7BFE); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45); transition: transform 0.12s ease; }',
      '.hero-motto-card input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.12); }',
      '.hero-motto-card input[type="range"]::-moz-range-thumb { width: 16px; height: 16px; border: none; border-radius: 50%; background: var(--hero-motto-accent, #5B7BFE); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45); }',
      '.hero-motto-card input[type="range"]:disabled { opacity: 0.45; cursor: not-allowed; }',
      '.hero-motto-card .hero-motto-value { flex: none; min-width: 54px; padding: 3px 8px; border-radius: 999px; background: rgba(140, 150, 170, 0.18); color: var(--dsw-alias-label-primary); font-size: 12px; line-height: 18px; text-align: center; font-variant-numeric: tabular-nums; }',
      // Font select + picker row.
      '.hero-motto-card select { flex: 1; min-width: 0; padding: 8px 12px; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 8px; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); font-size: 13px; line-height: 18px; outline: none; cursor: pointer; transition: border-color 0.15s ease; }',
      '.hero-motto-card select:hover { border-color: var(--dsw-alias-border-l2); }',
      '.hero-motto-card select:focus { border-color: var(--dsw-alias-brand-primary, var(--dsw-alias-border-l2)); }',
      '.hero-motto-card .hero-motto-pick { display: inline-flex; }',
      '.hero-motto-card .hero-motto-pickLabel { display: inline-flex; align-items: center; padding: 6px 12px; border: 0.5px dashed var(--dsw-alias-border-l4); border-radius: 8px; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; cursor: pointer; transition: background 0.15s ease, border-color 0.15s ease; }',
      '.hero-motto-card .hero-motto-pickLabel:hover { background: var(--dsw-alias-interactive-bg-hover); border-color: var(--dsw-alias-border-l2); }',
      // Loaded-font chips: pick on the left, remove on the right.
      '.hero-motto-card .hero-motto-fontList { display: flex; flex-wrap: wrap; gap: 6px; }',
      '.hero-motto-card .hero-motto-chip { display: inline-flex; align-items: stretch; border: 0.5px solid var(--dsw-alias-border-l4); border-radius: 999px; overflow: hidden; transition: border-color 0.15s ease; }',
      '.hero-motto-card .hero-motto-chip:hover { border-color: var(--dsw-alias-border-l2); }',
      '.hero-motto-card .hero-motto-chip-active { border-color: var(--dsw-alias-brand-primary, var(--dsw-alias-border-l2)); background: var(--dsw-alias-bg-layer-3, var(--dsw-alias-interactive-bg-hover)); }',
      '.hero-motto-card .hero-motto-chipPick { border: none; border-radius: 0; padding: 4px 10px; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-secondary); }',
      '.hero-motto-card .hero-motto-chipPick:hover:not(:disabled) { background: transparent; color: var(--dsw-alias-label-primary); }',
      '.hero-motto-card .hero-motto-chipRemove { border: none; border-radius: 0; border-left: 0.5px solid var(--dsw-alias-border-l4); padding: 4px 8px; color: var(--dsw-alias-label-caption); }',
      '.hero-motto-card .hero-motto-chipRemove:hover:not(:disabled) { background: transparent; color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-primary)); }',
    ].join('\n');

    // ===== Border-marquee runtime (2.1.0) =====
    // One global stylesheet for the layers, injected once. Every tunable is a
    // CSS variable set per-card, so the sheet itself never needs to change.
    const MOTTO_RING_CSS = [
      // Carrier layer: the mask carves the gradient into an edge band; the shape
      // never moves, only the colour layer spins underneath it.
      '[data-composer-card] .motto-ring { position: absolute; inset: 0; border-radius: inherit; padding: var(--motto-ring, 3px);',
      '  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor;',
      '  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; overflow: hidden; pointer-events: none; z-index: 2; }',
      // Colour layer: a square conic gradient spinning around the card centre.
      // The square is hard-required (a rectangle shows a hue gap at 90°); the
      // standalone `translate` centres it so the rotate transform never overrides.
      '[data-composer-card] .motto-spin { position: absolute; left: 50%; top: 50%; width: 200%; aspect-ratio: 1 / 1; translate: -50% -50%;',
      '  background: conic-gradient(from 0deg, var(--motto-stops, #5B7BFE)); animation: motto-spin var(--motto-spin, 4s) linear infinite; will-change: transform; filter: brightness(var(--motto-brightness, 1)); }',
      '@keyframes motto-spin { to { transform: rotate(360deg); } }',
      // Breathe: an opacity pulse (compositor-friendly) shared by ring + glow.
      '@keyframes motto-breathe { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }',
      '[data-composer-card][data-motto-breathe="1"] .motto-spin { animation: motto-spin var(--motto-spin, 4s) linear infinite, motto-breathe var(--motto-breathe, 2.5s) ease-in-out infinite; }',
      '[data-composer-card][data-motto-flow="0"] .motto-spin { animation: motto-breathe var(--motto-breathe, 2.5s) ease-in-out infinite; }',
      '[data-composer-card][data-motto-flow="0"][data-motto-breathe="0"] .motto-spin { animation: none; }',
      // Glow: the SAME rotating conic, masked to a ring strictly OUTSIDE the
      // card, blurred and behind the card — a shadow cast onto the background,
      // with nothing inside. The spread (band width) is the outward bloom.
      '[data-composer-card] .motto-glow { position: absolute; inset: calc(-1 * var(--motto-glow-spread, 12px)); z-index: -1; border-radius: inherit;',
      '  pointer-events: none; filter: blur(var(--motto-glow-blur, 16px)); opacity: var(--motto-glow-opacity, 0.6); }',
      // The masked band inside the glow: padding = spread, so the content box is
      // the card itself and the only visible region is the ring OUTSIDE the card.
      '[data-composer-card] .motto-glow-band { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; padding: var(--motto-glow-spread, 12px);',
      '  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor;',
      '  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; }',
      // Safety: never render a layer on a card the scope turned off.
      '[data-composer-card][data-motto-on="0"] .motto-ring, [data-composer-card][data-motto-on="0"] .motto-glow { display: none; }',
      // "Only when focused": keep the layers mounted but hidden until the
      // composer has focus, then fade in. Pure CSS, so focus changes are instant
      // and cost no JS. opacity (not display) keeps the smooth fade possible.
      '[data-composer-card][data-motto-focus-only="1"] .motto-ring, [data-composer-card][data-motto-focus-only="1"] .motto-glow { opacity: 0; transition: opacity 0.22s ease; }',
      '[data-composer-card][data-motto-focus-only="1"]:focus-within .motto-ring { opacity: 1; }',
      '[data-composer-card][data-motto-focus-only="1"]:focus-within .motto-glow { opacity: var(--motto-glow-opacity, 0.6); }',
      '@media (prefers-reduced-motion: reduce) { [data-composer-card] .motto-spin { animation: none !important; } [data-composer-card][data-motto-focus-only="1"] .motto-ring, [data-composer-card][data-motto-focus-only="1"] .motto-glow { transition: none; } }',
    ].join('\n');

    // The settings form, set by apply() (and by the card) so the scanner reads
    // live values the moment the user toggles anything.
    let liveMottoForm = null;
    // Cache the computed settings by snapshot identity: streaming chat tokens
    // fire the MutationObserver constantly, so a scan with an unchanged snapshot
    // must not rewrite every card's CSS variables again.
    let lastSnapForScan = null;
    let lastEffForScan = null;
    let lastAppliedEff = null;
    // HeroMotto only mounts on the new-session screen (the hero). It flips this
    // flag, giving the scanner a reliable view signal that needs no host class.
    let heroMounted = false;

    function ensureMottoStyle() {
      if (typeof document === 'undefined') return;
      if (document.getElementById('motto-ring-style')) return;
      const tag = document.createElement('style');
      tag.id = 'motto-ring-style';
      tag.textContent = MOTTO_RING_CSS;
      (document.head || document.documentElement).appendChild(tag);
    }

    // Which surface a composer card belongs to. Primary signal: HeroMotto mounts
    // only on the new-session hero. Fallback: a conversation scroll ancestor
    // confirms the chat page. The composer card only exists in these two views.
    function viewOf(card) {
      if (heroMounted) return 'ns';
      let node = card.parentElement;
      while (node && node !== document.body) {
        if (node.matches('[data-conversation-scroll],[data-chat-flow-key]')) return 'chat';
        node = node.parentElement;
      }
      return 'chat';
    }

    // Build (or skip) the two layers for one card according to the live settings.
    function applyMottoVars(card, eff) {
      const stops = resolveStops(eff);
      const spread = 2 + eff.glowIntensity * 0.22;
      const vars = {
        '--motto-stops': stopsToCss(stops),
        '--motto-spin': eff.marqueeFlow + 's',
        '--motto-breathe': (60 / eff.breathePerMin) + 's',
        '--motto-ring': eff.ringWidthPx + 'px',
        '--motto-glow-spread': spread.toFixed(1) + 'px',
        '--motto-glow-blur': (spread * 1.2).toFixed(1) + 'px',
        '--motto-glow-opacity': (0.4 + eff.glowIntensity / 100 * 0.5).toFixed(3),
        '--motto-brightness': (eff.brightness / 100).toFixed(3),
      };
      for (const key in vars) card.style.setProperty(key, vars[key]);
      card.setAttribute('data-motto-flow', eff.marqueeEnabled ? '1' : '0');
      card.setAttribute('data-motto-breathe', eff.breatheEnabled ? '1' : '0');
      card.setAttribute('data-motto-focus-only', eff.focusOnly ? '1' : '0');
      // The absolutely-positioned layers anchor to the card. Only promote a
      // static card to relative; never override an existing absolute/fixed box.
      if (!card.getAttribute('data-motto-positioned')) {
        card.setAttribute('data-motto-positioned', '1');
        try {
          if (window.getComputedStyle(card).position === 'static') card.style.position = 'relative';
        } catch (error) { /* non-fatal: leave the card as-is */ }
      }

      const view = viewOf(card);
      card.setAttribute('data-motto-view', view);
      const viewOn = view === 'ns' ? eff.scopeNewSession : eff.scopeChat;
      const layersOn = eff.borderEnabled || eff.glowEnabled;
      const on = viewOn && layersOn;
      card.setAttribute('data-motto-on', on ? '1' : '0');
      if (!on) {
        removeMottoLayers(card);
        return;
      }
      ensureMottoLayer(card, 'motto-glow', eff.glowEnabled);
      ensureMottoLayer(card, 'motto-ring', eff.borderEnabled);
    }

    function ensureMottoLayer(card, cls, enabled) {
      const existing = card.querySelector('.' + cls);
      if (!enabled) {
        if (existing) existing.remove();
        return;
      }
      if (existing) return;
      const layer = document.createElement('div');
      layer.className = cls;
      const spin = document.createElement('div');
      spin.className = 'motto-spin';
      if (cls === 'motto-glow') {
        // The glow wraps the spin in a masked band so the colour exists only
        // OUTSIDE the card; the ring needs no band.
        const band = document.createElement('div');
        band.className = 'motto-glow-band';
        band.appendChild(spin);
        layer.appendChild(band);
      } else {
        layer.appendChild(spin);
      }
      card.appendChild(layer);
    }

    function removeMottoLayers(card) {
      const g = card.querySelector('.motto-glow');
      if (g) g.remove();
      const r = card.querySelector('.motto-ring');
      if (r) r.remove();
    }

    let mottoRaf = 0;
    function scheduleMottoScan() {
      if (mottoRaf) return;
      const run = () => { mottoRaf = 0; scanComposerCards(); };
      mottoRaf = (typeof requestAnimationFrame === 'function')
        ? requestAnimationFrame(run)
        : (setTimeout(run, 16), 0);
    }

    function currentMottoEffective() {
      try {
        const snap = liveMottoForm ? liveMottoForm.getSnapshot() : null;
        if (snap !== lastSnapForScan) {
          lastSnapForScan = snap;
          lastEffForScan = computeEffective(snap);
        }
        return lastEffForScan;
      } catch (error) {
        return computeEffective(null);
      }
    }

    // 2.1.1: the marquee is its own bundle row. Three states on purpose: a
    // null snapshot means the settings mirror has not answered yet — neither
    // draw nor remove (drawing would flash defaults on a dead row; removing
    // would strip live layers during a composition transition). Only an
    // explicit 'unavailable' is proof the row is disabled.
    function marqueeAliveState() {
      if (!liveMottoForm) return 'dead';
      try {
        const snap = liveMottoForm.getSnapshot();
        if (!snap) return 'unknown';
        return snap.status === 'unavailable' ? 'dead' : 'alive';
      } catch (error) {
        return 'unknown';
      }
    }

    function scanComposerCards() {
      if (typeof document === 'undefined') return;
      const alive = marqueeAliveState();
      if (alive === 'unknown') return;
      if (alive === 'dead') {
        document.querySelectorAll('[data-composer-card]').forEach((card) => removeMottoLayers(card));
        return;
      }
      ensureMottoStyle();
      const eff = currentMottoEffective();
      // Downstream data-* on <html>: the two scopes plus a single "anything on"
      // flag, so CSS/debugging can read the live state without the settings card.
      const rootEl = document.documentElement;
      if (rootEl && rootEl.setAttribute) {
        rootEl.setAttribute('data-motto-ns', eff.scopeNewSession ? '1' : '0');
        rootEl.setAttribute('data-motto-chat', eff.scopeChat ? '1' : '0');
        rootEl.setAttribute('data-motto-active', (eff.borderEnabled || eff.glowEnabled || eff.marqueeEnabled || eff.breatheEnabled) ? '1' : '0');
      }
      const changed = eff !== lastAppliedEff;
      lastAppliedEff = eff;
      document.querySelectorAll('[data-composer-card]').forEach((card) => {
        // Re-apply every card only when settings changed; on a plain DOM churn
        // just decorate cards that have not been seen yet.
        if (changed || !card.getAttribute('data-motto-view')) applyMottoVars(card, eff);
      });
    }

    let mottoObserver = null;
    function startMottoObservers() {
      if (typeof document === 'undefined' || mottoObserver) return;
      if (!document.body) {
        window.addEventListener('DOMContentLoaded', startMottoObservers);
        return;
      }
      mottoObserver = new MutationObserver(() => scheduleMottoScan());
      mottoObserver.observe(document.body, { childList: true, subtree: true });
      // A resize can rebuild the composer layout; re-scan once it settles.
      window.addEventListener('resize', scheduleMottoScan);
    }

    // ---- Reusable controls for the 2.1.0 groups. Module-level so React keeps
    // each slider's drag state across re-renders (component identity must stay
    // stable); both take commit/writable as props so the card owns the channel.
    function MottoRange(props) {
      const { field, value, min, max, step, format, commit, writable, visible } = props;
      const [draft, setDraft] = React.useState(value);
      const draftRef = React.useRef(value);
      const timer = React.useRef(null);
      const dragging = React.useRef(false);
      React.useEffect(() => {
        if (dragging.current) return;
        draftRef.current = value;
        setDraft(value);
      }, [value]);
      React.useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
      const flush = () => {
        if (timer.current) { clearTimeout(timer.current); timer.current = null; }
        if (draftRef.current !== value) commit(field, draftRef.current);
      };
      const schedule = (next) => {
        draftRef.current = next;
        setDraft(next);
        if (!writable) return;
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          timer.current = null;
          if (next !== value) commit(field, next);
        }, 350);
      };
      return h('div', { className: 'hero-motto-range', style: visible === false ? { display: 'none' } : undefined },
        h('input', {
          type: 'range',
          min,
          max,
          step,
          value: draft,
          disabled: !writable,
          onPointerDown: () => { dragging.current = true; },
          onChange: (event) => schedule(Number(event.target.value)),
          onPointerUp: () => { dragging.current = false; flush(); },
          onPointerCancel: () => { dragging.current = false; },
          onBlur: () => { dragging.current = false; flush(); },
        }),
        h('span', { className: 'hero-motto-value' }, format ? format(draft) : String(draft)));
    }
    function MottoToggle(props) {
      const { label, field, checked, commit, writable } = props;
      return h('label', { className: 'hero-motto-switchRow' },
        h('span', { className: 'hero-motto-switchText' },
          h('span', null, label)),
        h('span', { className: 'hero-motto-switch' },
          h('input', { type: 'checkbox', checked, disabled: !writable, onChange: (event) => commit(field, event.target.checked) }),
          h('span', { className: 'hero-motto-track' }),
          h('span', { className: 'hero-motto-knob' })));
    }

    // ---- Bundle-detail settings card. The Plugins page renders the
    // `plugins.bundle.config` entry keyed by the package name on the bundle's
    // own page (view: 'page'), with the page-owned ConfigForm in props.
    const NULL_STORE = { getSnapshot: () => null, subscribe: () => () => {} };
    function MottoCard(props) {
      const t = copy();
      const view = props && props.view;
      const ownerForm = props && props.form;
      // The settings controller for this entry, supplied by apply via inject.
      const mottoForm = props && props.mottoForm;
      if (view !== undefined && view !== 'page') return null;
      // Keep the `this` receiver: ConfigFormController methods read `this.store`,
      // so passing them to useSyncExternalStore bare would detach `this`.
      const store = mottoForm
        ? { subscribe: (listener) => mottoForm.subscribe(listener), getSnapshot: () => mottoForm.getSnapshot() }
        : NULL_STORE;
      const snapshot = useSyncExternalStore(store.subscribe, store.getSnapshot);
      const effective = React.useMemo(() => computeEffective(snapshot), [snapshot]);
      // 2.1.1 component split: hide this card entirely when the motto row is
      // disabled (entry unavailable) or its form channel is absent. The check
      // lives at the render tail — early-returning before the hooks below
      // would crash the tree on an availability flip.
      const writable = snapshot ? snapshot.writable !== false : false;

      const [draftPhrases, setDraftPhrases] = React.useState(effective.phrases);
      React.useEffect(() => { setDraftPhrases(effective.phrases); }, [effective.phrases]);
      const userFontNames = useSyncExternalStore(userFontStore.subscribe, userFontStore.getSnapshot);
      const [fontError, setFontError] = React.useState(false);
      const [draftAccent, setDraftAccent] = React.useState(effective.accent);
      React.useEffect(() => { setDraftAccent(effective.accent); }, [effective.accent]);
      const pickFontFile = async (event) => {
        const file = event.target.files && event.target.files[0];
        event.target.value = '';
        if (!file) return;
        try {
          const buffer = await file.arrayBuffer();
          const name = fontNameFromFile(file.name);
          await registerFontFace(name, buffer);
          await putStoredFont(name, buffer);
          publishUserFonts([...new Set([...userFonts.names, name])]);
          setFontError(false);
          commit('fontFamily', name);
        } catch (error) {
          console.warn('hero-motto: font file failed:', error);
          setFontError(true);
        }
      };
      const removeUserFont = async (name) => {
        try {
          await deleteStoredFont(name);
          publishUserFonts(userFonts.names.filter((item) => item !== name));
          if (effective.fontFamily === name) commit('fontFamily', '');
        } catch (error) {
          console.warn('hero-motto: font removal failed:', error);
        }
      };

      // The slider is drag-driven: every change updates local state, and only a
      // settled value is written. Writing per step would queue one settings RPC
      // per pixel and make the drag crawl.
      const [intervalDraft, setIntervalDraft] = React.useState(effective.intervalSeconds);
      const intervalDraftRef = React.useRef(effective.intervalSeconds);
      const intervalTimer = React.useRef(null);
      const draggingRef = React.useRef(false);
      React.useEffect(() => {
        if (draggingRef.current) return;
        intervalDraftRef.current = effective.intervalSeconds;
        setIntervalDraft(effective.intervalSeconds);
      }, [effective.intervalSeconds]);
      React.useEffect(() => () => { if (intervalTimer.current) clearTimeout(intervalTimer.current); }, []);
      const flushInterval = (value) => {
        if (intervalTimer.current) {
          clearTimeout(intervalTimer.current);
          intervalTimer.current = null;
        }
        if (value !== effective.intervalSeconds) commit('intervalSeconds', value);
      };
      const scheduleInterval = (value) => {
        intervalDraftRef.current = value;
        setIntervalDraft(value);
        if (!writable) return;
        if (intervalTimer.current) clearTimeout(intervalTimer.current);
        intervalTimer.current = setTimeout(() => {
          intervalTimer.current = null;
          if (value !== effective.intervalSeconds) commit('intervalSeconds', value);
        }, 350);
      };

      // The colour well streams a value per pointer move: preview it locally and
      // write only the settled colour, exactly like the interval slider.
      const accentDraftRef = React.useRef(effective.accent);
      const accentTimer = React.useRef(null);
      const accentDraggingRef = React.useRef(false);
      React.useEffect(() => {
        if (accentDraggingRef.current) return;
        accentDraftRef.current = effective.accent;
        setDraftAccent(effective.accent);
      }, [effective.accent]);
      React.useEffect(() => () => { if (accentTimer.current) clearTimeout(accentTimer.current); }, []);
      const flushAccent = () => {
        if (accentTimer.current) {
          clearTimeout(accentTimer.current);
          accentTimer.current = null;
        }
        const clean = sanitizeAccent(accentDraftRef.current);
        if (clean !== effective.accent) commit('accent', clean);
      };
      const scheduleAccent = (value) => {
        accentDraftRef.current = value;
        setDraftAccent(value);
        if (!writable) return;
        if (accentTimer.current) clearTimeout(accentTimer.current);
        accentTimer.current = setTimeout(() => {
          accentTimer.current = null;
          if (value !== effective.accent) commit('accent', value);
        }, 350);
      };
      // Preset swatches commit at once: a single click is already settled.
      const pickAccent = (value) => {
        accentDraftRef.current = value;
        setDraftAccent(value);
        if (value !== effective.accent) commit('accent', value);
      };

      const commit = (field, value) => {
        if (!writable) return;
        if (mottoForm) {
          Promise.resolve(mottoForm.set(field, value)).catch((error) => {
            console.warn('hero-motto: settings write failed:', error);
          });
          return;
        }
        // Fall back to the page-owned form's mutate when the local channel is absent.
        if (ownerForm && typeof ownerForm.mutate === 'function') {
          Promise.resolve(ownerForm.mutate([{ op: 'set', path: [field], value }])).catch((error) => {
            console.warn('hero-motto: settings write failed:', error);
          });
        }
      };

      // One bordered group per concern: title, then any number of controls.
      // Captions (subtitles) are intentionally dropped: the card stays clean.
      const group = (title, _caption, ...children) => h('section', { className: 'hero-motto-group' },
        h('div', { className: 'hero-motto-head' },
          h('h4', { className: 'hero-motto-title' }, title),
        ),
        children
          .filter((child) => child !== null && child !== undefined && child !== false)
          .map((child, position) => (React.isValidElement(child) && child.key == null
            ? React.cloneElement(child, { key: 'g' + position })
            : child)),
      );
      // Section divider that splits the card into "home motto" and "border
      // marquee" halves.
      const section = (title) => h('div', { className: 'hero-motto-section' },
        h('h4', { className: 'hero-motto-sectionTitle' }, title));
      // Segmented control: replaces radio groups, reports the active segment.
      const segments = (name, options, current, onPick) => h('div', {
        className: 'hero-motto-segments', role: 'group', 'aria-label': name,
      }, options.map((option) => h('button', {
        key: option.value,
        type: 'button',
        className: 'hero-motto-segment',
        'aria-pressed': current === option.value,
        disabled: !writable,
        onClick: () => onPick(option.value),
      }, option.label)));

      const editRow = (draft, setDraft, committed, field) => h('div', { className: 'hero-motto-rows' },
        draft.map((phrase, i) => h('div', { className: 'hero-motto-phrase', key: i },
          h('input', {
            type: 'text',
            value: phrase,
            placeholder: t.phrasePlaceholder,
            disabled: !writable,
            onChange: (event) => {
              const next = draft.slice();
              next[i] = event.target.value;
              setDraft(next);
            },
            onBlur: () => {
              const trimmed = phrase.trim();
              if (trimmed === '') return;
              if (trimmed !== committed[i]) commit(field, draft.filter((p) => p.trim() !== ''));
            },
            onKeyDown: (event) => { if (event.key === 'Enter') event.target.blur(); },
          }),
          h('button', {
            type: 'button',
            className: 'hero-motto-remove',
            disabled: !writable,
            title: t.remove,
            'aria-label': t.remove,
            onClick: () => {
              const next = draft.slice();
              next.splice(i, 1);
              setDraft(next);
              commit(field, next.filter((p) => p.trim() !== ''));
            },
          }, '×'),
        )),
        h('button', {
          type: 'button',
          className: 'hero-motto-add',
          disabled: !writable,
          onClick: () => {
            const next = draft.concat('');
            setDraft(next);
          },
        }, '+ ' + t.add),
      );

      if (effective.alive === false) return null;
      return h('div', {
        className: 'hero-motto-card',
        // The card's own controls follow the chosen accent too.
        style: { '--hero-motto-accent': effective.accent },
      },
        h('style', null, STYLES),
        section(t.mottoSection),
        group(t.phrases, t.phrasesHint,
          h('div', { className: 'hero-motto-stack' },
            editRow(draftPhrases, setDraftPhrases, effective.phrases, 'phrases')),
          h('p', { className: 'hero-motto-note' }, t.highlightHint)),
        group(t.interval, t.intervalHint, h('div', { className: 'hero-motto-range' },
          h('input', {
            type: 'range',
            min: 2,
            max: 120,
            step: 1,
            value: intervalDraft,
            disabled: !writable,
            onPointerDown: () => { draggingRef.current = true; },
            onChange: (event) => scheduleInterval(Number(event.target.value)),
            onPointerUp: () => { draggingRef.current = false; flushInterval(intervalDraftRef.current); },
            onPointerCancel: () => { draggingRef.current = false; },
            onBlur: () => { draggingRef.current = false; flushInterval(intervalDraftRef.current); },
          }),
          h('span', { className: 'hero-motto-value' }, t.intervalUnit(intervalDraft)),
        )),
        group(t.animation, t.animationHint,
          segments('hero-motto-animation',
            ANIMATIONS.map((mode) => ({ value: mode, label: t.animLabel[mode] })),
            effective.animation,
            (mode) => commit('animation', mode))),
        group(t.align, t.alignHint,
          segments('hero-motto-align',
            ['left', 'center', 'right'].map((mode) => ({ value: mode, label: t.alignLabel[mode] })),
            effective.align,
            (mode) => commit('align', mode))),
        group(t.font, t.fontHint, h('div', { className: 'hero-motto-stack' },
          h('div', { className: 'hero-motto-row' },
            h('select', {
              value: effective.fontFamily,
              disabled: !writable,
              onChange: (event) => commit('fontFamily', event.target.value),
            },
              h('option', { value: '' }, t.fontDefault),
              FONT_PRESETS.map((preset) => h('option', { key: preset.key, value: preset.value }, t.fontPreset[preset.key])),
              userFontNames.length === 0 ? null : h('optgroup', { label: t.fontMyFonts },
                userFontNames.map((name) => h('option', { key: name, value: name }, name))),
            ),
            h('label', { className: 'hero-motto-pick' },
              h('input', {
                type: 'file',
                accept: '.ttf,.otf,.woff,.woff2',
                disabled: !writable,
                style: { display: 'none' },
                onChange: (event) => { void pickFontFile(event); },
              }),
              h('span', { className: 'hero-motto-pickLabel' }, t.fontPick),
            ),
          ),
          userFontNames.length === 0 ? null : h('div', { className: 'hero-motto-fontList' },
            userFontNames.map((name) => {
              const active = effective.fontFamily === name;
              return h('span', { key: name, className: 'hero-motto-chip' + (active ? ' hero-motto-chip-active' : '') },
                h('button', {
                  type: 'button',
                  className: 'hero-motto-chipPick',
                  disabled: !writable,
                  'aria-pressed': active,
                  onClick: () => commit('fontFamily', name),
                }, name),
                h('button', {
                  type: 'button',
                  className: 'hero-motto-chipRemove',
                  disabled: !writable,
                  title: t.fontRemove(name),
                  'aria-label': t.fontRemove(name),
                  onClick: () => { void removeUserFont(name); },
                }, '×'),
              );
            }),
          ),
          fontError ? h('p', { className: 'hero-motto-note' }, t.fontLoadFailed) : null,
        )),
        group(t.accent, t.accentHint, h('div', { className: 'hero-motto-stack' },
          h('div', { className: 'hero-motto-swatches' },
            ACCENT_PRESETS.map((preset) => h('button', {
              key: preset,
              type: 'button',
              className: 'hero-motto-swatch' + (effective.accent === preset ? ' hero-motto-swatch-active' : ''),
              style: { background: preset },
              disabled: !writable,
              'aria-pressed': effective.accent === preset,
              'aria-label': preset,
              title: preset,
              onClick: () => pickAccent(preset),
            })),
            h('label', { className: 'hero-motto-swatch hero-motto-swatch-custom', title: t.accentPick },
              h('input', {
                type: 'color',
                value: effective.accent,
                disabled: !writable,
                onPointerDown: () => { accentDraggingRef.current = true; },
                onChange: (event) => scheduleAccent(event.target.value.toUpperCase()),
                onPointerUp: () => { accentDraggingRef.current = false; flushAccent(); },
                onPointerCancel: () => { accentDraggingRef.current = false; },
                onBlur: () => { accentDraggingRef.current = false; flushAccent(); },
              }),
            ),
          ),
          h('div', { className: 'hero-motto-row' },
            h('input', {
              type: 'text',
              className: 'hero-motto-hex',
              value: draftAccent,
              placeholder: '#5B7BFE',
              spellCheck: false,
              disabled: !writable,
              onChange: (event) => scheduleAccent(event.target.value),
              onBlur: () => {
                const clean = sanitizeAccent(accentDraftRef.current);
                setDraftAccent(clean);
                flushAccent();
              },
              onKeyDown: (event) => { if (event.key === 'Enter') event.target.blur(); },
            }),
          ),
        )),
        group(t.display, null,
          h('label', { className: 'hero-motto-switchRow' },
            h('span', { className: 'hero-motto-switchText' },
              h('span', null, t.previewBadge)),
            h('span', { className: 'hero-motto-switch' },
              h('input', {
                type: 'checkbox',
                checked: effective.showPreviewBadge,
                disabled: !writable,
                onChange: (event) => commit('showPreviewBadge', event.target.checked),
              }),
              h('span', { className: 'hero-motto-track' }),
              h('span', { className: 'hero-motto-knob' }),
            ),
          ),
        ),
      );
    }

    // ---- Border-marquee component card (2.1.1). Edits the marquee row's
    // own Config directly; hides itself while that row is disabled.
    function MarqueeCard(props) {
      const t = copy();
      const view = props && props.view;
      const marqueeForm = props && props.marqueeForm;
      if (view !== undefined && view !== 'page') return null;
      // The live scanner reads the same form this card edits.
      liveMottoForm = marqueeForm || null;
      const store = marqueeForm
        ? { subscribe: (listener) => marqueeForm.subscribe(listener), getSnapshot: () => marqueeForm.getSnapshot() }
        : NULL_STORE;
      const snapshot = useSyncExternalStore(store.subscribe, store.getSnapshot);
      const effective = React.useMemo(() => computeEffective(snapshot), [snapshot]);
      // Hide while the row is disabled — but the check lives at the render
      // tail (see MottoCard): early-returning before the hooks below would
      // crash the tree on an availability flip.
      const writable = snapshot ? snapshot.writable !== false : false;

      const commit = (field, value) => {
        if (!writable || !marqueeForm) return;
        Promise.resolve(marqueeForm.set(field, value)).catch((error) => {
          console.warn('hero-motto: settings write failed:', error);
        });
      };

      // One bordered group per concern: title, then any number of controls.
      const group = (title, _caption, ...children) => h('section', { className: 'hero-motto-group' },
        h('div', { className: 'hero-motto-head' },
          h('h4', { className: 'hero-motto-title' }, title),
        ),
        children
          .filter((child) => child !== null && child !== undefined && child !== false)
          .map((child, position) => (React.isValidElement(child) && child.key == null
            ? React.cloneElement(child, { key: 'g' + position })
            : child)),
      );
      const section = (title) => h('div', { className: 'hero-motto-section' },
        h('h4', { className: 'hero-motto-sectionTitle' }, title));
      const segments = (name, options, current, onPick) => h('div', {
        className: 'hero-motto-segments', role: 'group', 'aria-label': name,
      }, options.map((option) => h('button', {
        key: option.value,
        type: 'button',
        className: 'hero-motto-segment',
        'aria-pressed': current === option.value,
        disabled: !writable,
        onClick: () => onPick(option.value),
      }, option.label)));

      // ---- Border marquee: colour / effect / scope controls (2.1.0) ----
      // The custom-group library is edited through a local draft so structural
      // edits (add / copy / rename / delete / recolour) can be staged and then
      // written as one `customPalettes` array, never one write per keystroke.
      const [draftPalettes, setDraftPalettes] = React.useState(effective.customPalettes);
      React.useEffect(() => { setDraftPalettes(effective.customPalettes); }, [effective.customPalettes]);
      const [editingId, setEditingId] = React.useState('');
      const [editingName, setEditingName] = React.useState('');
      const [editingColors, setEditingColors] = React.useState([]);
      const commitPalettes = (next) => {
        setDraftPalettes(next);
        if (writable) commit('customPalettes', next);
      };
      const commitActive = (id) => { if (writable) commit('activeCustomId', id); };
      const openEditor = (groupValue) => {
        setEditingId(groupValue ? groupValue.id : '');
        setEditingName(groupValue ? groupValue.name : '');
        setEditingColors(groupValue ? groupValue.colors.slice() : []);
      };
      const closeEditor = () => { setEditingId(''); setEditingName(''); setEditingColors([]); };
      const addGroup = () => {
        const groupValue = { id: newPaletteId(), name: t.brandGroup, colors: ['#5B7BFE', '#7C9BFF'] };
        commitPalettes(draftPalettes.concat([groupValue]));
        commit('paletteMode', 'custom');
        commitActive(groupValue.id);
        openEditor(groupValue);
      };
      const duplicatePreset = () => {
        const preset = PRESET_LIST.includes(effective.presetPalette) ? effective.presetPalette : 'rainbow';
        const groupValue = {
          id: newPaletteId(),
          name: (t.presetLabels[preset] || t.preset),
          colors: PRESET_PALETTES[preset].slice(),
        };
        commitPalettes(draftPalettes.concat([groupValue]));
        commit('paletteMode', 'custom');
        commitActive(groupValue.id);
        openEditor(groupValue);
      };
      const deleteGroup = (id) => {
        const next = draftPalettes.filter((g) => g.id !== id);
        commitPalettes(next);
        if (effective.activeCustomId === id) commitActive(next.length ? next[0].id : '');
        if (editingId === id) closeEditor();
      };
      const saveEditor = () => {
        const colors = editingColors.map((c) => sanitizeAccent(c)).filter(Boolean);
        if (colors.length < 2) return;
        const next = draftPalettes.map((g) => (g.id === editingId
          ? { id: g.id, name: ((editingName || g.name).trim() || g.name).slice(0, 40), colors }
          : g));
        commitPalettes(next);
        closeEditor();
      };
      const pickPreset = (key) => { commit('paletteMode', 'preset'); commit('presetPalette', key); };
      const pickCustom = (groupValue) => { commit('paletteMode', 'custom'); commitActive(groupValue.id); };

      const customGroupPicker = () => h('div', { className: 'hero-motto-stack' },
        draftPalettes.length === 0
          ? h('p', { className: 'hero-motto-note' }, t.noCustom)
          : h('div', { className: 'hero-motto-fontList' },
            draftPalettes.map((groupValue) => {
              const active = effective.paletteMode === 'custom' && effective.activeCustomId === groupValue.id;
              return h('span', { key: groupValue.id, className: 'hero-motto-chip' + (active ? ' hero-motto-chip-active' : '') },
                h('button', {
                  type: 'button', className: 'hero-motto-chipPick', disabled: !writable,
                  'aria-pressed': active, onClick: () => { pickCustom(groupValue); openEditor(groupValue); },
                }, groupValue.name),
                h('button', {
                  type: 'button', className: 'hero-motto-chipRemove', disabled: !writable,
                  title: t.deleteGroup, 'aria-label': t.deleteGroup, onClick: () => deleteGroup(groupValue.id),
                }, '×'));
            }),
          ),
        h('div', { className: 'hero-motto-row' },
          h('button', { type: 'button', className: 'hero-motto-add', disabled: !writable, onClick: addGroup }, '+ ' + t.newGroup),
          h('button', { type: 'button', disabled: !writable, onClick: duplicatePreset }, t.dupPreset),
        ),
        editingId
          ? h('div', { className: 'hero-motto-stack' },
            h('input', {
              type: 'text', value: editingName, placeholder: t.groupName, disabled: !writable,
              onChange: (event) => setEditingName(event.target.value),
              onKeyDown: (event) => { if (event.key === 'Enter') event.target.blur(); },
            }),
            h('div', { className: 'hero-motto-rows' },
              editingColors.map((color, i) => h('div', { className: 'hero-motto-phrase', key: i },
                h('label', { className: 'hero-motto-swatch', style: { background: sanitizeAccent(color) }, title: color },
                  h('input', {
                    type: 'color', value: sanitizeAccent(color), disabled: !writable,
                    onChange: (event) => {
                      const next = editingColors.slice();
                      next[i] = event.target.value.toUpperCase();
                      setEditingColors(next);
                    },
                  })),
                h('input', {
                  type: 'text', className: 'hero-motto-hex', value: color, spellCheck: false, disabled: !writable,
                  onChange: (event) => {
                    const next = editingColors.slice();
                    next[i] = event.target.value;
                    setEditingColors(next);
                  },
                  onBlur: (event) => {
                    const next = editingColors.slice();
                    next[i] = sanitizeAccent(event.target.value);
                    setEditingColors(next);
                  },
                }),
                h('button', {
                  type: 'button', className: 'hero-motto-remove',
                  disabled: !writable || editingColors.length <= 2,
                  title: t.deleteGroup, 'aria-label': t.deleteGroup,
                  onClick: () => {
                    const next = editingColors.slice();
                    next.splice(i, 1);
                    setEditingColors(next);
                  },
                }, '×'))),
              h('button', {
                type: 'button', className: 'hero-motto-add',
                disabled: !writable || editingColors.length >= 12,
                onClick: () => setEditingColors(editingColors.concat(['#5B7BFE'])),
              }, '+ ' + t.addColor),
            ),
            h('div', { className: 'hero-motto-row' },
              h('button', { type: 'button', disabled: !writable || editingColors.length < 2, onClick: saveEditor }, t.save),
              h('button', { type: 'button', className: 'hero-motto-remove', onClick: closeEditor }, t.cancel),
            ),
          )
          : null,
      );

      const colorGroup = group(t.color, t.colorHint,
        segments('hero-motto-palette-mode', [{ value: 'preset', label: t.preset }, { value: 'custom', label: t.custom }], effective.paletteMode, (mode) => commit('paletteMode', mode)),
        effective.paletteMode === 'preset'
          ? h('div', { className: 'hero-motto-stack' },
            segments('hero-motto-preset', PRESET_LIST.map((key) => ({ value: key, label: t.presetLabels[key] })), effective.presetPalette, pickPreset),
            h('div', { className: 'hero-motto-preview', style: { height: 12, borderRadius: 8, background: 'linear-gradient(90deg, ' + stopsToCss(resolveStops(effective)) + ')' }, 'aria-hidden': true }),
            h('div', { className: 'hero-motto-dots' },
              resolveStops(effective).slice(0, -1).map((color, i) => h('span', {
                key: i, className: 'hero-motto-dot', style: { background: color }, title: color,
              }))))
          : customGroupPicker(),
      );

      const effectBlock = (label, field, checked, rangeProps) => h('div', { className: 'hero-motto-rows' },
        h(MottoToggle, { label, field, checked, commit, writable }),
        rangeProps ? h(MottoRange, Object.assign({ commit, writable, visible: checked }, rangeProps)) : null);
      // A standalone labelled range (no on/off switch), for overall brightness.
      const labeledRange = (label, rangeProps) => h('div', { className: 'hero-motto-rows' },
        h('span', { className: 'hero-motto-note' }, label),
        h(MottoRange, Object.assign({ commit, writable }, rangeProps)));
      const effectsGroup = group(t.effect, t.effectHint,
        effectBlock(t.border, 'borderEnabled', effective.borderEnabled, { field: 'ringWidthPx', value: effective.ringWidthPx, min: 1, max: 6, step: 1, format: t.ringWidthUnit }),
        effectBlock(t.glow, 'glowEnabled', effective.glowEnabled, { field: 'glowIntensity', value: effective.glowIntensity, min: 0, max: 100, step: 1, format: t.glowIntensityUnit }),
        effectBlock(t.marquee, 'marqueeEnabled', effective.marqueeEnabled, { field: 'marqueeFlow', value: effective.marqueeFlow, min: 1, max: 10, step: 0.5, format: t.flowUnit }),
        effectBlock(t.breathe, 'breatheEnabled', effective.breatheEnabled, { field: 'breathePerMin', value: effective.breathePerMin, min: 10, max: 60, step: 1, format: t.breatheRateUnit }),
        labeledRange(t.brightness, { field: 'brightness', value: effective.brightness, min: 0, max: 200, step: 5, format: t.brightnessUnit }),
      );
      const scopeGroup = group(t.scope, t.scopeHint,
        h(MottoToggle, { label: t.scopeNs, field: 'scopeNewSession', checked: effective.scopeNewSession, commit, writable }),
        h(MottoToggle, { label: t.scopeChat, field: 'scopeChat', checked: effective.scopeChat, commit, writable }),
        h(MottoToggle, { label: t.focusOnly, field: 'focusOnly', checked: effective.focusOnly, commit, writable }),
      );


      if (effective.alive === false) return null;
      return h('div', {
        className: 'hero-motto-card',
        style: { '--hero-motto-accent': effective.accent },
      },
        h('style', null, STYLES),
        section(t.marqueeSection),
        colorGroup,
        effectsGroup,
        scopeGroup,
      );
    }

    // Bundle page entry: renders both component cards under one keyed slot;
    // each card hides itself while its own bundle row is disabled.
    function BundleCards(props) {
      const view = props && props.view;
      if (view !== undefined && view !== 'page') return null;
      return h(React.Fragment, null,
        h(MottoCard, { view: props.view, form: props.form, mottoForm: props.mottoForm }),
        h(MarqueeCard, { view: props.view, marqueeForm: props.marqueeForm }));
    }
    // ---- Plugin module.
    return {
      inject: ['slots', 'configForms'],
      apply(ctx) {
        void restoreUserFonts();
        let form = null;
        try {
          form = ctx.configForms.get(ENTRY_ID);
        } catch (error) {
          console.warn('hero-motto: settings channel unavailable:', error);
        }
        // 2.1.1 component split: the marquee row has its own form. get() never
        // throws for a disabled row — the form exists and its snapshot reports
        // 'unavailable' (or null while the mirror has not answered); form is
        // null only when the configForms service itself is absent.
        let marqueeForm = null;
        try {
          marqueeForm = ctx.configForms.get(MARQUEE_ENTRY_ID);
        } catch (error) { /* marquee row disabled or absent */ }
        const EFFECTIVE_STORE = {
          getSnapshot() {
            if (!form) {
              return computeEffective(null);
            }
            const snap = form.getSnapshot();
            if (snap !== cachedSnap) {
              cachedSnap = snap;
              cachedEffective = computeEffective(snap);
            }
            return cachedEffective;
          },
          subscribe(listener) {
            return form ? form.subscribe(listener) : () => {};
          },
        };

        // ---- Border-marquee runtime wiring: the scanner reads the marquee
        // component's form (its own bundle row). Observers start regardless:
        // scanning no-ops while the row is disabled, and the form subscription
        // re-applies layers when it is re-enabled without a page reload.
        liveMottoForm = marqueeForm;
        if (marqueeForm && typeof marqueeForm.subscribe === 'function') {
          marqueeForm.subscribe(() => scheduleMottoScan());
        }
        scanComposerCards();
        startMottoObservers();

        // form is null only when the configForms service itself is absent; a
        // disabled row keeps its form, and HeroMotto renders null via alive
        // while its effects keep the heroMounted view signal correct.
        if (form) {
          ctx.slots.inject('conversation.hero.brand.mark', () => ctx.slots.register({
            name: 'conversation.hero.brand.mark',
            id: 'hero-motto',
            inject: () => ({ settings: EFFECTIVE_STORE }),
          }, HeroMotto));
        }

        // The settings editor rides the bundle's own detail page: the Plugins
        // page renders this keyed entry between the description and the rows.
        ctx.slots.inject('plugins.bundle.config', () => ctx.slots.register({
          name: 'plugins.bundle.config',
          key: 'dsh-hero-motto',
          inject: () => ({ mottoForm: form, marqueeForm: marqueeForm }),
        }, BundleCards));
      },
    };
  },
});
