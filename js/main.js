
var projects = document.getElementById('projects');
var skills = document.getElementById('skills');
var contact = document.getElementById('contact');

projects.addEventListener('click', function(){dest('projects')}, false);
skills.addEventListener('click', function(){dest('skills')}, false);
contact.addEventListener('click', function(){dest('contact')}, false);

function scrollTo(to, duration) {
    if (document.body.scrollTop === to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = document.body.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop !== to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
              clearInterval(scrollInterval);
              return;
            } else {
              document.body.scrollTop = currPos;
              }
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function dest(elID) {
  var element = document.getElementById(elID);
  scrollTo(element.offsetTop, 500);
}

