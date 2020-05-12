window.onload = function(){
    var url = window.location.href;
    var tem = url.includes("/en/");

    // var elem_en = jQuery(".st-list").children()[4];
    // var elem_pt = jQuery(".st-list").children()[5];

    if(tem){
        jQuery(".st-list").children()[3].remove()
        this.console.log("Tinha!");
    }
    else{
        jQuery(".st-list").children()[4].remove()
        this.console.log("Não tinha!");
    }
}