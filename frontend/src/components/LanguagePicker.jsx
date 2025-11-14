import { languages } from "../data/languages";

function LanguagePicker() {
  return (
    <select>
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}

export default LanguagePicker;






