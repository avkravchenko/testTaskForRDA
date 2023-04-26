
export function formSubmit(){

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    fetch('https://4bb57fc2-219e-421e-86b4-4ffda6bf1b3b.mock.pstmn.io/matches', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json(); 
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      alert('There was a problem with the AJAX request:', error);
    });
  });
}

  