# Personal Website

A clean, markdown-based static personal website.

## Features

- ✨ Clean and elegant design
- 📝 Write content in Markdown
- 🖼️ Support for images and GIFs with adjustable size and position
- 🎨 Responsive layout
- 🔧 Easy to modify and maintain
- 🚀 Pure static, no build tools needed

## Quick Start

### 1. **Update Personal Information**

Edit `config.js` file and update your information:

```javascript
const config = {
    avatar: {
        normal: 'images/avatar.jpg',      // Your default avatar
        hover: 'images/avatar-hover.jpg'  // Avatar on hover
    },
    social: {
        github: 'https://github.com/yourusername',
        scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
        email: 'your.email@example.com',
        linkedin: 'https://www.linkedin.com/in/yourusername'
    }
};
```

### 2. **Add Avatar Images**

Place your avatar images in the `images/` folder:
- `avatar.jpg` - Default avatar
- `avatar-hover.jpg` - Avatar shown on hover

### 3. **Edit Content**

Edit the Markdown files in the `content/` folder:
- `about.md` - About Me
- `publications.md` - Publications
- `projects.md` - Projects
- `education.md` - Education

### 4. **Run Website**

Since this is a pure static website, you need to use a local server:

```bash
# Method 1: Using Python (recommended)
python -m http.server 8000

# Method 2: Using Node.js http-server
npx http-server

# Method 3: Using the start script
./start.sh
```

Then open `http://localhost:8000` in your browser.

## Writing Content in Markdown

### Basic Syntax

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- List item 1
- List item 2

1. Ordered list 1
2. Ordered list 2

[Link text](https://example.com)
```

### Inserting Images and GIFs

#### Basic Insert

```markdown
![Image description](images/picture.jpg)
![GIF description](images/animation.gif)
```

#### Control Image Size

Add size markers in the alt text:

```markdown
![Small image[small]](images/picture.jpg)
![Medium image[medium]](images/picture.jpg)
![Large image[large]](images/picture.jpg)
```

Sizes:
- `[small]` - Max width 300px
- `[medium]` - Max width 500px
- `[large]` - Max width 800px

#### Control Image Position

```markdown
![Left aligned[left]](images/picture.jpg)
![Right aligned[right]](images/picture.jpg)
![Centered[center]](images/picture.jpg)
```

#### Combine Size and Position

```markdown
![Small left[small][left]](images/picture.jpg)
![Medium center[medium][center]](images/animation.gif)
```

### Example

```markdown
This is some text.

![Cute animation[small][right]](images/cute.gif)

This text will wrap around the small GIF on the right. You can 
continue writing and the image will float on the right side.

---

![Project demo[large][center]](images/demo.gif)

This is a large centered GIF showing the full project demo.
```

## File Structure

```
my_site/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── app.js                  # JavaScript logic
├── config.js               # Personal info configuration
├── README.md               # Chinese documentation
├── README_EN.md            # English documentation
├── images/                 # Images folder
│   ├── avatar.jpg          # Default avatar
│   ├── avatar-hover.jpg    # Hover avatar
│   └── ...                 # Other images and GIFs
└── content/                # Content folder
    ├── about.md            # About
    ├── publications.md     # Publications
    ├── projects.md         # Projects
    └── education.md        # Education
```

## Customizing Styles

If you want to modify colors, fonts, or other styles, edit the `style.css` file.

Main customizable parts:
- Sidebar color: `.sidebar` `background-color`
- Theme color: Search for `#3498db` and replace with your color
- Font: Modify `body` `font-family`

## Deployment

### GitHub Pages

1. Push all files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Your site will be published at `https://yourusername.github.io/repository-name/`

### Netlify/Vercel

1. Push code to GitHub
2. Connect to Netlify or Vercel
3. No build command needed
4. Auto-deploy complete

## FAQ

**Q: Why do I need a local server?**  
A: Due to browser security restrictions, directly opening the HTML file cannot load external resources (Markdown files). Using a local server solves this issue.

**Q: How to add more sections?**  
A: Edit `index.html` to add new sections, create corresponding Markdown files, and add path configurations in `config.js`.

**Q: Images not showing?**  
A: Make sure the image path is correct and the image file exists in the `images/` folder.

**Q: Can I use other Markdown editors?**  
A: Yes! Use any text editor or Markdown editor (like Typora, VS Code) to edit `.md` files.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser

## License

MIT License - You are free to use, modify, and distribute.

