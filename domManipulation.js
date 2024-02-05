// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML = "Lucas"
myHobby.innerHTML = "Music"
myLocation.innerHTML = "New York"

});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("click", function() {
image.src = "https://media.istockphoto.com/id/1404033274/vector/simple-rising-polygonal-arrow.jpg?s=612x612&w=0&k=20&c=JzJIJ7dFCj4PCebVmMvJAms3NVk88xa2OetqTjtTFiQ="  
});




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("click", function() {
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-LummuAARZZftM_e_62lPQdMlEUY6K6JxlD1fVJd5Q&s"  
});;

// BONUS
// 7. Try using different event types for your buttons.
