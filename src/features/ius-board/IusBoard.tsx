import { Download, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { csvCell, downloadText } from '../../lib/content';
type Column = 'essential' | 'useful' | 'secondary';
interface Item {
  id: string;
  text: string;
  column: Column;
}
const read = (): Item[] => {
  try {
    const value = JSON.parse(localStorage.getItem('comlab-ius') ?? '[]');
    return Array.isArray(value)
      ? value.filter(
          (x) =>
            typeof x?.text === 'string' && ['essential', 'useful', 'secondary'].includes(x.column),
        )
      : [];
  } catch {
    return [];
  }
};
export function IusBoard() {
  const { t } = useTranslation();
  const [items, setItems] = useState<Item[]>(read);
  const [text, setText] = useState('');
  const save = (next: Item[]) => {
    setItems(next);
    localStorage.setItem('comlab-ius', JSON.stringify(next));
  };
  const add = () => {
    const clean = text.trim().slice(0, 500);
    if (clean) {
      save([...items, { id: crypto.randomUUID(), text: clean, column: 'essential' }]);
      setText('');
    }
  };
  const columns: Column[] = ['essential', 'useful', 'secondary'];
  const exportData = () =>
    downloadText(
      'ius-board.csv',
      [
        'category,information',
        ...items.map((x) => `${csvCell(t(`tools.${x.column}`))},${csvCell(x.text)}`),
      ].join('\n'),
      'text/csv;charset=utf-8',
    );
  return (
    <div>
      <div className="toolbar card">
        <label className="field" style={{ flex: 1 }}>
          <span>{t('tools.add')}</span>
          <input
            maxLength={500}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && add()}
          />
        </label>
        <button className="button primary" onClick={add}>
          {t('tools.add')}
        </button>
        <button className="button" onClick={exportData}>
          <Download />
          {t('common.export')} CSV
        </button>
        <button
          className="button danger"
          onClick={() => confirm(t('common.confirmReset')) && save([])}
        >
          <Trash2 />
          {t('common.reset')}
        </button>
      </div>
      <p className="muted">{t('common.localNotice')}</p>
      <div className="kanban">
        {columns.map((column) => (
          <section
            className="card kanban-column"
            key={column}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const id = e.dataTransfer.getData('text/plain');
              save(items.map((x) => (x.id === id ? { ...x, column } : x)));
            }}
          >
            <h3>
              {t(`tools.${column}`)} ({items.filter((x) => x.column === column).length})
            </h3>
            {items
              .filter((x) => x.column === column)
              .map((item) => (
                <div
                  className="kanban-card"
                  key={item.id}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', item.id)}
                >
                  <p>{item.text}</p>
                  <div className="actions">
                    <select
                      aria-label="Move card"
                      value={item.column}
                      onChange={(e) =>
                        save(
                          items.map((x) =>
                            x.id === item.id ? { ...x, column: e.target.value as Column } : x,
                          ),
                        )
                      }
                    >
                      {columns.map((c) => (
                        <option key={c} value={c}>
                          {t(`tools.${c}`)}
                        </option>
                      ))}
                    </select>
                    <button
                      className="icon-button"
                      onClick={() => save(items.filter((x) => x.id !== item.id))}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
          </section>
        ))}
      </div>
    </div>
  );
}
