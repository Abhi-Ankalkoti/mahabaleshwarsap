
import { useState, useEffect } from 'react';

const TerminalIntro = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);

  const terminalLines = [
    "$ whoami",
    "> Mahabaleshwar S Ankalkoti",
    "$ cat skills.txt",
    "> AI Innovator | Full-Stack Developer | Problem Solver",
    "$ ls achievements/",
    "> hackathon_winner.txt  ranktrek_founder.txt  500+_students_helped.txt",
    "$ echo 'Ready to innovate'",
    "> Ready to innovate ✨"
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => {
            const newText = [...prev];
            if (!newText[currentLine]) newText[currentLine] = '';
            newText[currentLine] = line.slice(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        }, 50);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 800);

        return () => clearTimeout(timer);
      }
    }
  }, [currentLine, currentChar]);

  return (
    <div className="bg-black/90 backdrop-blur-sm rounded-lg p-6 font-mono text-sm max-w-2xl mx-auto mb-8 border border-green-500/30">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-gray-400">terminal.sh</div>
      </div>
      <div className="space-y-2">
        {displayText.map((line, index) => (
          <div key={index} className={`${line.startsWith('$') ? 'text-green-400' : 'text-white'}`}>
            {line}
            {index === currentLine && <span className="animate-pulse">|</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalIntro;
