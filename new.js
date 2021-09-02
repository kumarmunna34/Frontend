var s="abcdba";
validatePal(s);

function validatePal(str){
    var flag = 1;
    var len = s.length;
    for(let i=0; i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            console.log("it is not a palindrome");
            flag = 0;
        }
    }
    if(flag==1){
        console.log("it is a palindrome");
    }

}