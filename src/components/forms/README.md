Примеры форм можно посмотреть в документации на странице [Forms](https://picturepan2.github.io/spectre/elements/forms.html) фреймворка SPECTRE

Команда для input имеет вид:

```pug
+input('idName', 'types', 'nameLabel', 'placeholder')
```

где

- `idName` - имя поля id в теге input
- `types` - тип, который может иметь значения `text`, `email`, `password`, `number`, `search`, `tel`, `date`, `time`, `month`, `week`, `url`, `color`, `file` и `hidden`. Типы `reset` и `submit` превращают поле в кнопку "Сбросить" и "Отправить" соответственно.
- `nameLabel` - название над полем
- `placeholder` - подсказка в поле

```pug
+textarea('idName', 'rows', 'nameLabel', 'placeholder')
```

где

- `rows` - высота поля в строках текста
