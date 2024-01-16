
        const imagePaths = [
            'images/10. ሳላ Oryx gazella beisa.jpg',  // Replace with your image paths
            'images/11. ጨሌ ባለጋሜ Hippogratus equinus.jpg',
            'images/12. ቶራ ፈረስ Connochaetes taurinus.jpg',
            'images/13. ዋልያ Capra walie.jpg',
            'images/15. ጉጉፍቱ Litocranius walleri.jpg',
            'images/16. ሚዳቋ Sylvicapra grimmia.jpg',
            'images/17. ኢንሹ Madoqua guentheri.jpg',
            'images/18. ሰስ Oreotragus oreotragus.jpg',
            'images/19. ፌቆ Ourebia ourebi.jpg',
            'images/2. የደጋ አጋዘን Tragelaphus buxtoni.jpg',
            'images/20. ጉማሬ Hippopotamus amphibius.jpg',
            'images/21. ጎሽ Syncerus caffer.jpg',
            'images/22. ቀጭኔ Giraffa camelopardalis.jpg',
            'images/23. የሜዳ አህያ Equus grevyi.jpg',
            'images/35. ቀመር ጅብ Proteles cristatus.jpg',
            'images/25. አውራሪስ Diceros bicornis.jpg',
            'images/33. አንበሳ panthera leo.jpg',
            'images/4. አምባራይሌ Tragelaphus- imberbis.jpg',
            
        ];
        let currentIndex = 0;
    
        const imageDisplay = document.getElementById('imageDisplay');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
    
        // Function to display image
        function displayImage(index) {
            imageDisplay.src = imagePaths[index];
        }
    
        // Show the first image initially
        displayImage(currentIndex);
    
        // Event listener for Previous button
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                displayImage(currentIndex);
            }
        });
    
        // Event listener for Next button
        nextBtn.addEventListener('click', function() {
            if (currentIndex < imagePaths.length - 1) {
                currentIndex++;
                displayImage(currentIndex);
            }
        });
    