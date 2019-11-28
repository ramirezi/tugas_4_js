var x=100;
var y=170;
var z=140;
function cektinggi(x,y,z){
  if(x>y){
    if(x>z){
      var kesatu=x;
      if(y>z){
        var kedua=y;
        var ketiga=z;
      }else{
        var kedua=z;
        var ketiga=y;
      }
    }else{
      var kedua=x;
      var ketiga=y;
      var kesatu=z;
    }
  }else if (x<y){
    if(x<z){
      var ketiga=x;
      if(z<y){
        var kedua = z;
        var kesatu = y;
      }else{
        var kedua = y;
        var kesatu = z;
      }
    }else{
      var kedua=x;
      if(z>y){
        var ketiga = y;
        var kesatu = z;
      }else{
        var ketiga = z;
        var kesatu = y;
      }
    }
  }
  console.log("Tinggi ke-1",kesatu,",Tinggi ke-2",kedua,",Tinggi ke-3",ketiga);
}
cektinggi(x,y,z)
