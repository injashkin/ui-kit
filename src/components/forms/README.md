Примеры форм можно посмотреть в документации на странице [Forms](https://picturepan2.github.io/spectre/elements/forms.html) фреймворка SPECTRE

Команда для input имеет вид:

```pug
+input('idName', 'types', 'labelName', 'placeholder')
```

где

- `idName` - имя поля id в теге input
- `types` - тип, который может иметь значения `text`, `email`, `password`, `number`, `search`, `tel`, `date`, `time`, `month`, `week`, `url`, `color`, `file` и `hidden`. Типы `reset` и `submit` превращают поле в кнопку "Сбросить" и "Отправить" соответственно.
- `labelName` - название над полем
- `placeholder` - подсказка в поле

```pug
+textarea('idName', 'rows', 'labelName', 'placeholder')
```

где

- `rows` - высота поля в строках текста

```pug
+select('Item 1, Item 2, Item 3, Item 4')
```

```pug
+radio('inputName', 'labelName', 'The Name One^, The Name Two')
```

где

- `inputName` - имя для атрибутов name, которое задается всем тегам input из данной группы радиокнопок
- `labelName` - имя для группы радиокнопок
- `The Name One^, The Name Two` - через запятую можно указать любое количество имен, каждое имя - это радиокнопка, символ `^` в конце одного из имени, будет указывать на выбранную радиокнопку.
