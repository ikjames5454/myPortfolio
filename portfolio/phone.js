function networkProvider(){
    let inputtedNumber = document.getElementById('phoneNumber');
    let imageSpace = document.getElementById('images');
    let phoneNumber = inputtedNumber.value;
    if(phoneNumber !== ""){
  
      let mtnCorrectNumber = (phoneNumber.startsWith("0803") || phoneNumber.startsWith("0806")
      || phoneNumber.startsWith("0813")|| phoneNumber.startsWith("0810")
      || phoneNumber.startsWith("0816")|| phoneNumber.startsWith("0814")
      || phoneNumber.startsWith("0903")|| phoneNumber.startsWith("0906")
      || phoneNumber.startsWith("0703")|| phoneNumber.startsWith("0704")
      || phoneNumber.startsWith("0706")|| phoneNumber.startsWith("07025")
      || phoneNumber.startsWith("07026"));
  
      let airtelCorrectNumber = (phoneNumber.startsWith("0802") 
      || phoneNumber.startsWith("0808")
      || phoneNumber.startsWith("0812")
      || phoneNumber.startsWith("0708")
      || phoneNumber.startsWith("0701")
      || phoneNumber.startsWith("0902")
      || phoneNumber.startsWith("0901")
      || phoneNumber.startsWith("0907"));
  
      let gloCorrectNumber = (phoneNumber.startsWith("0805") 
      || phoneNumber.startsWith("0807")
      || phoneNumber.startsWith("0811")
      || phoneNumber.startsWith("0815")
      || phoneNumber.startsWith("0705")
      || phoneNumber.startsWith("0915")
      || phoneNumber.startsWith("0805"));
  
      let etisalatCorrectNumber = (phoneNumber.startsWith("0809") 
      || phoneNumber.startsWith("0817")
      || phoneNumber.startsWith("0818")
      || phoneNumber.startsWith("0908")
      || phoneNumber.startsWith("0909"));
  
      if((mtnCorrectNumber && phoneNumber.length === 4) || (mtnCorrectNumber && phoneNumber.length === 11)){
        imageSpace.src = './image/mtn.png'
      }
  
      
      if((airtelCorrectNumber && phoneNumber.length === 4) || (airtelCorrectNumber && phoneNumber.length === 11)){
        imageSpace.src = "./image/airtel-nigeria.png"}
  
      if((gloCorrectNumber && phoneNumber.length === 4) || (gloCorrectNumber && phoneNumber.length === 11)){
        imageSpace.src = "./image/globacom-limited.png"
      }
  
      if((etisalatCorrectNumber && phoneNumber.length === 4) || (etisalatCorrectNumber && phoneNumber.length === 11)){
        imageSpace.src = "./image/9mobile.png"}
  
      if( phoneNumber.length < 4 ||(phoneNumber.length > 4 && phoneNumber.length < 11) || phoneNumber.length > 11 ){
        imageSpace.src = "./image/Logo(3).png";
      }
  
  
  
  
    }
  }