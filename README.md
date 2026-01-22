# 个人网站

一个简洁的基于Markdown的个人静态网站。

## 特性

- ✨ 简洁优雅的设计
- 📝 基于Markdown编写内容
- 🖼️ 支持插入图片和GIF，可调整大小和位置
- 🎨 响应式布局
- 🔧 易于修改和维护
- 🚀 纯静态，无需构建工具

## 快速开始

1. **修改个人信息**

编辑 `config.js` 文件，更新你的个人信息：

```javascript
const config = {
    avatar: {
        normal: 'images/avatar.jpg',      // 你的默认头像
        hover: 'images/avatar-hover.jpg'  // 鼠标悬停时的头像
    },
    social: {
        github: 'https://github.com/yourusername',
        scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
        email: 'your.email@example.com',
        linkedin: 'https://www.linkedin.com/in/yourusername'
    }
};
```

2. **添加头像图片**

在 `images/` 文件夹中放入你的头像：
- `avatar.jpg` - 默认头像
- `avatar-hover.jpg` - 鼠标悬停时显示的头像

3. **编辑内容**

在 `content/` 文件夹中编辑各个Markdown文件：
- `about.md` - 关于我
- `publications.md` - 我的文章
- `projects.md` - 我的项目
- `education.md` - 我的教育

4. **运行网站**

由于是纯静态网站，你需要使用本地服务器来运行：

```bash
# 方法1：使用Python（推荐）
python -m http.server 8000

# 方法2：使用Node.js的http-server
npx http-server

# 方法3：使用PHP
php -S localhost:8000
```

然后在浏览器中打开 `http://localhost:8000`

## 使用Markdown编写内容

### 基本语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本**
*斜体文本*

- 列表项1
- 列表项2

1. 有序列表1
2. 有序列表2

[链接文字](https://example.com)
```

### 插入图片和GIF

#### 基本插入

```markdown
![图片描述](images/picture.jpg)
![GIF描述](images/animation.gif)
```

#### 控制图片大小

在alt文本中添加尺寸标记：

```markdown
![小图片[small]](images/picture.jpg)
![中等图片[medium]](images/picture.jpg)
![大图片[large]](images/picture.jpg)
```

尺寸对应：
- `[small]` - 最大宽度 300px
- `[medium]` - 最大宽度 500px
- `[large]` - 最大宽度 800px

#### 控制图片位置

```markdown
![左对齐图片[left]](images/picture.jpg)
![右对齐图片[right]](images/picture.jpg)
![居中图片[center]](images/picture.jpg)
```

#### 组合使用

你可以同时控制大小和位置：

```markdown
![小图左对齐[small][left]](images/picture.jpg)
![中图右对齐[medium][right]](images/animation.gif)
```

### 示例

```markdown
这是一段文字。

![可爱的动画[small][right]](images/cute.gif)

这段文字会环绕右侧的小GIF图片。你可以继续写很多内容，
图片会浮动在右侧。这对于展示项目演示或者添加装饰性
元素非常有用。

---

![项目演示[large][center]](images/demo.gif)

这是一个大的居中GIF，展示项目的完整演示。
```

## 文件结构

```
my_site/
├── index.html              # 主HTML文件
├── style.css               # 样式表
├── app.js                  # JavaScript逻辑
├── config.js               # 个人信息配置
├── README.md               # 说明文档
├── images/                 # 图片文件夹
│   ├── avatar.jpg          # 默认头像
│   ├── avatar-hover.jpg    # 悬停头像
│   └── ...                 # 其他图片和GIF
└── content/                # 内容文件夹
    ├── about.md            # 关于我
    ├── publications.md     # 我的文章
    ├── projects.md         # 我的项目
    └── education.md        # 我的教育
```

## 自定义样式

如果你想修改网站的颜色、字体或其他样式，编辑 `style.css` 文件。

主要可自定义的部分：
- 侧边栏颜色：`.sidebar` 的 `background-color`
- 主题色：搜索 `#3498db` 并替换为你喜欢的颜色
- 字体：修改 `body` 的 `font-family`

## 部署

### GitHub Pages

1. 将所有文件推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 你的网站将发布在 `https://yourusername.github.io/repository-name/`

### Netlify/Vercel

1. 将代码推送到GitHub
2. 连接到Netlify或Vercel
3. 部署时无需任何构建命令
4. 自动部署完成

## 常见问题

**Q: 为什么需要本地服务器运行？**  
A: 由于浏览器的安全限制，直接打开HTML文件无法加载外部资源（Markdown文件）。使用本地服务器可以解决这个问题。

**Q: 如何添加更多部分？**  
A: 编辑 `index.html` 添加新的section，创建对应的Markdown文件，并在 `config.js` 中添加路径配置。

**Q: 图片不显示怎么办？**  
A: 确保图片路径正确，图片文件存在于 `images/` 文件夹中。

**Q: 可以使用其他Markdown编辑器吗？**  
A: 可以！使用任何文本编辑器或Markdown编辑器（如Typora、VS Code）编辑`.md`文件即可。

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown解析器

## 许可

MIT License - 你可以自由使用、修改和分发。

