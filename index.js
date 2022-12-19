let search;

document.getElementById('search').addEventListener('input', (e) => {
    search = e.target.value;
    console.log(search)
})

const get = async (value) => {
    let response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '395621c912msha9ab35c048ca2b4p18e92djsn7f0f36fb6d87',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    })
    return response.json()
    
}

const valuePlacer = async (data)=>{
    console.log(data)
    console.log(document.getElementById('item1').firstElementChild.nextElementSibling.firstElementChild.innerText)
    
    let el1 = document.getElementById('item1').firstElementChild.nextElementSibling.firstElementChild
    el1.innerText = `${data.temp}℃`;
    el1.nextElementSibling.firstElementChild.innerText = `Temperature is: ${data.temp}`
    el1.nextElementSibling.firstElementChild.nextElementSibling.innerText = `Min Temperature is: ${data.min_temp}`
    el1.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText = `Max Temperature is: ${data.max_temp}`
    
    let el2 = document.getElementById('item2').firstElementChild.nextElementSibling.firstElementChild
    el2.innerText = `${data.humidity}%`
    el2.nextElementSibling.firstElementChild.innerText = `Wind Degree is: ${data.wind_degrees}`
    el2.nextElementSibling.firstElementChild.nextElementSibling.innerText = `Feels like: ${data.feels_like}`
    el2.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText = `Humidity is: ${data.humidity}`
    
    let el3 = document.getElementById('item3').firstElementChild.nextElementSibling.firstElementChild
    el3.innerText = `${data.wind_speed} km/hr`
    el3.nextElementSibling.firstElementChild.innerText = `Wind speed is: ${data.wind_speed}`
    el3.nextElementSibling.firstElementChild.nextElementSibling.innerText = `Sunrise time: ${data.sunrise}`
    el3.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText = `Sunset time: ${data.sunset}`
}

window.addEventListener('load',async ()=>{
    let val = await get('kolkata')
    valuePlacer(val)
})

document.getElementById('btn').addEventListener('click', async (e) => {
    e.preventDefault();
    let data = await get(search)
    valuePlacer(data)
    document.getElementById('header').innerText = `Weather for ${search}`
}) 

