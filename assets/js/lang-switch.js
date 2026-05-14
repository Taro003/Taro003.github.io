/* Language switch: EN <-> ZH */
(function () {
  var STORAGE_KEY = 'preferred-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.textContent = lang === 'en' ? '中文' : 'English';
      btn.setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English');
    }
    applyStaticTranslations(lang);
    applyDocumentTitle(lang);
  }

  function setText(selector, enText, zhText, lang) {
    var el = document.querySelector(selector);
    if (el) el.textContent = lang === 'en' ? enText : zhText;
  }

  function setIconLineText(index, enText, zhText, lang) {
    var items = document.querySelectorAll('.author__urls .author__desktop');
    var el = items[index];
    if (!el) return;

    var icon = el.querySelector('i');
    el.textContent = '';
    if (icon) el.appendChild(icon);
    el.appendChild(document.createTextNode(lang === 'en' ? enText : zhText));
  }

  function setNavText(path, enText, zhText, lang) {
    var links = document.querySelectorAll('.masthead__menu a');
    for (var i = 0; i < links.length; i += 1) {
      var href = links[i].getAttribute('href') || '';
      var matchesPath = path === '/' ? href === '/' : href === path || href.endsWith(path);
      if (matchesPath) {
        links[i].textContent = lang === 'en' ? enText : zhText;
      }
    }
  }

  function applyStaticTranslations(lang) {
    setText('.author__name', 'Sichi Yan', '鄢思迟', lang);
    setText(
      '.author__bio',
      'M.S. student, Shanghai Jiao Tong University. Robot locomotion & morphology co-design.',
      '上海交通大学硕士研究生。机器人运动控制与形态-控制协同设计。',
      lang
    );
    setIconLineText(0, 'Shanghai, China', '中国上海', lang);
    setIconLineText(1, 'Shanghai Jiao Tong University', '上海交通大学', lang);

    setNavText('/', 'Sichi Yan', '鄢思迟', lang);
    setNavText('/publications/', 'Publications', '发表成果', lang);
    setNavText('/portfolio/', 'Projects', '项目经历', lang);
    setNavText('/cv/', 'CV', '简历', lang);
  }

  function applyDocumentTitle(lang) {
    var root = document.documentElement;
    var pageTitle = root.getAttribute(lang === 'en' ? 'data-page-title-en' : 'data-page-title-zh');
    var siteTitle = root.getAttribute(lang === 'en' ? 'data-site-title-en' : 'data-site-title-zh');
    var separator = root.getAttribute('data-title-separator') || '|';

    if (!pageTitle) return;
    document.title = siteTitle && pageTitle !== siteTitle ? pageTitle + ' ' + separator + ' ' + siteTitle : pageTitle;
  }

  function toggle() {
    var next = getLang() === 'en' ? 'zh' : 'en';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  }

  /* Apply saved preference as early as possible */
  applyLang(getLang());

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.addEventListener('click', toggle);
  });
})();
