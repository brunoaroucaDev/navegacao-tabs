import newsJson from "../../newsJson.js";

const dataJson = newsJson;
console.log(dataJson)
const navTabs = document.querySelectorAll('.nav-tab li a');


newsRender(0)

navTabs.forEach((nav, index) => {

    nav.addEventListener('click', (event) => {
        event.preventDefault();

        navTabs.forEach(navItem => {
            navItem.classList.remove('active')
            document.querySelector('.tab-content').innerHTML = ''
        })
        
        newsRender(index)
        nav.classList.add('active')

    })

    
})

function newsRender(navTabIndex){
    let navTab = '';
    switch(navTabIndex){
        case 0:
        navTab = 'jornalismo';
        break;
        case 1:
        navTab = 'esporte';
        break;
        case 2:
        navTab = 'entretenimento';
        break;
        case 3:
        navTab = 'tecnologia';
        break;
    }

     
    dataJson.forEach((news) => {
        
        if ( navTab === news.category){
            
          let html = `
          <div class="tab-pane active">
                <img src="./assets/media/${news.image}" alt="">
                <p>${news.title.substring(0, 64)}...</p>
                <span class="notice-date">${news.date} ${news.hour}</span>
                <div class="btn">
                    <a href="">Leia mais</a>
                    <span></span>
                </div>
            </div>
          `  
        document.querySelector('.tab-content').innerHTML += html
        
        }
    })
}
const setaBtn = document.querySelectorAll('.tab-content .tab-pane .btn span');
const linkBtn = document.querySelectorAll('.tab-content .tab-pane .btn a');

linkBtn.forEach((link, linkIndex) => {
    link.addEventListener('mouseover', () => {
       
        setaBtn.forEach((seta, setaIndex) => {
            
            if (setaIndex === linkIndex){
               seta.style.marginLeft = '40px'
            }
        })
    })
    link.addEventListener('mouseout', () => {
       
        setaBtn.forEach((seta, setaIndex) => {
            
            if (setaIndex === linkIndex){
                seta.style.marginLeft = '20px'
            }
        })
    })
})

