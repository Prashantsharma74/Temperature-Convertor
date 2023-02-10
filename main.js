

const changeDeg = () =>{
    const fv=document.getElementById('fd').value ;

    // T(°C) = (T(°F) - 32) × 5/9;
    
    let newcv = ((fv)-32)*5/9;


    document.getElementById('cd').value=newcv;
    
}


const changeTemp = () =>{
    const cv=document.getElementById('cc').value;

    // °F = (°C × 9/5) + 32;

    let newfv= ((cv)*9/5)+32;


    document.getElementById('fc').value=newfv;
}