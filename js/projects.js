// Projects data and interactive functionality
// Handles project cards, modals, filtering, and tag interactions

// Project data
const projects = [
    {
        id: "fortis",
        title: "Fortis",
        description: "A full-stack fitness web app that helps users log workouts, track progress, connect with workout partners, and stay accountable.",
        image: "images/Fortis-Bob.png",
        tech: ["Next.js", "Typescript", "React.js", "PostgreSQL", "Vercel", "Auth0"],
        status: "finished",
        github: "https://github.com/Swahaha/fortis",
        demo: "https://fortis-cs316.vercel.app/",
        fullDescription: `
        <h3>Fortis</h3>
        <p>
            Fortis is a full-stack fitness web app that helps users log workouts, track progress, connect with workout partners, and stay accountable.
            It combines features typically spread across multiple apps like Strong and Strava into one cohesive platform.
        </p>
        <p>
            Key features include:
            <ul>
            <li>Sign-in via Auth0</li>
            <li>User profiles</li>
            <li>Workout tracking and analytics with GitHub-style calendar visualization</li>
            <li>A dynamic muscle model that highlights muscles based on recent activity</li>
            <li>Template sharing</li>
            <li>A partner matcher tool</li>
            </ul>
        </p>
        <p>
            I collaborated with a team of friends and primarily focused on building the backend APIs, building dynamic data analysis tools, and designing the PostgreSQL database schema.
            We stress-tested the app with 5,000 synthetic users and reached over 50 peak unique users following a light marketing push.
        </p>`
    },
    {
        id: "struo",
        title: "Struo",
        description: "A text file management system that adapts to your workflow",
        image: "images/struo-merge.png",
        tech: ["Java", "SQLite", "Swing", "MigLayout"],
        status: "finished",
        github: "https://github.com/Swahaha/Struo",
        fullDescription: `
        <h3>Struo</h3>
        <p>
          Struo is a dedicated text file management system designed to efficiently handle collections of plain text files.
          It serves as a smart interface for working with <code>.txt</code> files, enhancing their usability without imposing restrictions on how you use them.
          The core philosophy behind Struo is to adapt to your workflow rather than forcing you into a rigid note-taking system.
        </p>
        <p>
          Key features include:
          <ul>
            <li>Local SQLite database per folder to index text file contents</li>
            <li>Advanced search and sorting with contextual snippets</li>
            <li>Direct editing with real-time updates</li>
            <li>Split and merge capabilities for text files</li>
            <li>Privacy-focused options to exclude sensitive data</li>
          </ul>
        </p>
        <p>
          Built with Java, SQLite, and the MigLayout library in Swing, Struo is a full-stack desktop application.
          I originally developed it for teachers at my high school, and it continues to be used there today.
        </p>`   
    },
    {
        id: "diffusion",
        title: "Latent Weight Diffusion",
        description: "Explored diffusion models to generate working neural networks for image classification → skipping the image training process entirely.",
        image: "images/diffusion-diagram.jpg",
        tech: ["PyTorch", "Diffusion", "Autoencoders", "Computer Vision"],
        status: "finished",
        github: "https://github.com/Swahaha/diffusion-classifier-generation",
        fullDescription: `<h3>Diffusion-Generated Neural Networks</h3>
        <p>
          Traditionally, diffusion models are used to generate images and videos. In this project, I explored a novel application:
          using diffusion techniques to generate full neural networks capable of performing high-level tasks without manual tuning
          or the computational resources typically required for training.
        </p>
        <p>
          I implemented a Variational Autoencoder + Diffusion pipeline applied to the weight space of CNN models trained on basic image classification tasks.
        </p>
        <p>
          The results were great! The generated models achieved over 95% of the accuracy of fully trained models straight out of the box.
          With just a few epochs of fine-tuning, they matched the performance of traditionally trained networks.
        </p>`    
    },
    {
        id: "incis",
        title: "Incis",
        description: "An OCR snipping tool that allows users to quickly capture text from any part of their screen and automatically copy it to the clipboard.",
        image: "images/Incis.png",
        tech: ["Python", "Computer Vision", "Tesseract", "Tkinter"],
        status: "finished",
        github: "https://github.com/Swahaha/Incis",
        fullDescription: `
  <h3>Incis</h3>
  <p>
    Incis is a lightweight OCR (Optical Character Recognition) snipping tool that lets users quickly capture text from any part of their screen and automatically copy it to the clipboard.
  </p>
  <p>
    Built in Python and powered by Tesseract OCR, the tool features a simple Tkinter interface that enables fast and intuitive screen area selection. Once an area is selected, Incis processes the image, extracts the text, and places it on the clipboard for immediate use.
  </p>
  <p>
    This tool is especially useful for extracting quotes or references from images, PDFs, or other non-selectable text sources.
  </p>
  <p>
    Incis saw over 100 downloads. But, I think now Windows is introducing a similar feature to the snipping tool natively :(
  </p>
`    },
    {
        id: "flow",
        title: "Flow",
        description: "A fun project where a servo learns to hit a bullseye target with high accuracy.",
        image: "images/flow-project.png",
        tech: ["Raspberry Pi", "Servos", "Flask", "Computer Vision"],
        status: "finished",
        github: "https://github.com/Swahaha/Flow",
        fullDescription: `
  <p>
    Flow is a vision-guided servo system that learns to strike a disc toward a target with high accuracy.
    After each launch, a camera captures the disc’s landing point, and a vision model evaluates the result.
    Based on feedback, the system automatically adjusts the servo’s timing and power until it consistently hits the target—usually within six attempts.
  </p>
  <p>
    This was a fun project I built over a weekend. A continuous servo is connected to a Raspberry Pi, which streams footage to a Flask server.
    Inference is performed on a custom-trained YOLO image segmentation model to detect both the disc and target and provide real-time corrections.
  </p>`
    },
    {
        id: "chartis",
        title: "Chártis",
        description: "A navigation tool designed to make education more accessible and inclusive, particularly for mobility-impaired students. Won HackDuke 2023.",
        image: "images/routingdemo.png",
        tech: ["React.js", "Python", "FastAPI", "MongoDB", "Leaflet.js"],
        status: "finished",
        github: "https://github.com/Swahaha/Chartis",
        fullDescription: `  
    <p>
    Chártis is a navigation tool designed to improve campus accessibility, inspired by a friend's experience navigating Duke University on crutches.
    It features an interactive campus map using OpenStreetMap data, enhanced with building floor plans to highlight accessible restrooms and elevators.
  </p>
  <p>
    Users can get real-time, step-by-step directions that prioritize accessibility. We also crowdsource information about stairs, ramps, elevators, and temporary obstacles.
    This data is stored in a MongoDB database and actively shapes the app’s routing via a custom Dijkstra’s algorithm.
  </p>
  <p>
    The project won the Auth0 award at HackDuke 2023. I led the back-end development, building the routing logic, managing geoJSON data, and integrating Leaflet with a FastAPI + MongoDB stack.
  </p>`    
    },
    {
        id: "vladoggo",
        title: "VLAdoggo (in progress)",
        description: "A Vision Language Action model for the Unitree Go2 robot that enables natural language control through voice commands.",
        image: "images/go2.png",
        tech: ["Vision-Language-Action", "ROS2", "C++", "OpenAI SDK", "Computer Vision",  "AI agents", "LangGraph"],
        status: "building",
        github: "https://github.com/Swahaha/VLAdoggo",
        fullDescription: `  
        <p>
    VLAdoggo is an in-progress project that enables natural language control of a Unitree Go2 robot.
    Users can issue simple voice commands like “Go sit near the red box,” and the robot interprets and executes the task autonomously.
  </p>
  <p>
    The system integrates several components: voice transcription, command parsing via LLMs, real-time object detection, motion planning with ROS2,
    and physical actuation through the Unitree Go2 SDK. It updates continuously based on visual feedback and environmental changes.
  </p>
  <p>
    As someone passionate about Embodied AI, I’m excited to explore the intersection of vision-language models and real-world robotics through this project.
  </p>
`    },
    {
        id: "musis",
        title: "Musis",
        description: "An optical music recognition interface designed to convert sheet music into editable formats like MusicXML or MIDI.",
        image: "images/work-in-progress.jpg",
        tech: ["Next.js", "Typescript", "Pytorch", "Computer Vision", "PostgreSQL", "Auth0"],
        status: "building",
        github: "https://github.com/Swahaha/Musis",
        demo: "https://musis.vercel.app/",
        fullDescription: `  
        <p>
    Musis is an open-source optical music recognition (OMR) tool designed to convert images of sheet music into editable formats like MusicXML or MIDI.
    As someone who enjoys producing music, I am building it to fill the gap left by the lack of free, accessible tools for this task.
  </p>
  <p>
    Users can upload scanned sheet music and receive structured output suitable for use in DAWs.
    The frontend is built with TypeScript and Next.js, while the recognition pipeline is being developed in PyTorch.
    I'm currently working on core CV challenges like skew correction, staff line detection, symbol classification, and rhythm analysis.
  </p>
  <p>
    The project is ongoing and ambitious, tackling a problem few tools in the world have attempted. But it's been very well-received by people in the music and audio production space.
  </p> `    
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize projects
    initializeProjects();
    
    // Set up event listeners
    setupEventListeners();
});

// Initialize projects display
function initializeProjects() {
    // Populate table of contents
    populateTableOfContents();
    
    // Populate project cards
    populateProjectCards();
}

// Populate the table of contents
function populateTableOfContents() {
    const tocContainer = document.getElementById('projects-toc');
    
    if (tocContainer) {
        // Add "All" button first
        const allButton = document.createElement('div');
        allButton.className = 'toc-item';
        allButton.textContent = 'All';
        allButton.classList.add('active');
        allButton.addEventListener('click', function() {
            // Remove active class from all tech tags
            document.querySelectorAll('.project-tech span').forEach(tag => {
                tag.classList.remove('active');
            });
            // Show all projects
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.display = '';
            });
            // Add active class to "All" button
            document.querySelectorAll('.toc-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            // Scroll to top of the page
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
        });
        tocContainer.appendChild(allButton);

        // Add "Finished" button
        const finishedButton = document.createElement('div');
        finishedButton.className = 'toc-item';
        finishedButton.textContent = 'Finished';
        finishedButton.addEventListener('click', function() {
            // Show only finished projects
            document.querySelectorAll('.project-card').forEach(card => {
                const projectId = card.getAttribute('data-project');
                const project = projects.find(p => p.id === projectId);
                card.style.display = project.status === 'finished' ? '' : 'none';
            });
            // Update active state
            document.querySelectorAll('.toc-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            // Scroll to top
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
        });
        tocContainer.appendChild(finishedButton);

        // Add "Currently Building" button
        const buildingButton = document.createElement('div');
        buildingButton.className = 'toc-item';
        buildingButton.textContent = 'Currently Building';
        buildingButton.addEventListener('click', function() {
            // Show only building projects
            document.querySelectorAll('.project-card').forEach(card => {
                const projectId = card.getAttribute('data-project');
                const project = projects.find(p => p.id === projectId);
                card.style.display = project.status === 'building' ? '' : 'none';
            });
            // Update active state
            document.querySelectorAll('.toc-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            // Scroll to top
            window.scrollTo({
                top: 100,
                behavior: 'smooth'
            });
        });
        tocContainer.appendChild(buildingButton);

        // Add a divider
        const divider = document.createElement('div');
        divider.className = 'toc-divider';
        tocContainer.appendChild(divider);
        
        // Add project items
        projects.forEach(project => {
            const tocItem = document.createElement('div');
            tocItem.className = 'toc-item';
            tocItem.textContent = project.title;
            tocItem.setAttribute('data-project', project.id);
            
            tocItem.addEventListener('click', function() {
                // Scroll to the project
                const projectElement = document.getElementById(`project-${project.id}`);
                if (projectElement) {
                    projectElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Highlight the project briefly
                    projectElement.classList.add('highlight');
                    setTimeout(() => {
                        projectElement.classList.remove('highlight');
                    }, 1500);
                }
            });
            
            tocContainer.appendChild(tocItem);
        });
    }
}

// Populate project cards
function populateProjectCards() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = `project-card ${index % 2 === 1 ? 'from-right' : ''}`;
            projectCard.id = `project-${project.id}`;
            projectCard.setAttribute('data-project', project.id);
            
            // Determine which image to use
            let imagePath = project.image || 'images/project-placeholder.png';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${imagePath}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span data-tech="${tech}">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                        <a href="#" class="view-details"><i class="fas fa-info-circle"></i> View Details</a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }
}

// Set up event listeners
function setupEventListeners() {
    // Project card click event
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open modal if clicking on a link or tech stack button
            if (e.target.tagName === 'A' || 
                e.target.parentElement.tagName === 'A' || 
                e.target.closest('.project-tech')) {
                return;
            }
            
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // View details link click
    document.querySelectorAll('.view-details').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.closest('.project-card').getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Tech tag click event
    document.addEventListener('click', function(e) {
        if (e.target.closest('.project-tech span')) {
            e.stopPropagation(); // Prevent event from bubbling up to the project card
            const tech = e.target.closest('.project-tech span').getAttribute('data-tech');
            filterProjectsByTech(tech);
        }
    });
    
    // Modal close button
    document.getElementById('modal-close').addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside
    document.getElementById('project-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
    
    // Project animation on scroll
    const projectCards = document.querySelectorAll('.project-card');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function handleScroll() {
        projectCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}

// Open project modal
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    // Populate modal content
    document.getElementById('modal-title').textContent = project.title;
    
    document.getElementById('modal-body').innerHTML = `
        <div class="modal-image">
            <img src="${project.image || 'images/project-placeholder.png'}" alt="${project.title}" loading="lazy">
        </div>
        <div class="modal-description">
            ${project.fullDescription.split('\n\n').map(para => `<p>${para}</p>`).join('')}
        </div>
    `;
    
    // Ensure image is properly scaled after loading
    const modalImage = document.querySelector('.modal-image img');
    if (modalImage) {
        modalImage.onload = function() {
            // Force a reflow to ensure proper scaling
            this.style.display = 'none';
            this.offsetHeight; // Force reflow
            this.style.display = '';
        };
    }
    
    document.getElementById('modal-links').innerHTML = `
        ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
    `;
    
    // Show modal
    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close project modal
function closeProjectModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Filter projects by tech
function filterProjectsByTech(tech) {
    const projectCards = document.querySelectorAll('.project-card');
    const tocItems = document.querySelectorAll('.toc-item');
    const techTags = document.querySelectorAll('.project-tech span');
    
    // Check if we're clearing the filter
    const isClearing = techTags.length > 0 && 
                      Array.from(techTags).some(tag => 
                          tag.classList.contains('active') && 
                          tag.getAttribute('data-tech') === tech);
    
    // Clear active state from all tech tags
    techTags.forEach(tag => {
        if (tag.getAttribute('data-tech') === tech) {
            tag.classList.toggle('active');
        } else {
            tag.classList.remove('active');
        }
    });
    
    if (isClearing) {
        // Show all projects
        projectCards.forEach(card => {
            card.style.display = '';
            setTimeout(() => {
                card.classList.add('animate-fade-in-scale');
            }, 10);
        });
        
        // Reset TOC
        tocItems.forEach(item => {
            item.classList.remove('active');
        });
    } else {
        // Filter projects
        projectCards.forEach(card => {
            const projectTechs = Array.from(card.querySelectorAll('.project-tech span'))
                                     .map(span => span.getAttribute('data-tech'));
            
            if (projectTechs.includes(tech)) {
                card.style.display = '';
                setTimeout(() => {
                    card.classList.add('animate-fade-in-scale');
                }, 10);
            } else {
                card.style.display = 'none';
                card.classList.remove('animate-fade-in-scale');
            }
        });
        
        // Update TOC
        tocItems.forEach(item => {
            const projectId = item.getAttribute('data-project');
            const project = projects.find(p => p.id === projectId);
            
            if (project && project.tech.includes(tech)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}
