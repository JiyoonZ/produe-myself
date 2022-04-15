let links = document.querySelectorAll('#tab-group li a'); //위에탭부분
let items = document.querySelectorAll('#tab-group li');

//a링크 클릭하면 환면전화 멈추기
for(let i=0; i<links.length; i++) {
  links[i].onclick= function(e) {
    e.preventDefault();
  }
}
// 메뉴탭 클릭하면 해당 내용이 나오는 링크가 보이도록 active
for(let i=0; i<items.length; i++) {
  items[i].onclick = function() {
    var tabId = this.querySelector("a").getAttribute("href");
    

        document.querySelectorAll("#tab-group li, .tabs div.tab").forEach(function(item) {
          item.classList.remove("active");
        
        });
        document.querySelector(tabId).classList.add("active");
        
        this.classList.add("active");
        
  }  
}