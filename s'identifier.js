    function Verifier(){
	var N = document.getElementById('userName').value;
	var M = document.getElementById('mail').value;
    var P = document.getElementById('pass').value;
   
  /*  if(N != '' && M != ''&& P!='') {
        if (N=="maissa") {
           if (M=="maissa.kouraichi@enis.tn") {
               if (P=="1234") {
                  alert('soumettre');
                  return true;}
               else{ alert('mot de pass incorrect');
                return false;}}
             else { alert('mail incorrect');
               return false;}}
         else{ alert('vous n\'êtes pas inscrit');
           return false;}
    }*/

    var name = new Array("maissa","amel","hadir");
    var Mail = new Array("maissa.kouraichi@enis.tn","amel.kouraichi@enis.tn","hadir.kouraichi@enis.tn");
    var MPass = new Array("16795", "28495", "26795");
    if(N != '' && M != ''&& P!='') {   
         var i=0;
         switch (N) {
            case name[0]:
                if(M== Mail[0]){
                    if(P== MPass[0]){
                        alert('soumettre');
                        return true;
                    }
                    else{ alert('mot de pass incorrect');
                    return false;}
                }
                else { alert('mail incorrect');
                return false;}
            break;
            case name[1]:
                if(M== Mail[1]){
                    if(P== MPass[1]){
                        alert('soumettre');
                        return true;
                    }
                    else{ alert('mot de pass incorrect');
                    return false;}
                }
                else { alert('mail incorrect');
                return false;}
            break;
            case name[2]:
                if(M== Mail[2]){
                    if(P== MPass[2]){
                        alert('soumettre');
                        return true;
                    }
                    else{ alert('mot de pass incorrect');
                    return false;}
                }
                else { alert('mail incorrect');
                return false;}
            break;
            default:
                alert('vous n\'êtes pas inscrit');
                return false; 
            
        }}}
              
           /*{
            if(N == name[i]){
                if(M== Mail[i]){
                    if(P== MPass[i]){
                        alert('soumettre');
                        return true;
                    }
                    else{ alert('mot de pass incorrect');
                    return false;}
                }
                else { alert('mail incorrect');
                return false;}
            }
            else{
            
                
            
        }     
    }

        }
*/
/* $name = array("maissa","amel","hadir");
    $Mail = array("maissa.kouraichi@enis.tn", "amel.kouraichi@enis.tn", "hadir.kouraichi@enis.tn");
    $MPass = array("16795", "28495", "26795");
    if(N != '' && M != ''&& P!='') {   
         
        for($i=0; $i<3; $i++){
            if(N == $name[$i]){
                if(M== $Mail[$i]){
                    if(P== $MPass[$i]){
                        alert('soumettre');
                        return true;
                    }
                    else{ alert('mot de pass incorrect');
                    return false;}
                }
                else { alert('mail incorrect');
                return false;}
            }
            else{
            
                alert('vous n\'êtes pas inscrit');
            return false; }  
            
        }     
    }*/


      /*window.onload = function() {
    var btn = document.getElementById("sub");
    btn.addEventListener("click", Verifier,true);

       if(} b_userName==true && b_mail==true && b_pass==true)
        {
         var a=document.getElementById("message");
		 a.innerHTML ="envoi au serveur";}
             //document.getElementById("message").submit(); } 
       else {
         var a = document.getElementsById("message");
         a.innerHTML ="erreur"; }            
              //  Verifier();
  window.onload = function() {
      initApp();


      $(document).ready(function()	{
                $("submit").click(function(){
                    $
                }
            }
    };*/