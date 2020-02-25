(function(window, document) {

  var indentation = 1;
  var fontsize = 1;
  var timeout;

  function parseJson(str) {
    var parsed = false;
    try {
      if (/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(str)) {
        str = window.atob(str);
      }
      parsed = window.JSON.parse(str);
      window.errmsg.textContent = '';
    } catch(err) {
      window.errmsg.textContent = err.message;
    }
    return parsed;
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
    el.classList.add('show');
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      el.classList.remove('show');
    }, 3000);
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
        window.formatted.textContent = window.JSON.stringify(parsed, null, ' '.repeat(indentation));
        hideOutput = false;
      }
    }
    window.main.classList.toggle('hidden', !hideOutput);
    window.output.classList.toggle('hidden', hideOutput);
  }

  window.addEventListener('popstate', function() {
    render();
  });

  window.btn.addEventListener('click', function() {
    var val = window.textbox.value;
    if (!val) { return; }
    var parsed = parseJson(val);
    if (parsed) {
      window.history.pushState({ id: Date.now(), name: 'json-pretty-print' }, '', '?json=' + window.btoa(window.JSON.stringify(parsed)));
      render();
    }
  });

  window.btnWrap.addEventListener('click', function() {
    window.formatted.classList.toggle('nowrap');
  });

  window.btnIndent.addEventListener('click', function() {
    indentation = indentation === 6 ? 1 : indentation + 1;
    render();
  });

  window.btnSize.addEventListener('click', function() {
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
    var range;
    if (document.selection) {
      range = document.body.createTextRange();
      range.moveToElementText(window.formatted);
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      range = document.createRange();
      range.selectNode(window.formatted);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
    if (range) {
      toast('Copied!');
    }
  });

  if (window.location.search) { noindex(); }
  render();

}(window, document));
