let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Lady Gaga",
    "answer_2": "Einstein",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Bill Gates",
    "right_answer": 3
  },
  {
    "question": "Was bedeutet die Abkürzung HTML?",
    "answer_1": "HyperText Markup Language",
    "answer_2": "HighText Machine Language",
    "answer_3": "Hyper Tool Multi Language",
    "answer_4": "Home Tool Markup Language",
    "right_answer": 1
  },
  {
    "question": "Wofür wird CSS verwendet?",
    "answer_1": "Zum Programmieren von Logik",
    "answer_2": "Zum Gestalten und Stylen von Webseiten",
    "answer_3": "Zum Speichern von Datenbanken",
    "answer_4": "Zum Erstellen von Servern",
    "right_answer": 2
  },
  {
    "question": "Mit welchem HTML-Tag schreibt man eine Überschrift?",
    "answer_1": "<p>",
    "answer_2": "<head>",
    "answer_3": "<h1>",
    "answer_4": "<title>",
    "right_answer": 3
  },
  {
    "question": "Wie kann man in CSS die Textfarbe ändern?",
    "answer_1": "color: red;",
    "answer_2": "text-color: red;",
    "answer_3": "font-color: red;",
    "answer_4": "text-style: red;",
    "right_answer": 1
  },
  {
    "question": "Wie bindet man eine externe CSS-Datei in HTML ein?",
    "answer_1": "<style src='style.css'>",
    "answer_2": "<link rel='stylesheet' href='style.css'>",
    "answer_3": "<css link='style.css'>",
    "answer_4": "<script src='style.css'>",
    "right_answer": 2
  },
  {
    "question": "Mit welchem HTML-Tag fügt man ein Bild ein?",
    "answer_1": "<image>",
    "answer_2": "<img>",
    "answer_3": "<pic>",
    "answer_4": "<photo>",
    "right_answer": 2
  },
  {
    "question": "Welche Sprache wird verwendet, um Webseiten interaktiv zu machen?",
    "answer_1": "CSS",
    "answer_2": "HTML",
    "answer_3": "JavaScript",
    "answer_4": "Python",
    "right_answer": 3
  },
  {
    "question": "Wie beginnt man in JavaScript einen Kommentar?",
    "answer_1": "// Kommentar",
    "answer_2": "# Kommentar",
    "answer_3": "<!-- Kommentar -->",
    "answer_4": "** Kommentar",
    "right_answer": 1
  },
  {
    "question": "Welches Attribut im <a>-Tag gibt den Link-Zielort an?",
    "answer_1": "src",
    "answer_2": "href",
    "answer_3": "link",
    "answer_4": "target",
    "right_answer": 2
  },
  {
    "question": "Wie zeigt man in JavaScript eine Nachricht im Browser an?",
    "answer_1": "alert('Hallo');",
    "answer_2": "print('Hallo');",
    "answer_3": "console.show('Hallo');",
    "answer_4": "display('Hallo');",
    "right_answer": 1
  },
  {
    "question": "Wofür steht das 'www' in einer Internetadresse?",
    "answer_1": "World Wide Web",
    "answer_2": "Wide World Web",
    "answer_3": "Web World Wide",
    "answer_4": "Wide Web World",
    "right_answer": 1
  },
  {
    "question": "Was ist ein Browser?",
    "answer_1": "Ein Programm zum Schreiben von Texten",
    "answer_2": "Ein Programm zum Surfen im Internet",
    "answer_3": "Ein Computer",
    "answer_4": "Ein Handy",
    "right_answer": 2
  },
  {
    "question": "Welche dieser Firmen hat Windows entwickelt?",
    "answer_1": "Apple",
    "answer_2": "Google",
    "answer_3": "Microsoft",
    "answer_4": "Samsung",
    "right_answer": 3
  },
  {
    "question": "Was bedeutet 'URL'?",
    "answer_1": "Uniform Resource Locator",
    "answer_2": "Universal Record Link",
    "answer_3": "User Registration Login",
    "answer_4": "United Resource List",
    "right_answer": 1
  },
  {
    "question": "Wie nennt man ein tragbares Gerät, das man als Telefon und Computer nutzen kann?",
    "answer_1": "Smartphone",
    "answer_2": "Tablet",
    "answer_3": "Laptop",
    "answer_4": "Modem",
    "right_answer": 1
  },
  {
    "question": "Was macht die Enter-Taste auf der Tastatur?",
    "answer_1": "Sie löscht Text",
    "answer_2": "Sie startet eine neue Zeile oder bestätigt eine Eingabe",
    "answer_3": "Sie macht den Bildschirm heller",
    "answer_4": "Sie schaltet den Computer aus",
    "right_answer": 2
  },
  {
    "question": "Wie nennt man ein Gerät, mit dem man Dokumente auf Papier bringen kann?",
    "answer_1": "Scanner",
    "answer_2": "Monitor",
    "answer_3": "Drucker",
    "answer_4": "Maus",
    "right_answer": 3
  },
  {
    "question": "Welche Farbe hat der typische USB-Anschluss für USB 3.0?",
    "answer_1": "Blau",
    "answer_2": "Rot",
    "answer_3": "Grün",
    "answer_4": "Schwarz",
    "right_answer": 1
  },
  {
    "question": "Was ist eine Datei?",
    "answer_1": "Ein Stück Papier",
    "answer_2": "Ein digital gespeichertes Dokument oder Programm",
    "answer_3": "Ein Computer",
    "answer_4": "Ein Ordner",
    "right_answer": 2
  },
  {
    "question": "Welche Taste benutzt man, um Großbuchstaben zu schreiben?",
    "answer_1": "Tab",
    "answer_2": "Shift",
    "answer_3": "Alt",
    "answer_4": "Esc",
    "right_answer": 2
  }
];

let currentQuestion = 0;

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {

  let question = questions[currentQuestion];//aktuelles frage objekt
  console.log('selectet answer is', selection);//ausgewählte antwort
  let selectetQuestionNumber = selection.slice(-1);//letzte zeichen von selection
  console.log('selectetquestionnuimber is', selectetQuestionNumber);//nummer der ausgewählten antwort
  console.log('current question is', question['right_answer']); //richtige antwort der aktuellen frage

  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectetQuestionNumber == question['right_answer']) { //vergleicht ob die ausgewählte antwort die richtige ist
    console.log('richtige antwort');//richtige antwort
    document.getElementById(selection).classList.add('bg-success');
  } else {//falsche antwort
    console.log('falsche antwort'); //falsche antwort
    document.getElementById(selection).classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).classList.add('bg-success');
  }
}
