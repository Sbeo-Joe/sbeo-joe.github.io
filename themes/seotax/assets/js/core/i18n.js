/**
 * Language switcher: navigates to Hugo-generated translation URLs.
 */
window.addEventListener('DOMContentLoaded', function() {
  const sel = document.getElementById('i18n-selector');
  if (!sel) return;

  sel.addEventListener('change', function() {
    const selectedLang = this.value;
    const defaultLang = this.dataset.defaultLang || 'ko';
    let translations = {};
    try {
      translations = JSON.parse(this.dataset.translations || '{}');
    } catch(e) {}

    if (translations[selectedLang]) {
      // Translated page exists -- navigate to it
      window.location.href = translations[selectedLang];
    } else {
      // No translation -- fallback to language homepage
      const prefix = selectedLang !== defaultLang ? '/' + selectedLang + '/' : '/';
      window.location.href = prefix;
    }
  });
});
