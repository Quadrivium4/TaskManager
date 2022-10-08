class VirtualDOM{
    constructor(){
        this.body = "";
    }
    render(html, root){
        this.body += html;
        document.getElementById(root).innerHTML = this.body;
    }
}

export default VirtualDOM
