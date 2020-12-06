myQaData = [
    'began','wow','alien','know','whoosh','no','knot','not','knight','night',
    'were', 'where', 'what', 'when', 'how', 'who', 'one', 'won',
    'there', 'their', 'they\'re', 'they', 'Julbord', 'celebrate',
    'really'
    ];

copyQaData = [];

function update()
// pick at random without replacement
{
    let summaryElt = document.getElementById("summaryId");    
        
    if(copyQaData.length == 0)
        for(i = 0; i < myQaData.length; ++i)
            copyQaData.push(myQaData[i]);
    
    let temp = Math.floor(Math.random() * copyQaData.length * 20);
    let idx = temp % copyQaData.length;

    summaryElt.innerHTML = copyQaData[idx];

    if (idx > -1) {
        copyQaData.splice(idx, 1);
      }
}


// myQaData = [
//     'the','of','and','a','to','in','is','you','that','it','he','was',
//     'for','on','are','as','with','his','they','I','at','be','this',
//     'have','from','or','one','had','by','word','but','not','what','all',
//     'were','we','when','your','can','said','there','use','an','each','which',
//     'she','do','how','their','if','will','up','other','about','out','many','then',
//     'them','these','so','some','her','would','make','like','him','into','time',
//     'has','look','two','more','write','go','see','number','no','way','could',
//     'people','my','than','first','water','been','call','who','oil','its','now',
//     'find','long','down','day','did','get','come','made','may','part'
//     ];

// myQaData = [
//     'dragon',
//     'danger',
//     'wheat',
//     'dreaming',
//     'roared',
//     'saw',
//     'was',
//     'flew',
//     'flames',
//     'fire',
//     'Whoosh',
//     'high',
//     'brave',
//     'bread',
//     'flour',
//     'she',
//     'did',
//     'shin and shine',
//     'myself',
//     'mad and made',
//     'asked',
//     'eat',
//     'meat',
//     'neat',
//     'when',
//     'what',
//     'where',
//     'who',
//     'one',
//     'bit and bite',
//     'water',
//     'they',
//     'there',
//     'then'
// ]
