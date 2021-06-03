$().ready(()=>{
    $("#submit").click(()=>{
        toColor(color($("#data").val()));
    });
    $("#data").click(()=>{
        $("#data").val("");
    });
    
    $("#data").on("keyup",(e)=>{
        if(e.keyCode == 13){
            e.preventDefault();
            toColor(color($("#data").val()));
        }
    });
    $("#data").val("insert some text!");
    toColor(color($("#data").val()));
});

function color(text){
    let integer = 0;
    for(let i = 0; i < text.length; i++){
        integer += text.charCodeAt(i);
    }
    return integer;
}
function toColor(num) {
    num >>>= 0;
    let u = num & 0xFF,
        d = (num & 0xFF00) >>> 8,
        t = (num & 0xFF0000) >>> 16;
    let rand = Math.random();
    let r, g, b;
    if(rand < 0.17){
        r = u;
        g = d;
        b = t;
    }else if(rand < 0.34){
        r = u;
        b = d;
        g = t;
    }else if(rand < 0.51){
        g = u;
        r = d;
        b = t;
    }else if(rand < 0.68){
        g = u;
        b = d;
        r = t;
    }else if(rand < 0.85){
        b = u;
        r = d;
        g = t;
    }else{
        b = u;
        g = d;
        r = t;
    }

    console.log("rgb(" + [r, g, b].join(",") + ")")
    $("#container").css("background-color", "rgb(" + [r, g, b].join(",") + ")");
}