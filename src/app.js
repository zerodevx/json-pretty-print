(function(window, document) {

  var indentVal = 1;
  var sizeVal = 1;

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
      duration: 1400
    });
  }

  function noindex() {
    var el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    el.setAttribute('content', 'noindex');
    document.head.appendChild(el);
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
        window.formatted.textContent = JSON.stringify(parsed, null, ' '.repeat(indentVal));
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
    if (!window.textbox.value) { return; }
    var parsed = parseJson(window.textbox.value);
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
    indentVal = indentVal === 6 ? 1 : indentVal + 1;
    render();
  });

  window.btnSize.addEventListener('click', function() {
    animate(window.btnSize);
    sizeVal = sizeVal === 4 ? 1 : sizeVal + 1;
    var size;
    switch(sizeVal) {
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