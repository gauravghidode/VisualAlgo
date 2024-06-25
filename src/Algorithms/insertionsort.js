export function getInsertionSortAnimation(arr){
    const animations = [];
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        animations.push([i, j, 'secondary']);
        if(j>=0 && arr[j]>key){
            animations.push([-i, -i, 'secondary']);
            animations.push([i, j, "out"]);
            
            while (j >= 0 && arr[j] > key) {
                animations.push([j, j+1, 'secondary']);
                animations.push([j, j+1, 'move']);
                animations.push([j, j+1, 'primary']);
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            if(j>=0){
                animations.push([j, j, 'ternary']);
            }
            animations.push([i, j+1, 'in']);
        }
        
        animations.push([i, j, 'primary']);
        arr[j + 1] = key;
    }
    console.log(arr);
    return animations;
    
}