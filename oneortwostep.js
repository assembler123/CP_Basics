const permuteInputs = (sum) => {
    const calculateFor = (sum,step)=>{
        // console.log(sum,step);
        if(sum - step < 0){return 0;}
        if(sum - step == 0){
            // console.log(step);
            return 1;
        }
        else{
            return( calculateFor(sum - step,1) + calculateFor(sum - step,2));
        }
    }
    console.log(calculateFor(sum,0))
}
permuteInputs(6)