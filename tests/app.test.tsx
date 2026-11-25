import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '../src/i18n';
import { TimerTool } from '../src/features/timer/TimerTool';
import { SelfAssessment } from '../src/features/self-assessment/SelfAssessment';
describe('tools', () => {
  it('changes timer presets', () => {
    render(<TimerTool />);
    fireEvent.click(screen.getByText('30s'));
    expect(screen.getByText('00:30')).toBeInTheDocument();
  });
  it('updates self assessment', () => {
    render(<SelfAssessment />);
    const checkbox = screen.getAllByRole('checkbox')[0]!;
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
