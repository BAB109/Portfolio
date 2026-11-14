import { useState, useEffect } from 'react';

export default function TypewriterText({
  words = [],
  typingSpeed = 95,
  deletingSpeed = 45,
  pauseTime = 1900,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center text-[#48E6C1] font-semibold">
      <span>{currentText}</span>
      <span
        className="w-[2.5px] h-[1.15em] ml-1 bg-[#48E6C1] animate-pulse inline-block shadow-[0_0_8px_#48E6C1]"
        aria-hidden="true"
      />
    </span>
  );
}
