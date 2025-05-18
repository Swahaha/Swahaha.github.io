// Immediately load data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load experience data
    fetch('/api/experience')
        .then(response => response.json())
        .then(data => {
            const timelineContainer = document.getElementById('experience-timeline');
            if (timelineContainer) {
                timelineContainer.innerHTML = '';
                
                data.forEach((exp, index) => {
                    const timelineItem = document.createElement('div');
                    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
                    
                    const timelineContent = document.createElement('div');
                    timelineContent.className = 'timeline-content';
                    
                    timelineContent.innerHTML = `
                        <h3>${exp.role}</h3>
                        <h4>${exp.organization}</h4>
                        <p class="period">${exp.period}</p>
                        <ul>
                            ${exp.description.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        ${exp.skills ? `
                        <div class="skills">
                            ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                        ` : ''}
                        ${exp.links ? `
                        <div class="links">
                            ${exp.links.map(link => `<a href="${link.url}" target="_blank">${link.title}</a>`).join(' | ')}
                        </div>
                        ` : ''}
                    `;
                    
                    timelineItem.appendChild(timelineContent);
                    timelineContainer.appendChild(timelineItem);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching experience data:', error);
            const timelineContainer = document.getElementById('experience-timeline');
            if (timelineContainer) {
                timelineContainer.innerHTML = '<p>Error loading experience data. Please try again later.</p>';
            }
        });
    
    // Load projects data
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid) {
                projectsGrid.innerHTML = '';
                
                data.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    
                    // Determine which image to use based on project title
                    let imagePath = '';
                    if (project.title === 'Fortis') {
                        imagePath = 'images/fortis-logo.svg+xml';
                    } else if (project.title === 'Chártis') {
                        imagePath = 'images/chartis-logo.png';
                    } else if (project.title === 'Musis') {
                        imagePath = 'images/musis-interface.png';
                    } else if (project.title === 'Flow') {
                        imagePath = 'images/flow-project.png';
                    } else {
                        imagePath = 'images/project-placeholder.png';
                    }
                    
                    projectCard.innerHTML = `
                        <div class="project-image">
                            <img src="${imagePath}" alt="${project.title}">
                        </div>
                        <div class="project-content">
                            <h3>${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tech">
                                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                                ${project.url ? `<a href="${project.url}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                                <a href="#" class="view-details" data-project="${project.title}"><i class="fas fa-info-circle"></i> Details</a>
                            </div>
                        </div>
                    `;
                    
                    projectsGrid.appendChild(projectCard);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching projects data:', error);
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid) {
                projectsGrid.innerHTML = '<p>Error loading projects data. Please try again later.</p>';
            }
        });
    
    // Load skills data
    fetch('/api/skills')
        .then(response => response.json())
        .then(data => {
            // Backend skills
            const backendSkills = document.getElementById('backend-skills');
            if (backendSkills && data.backend) {
                backendSkills.innerHTML = '';
                data.backend.forEach(skill => {
                    const skillItem = document.createElement('span');
                    skillItem.className = 'skill-item';
                    skillItem.textContent = skill;
                    backendSkills.appendChild(skillItem);
                });
            }
            
            // Machine Learning skills
            const mlSkills = document.getElementById('ml-skills');
            if (mlSkills && data.machineLearning) {
                mlSkills.innerHTML = '';
                data.machineLearning.forEach(skill => {
                    const skillItem = document.createElement('span');
                    skillItem.className = 'skill-item';
                    skillItem.textContent = skill;
                    mlSkills.appendChild(skillItem);
                });
            }
            
            // Frontend skills
            const frontendSkills = document.getElementById('frontend-skills');
            if (frontendSkills && data.frontend) {
                frontendSkills.innerHTML = '';
                data.frontend.forEach(skill => {
                    const skillItem = document.createElement('span');
                    skillItem.className = 'skill-item';
                    skillItem.textContent = skill;
                    frontendSkills.appendChild(skillItem);
                });
            }
            
            // Miscellaneous skills
            const miscSkills = document.getElementById('misc-skills');
            if (miscSkills && data.miscellaneous) {
                miscSkills.innerHTML = '';
                data.miscellaneous.forEach(skill => {
                    const skillItem = document.createElement('span');
                    skillItem.className = 'skill-item';
                    skillItem.textContent = skill;
                    miscSkills.appendChild(skillItem);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching skills data:', error);
            const skillsSections = document.querySelectorAll('.skills-section');
            skillsSections.forEach(section => {
                section.innerHTML = '<p>Error loading skills data. Please try again later.</p>';
            });
        });
});
