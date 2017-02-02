class TicTacToe {
    constructor() {
    	var x,y;
    	this.turn="x";
    	this.res;
    	//this.board=[];
    	this.zero=0;
    	this.one=y;
    	this.two=2*y;
    	this.three=x;
    	this.four=x+y;
    	this.five=x+2*y;
    	this.six=2*x;
    	this.sev=2*x+y;
    	this.eight=2*x+2*y;
    	this.col;
    	this.row;
    	this.change=0;
    		this.arr = [
 							["null", "null", "null"],
                     ["null", "null", "null"],
	                  [ "null", "null", "null"],
];


  }

    getCurrentPlayerSymbol() {
	return this.turn;
    }
   


    nextTurn(rowIndex, columnIndex) {


   		if (this.arr[rowIndex][columnIndex]=="null"){
   				 		this.arr[rowIndex][columnIndex]=this.turn;
   				 		this.turn=this.turn==="x"? "o":"x";
   				 
     }
}


    isFinished() {
    if(this.getWinner() != null || this.isDraw() == true)return true;
    else return false;
    }
    

    getWinner() {

   for ( var x=0 ; x<=this.arr.length-3 ; x++) for (var y=0 ; y<=this.arr[0].length-3 ; y++) // Если размер поля больше трёх. 
  {
  var res=this.arr[x][y]; // проверка линии 
  if (res!="null") for (var i=0 ; i<3 ; i++ ) if ( this.arr[i+x][i+y] != res ) res="null"; // если проверяемая клетка не содержит res, то сбросить значение res 
  if (res!="null") return res; // если победа обнаружена. 
  res=this.arr[2+x][y];
  if (res!="null") for ( i=0 ; i<3 ; i++ ) if ( this.arr[2-i+x][i+y] != res ) res="null";
  if (res!="null") return res;

  for ( i=0 ; i<3 ; i++ ) { // проверка по вертикали 
   res=this.arr[x+i][y];
   if (res!="null") for (var j=0 ; j<3 ; j++ ) if ( this.arr[i+x][j+y] != res ) res="null";
   if (res!="null") return res;
  }
  for ( j=0 ; j<3 ; j++ ) { // проверка по горизонтали 
   res=this.arr[x][y+j];
   if (res!="null") for ( i=0 ; i<3 ; i++ ) if ( this.arr[i+x][j+y] != res ) res="null";
   if (res!="null") return res;
  }
	this.result=res;
  }

  return null;


    }

    noMoreTurns() {
    	//var indxs = [];
    	var a=0;
         for(let j = 0; j < this.arr.length; j++) {
  			for(let n = 0; n < this.arr.length; n++) {
            	if(this.arr[j][n] == "null") return false;}}
  		 return true
         
            
    }

    isDraw() {
    	if (this.getWinner()!=null || this.noMoreTurns()==false){return false;}
    		else{return true;} 
}

    getFieldValue(rowIndex, colIndex) {

   

   		if (this.arr[rowIndex][colIndex]=="null")return null;
   		else return this.arr[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;
