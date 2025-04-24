document.addEventListener('DOMContentLoaded', () => {
  const savedFaviconUrl = localStorage.getItem('faviconUrl');
  const savedTitle = localStorage.getItem('pageTitle');
  const savedKeybind = localStorage.getItem('keybind');
  const savedCustomUrl = localStorage.getItem('customUrl');
  const savedTheme = localStorage.getItem('siteTheme');

  if (savedFaviconUrl) {
    let link = document.querySelector('link[rel="shortcut icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    link.href = savedFaviconUrl;
  }

  if (savedTitle) {
    document.title = savedTitle;
  }

  if (savedKeybind && savedCustomUrl) {
    document.addEventListener('keydown', (e) => {
      if (e.key === savedKeybind) {
        window.open(savedCustomUrl, '_blank');
      }
    });
  }

  const themeDropdown = document.getElementById('themee');

  function loadParticlesConfig(theme) {
    let configpartjs = '/particlesjs-config.json';

    if (theme === 'dark') {
      configpartjs = '/dark.json';
    }
    if (theme === 'light') {
      configpartjs = '/light.json';
    }
    if (theme === 'mexi') {
      configpartjs = '/mexi.json';
    }
    if (theme === 'bubblegum') {
      configpartjs = '/bubblegum.json';
    }
    if (theme === 'brunys') {
      configpartjs = '/brunys.json';
    }
    if (theme === 'evergreen') {
      configpartjs = '/evergreen.json';
    }
    if (theme === 'frogiee') {
      configpartjs = '/frogiee.json';
    }
    if (theme === 'lavender') {
      configpartjs = '/lavender.json';
    }
    if (theme === 'solarflare') {
      configpartjs = '/solarflare.json';
    }
    if (theme === 'moonlight') {
      configpartjs = '/moonlight.json';
    }
    if (theme === 'v1') {
      configpartjs = 'none';
    } else if (theme === 'default') {
      configpartjs = '/particlesjs-config.json';
    }

    const existingCanvas = document.querySelector('#particles-js canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }

    particlesJS.load('particles-js', configpartjs, function () {
      console.log(`Particles.js config loaded: ${configpartjs}`);
    });
  }

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeDropdown) {
      themeDropdown.value = savedTheme;
    }
    loadParticlesConfig(savedTheme);
  } else {
    loadParticlesConfig('default');
  }

  if (themeDropdown) {
    themeDropdown.addEventListener('change', () => {
      const selectedTheme = themeDropdown.value;
      document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('siteTheme', selectedTheme);
      loadParticlesConfig(selectedTheme);
    });
  }
});
