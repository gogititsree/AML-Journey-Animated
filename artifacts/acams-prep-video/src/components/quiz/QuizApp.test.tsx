import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuizApp from './QuizApp';
import { quizQuestions } from '@/data/quizQuestions';

describe('QuizApp', () => {
  test('shows score against the full question pool and reveals answers after confirmation', async () => {
    const user = userEvent.setup();
    render(<QuizApp />);

    const startButton = screen.getByRole('button', { name: /Start 200 Question/i });
    expect(startButton).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /In Order/i }));
    await user.click(startButton);

    expect(screen.getByText('0/200')).toBeInTheDocument();

    const optionButtons = screen.getAllByRole('button');
    const question = quizQuestions[0];
    const expectedLabel = String.fromCharCode(65 + question.answer);
    const optionButton = optionButtons.find(button => button.textContent?.trim().startsWith(expectedLabel));

    expect(optionButton).toBeDefined();
    await user.click(optionButton!);

    const checkButton = screen.getByRole('button', { name: /Check Answer/i });
    expect(checkButton).toBeEnabled();
    await user.click(checkButton);

    expect(screen.getByText(/Correct answer:|Correct!/i)).toBeInTheDocument();
  });
});
