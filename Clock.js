T = () =>{
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    h_rot = 30*hour + min/2;
    m_rot = 6*min;
    s_rot = 6*sec;
    h_hand.style.transform = `rotate(${h_rot}deg)` 
    m_hand.style.transform = `rotate(${m_rot}deg)` 
    s_hand.style.transform = `rotate(${s_rot}deg)` 
}

setInterval(T, 1000);

