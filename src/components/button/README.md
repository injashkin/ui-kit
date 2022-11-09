- `primary` или `link` - синяя или в виде ссылки (по умолчанию белая)
- `success` или `error` - зеленая или красная (по умолчанию синяя)
- `sm` или `lg` - маленькая или большая (по умолчанию средняя)
- `block` - на всю ширину родительского контейнера
- `action` или `circle` - квадратная или круглая (по умолчанию прямоугольная)
- `disabled` - неактивная
- `loading` - с индикатором загрузки

```pug
  +button()
  +button('lg', 'large'
  +button('sm', 'small')
  +button('block lg', 'block')
  +button('primary lg', 'primary large')
  +button('success', 'success')
  +button('error', 'error')
  +button('link', 'link')
  +button('disabled', 'disabled')
  +button('loading', 'loading')
  +button('action', 's')
  +button('loading')
```
