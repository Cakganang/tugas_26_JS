var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

data.forEach(function (item, index){
    hasil=isFinite(item) 
    if (hasil)
    {
        hasil='NOT Infinity';
    }else{
        hasil='Infinity';
    }
    console.log('Angka ',item, hasil);
});