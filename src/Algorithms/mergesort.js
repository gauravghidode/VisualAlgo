

function merge(start, mid, end, arr, tempArr, animations){

    let i=start, j=mid, k=start;
    animations.push([start, end, "create"]);
    while(i<mid && j<end){
        animations.push([i, j, k, "secondary"]);
        animations.push([i, j, k, "primary"]);

        if(tempArr[i]<=tempArr[j]){
            animations.push([k, tempArr[i], k, "height"]);
            arr[k++]=tempArr[i++];
        }
        else{
            animations.push([k, tempArr[j], k, "height"]);
            arr[k++]=tempArr[j++];
        }
    }

    while(i<mid){
        animations.push([i, i, k, "secondary"]);
        animations.push([i, i, k, "primary"]);
        animations.push([k, tempArr[i], k, "height"]);
        arr[k++]=tempArr[i++];
    }
    while(j<end){
        animations.push([j, j, k, "secondary"]);
        animations.push([j, j, k, "primary"]);
        animations.push([k, tempArr[j], k, "height"]);
        arr[k++]=tempArr[j++];
    }
    animations.push([start, end, k, "destroy"]);
}


function mergeSort(start, end, arr, tempArr, animations){
    if(start===end-1)
        return;

    let mid = Math.floor((start+end)/2);
    
    mergeSort(start, mid, tempArr, arr, animations);
    mergeSort(mid, end, tempArr, arr, animations);
    merge(start, mid, end, arr, tempArr, animations);
}


export function getMergeSortAnimations(arr){
    if(arr.length<=1)
        return [];
    const animations = [];
    var tempArr = arr.slice();

    let start =0, end = arr.length;
    mergeSort(start, end, arr, tempArr, animations);
    console.log(arr);
    return animations;
}