import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EmailWorkshop } from '../features/professional-email/EmailWorkshop';
import { IusBoard } from '../features/ius-board/IusBoard';
import { PitchBuilder } from '../features/pitch-builder/PitchBuilder';
import { TabooTool } from '../features/pitch-taboo/TabooTool';
import { SelfAssessment } from '../features/self-assessment/SelfAssessment';
import { TimerTool } from '../features/timer/TimerTool';
import { WorkshopMode } from '../features/workshop-mode/WorkshopMode';
const tools = {
  taboo: TabooTool,
  ius: IusBoard,
  timer: TimerTool,
  email: EmailWorkshop,
  builder: PitchBuilder,
  assessment: SelfAssessment,
  'workshop-mode': WorkshopMode,
};
const keys = {
  taboo: 'taboo',
  ius: 'ius',
  timer: 'timer',
  email: 'email',
  builder: 'builder',
  assessment: 'assessment',
  'workshop-mode': 'workshopMode',
} as const;
export function ToolDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const Tool = tools[slug as keyof typeof tools];
  if (!Tool)
    return (
      <div className="page container">
        <h1>{t('errors.notFound')}</h1>
      </div>
    );
  return (
    <div className="page container">
      <div className="eyebrow">{t('nav.tools')}</div>
      <h1>{t(`tools.${keys[slug as keyof typeof keys]}`)}</h1>
      <Tool />
    </div>
  );
}
