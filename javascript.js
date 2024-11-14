var arr = [
  {
    username: "nikita mali",
    dp: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1618374509394-3606c0aaf289?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",

   },
    {
      username: "pooja ahirwar",
      dp: "https://images.unsplash.com/photo-1617922236117-2697cb394593?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      story:"https://images.unsplash.com/photo-1617059207480-6cb1a64223a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
 
     },
      
    {
      username: "kavita yadav",
      dp: "https://images.unsplash.com/photo-1618375689347-b91336e01381?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
      story:"https://images.unsplash.com/photo-1618375490199-34fa56744295?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8",
 
     },
    
    {
      username: "rohit sahu",
      dp: "https://images.unsplash.com/photo-1617059262591-61173640bc20?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1618375182602-8ffc31e64d27?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
 
     },
    {
      username: "radhika",
      dp: "https://images.unsplash.com/photo-1615304048636-47fa618f3744?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
     story:"https://images.unsplash.com/photo-1616002430110-ab30442021fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8",
    },
    
    {
      username: "shivam",
      dp: "https://images.unsplash.com/photo-1633405504968-363fb7c9491e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0Nnx8fGVufDB8fHx8fA%3D%3D",
     story:"https://images.unsplash.com/photo-1633405044931-d59ce835743f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",

    },
     
    ];
  
  var clutter = ""
  
  arr.forEach(function(elem,idx){
    clutter += `<div class="story">
              <img id=${idx} src=${elem.dp} alt="">
            </div>`
  })
  
  var storiyan = document.querySelector("#storiyan")
  
  
  var full = document.querySelector("#full")
  var username = document.querySelector("#full h5")
  var growth = document.querySelector("#growth")
  var userImage = document.querySelector(".userStory img")
  
  
  storiyan.innerHTML = clutter
  
  storiyan.addEventListener("click",function(dets){
  
    var grow = 0
  
    var currentStory =  arr[dets.target.id].story
  
    full.style.display = "initial"
    full.style.backgroundImage = `url(${currentStory})`
    username.innerHTML = arr[dets.target.id].username
    userImage.setAttribute("src",arr[dets.target.id].dp)
  
  
    var storyInterval = setInterval(function(){
      grow++
      growth.style.width = grow + "%"
      console.log(grow)
    },40)
  
    setTimeout(function(){
      full.style.display = "none"
      clearInterval(storyInterval)
    },3000)
    
  })

  var cont = document.querySelector(".container");
  var icon = document.querySelector("i");

  cont.addEventListener("dblclick", function(){
    icon.style.transform = "translate(-50%,-50%) scale(1)";
    icon.style.opacity = 1

    setTimeout(function(){
      icon.style.transform = "translate(-50%,-50%) scale(0)";
      
    },1000);

    setTimeout(function(){
      icon.style.transform = "translate(-50%,-50%) scale(0)"
    },2000);
  });