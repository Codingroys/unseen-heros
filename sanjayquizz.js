document.getElementById('submit-btn').addEventListener('click', function() {
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'B',
        q2: 'C',
        q3: 'C',
        q4: 'C',
        q5: 'C',
        q6: 'C',
        q7: 'B',
        q8: 'B',
        q9: 'C',
        q10: 'C'
    };

    // Calculate score
    const form = document.getElementById('quiz-form');
    for (const [question, answer] of Object.entries(answers)) {
        const userAnswer = form[question].value;
        if (userAnswer === answer) score++;
    }

    // Show result
    document.getElementById('score').textContent = score ;
    document.getElementById('feedback').textContent = score === 10 ? 'Excellent!' : score > 1 ? 'Good job!' : 'Keep trying!';
    document.querySelector('.quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
});

// Retry button event listener
document.getElementById('retry-btn').addEventListener('click', function() {
    document.getElementById('quiz-form').reset();
    document.getElementById('result-section').classList.add('hidden');
    document.querySelector('.quiz-section').classList.remove('hidden');
});