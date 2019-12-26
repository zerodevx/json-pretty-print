(function(window, document) {

  var indentation = 1;
  var fontsize = 1;

  function parseJson(str) {
    var parsed = false;
    try {
      parsed = JSON.parse(str);
      window.errmsg.textContent = '';
    } catch(err) {
      window.errmsg.textContent = err.message;
    }
    return parsed;
  }

  function animate(el) {
    el.animate && el.animate([
      { backgroundColor: '#4A5568' },
      { backgroundColor: '#FFF' }
    ], {
      easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      duration: 1500
    });
  }

  function noindex() {
    var el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    el.setAttribute('content', 'noindex');
    document.head.appendChild(el);
  }

  function toast(msg) {
    var el = window.toast;
    el.textContent = msg;
    el.animate && el.animate([
      { opacity: 0 },
      { opacity: 0.9, offset: 0.1 },
      { opacity: 0 }
    ], 3500);
  }

  function render() {
    var hideOutput = true;
    var params = new URLSearchParams(window.location.search);
    var data = params.get('json');
    if (data) {
      var parsed = parseJson(data);
      if (!parsed) {
        window.textbox.value = data;
        window.history.replaceState({ id: Date.now(), name: 'json-pretty-print' }, '', '/');
      } else {
        window.formatted.textContent = JSON.stringify(parsed, null, ' '.repeat(indentation));
        hideOutput = false;
      }
    }
    window.main.classList.toggle('hidden', !hideOutput)
    window.output.classList.toggle('hidden', hideOutput);
  }

  window.addEventListener('popstate', function() {
    render();
  });

  window.btn.addEventListener('click', function() {
    animate(window.btn);
    var val = window.textbox.value;
    if (!val) { return; }
    var parsed = parseJson(val);
    if (parsed) {
      window.history.pushState({ id: Date.now(), name: 'json-pretty-print' }, '', '?json=' + encodeURIComponent(JSON.stringify(parsed)));
      render();
    }
  });

  window.btnWrap.addEventListener('click', function() {
    animate(window.btnWrap);
    window.formatted.classList.toggle('nowrap');
  });

  window.btnIndent.addEventListener('click', function() {
    animate(window.btnIndent);
    indentation = indentation === 6 ? 1 : indentation + 1;
    render();
  });

  window.btnSize.addEventListener('click', function() {
    animate(window.btnSize);
    fontsize = fontsize === 4 ? 1 : fontsize + 1;
    var size;
    switch(fontsize) {
      case 2:
        size = 'text-sm';
        break;
      case 3:
        size = 'text-base';
        break;
      case 4:
        size = 'text-lg';
        break;
      default:
        size = 'text-xs';
    }
    window.formatted.classList.remove('text-xs', 'text-sm', 'text-base', 'text-lg');
    window.formatted.classList.add(size);
  });

  window.btnCopy.addEventListener('click', function() {
    animate(window.btnCopy);
    toast('Copied!');
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(window.formatted);
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(window.formatted);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
  });

  if (window.location.search) { noindex(); }
  render();

}(window, document));