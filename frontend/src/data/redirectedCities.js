// Duplicate city URLs that public/.htaccess (section B) 301-redirects to another city page.
// They render the same content as their target, so they must not be pre-rendered,
// listed in any sitemap, or linked internally.
export const REDIRECTED_CITY_PATHS = {
  '/market-area/tuticorin/': '/market-area/thoothukudi/',
  '/market-area/bharuch/': '/market-area/dahej/',
  '/market-area/chittoor-tirupati/': '/market-area/tirupati/',
  '/market-area/vijayawada-guntur/': '/market-area/vijayawada/'
};
