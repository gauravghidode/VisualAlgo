export function getbubbleSortAnimation(arr){
    const animations = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            animations.push([j, j+1, 'secondary']);
            if(arr[j]>arr[j+1]){
                animations.push([j, j+1, 'swap']);
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            animations.push([j, j+1, 'primary']);
        }
        animations.push([arr.length -1 -i, i, 'end']);
    }
    return animations;
}