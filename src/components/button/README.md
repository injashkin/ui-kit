Примеры кнопок можно посмотреть в документации на странице [Buttons](https://picturepan2.github.io/spectre/elements/btns.html) фреймворка SPECTRE

Команда имеет вид:

```pug
+btn('options', 'text')
```

где `options` может иметь следующие значения:

- `primary` или `link` - синяя или в виде ссылки (по умолчанию белая)
- `success` или `error` - зеленая или красная (по умолчанию синяя)
- `sm` или `lg` - маленькая или большая (по умолчанию средняя)
- `block` - на всю ширину родительского контейнера
- `action` или `circle` - квадратная или круглая (по умолчанию прямоугольная)
- `disabled` - неактивная
- `loading` - с индикатором загрузки (НЕ РАБОТАЕТ!)

`text` - это текст на кнопке.

Примеры использования команды компонента:

```pug
  +btn()
  +btn('', 'btn')
  +btn('lg', 'large')
  +btn('sm', 'small')
  +btn('block lg', 'block')
  +btn('primary lg', 'primary large')
  +btn('success', 'success')
  +btn('error', 'error')
  +btn('link', 'link')
  +btn('disabled', 'disabled')
  +btn('loading', 'loading')
  +btn('action', 's')
  +btn('loading')
```

Группу кнопок можно задать так:

```pug
+btn('group')
  +btn('', 'first button')
  +btn('', 'second button')
  +btn('', 'third button')
```
