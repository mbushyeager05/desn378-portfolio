console.log("Testing image paths...");
console.log("Image 1:", "assets/images/image-1.jpg");
console.log("Image 2:", "assets/images/image-2.jpg");
console.log("Image 3:", "assets/images/image-3.jpg");
console.log("Image 4:", "assets/images/image-4.jpg");
console.log("Image 5:", "assets/images/image-5.jpg");

// Test loading image 2 immediately
const testImg = new Image();
testImg.src = "assets/images/image-2.jpg";
testImg.onload = () => console.log("✅ image-2.jpg EXISTS and loads!");
testImg.onerror = () => console.log("❌ image-2.jpg FAILED to load!");


// Still Confused on JavaScript. I had Claude help me with this part. I understand it a little bit better. But still need more practice.
// ============================================
// SECTION 1: Find Elements
// ============================================
const image = document.querySelector('#story-img');
const caption = document.querySelector('#story-caption');
const title = document.querySelector('#story-title');
const dots = document.querySelectorAll('.dot');


// ============================================
// SECTION 2: Story Content (Arrays)
// ============================================
const titles = [
  "The Dream",
  "The March",
  "The Speech",
  "The Legacy",
  "Today's Call"
];

const captions = [
  "Martin Luther King Jr. believed in a nation where people would be judged by the content of their character, not the color of their skin. Click to continue his story.",
  "On August 28, 1963, over 250,000 people gathered in Washington, D.C. demanding jobs, freedom, and equality. It became one of the largest peaceful protests in American history.",
  "From the steps of the Lincoln Memorial, Dr. King delivered one of the most powerful speeches in history. His words called for an end to racism and inspired generations to fight for justice.",
  "Dr. King's work led to the Civil Rights Act of 1964 and Voting Rights Act of 1965. Though he was assassinated in 1968, his vision continues to inspire movements for equality worldwide.",
  "MLK Day is a national day of service. Dr. King said, 'Life's most persistent question is: What are you doing for others?' Today, we honor his memory by serving our communities and standing up for justice."
];

const imageFiles = [
  'image-1.jpg',  
  'image-2.jpg',
  'image-3.jpg', 
  'image-4.jpg',  
  'image-5.jpg'   
];


// ============================================
// SECTION 3: State Variable
// ============================================
let currentStep = -1;


// ============================================
// SECTION 4: Event Listener (Click Handler)
// ============================================
image.addEventListener('click', function() {
  
  currentStep++;
  
  if (currentStep < captions.length) {
    
    title.textContent = titles[currentStep];
    caption.textContent = captions[currentStep];
    image.src = `assets/images/${imageFiles[currentStep]}`;
    
    updateProgressDots();
    
  } else {
    caption.textContent = "Click to restart the story.";
    title.textContent = "The End";
    image.src = `assets/images/image-1.jpg`;
    currentStep = -1;
  }
  
});


// ============================================
// SECTION 5: Update Progress Dots Function
// ============================================
function updateProgressDots() {
  dots.forEach(function(dot, index) {
    if (index <= currentStep) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}