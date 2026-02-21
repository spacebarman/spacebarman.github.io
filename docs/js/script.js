var news = {
    expires: "2025-12-31 11:59:59",
    title: "New Single!",
    text: "Sometimes We Go to Dark Places",
    image: "https://f4.bcbits.com/img/a3957884858_16.jpg",
    cta: "https://www.youtube.com/watch?v=cHmxURU3Ib8",
    ctaText:"Listen now!"
};

// Function to check if a URL is a YouTube link
function isYouTubeUrl(url) {
    return /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)/.test(url);
}

// Function to extract YouTube video ID from various URL formats
function extractYouTubeId(url) {
    var regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    var match = url.match(regExp);
    return match ? match[1] : null;
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if the news has expired
    var currentDate = new Date();
    var eventDate = new Date(news.expires);
        if (eventDate > currentDate) {
            // news has expired, hide the banner
            document.querySelector('.news').style.display = 'block';
            
            var newsCard = document.querySelector('.news-card');
            var imageContainer = document.querySelector('.news-image-container');
            var ctaButton = document.querySelector('.news-cta');
            var textContainer = document.querySelector('.news-text').parentElement.parentElement;
            
            // Check if CTA is a YouTube link
            if (isYouTubeUrl(news.cta)) {
                var videoId = extractYouTubeId(news.cta);
                console.log('YouTube URL detected:', news.cta);
                console.log('Extracted video ID:', videoId);
                
                if (videoId && videoId.length === 11) {
                    // For YouTube videos, restructure the entire card
                    newsCard.innerHTML = `
                        <div style="width: 100%; margin: 0; padding: 0; line-height: 0;">
                            <iframe width="100%" height="400" 
                                    src="https://www.youtube.com/embed/${videoId}" 
                                    title="YouTube video player"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    style="border-radius: 8px; display: block; margin: 0; padding: 0;">
                            </iframe>
                        </div>`;
                    
                    // Add a CSS class to modify the news card layout for videos
                    newsCard.classList.add('video-mode');
                } else {
                    console.error('Invalid YouTube video ID:', videoId);
                    // Fall back to regular behavior if video ID extraction fails
                    fallbackToRegularBehavior();
                }
            } else {
                fallbackToRegularBehavior();
            }
            
            function fallbackToRegularBehavior() {
                // Use regular image + button behavior
                if (news.image) {
                    document.querySelector('.news-image').src = news.image;
                    document.querySelector('.news-image').alt = news.title;
                }
                if (news.cta !== "#") {
                    ctaButton.href = news.cta;
                } else {
                    ctaButton.removeAttribute('href');
                }
                ctaButton.innerHTML = news.ctaText;
                
                document.querySelector('.news-text').innerHTML = `
                    <h2>${news.title}</h2>
                    <p>${news.text}</p>`;
            }
        }
});
