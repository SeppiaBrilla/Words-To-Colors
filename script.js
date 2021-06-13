$().ready(()=>{
    $("#submit").click(()=>{
        convert($("#data").val());
    });
    $("#data").click(()=>{
        $("#data").val("");
    });
    
    $("#data").on("keyup",(e)=>{
        if(e.keyCode == 13){
            e.preventDefault();
            convert($("#data").val());
        }
    });
    $("#data").val("insert some text!");
    convert($("#data").val());
});

function convert(world){
    let number_of_char = Math.floor(world.length/3);
    let r = text_toInt(n_char(world,0,number_of_char)) % 255;
    let g = text_toInt(n_char(world,number_of_char,number_of_char * 2)) % 255;
    let b = text_toInt(n_char(world,number_of_char * 2,world.length)) % 255;
    $("#container").css("background-color", "rgb(" + [r, g, b].join(",") + ")");

}
function n_char(string, start, end){
    let ret = "";
    for(let i = start; i < end; i++){
        ret +=string[i];
    }
    return ret;
}
function text_toInt(text){
    let integer = 0;
    for(let i = 0; i < text.length; i++){
        integer += text.charCodeAt(i);
    }
    return integer;
}
