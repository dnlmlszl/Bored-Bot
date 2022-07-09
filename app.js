const actionBtn = document.querySelector('#btn')

actionBtn.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('placeholder').textContent = data.activity
        document.getElementById('title').textContent = "🐼 👹LMD BotCamp ☔ 👽"

})
})