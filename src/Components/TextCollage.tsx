import React from "react";
import "./TextCollage.css";
interface TextCollageProps {
  children?: React.ReactNode;
}

const TextCollage: React.FC<TextCollageProps> = ({ children }) => {
  const namesInDifferentLanguages: { language: string; spelling: string }[] = [
    { language: "English", spelling: "Daniel G. Shea" },
    { language: "Spanish", spelling: "Daniel G. Shea" },
    { language: "French", spelling: "Daniel G. Shea" },
    { language: "German", spelling: "Daniel G. Shea" },
    { language: "Italian", spelling: "Daniel G. Shea" },
    { language: "Portuguese", spelling: "Daniel G. Shea" },
    { language: "Russian", spelling: "Даниэль Дж. Ши" }, // Cyrillic alphabet
    { language: "Greek", spelling: "Ντάνιελ Γ. Σέα" }, // Greek alphabet
    { language: "Arabic", spelling: "دانيال ج. شيا" }, // Arabic script
    { language: "Hebrew", spelling: "דניאל ג. שיה" }, // Hebrew alphabet
    { language: "Japanese", spelling: "ダニエル G. シー" }, // Kanji and Katakana
    { language: "Chinese (Simplified)", spelling: "丹尼尔 G. 谢" }, // Chinese characters
    { language: "Korean", spelling: "다니엘 G. 셰" }, // Hangul
    { language: "Hindi", spelling: "डैनियल जी. शेया" }, // Devanagari script
    { language: "Thai", spelling: "เดเนียล จ. เช" }, // Thai script
    { language: "Vietnamese", spelling: "Đan-i-ên G. Xê-a" }, // Vietnamese alphabet
    { language: "Turkish", spelling: "Daniyel G. Şea" }, // Turkish alphabet
    { language: "Swedish", spelling: "Daniel G. Shea" },
    { language: "Dutch", spelling: "Daniël G. Shea" },
    { language: "Swahili", spelling: "Daniel G. Shea" },
    { language: "Finnish", spelling: "Daniel G. Shea" },
    { language: "Norwegian", spelling: "Daniel G. Shea" },
    { language: "Polish", spelling: "Daniel G. Shea" },
    { language: "Czech", spelling: "Daniel G. Shea" },
    { language: "Hungarian", spelling: "Dániel G. Shea" }, // Hungarian alphabet
    { language: "Romanian", spelling: "Daniel G. Shea" },
    { language: "Bulgarian", spelling: "Даниел Дж. Ши" }, // Bulgarian alphabet
    { language: "Croatian", spelling: "Daniel G. Shea" },
    { language: "English", spelling: "Daniel G. Shea" },
    { language: "Spanish", spelling: "Daniel G. Shea" },
    { language: "French", spelling: "Daniel G. Shea" },
    { language: "German", spelling: "Daniel G. Shea" },
    { language: "Italian", spelling: "Daniel G. Shea" },
    { language: "Portuguese", spelling: "Daniel G. Shea" },
    { language: "Russian", spelling: "Даниэль Дж. Ши" }, // Cyrillic alphabet
    { language: "Greek", spelling: "Ντάνιελ Γ. Σέα" }, // Greek alphabet
    { language: "Arabic", spelling: "دانيال ج. شيا" }, // Arabic script
    { language: "Hebrew", spelling: "דניאל ג. שיה" }, // Hebrew alphabet
    { language: "Japanese", spelling: "ダニエル G. シー" }, // Kanji and Katakana
    { language: "Chinese (Simplified)", spelling: "丹尼尔 G. 谢" }, // Chinese characters
    { language: "Korean", spelling: "다니엘 G. 셰" }, // Hangul
    { language: "Hindi", spelling: "डैनियल जी. शेया" }, // Devanagari script
    { language: "Thai", spelling: "เดเนียล จ. เช" }, // Thai script
    { language: "Vietnamese", spelling: "Đan-i-ên G. Xê-a" }, // Vietnamese alphabet
    { language: "Turkish", spelling: "Daniyel G. Şea" }, // Turkish alphabet
    { language: "Swedish", spelling: "Daniel G. Shea" },
    { language: "Dutch", spelling: "Daniël G. Shea" },
    { language: "Swahili", spelling: "Daniel G. Shea" },
    { language: "Finnish", spelling: "Daniel G. Shea" },
    { language: "Norwegian", spelling: "Daniel G. Shea" },
    { language: "Polish", spelling: "Daniel G. Shea" },
    { language: "Czech", spelling: "Daniel G. Shea" },
    { language: "Hungarian", spelling: "Dániel G. Shea" }, // Hungarian alphabet
    { language: "Romanian", spelling: "Daniel G. Shea" },
    { language: "Bulgarian", spelling: "Даниел Дж. Ши" }, // Bulgarian alphabet
    { language: "Croatian", spelling: "Daniel G. Shea" },
    { language: "Czech", spelling: "Daniel G. Shea" },
    { language: "Hungarian", spelling: "Dániel G. Shea" }, // Hungarian alphabet
    { language: "Romanian", spelling: "Daniel G. Shea" },
    { language: "Bulgarian", spelling: "Даниел Дж. Ши" }, // Bulgarian alphabet
    { language: "Croatian", spelling: "Daniel G. Shea" },
    { language: "Japanese", spelling: "ダニエル G. シー" }, // Kanji and Katakana
    { language: "Chinese (Simplified)", spelling: "丹尼尔 G. 谢" }, // Chinese characters
    { language: "Korean", spelling: "다니엘 G. 셰" }, // Hangul
    { language: "Hindi", spelling: "डैनियल जी. शेया" }, // Devanagari script
    { language: "Thai", spelling: "เดเนียล จ. เช" }, // Thai script
    { language: "Vietnamese", spelling: "Đan-i-ên G. Xê-a" }, // Vietnamese alphabet
    { language: "Japanese", spelling: "ダニエル G. シー" }, // Kanji and Katakana
  ];

  const renderDaniel = () => {
    return namesInDifferentLanguages.map((name) => {
      return (
        <div className="text">
          <p className="text-p">{name.spelling}</p>
        </div>
      );
    });
  };

  return (
    <div className="text-container">
      {children}
      {renderDaniel()}
    </div>
  );
};

export default TextCollage;
