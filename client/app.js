let editor;
let currentLanguage = "javascript";

require.config({ paths: { vs: 'https://unpkg.com/monaco-editor/min/vs' } });

const languageExamples = {
  javascript: `console.log("Hello PreetIDE ");`,
  python: `print("Hello PreetIDE ")`
};

const languageModes = {
  javascript: "javascript",
  python: "python"
};

require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: languageExamples[currentLanguage],
    language: languageModes[currentLanguage],
    theme: "vs-dark"
  });
});

function changeLanguage() {
  const newLanguage = document.getElementById("language").value;
  currentLanguage = newLanguage;
  monaco.editor.setModelLanguage(editor.getModel(), languageModes[newLanguage]);
  editor.setValue(languageExamples[newLanguage]);
}

function runCode() {
  const code = editor.getValue();
  const runBtn = document.getElementById('runBtn');
  const status = document.getElementById('status');
  runBtn.disabled = true;
  status.innerText = 'Running...';

  fetch("http://localhost:3000/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code, language: currentLanguage })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = data.output || '';
    })
    .catch(err => {
      document.getElementById("output").innerText = String(err);
    })
    .finally(() => {
      runBtn.disabled = false;
      status.innerText = 'Ready';
    });
}

function clearOutput(){
  document.getElementById('output').innerText = '';
}