/*This is a sample code to import HTML files. */

function  supportsImports(){
    return 'import' in document.createElement('link');
}


if(supportsImports()){
    let sectionCotainer = document.querySelector("#main-section .secction-wrap");

    let link = document.createElement('link');
    link.rel='import';
    link.href="./List.html";
    link.onload=function(e){
        
        let loadHtmlFile=this.import.querySelector('html');
        let sectionContainer=document.querySelector("#main-section .section-wrap");
        sectionContainer.appendChild(loadHtmlFile.cloneNode(true));
    }
}else{
    alert("Link Import를 지원하지 않습니다.")
}
