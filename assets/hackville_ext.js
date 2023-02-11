// ==UserScript==
// @name         hackville_ext
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  provides NLP definitions of programming terms
// @author       Ran Ren
// @match        *://*/*
// @connect      hackville-2023.vercel.app
// @icon         https://www.google.com/s2/favicons?sz=64&domain=techradar.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

    const terms = ["async", "await", "break", "case", "catch", "promise", "const", "continue", "debugger", "default"];
    const definitions = ["async explanation here...", "await explanation here...", "break explanation here...", "case explanation here...", "catch explanation here...",
                         "promise explanation here...", "const explanation here...", "continue explanation here...", "debugger explanation here...", "default explanation here..."];
    const map1 = new Map();
    for (let i = 0; i < terms.length; i++) {
        map1.set(terms[i], definitions[i]);
    }

(function() {

    // Your code here...
    let n, a=[], walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()) a.push(n);
    console.log(a);
    let nodelist = a.filter(node => search(node, terms) == true && node.nodeType == 3);
    for (let node of nodelist) {
        let text = node.textContent
        for (let termDef of map1) {
            let term = termDef[0];
            let def = termDef[1];
            let regex = new RegExp('\b' + term + '\b', "gi");
            text = text.replace(term, `${term}+UNIQUESTRING`);
        }
        node.textContent = text;
    }
    let nodelist2 = nodelist.map(node => node.parentElement);
    console.log(nodelist);
    for (let node of nodelist2) {
        let text = node.innerHTML;
        for (let termDef of map1) {
            let term = termDef[0];
            let def = termDef[1];
            let regex = new RegExp('\b' + term + '\b', "gi");
            text = text.replace(term+"+UNIQUESTRING", `<span class="onhover" data-toggle="open" data-term="${term}" style="background-color: rgb(200,200,200); position:relative">${term}</span>`);
        }
        node.innerHTML = text;
    }
    let marklist = document.querySelectorAll(".onhover");
    for (let mark of marklist) {
        mark.addEventListener("click", (e) => { if (e.target.dataset.toggle == "open") {
            e.target.dataset.toggle == "close"
            attachInfo(e.target);
                                                  }});
        mark.addEventListener("mouseenter", (e) => { e.target.style.backgroundColor = "#fde047"; });
        mark.addEventListener("mouseleave", (e) => { e.target.style.backgroundColor = "rgb(200,200,200)"; });
    }
})();

function search (node, terms) {
    let found = false;
    for (let term of terms) {
        if (node.textContent.search(term) != -1) {
            return true;
        }
    }
}

function attachInfo (node) {
    let attachDiv = document.createElement("div");
    let text = document.createElement("div");
    //text.style.color = "white";
    text.style.fontSize = "1em";
    text.style.fontFamily = "Courier, Monospaced";
    text.style.maxHeight = "200px";
    text.style.width = "266px";
    text.style.overflowY = "scroll";
    attachDiv.style.padding = "20px";
    attachDiv.style.borderRadius = "20px";
    attachDiv.style.position = "absolute";
    attachDiv.style.top = "calc(100% + 10px)";
    attachDiv.style.left = "-113px";
    attachDiv.style.backgroundColor = "rgb(220,220,220)";
    attachDiv.style.border = "1px dashed black";
    attachDiv.style.zIndex = "9001";

    let term = node.dataset.term;
    console.log("THE TERM IS: " + term);
    /*var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(JSON.parse(xhttp.responseText));
       text.textContent = JSON.parse(xhttp.responseText)["message"]["body"]["generations"][0]["text"];
    }
    };
    xhttp.open("GET", `https://hackville-2023.vercel.app/api/prompts?prompt="explain the use of the follow term in JavaScript: ${term}"`, true);
    xhttp.send();*/
    GM_xmlhttpRequest({
        method: "GET",
        url: `https://hackville-2023.vercel.app/api/prompts?prompt="explain the use of the follow term in JavaScript: ${term}"`,
        headers: {
            "Content-Type": "application/json"
        },
        onload: function(response) {
            console.log(response.responseText);
            text.textContent = JSON.parse(response.responseText)["message"]["body"]["generations"][0]["text"];
        }
    });
    text.textContent = "loading...";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "close";
    deleteButton.style.border = "1px dashed black";
    deleteButton.style.marginTop = "20px";
    deleteButton.addEventListener("click", (e) => { node.style.backgroundColor = "rgb(200,200,200)"; attachDiv.remove() });
    attachDiv.append(text, deleteButton);
    node.appendChild(attachDiv);
}