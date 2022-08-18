
let text = document.querySelector('.text');
let content = text.innerHTML.split((/\s+/));
String.prototype.countWords = function () {
  return content.length;
}
String.prototype.wordCondition = function (content) {
  return content.map(function (word) {
    if (word.length > 8) {
      return '<span>' + word + '</span>';
    } else if (word.endsWith('.')) {
      return word + '<br>';
    } else if (word.endsWith('!')) {
      return word.replace('!', '😲');
    } else if (word.endsWith('?')) {
      return word.replace('?', '🤔');
    } else if (word.endsWith('.') && word.length > 8) {
      return '<span>' + word + '</span><br>';
    } else {
      return word;
    }
  });
}

text.insertAdjacentHTML('beforebegin', `<p>Words: ${text.innerHTML.countWords()}</p>`);
text.insertAdjacentHTML('afterend', `<a href="https://forcemipsum.com/" target=_blank>https://forcemipsum.com/</a>`);
text.innerHTML = text.innerHTML.wordCondition(content).join(' ');
// Выделите все слова длиной более 8 символов в тексте абзаца (например, с желтым фоном)

// Добавьте ссылку на источник текста после тега абзаца.(https://forcemipsum.com/)

// Разделите каждое новое предложение на отдельную строку в тексте абзаца. Можно предположить, что предложение заканчивается точкой (.)

// Подсчитайте количество слов в теге абзаца и отобразите количество число после заголовка.
// Можно предположить, что все слова разделены одним единственным пробелом.

// Замените все вопросительные знаки (?) на задумчивые лица (🤔) и восклицательные знаки (!) на изумленные лица (😲)

