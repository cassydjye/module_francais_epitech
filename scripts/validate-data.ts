import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { projects } from '../src/data/projects.ts';
import { workshops } from '../src/data/workshops.ts';
import { tabooCards } from '../src/data/taboo-cards.ts';
const errors: string[] = [];
const unique = (values: string[], label: string) => {
  const duplicates = values.filter((x, i) => values.indexOf(x) !== i);
  if (duplicates.length) errors.push(`Duplicate ${label}: ${duplicates.join(', ')}`);
};
unique(
  projects.map((x) => x.id),
  'project IDs',
);
unique(
  projects.map((x) => x.slug),
  'project slugs',
);
unique(
  workshops.map((x) => x.slug),
  'workshop slugs',
);
for (const project of projects) {
  if (!project.title.fr || !project.title.en) errors.push(`${project.id}: missing title`);
  if (project.grade < 0 || project.grade > 20) errors.push(`${project.id}: invalid grade`);
  if (!existsSync(resolve(project.filePath)))
    errors.push(`${project.id}: missing ${project.filePath}`);
}
if (tabooCards.length < 24) errors.push('At least 24 taboo cards are required');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  `Validated ${projects.length} projects, ${workshops.length} workshops and ${tabooCards.length} taboo cards.`,
);
