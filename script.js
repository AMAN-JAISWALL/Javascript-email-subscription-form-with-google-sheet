// link = https://script.google.com/macros/s/AKfycbzwmgQxJZ55QQ-d6mHBZGMfkR1d4agOn3qWPrRtfucPUp2AA85NZ7VXBRCmEdId1bwE/exec

// itsMySheetLink = https://docs.google.com/spreadsheets/d/1HjM9BExZi6qmi-377rj6D7YRYtkgqH0zoEkn9Vnd3_8/edit#gid=0


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzwmgQxJZ55QQ-d6mHBZGMfkR1d4agOn3qWPrRtfucPUp2AA85NZ7VXBRCmEdId1bwE/exec';
  const form = document.forms['submit-to-google-sheet']

  let msg = document.getElementById("msg");
//   let emailID = document.getElementById('emailID');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        console.log(response);
        if(response.status==200){
            msg.innerHTML = "Thankyou for Subscribing!";
        }
        setTimeout(()=>{
         msg.innerHTML= "";
        },3000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
