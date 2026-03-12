const __SheepNav__ = (function NavModule () {
  /**
  * toggle the nav
  * when in the mobile terminal
  */
  function toggleNav () {
    const NAVS = document.getElementById('navs')
    if (NAVS.classList.contains('in')) {
      NAVS.classList.remove('in')
    } else {
      NAVS.classList.add('in')
    }
  }

  /**
  * hide the nav if click any part of the site
  */
  function hideNav () {
    const NAVS = document.getElementById('navs')
    NAVS.classList.remove('in')
  }

  return {
    hideNav,
    toggleNav
  }
})()

// Logo animation: YuTube -> YushunTube -> YuTube
(function LogoAnimation() {
  const shunElement = document.querySelector('.logo-shun')
  if (!shunElement) return

  const SHOW_DURATION = 3000    // 顯示 YushunTube 的時間
  const HIDE_DURATION = 5000    // 顯示 YuTube 的時間

  function showShun() {
    shunElement.classList.add('shun-visible')
    shunElement.classList.remove('shun-hidden')
    setTimeout(hideShun, SHOW_DURATION)
  }

  function hideShun() {
    shunElement.classList.remove('shun-visible')
    shunElement.classList.add('shun-hidden')
    setTimeout(showShun, HIDE_DURATION)
  }

  // 開始循環
  setTimeout(showShun, HIDE_DURATION)
})()
