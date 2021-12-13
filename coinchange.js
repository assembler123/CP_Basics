
const coinChange = (SUM,INPUTS) => {
    let DPTable = new Array(INPUTS.length);
for(let i = 0 ; i < DPTable.length ; i++){
    DPTable[i] = new Array(SUM+1)
}
// console.log(DPTable)
for(let i = 0 ; i < INPUTS.length; i++){
    for(let j = 0; j < SUM+1 ; j++){
        if(j == 0){
            DPTable[i][j] = 1
        }
        else{
            DPTable[i][j] = 0
        }
    }
}
// console.log(DPTable);
for(let i = 0 ; i < INPUTS.length ; i++){
    for(let j = 0 ; j < SUM+1 ; j++ ){
        if(i == 0){
            if((j%INPUTS[i]) == 0){
                DPTable[i][j] = 1;
            }
        }
        else{
            if(j<INPUTS[i]){
                DPTable[i][j] = DPTable[i-1][j];
            } 
            else{
                DPTable[i][j] = DPTable[i-1][j] + DPTable[i][(j-INPUTS[i])]
            }
        }
    }
}
    console.log(DPTable[INPUTS.length-1][SUM])
}
coinChange(10,[2,3,5,6])