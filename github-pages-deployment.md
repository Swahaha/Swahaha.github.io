# GitHub Pages Deployment Guide

This document provides instructions for deploying your personal website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Your personal website files (provided in this package)

## Deployment Steps

### 1. Create a GitHub Repository

1. Log in to your GitHub account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository `username.github.io` (replace `username` with your GitHub username)
4. Set the repository to "Public"
5. Click "Create repository"

### 2. Prepare Your Website Files

The website is already structured for GitHub Pages deployment. The main files are:

- `index.html`: The main HTML file
- `css/`: Directory containing stylesheets
- `js/`: Directory containing JavaScript files
- `images/`: Directory containing images and visual assets

### 3. Push Your Website to GitHub

Open a terminal/command prompt and run the following commands:

```bash
# Clone your new repository
git clone https://github.com/username/username.github.io.git
# Replace 'username' with your GitHub username

# Copy all website files to the repository folder
# (Replace '/path/to/website/files' with the actual path to the provided website files)
cp -r /path/to/website/files/* username.github.io/

# Navigate to the repository folder
cd username.github.io

# Add all files to git
git add .

# Commit the changes
git commit -m "Initial website deployment"

# Push to GitHub
git push origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

### 5. Access Your Website

Your website will be available at `https://username.github.io` (replace `username` with your GitHub username).

It may take a few minutes for your site to be published after the initial setup.

## Updating Your Website

To update your website in the future:

1. Make changes to the files in your local repository
2. Commit and push the changes to GitHub:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Pages will automatically update your website with the new changes.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a domain registrar
2. In your repository settings, under "GitHub Pages", enter your custom domain
3. Configure your domain's DNS settings to point to GitHub Pages
   - Add an A record pointing to GitHub Pages IP addresses
   - Or add a CNAME record pointing to your `username.github.io` domain

## Troubleshooting

- If your site isn't published, check the GitHub Pages section in repository settings for any error messages
- Ensure your repository is public
- Verify that your main HTML file is named `index.html` and is in the root of the repository

For more detailed information, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
