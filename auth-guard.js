(function() {
  if (window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('/login')) return;
  if (sessionStorage.getItem('brs_authenticated') === '1') return;
  var base = window.location.pathname.replace(/\/[^/]*$/, '/') || '/';
  window.location.href = base + 'login.html';
})();
