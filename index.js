const body = document.body
const button = document.getElementById('button')
const form = document.getElementById('cars')
const news = document.getElementById('container')
const getObj = async (url) => {
    return await fetch(url).then(res => res.json())
}
button.addEventListener("click",() => {
    const catg = "https://inshortsapi.vercel.app/news?category="+form.value
    const a=getObj(catg)
    a.then(res => {
            console.log(a)
            news.innerHTML=""
            res.data.forEach(element => {
            const div = document.createElement('div')
            div.className="news-container"
            const image = document.createElement('img')
            const h3 = document.createElement('h3')
            const span = document.createElement('span')
            const news_date = document.createElement('span')
            news_date.className="date"
            h3.innerText=element.title
            span.innerText = element.content
            news_date.innerText="~"+element.date
            image.src=element.imageUrl
            div.append(h3)
            div.append(image)
            div.append(span)
            div.append(news_date)
            news.append(div)
            div.addEventListener("click",() =>{
                (element.readMoreUrl ? window.open(element.readMoreUrl ,'_blank') : alert("No Link"));
            })
        })
    })

})