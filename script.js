function beer(){
    var count = 99;
    while(count>=0){
        if(count==0 || count==1 ){
            num = "no more"            
        }
        else{
            num = count-1;
        }
         if(count==0){
             console.log(num+ " bottles of beer on the wall, "+num+" bottles of beer. Go to the store and buy some more, " +99+" bottles of beer on the wall.")
         }
        else{
            console.log(count+ " bottles of beer on the wall, "+count+" bottles of beer. Take one down and pass it around, " +num+" bottles of beer on the wall.")
        }
        
        count--;
    }
}
