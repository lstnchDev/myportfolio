
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        //если элемент появляется и класс соотвествует соотевтсвующему анимированному классу
        if(entry.isIntersecting && ("work".includes(entry.target.className) || "skills-left".includes(entry.target.className))){
            entry.target.classList.add("portfolio-anim")
        }
        if(entry.isIntersecting && "contact".includes(entry.target.className)){
            entry.target.classList.add("contact-anim")
        }
        if(entry.isIntersecting && 'skill-right'.includes(entry.target.className)){
            entry.target.classList.add("skill-right-anim")
        }
        if(entry.isIntersecting && 'skill-left'.includes(entry.target.className)){
            entry.target.classList.add("skill-left-anim")
        }
    })
})

const works = document.querySelectorAll('.work')
const contacts = document.querySelectorAll('.contact')
const skillRight = document.querySelectorAll('.skill-right')
const skillLeft = document.querySelectorAll('.skill-left')


//создаем наблюдателей и сообщаем какие элементы нужно отслеживать
for (let work of works){
    observer.observe(work)
}
for (let contact of contacts){
    observer.observe(contact)
}
for (let skill of skillLeft){
    observer.observe(skill)
}
for (let skill of skillRight){
    observer.observe(skill)
}
observer.observe(document.querySelector('.work'))
observer.observe(document.querySelector('.skills-items'))
