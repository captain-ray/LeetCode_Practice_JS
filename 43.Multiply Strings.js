/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let m,n;
    m=num1.length;
    n=num2.length;

    //initialize with 0
    let pos=new Array(m+n).fill(0);

    let i,j;
    for(i=m-1;i>=0;i--){
        for(j=n-1;j>=0;j--){
            let product=(num1[i]-'0')*(num2[j]-'0');
            let p1=i+j,p2=i+j+1;
            let sum=product+pos[p2];

            pos[p1]=pos[p1]+Math.floor(sum/10);
            pos[p2]=sum%10;
        }
    }


    i=0;
    while(pos[i]===0)i++;
    pos=pos.slice(i);

    return pos.length===0?'0':pos.join('');
};

//test
console.log(multiply('123','456'));