const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        //если элемент появляется и класс соотвествует соотевтсвующему анимированному классу
        if(entry.isIntersecting && ("work".includes(entry.target.className) || "skills-items".includes(entry.target.className))){
            entry.target.classList.add("portfolio-anim")
        }
        if(entry.isIntersecting && "contact".includes(entry.target.className)){
            entry.target.classList.add("contact-anim")
        }
    })
})

const works = document.querySelectorAll('.work')
const contacts = document.querySelectorAll('.contact')


//создаем наблюдателей и сообщаем какие элементы нужно отслеживать
for (let work of works){
    observer.observe(work)
}
for (let contact of contacts){
    observer.observe(contact)
}
observer.observe(document.querySelector('.work'))
observer.observe(document.querySelector('.skills-items'))
