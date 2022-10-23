const URL = "https://api.thecatapi.com/v1/images/search"
fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector("#cat")
    img.src = data[0].url;
  });

  let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})