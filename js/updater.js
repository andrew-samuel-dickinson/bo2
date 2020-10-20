myQaData = [
    'the','of','and','a','to','in','is','you','that','it','he','was',
    'for','on','are','as','with','his','they','I','at','be','this',
    'have','from','or','one','had','by','word','but','not','what','all',
    'were','we','when','your','can','said','there','use','an','each','which',
    'she','do','how','their','if','will','up','other','about','out','many','then',
    'them','these','so','some','her','would','make','like','him','into','time',
    'has','look','two','more','write','go','see','number','no','way','could',
    'people','my','than','first','water','been','call','who','oil','its','now',
    'find','long','down','day','did','get','come','made','may','part'
    ];


function update()
{
    let summaryElt = document.getElementById("summaryId");
    let idx = Math.floor(Math.random() * myQaData.length);
    summaryElt.innerHTML = myQaData[idx];
}

function drawQuestions()
{
    for(i = 0; i < numQuestions(); ++i)
    {
        quForm = document.getElementById("questionForm");
        let elt = document.createElement("label");
        elt.id = questionId(i);
        elt.innerHTML = "</br>" + "Q" + (i+1) + ": " + quAndA(i)["Q"] + " ";
        quForm.appendChild(elt);

        let elt2 = document.createElement("input");
        elt2.className = "answer"
        elt2.id = answerId(i);
        elt2.type = "number";
        elt2.setAttribute("onchange", "markQuestions()");
        quForm.appendChild(elt2);
    }
}
