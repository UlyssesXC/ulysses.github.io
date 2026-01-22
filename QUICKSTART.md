# 🚀 Quick Start Guide

Welcome! Follow these steps to quickly create your personal website.

## Step 1: Prepare Avatar Images 📸

1. Prepare two avatar photos (square format recommended, at least 160x160 pixels)
   - One for the default avatar
   - One to show on hover (can be a different expression or angle)

2. Rename the images:
   - `avatar.jpg` - Default avatar
   - `avatar-hover.jpg` - Hover avatar

3. Place these two images in the `images/` folder

## Step 2: Update Personal Information ✏️

Edit the `config.js` file and update your information:

```javascript
const config = {
    avatar: {
        normal: 'images/avatar.jpg',
        hover: 'images/avatar-hover.jpg'
    },
    social: {
        github: 'https://github.com/your-username',
        scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
        email: 'your.email@example.com',
        linkedin: 'https://www.linkedin.com/in/your-username'
    }
};
```

## Step 3: Write Your Content 📝

Edit the Markdown files in the `content/` folder:

### 1. `about.md` - About
Write your introduction, research interests, hobbies, etc.

### 2. `publications.md` - Publications
List your papers, including titles, authors, conferences/journals, etc.

### 3. `projects.md` - Projects
Introduce your projects, including open-source projects, personal works, etc.

### 4. `education.md` - Education
Fill in your educational background, including degrees, schools, dates, etc.

### 📌 Content Writing Tips

- Use `###` for subheadings
- Use `**text**` for bold
- Use `[link text](url)` for links
- Use `---` for horizontal rules

## Step 4: Add Images and GIFs 🖼️

### Add Image Files
Place your images and GIF animations in the `images/` folder.

### Reference in Markdown

**Basic usage:**
```markdown
![Image description](images/your-image.jpg)
```

**Control size:**
```markdown
![Small[small]](images/image.jpg)      # 300px width
![Medium[medium]](images/image.jpg)    # 500px width
![Large[large]](images/image.jpg)      # 800px width
```

**Control position:**
```markdown
![Left aligned[left]](images/image.jpg)
![Right aligned[right]](images/image.jpg)
![Centered[center]](images/image.jpg)
```

**Combine:**
```markdown
![Demo animation[medium][center]](images/demo.gif)
```

## Step 5: Run the Website 🌐

### Method 1: Using the start script (recommended)

```bash
./start.sh
```

### Method 2: Manual start

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js
npx http-server
```

### Method 3: Using VS Code extension

Install the "Live Server" extension, then right-click `index.html` and select "Open with Live Server"

### Open the website

Visit in your browser: `http://localhost:8000`

## Step 6: Publish Online 🌍

### Option A: GitHub Pages (free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be published at `https://your-username.github.io/repository-name/`

### Option B: Netlify (free)

1. Sign up for a Netlify account
2. Connect your GitHub repository
3. Click deploy
4. Get a free `https://your-site.netlify.app` domain

### Option C: Vercel (free)

1. Sign up for a Vercel account
2. Import your GitHub repository
3. Auto-deploy complete

## FAQ ❓

### Q1: Can I just double-click index.html?
**A:** Not recommended. Browser security restrictions will block loading Markdown files. Please use a local server.

### Q2: How to change website colors?
**A:** Edit `style.css`, search for color codes (like `#3498db`) and replace with your preferred colors.

### Q3: Can I add more pages?
**A:** Yes! Edit `index.html` to add new sections, create corresponding `.md` files, and configure paths in `config.js`.

### Q4: Images not showing?
**A:** Check:
- Image file is in the `images/` folder
- Filename is correct (case-sensitive)
- Using a local server to run

### Q5: GIF too large and slow to load?
**A:** Use online tools to compress GIFs:
- [ezgif.com](https://ezgif.com/optimize)
- [gifcompressor.com](https://gifcompressor.com/)

## Advanced Tips 🎨

### 1. Change sidebar color
Edit `style.css`, find:
```css
.sidebar {
    background-color: #2c3e50;  /* Change to your color */
}
```

### 2. Change theme color
Search for `#3498db` (blue) in `style.css` and replace all with your theme color.

### 3. Add custom font
Modify `font-family` in the `body` section of `style.css`.

### 4. Add website icon
Add to the `<head>` section of `index.html`:
```html
<link rel="icon" href="images/favicon.ico">
```

## Need Help? 💬

- Check `README_EN.md` - Complete documentation
- Check `EXAMPLES.md` - Markdown examples
- Check browser console - For error messages

---

## Checklist ✅

Before finishing setup, make sure:

- [ ] Added `avatar.jpg` and `avatar-hover.jpg`
- [ ] Updated personal info in `config.js`
- [ ] Edited all content/*.md files
- [ ] Tested local website
- [ ] All links are correct
- [ ] All images display properly
- [ ] Tested on mobile browser (responsive)

---

Good luck creating your beautiful personal website! 🎉

