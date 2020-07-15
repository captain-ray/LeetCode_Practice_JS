/**
 * @param {number[][]} positions
 * @return {number}
 */
var getMinDistSum = function(positions) {
    euclideanSum=(x,y)=>{
      return positions.reduce((acc,[x1,y1],index)=>{
        acc=acc+Math.sqrt((x1-x)**2+(y1-y)**2)
        return acc;
      },0)
    }
  
    let left=0;
    let right=100;
    let bottom=0;
    let top=100;
    let min=Infinity;
    let minX=0;
    let mint=0;
    let sum=0;
  
    for(let delta=10;delta>=10**-4;delta/=10){
      for(let x=left;x<=right;x+=delta){
        for(let y=bottom;y<=top;y+=delta){
          sum=euclideanSum(x,y);
          if(sum<min){
            min=sum;
            minX=x;
            minY=y;
          }
        }
      }
  
      left=minX-delta;
      right=minX+delta;
      bottom=minY-delta;
      top=minY+delta
    }
  
    return min;
  };
  
  getMinDistSum([[0,1],[1,0],[1,2],[2,1]]);
  getMinDistSum([[1,1],[3,3]]);
  getMinDistSum([[1,1]]);
  getMinDistSum([[1,1],[0,0],[2,0]]);
  getMinDistSum([[0,1],[3,2],[4,5],[7,6],[8,9],[11,1],[2,12]]);