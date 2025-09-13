document.addEventListener('DOMContentLoaded', function() {
            const popupOverlay = document.getElementById('popupOverlay');
            const popupTitle = document.getElementById('popupTitle');
            const popupDetails = document.getElementById('popupDetails');
            const closeBtn = document.querySelector('.close-btn');
            
            // Get all special date links
            const specialDates = document.querySelectorAll('.date a');
            
            // Add click event to each special date
            specialDates.forEach(date => {
                date.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get data attributes
                    const dateStr = this.getAttribute('data-date') || 'Unknown Date';
                    const title = this.getAttribute('data-title') || 'Special Event';
                    const details = this.getAttribute('data-details') || 'No details available for this event.';
                    
                    // Update popup content
                    popupTitle.textContent = `${dateStr}: ${title}`;
                    popupDetails.textContent = details;
                    
                    // Show popup
                    popupOverlay.classList.add('active');
                });
            });
            
            // Close popup when close button is clicked
            closeBtn.addEventListener('click', function() {
                popupOverlay.classList.remove('active');
            });
            
            // Close popup when clicking outside the content
            popupOverlay.addEventListener('click', function(e) {
                if (e.target === popupOverlay) {
                    popupOverlay.classList.remove('active');
                }
            });
            
            // Close popup with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
                    popupOverlay.classList.remove('active');
                }
            });
        });