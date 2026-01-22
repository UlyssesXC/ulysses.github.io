# Markdown使用示例

这个文件展示了如何在内容文件中使用各种Markdown语法和图片功能。

## 文本格式

这是普通文本。

**这是粗体文本**

*这是斜体文本*

~~这是删除线文本~~

## 链接

[这是一个链接](https://example.com)

## 列表

### 无序列表

- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2
- 项目 3

### 有序列表

1. 第一步
2. 第二步
3. 第三步

## 引用

> 这是一段引用文字。
> 可以用来强调重要的内容。

## 代码

行内代码：`console.log('Hello World')`

代码块：

```python
def hello_world():
    print("Hello, World!")
```

## 图片使用示例

### 1. 普通图片（默认全宽）

```markdown
![我的照片](images/photo.jpg)
```

### 2. 控制图片大小

```markdown
![小图片[small]](images/photo.jpg)
![中等图片[medium]](images/photo.jpg)
![大图片[large]](images/photo.jpg)
```

### 3. 控制图片位置

```markdown
![左对齐[left]](images/photo.jpg)
文字会环绕在图片右侧...

![右对齐[right]](images/photo.jpg)
文字会环绕在图片左侧...

![居中[center]](images/photo.jpg)
图片居中显示，文字在上下方
```

### 4. 组合使用（大小+位置）

```markdown
![演示GIF[medium][center]](images/demo.gif)

![小头像[small][left]](images/avatar.jpg)
这是一段介绍文字，图片会浮动在左侧...
```

### 5. GIF动画示例

```markdown
![项目演示[large]](images/project-demo.gif)

这个GIF展示了项目的主要功能。
```

## 实际使用案例

### 案例1：项目介绍带演示GIF

```markdown
### 我的图像识别项目

这是一个基于深度学习的图像识别系统。

![系统演示[medium][right]](images/recognition-demo.gif)

**主要特性：**
- 实时识别
- 高准确率
- 易于集成

系统采用最新的卷积神经网络架构，
能够快速准确地识别图像中的物体。
右侧的动画展示了系统的实时识别效果。

**技术栈：**
- Python
- PyTorch
- OpenCV

[[GitHub]](https://github.com/...) [[Demo]](https://...)
```

### 案例2：并排的小图片

```markdown
### 研究成果展示

![结果图1[small][left]](images/result1.jpg)
![结果图2[small][left]](images/result2.jpg)

这两张图展示了我们算法的效果对比。
左图是原始图像，右图是处理后的结果。

（注意：如果要真正实现并排，可能需要调整CSS）
```

### 案例3：文章中的插图

```markdown
### 研究方法

我们提出了一种新的深度学习方法...

![网络架构图[large][center]](images/architecture.png)

如上图所示，我们的网络由三个主要部分组成：
1. 特征提取层
2. 注意力机制
3. 分类器

![实验结果对比[medium][center]](images/results-comparison.jpg)

实验结果表明我们的方法在多个数据集上
都取得了最优的性能。
```

## 表格

| 模型 | 准确率 | 速度 |
|------|--------|------|
| 模型A | 95.2% | 快 |
| 模型B | 97.8% | 中等 |
| 我们的模型 | 98.5% | 快 |

## 分隔线

使用三个或更多的横线创建分隔线：

---

## 注意事项

1. **图片路径**：所有图片都应该放在 `images/` 文件夹中
2. **标记位置**：尺寸和位置标记要放在 `[]` 中，位于alt文本内
3. **GIF优化**：大的GIF文件会影响加载速度，建议压缩
4. **响应式**：在手机上浏览时，所有图片会自动适应屏幕宽度

## 更多Markdown语法

访问 [Markdown Guide](https://www.markdownguide.org/) 了解更多。

