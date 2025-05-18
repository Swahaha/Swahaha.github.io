// Create placeholder images for the website
// This script generates placeholder images with text for sections that don't have images yet

document.addEventListener('DOMContentLoaded', function() {
    // Function to create a placeholder image with text
    function createPlaceholderImage(text, width, height, bgColor, textColor) {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        // Get the drawing context
        const ctx = canvas.getContext('2d');
        
        // Fill background
        ctx.fillStyle = bgColor || '#1D2D44';
        ctx.fillRect(0, 0, width, height);
        
        // Add text
        ctx.fillStyle = textColor || '#F0EBD8';
        ctx.font = 'bold 20px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Handle multi-line text
        const words = text.split(' ');
        let lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
            const testLine = currentLine + ' ' + words[i];
            const metrics = ctx.measureText(testLine);
            
            if (metrics.width > width - 40) {
                lines.push(currentLine);
                currentLine = words[i];
            } else {
                currentLine = testLine;
            }
        }
        lines.push(currentLine);
        
        // Draw each line
        const lineHeight = 25;
        const startY = (height - (lines.length * lineHeight)) / 2;
        
        lines.forEach((line, index) => {
            ctx.fillText(line, width / 2, startY + (index * lineHeight));
        });
        
        // Return the data URL
        return canvas.toDataURL('image/png');
    }
    
    // Replace missing project images with placeholders
    document.querySelectorAll('.project-image img[src="images/project-placeholder.png"]').forEach(img => {
        const projectTitle = img.closest('.project-card').querySelector('h3').textContent;
        img.src = createPlaceholderImage(projectTitle, 400, 300);
    });
    
    // Replace missing interest images with placeholders
    document.querySelectorAll('.interest-image img[src="images/project-placeholder.png"]').forEach(img => {
        const interestTitle = img.closest('.interest-card').querySelector('h3').textContent;
        img.src = createPlaceholderImage(interestTitle, 400, 200);
    });
});
