document.addEventListener('DOMContentLoaded', () => {
    const testArea = document.getElementById('test-area');
    const quoteDisplay = document.getElementById('quote');
    const timeDisplay = document.getElementById('time');
    const wordsDisplay = document.getElementById('words');
    const speedDisplay = document.getElementById('speed');
    const results = document.getElementById('results');
    const resetButton = document.getElementById('reset-button');
  
    let startTime, endTime;
    let timerRunning = false;
    const quoteText = quoteDisplay.textContent.trim();
  
    const startTimer = () => {
      startTime = new Date();
      timerRunning = true;
    };
  
    const stopTimer = () => {
      endTime = new Date();
      timerRunning = false;
      calculateResults();
    };
  
    const calculateResults = () => {
      const elapsedTime = (endTime - startTime) / 1000; // in seconds
      const typedText = testArea.value.trim();
      const wordCount = typedText.split(/\s+/).length;
      const speed = (wordCount / elapsedTime) * 60; // words per minute
  
      timeDisplay.textContent = elapsedTime.toFixed(2);
      wordsDisplay.textContent = wordCount;
      speedDisplay.textContent = speed.toFixed(2);
  
      results.style.display = 'block';
    };
  
    testArea.addEventListener('input', () => {
      if (!timerRunning) {
        startTimer();
      }
  
      if (testArea.value.trim() === quoteText) {
        stopTimer();
        testArea.disabled = true;
      }
    });
  
    resetButton.addEventListener('click', () => {
      testArea.disabled = false;
      testArea.value = '';
      results.style.display = 'none';
      timerRunning = false;
    });
  });
  