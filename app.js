
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition(); // make new object and help for microphone acess

let para = document.createElement('p');
const content = document.querySelector('.content');
content.appendChild(para);

recognition.addEventListener('result', e => {           // result is a event listner
    console.log(e);
    const transcript = e.results[0][0].transcript;           // we are getting text
    para.textContent = transcript;                        // put text in para

    if(e.results[0].isFinal){                     // if text is final
        para = document.createElement('p');     // then create para
        content.appendChild(para);             // and append it in  para
    }

 });

 recognition.addEventListener('end',recognition.start);  //for continuous listning
 recognition.start();                                   // our microphone start lisning