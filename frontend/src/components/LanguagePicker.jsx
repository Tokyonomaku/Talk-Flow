import langs from "../data/SimpleTalkFlow.json";

function LanguagePicker() {
  return (
    <select>
      {langs.languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}

export default LanguagePicker;


