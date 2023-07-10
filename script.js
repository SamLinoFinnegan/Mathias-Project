const buttons = document.querySelectorAll('.yes-button, .no-button');
buttons.forEach(button => {
  button.addEventListener('click', function () {
    const siblingButtons = this.parentNode.querySelectorAll('.yes-button, .no-button');

    siblingButtons.forEach(siblingButton => {
      siblingButton.classList.remove('active');
    });

    this.classList.add('active');
  });
});

let report = ""

function generateReport (){

  
  const buttons = Array.from(document.querySelectorAll('.yes-button, .no-button'));
  
  buttons.forEach(btn =>{
    btn.addEventListener("click", () =>{

    if (btn.id === "yes-website" || btn.id === "no-website"){
      const doc = document.getElementById('reason').value;
      report += doc
      report += btn.id
      let div1 = document.getElementById("legalDiv");
      div1.classList.remove("invisible");
      div1.classList.add("visible");

    }else if(btn.id === "yes-legal-name" || btn.id === "no-legal-name"){

      const url = document.getElementById('url').value;
      report += url
      report += btn.id
      let div2 = document.getElementById("misleadingDiv");
      div2.classList.remove("invisible");
      div2.classList.add("visible");

    }else if(btn.id === "yes-misinformation" || btn.id === "no-misinformation"){

      const tab = document.getElementById('tab').value;
      report += tab
      report += btn.id
      let div3 = document.getElementById("signals");
      div3.classList.remove("invisible");
      div3.classList.add("visible");
    }
  })
})

}
generateReport()

document.getElementById("generate").addEventListener("click", () => {
  alert(report)
})
















// function generateReport() {
//   const doc = document.getElementById('reason').value;

//   const websiteYesButton = document.getElementById('yes-website');
//   const websiteNoButton = document.getElementById('no-website');
//   const websiteFn = websiteYesButton.checked ? 'Yes' : 'No';

//   const url = document.getElementById('url').value;

//   const legalNameYesButton = document.getElementById('yes-legal-name');
//   const legalNameNoButton = document.getElementById('no-legal-name');
//   const legalName = legalNameYesButton.checked ? 'Yes' : 'No';

//   const tab = document.getElementById('tab').value;

//   const misinformationYesButton = document.getElementById('yes-misinformation');
//   const misinformationNoButton = document.getElementById('no-misinformation');
//   const fns = misinformationYesButton.checked ? 'Yes' : 'No';

//   const weakSignals = document.getElementById('weak-signals').value;
//   const strongSignal = document.getElementById('strong-signal').value;

  
//   let report =`1. If any of the documents submitted are not accepted, state the reason: ${doc}
//   2. Is the website functional? ${websiteFn}
//     * If no, is the website identified as an off-site landing page? ${websiteFn}
//     * If yes, provide the URL: ${url}
//         * Is the business legal name present on the website? ${legalName}
//         * On which website tab was the business legal name mentioned? ${tab}
//   3. Are there any false or misleading information? ${fns}
//     * Weak Signals (provide 2 key signals): ${weakSignals}
//     * Strong Signal (provide 1 key signal): ${strongSignal}`
  

  

//   navigator.clipboard.writeText(report)
//     .then(() => {
//       window.close();
//     })
//     .catch((error) => {
//       console.error('Failed to copy text to clipboard:', error);
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const generateButton = document.getElementById('generate');
//   generateButton.addEventListener('click', generateReport);
// });
