const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
const subTitle = document.querySelector(".content .header .sub-title")
const items = document.querySelectorAll(".deadline div h4")
const deadline = document.querySelector(".deadline")

//this code automatic add future date:
// let tempDate = new Date()
// let tempYear = tempDate.getFullYear()
// let tempMonth = tempDate.getMonth()
// let tempDay = tempDate.getDate()
// const futureDate= new Date(tempYear, tempMonth,tempDay+10,11,30)

const futureDate= new Date(2024, 10,21,11,30)

const year = futureDate.getFullYear()
const hour = futureDate.getHours()
const minutes = futureDate.getMinutes()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const weekDay = weekDays[futureDate.getDay()]

subTitle.textContent = `Giveaway Ends on ${weekDay}, ${date} ${month} ${year}, ${hour} : ${minutes}am`


const futureTime = futureDate.getTime()

const getRemainingTime = () =>{
    const today = new Date().getTime()
    const t = futureTime - today

    // values in milliseconds
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    //calculate all values
    let days = t / oneDay
    days = Math.floor(days)
    console.log(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute / 1000))

    const values = [days, hours, minutes, seconds]

    const format = (item)=>{
        return (item < 10) ? `0${item}` : item
    }
    items.forEach((item,index)=>{
        item.innerHTML = format(values[index])
    })
    //if time has count to 0
    if(t<0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
    }
}

//countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()