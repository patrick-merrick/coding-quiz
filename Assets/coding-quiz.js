let statusSpan = document.querySelector("#questions");
let BeginQuiz = document.getElementById("startBtn")
let currentQuesion = 0
BeginQuiz.addEventListener("click",function(){
    console.log("it works")
    question()
    BeginQuiz.setAttribute("class","hideclass")
})
function question(){
    console.log(questions[currentQuesion]["title"])
    let questionObject = questions[currentQuesion]
    let title = document.getElementById("title")
    let answerList = document.getElementById("answers")
    answerList.innerHTML="" 
    title.textContent=questionObject["title"]
    questionObject["answers"].forEach(function(answer,i) {
      let answerButton = document.createElement("button")
      answerButton.textContent=answer
      answerButton.onclick=answerClick
      answerButton.setAttribute("value",answer)
      answerList.appendChild(answerButton)       
    
    });
    currentQuesion++

}
function answerClick(){
    console.log(this.value)
    question()
    currentQuesion++
    
}

