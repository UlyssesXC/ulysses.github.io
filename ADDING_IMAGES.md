# Adding Images and GIFs to Your Website

This guide shows you how to add your robot demo GIFs and other images to your website.

## Step 1: Prepare Your Images

Based on your content, you'll need:

### Required Images:
1. **Avatar images** (mandatory)
   - `avatar.jpg` - Your default profile photo
   - `avatar-hover.jpg` - Alternative photo shown on hover

### Project Demo Images (optional but recommended):
2. **Robot inspection demos**
   - Simulation demo GIF
   - Product working photos/GIFs

You mentioned these in your original content:
- "Inspection Robot Simulate"
- "Product working 1"
- "Product working 2"

## Step 2: Rename and Place Images

1. Rename your files appropriately:
   ```
   avatar.jpg
   avatar-hover.jpg
   robot-sim.gif                    (simulation demo)
   robot-working-1.jpg              (working demo 1)
   robot-working-2.jpg              (working demo 2)
   ```

2. Place all images in the `images/` folder

## Step 3: Reference Images in Markdown

### For the Robot Project Section

Edit `content/projects.md` and add your images:

**Option 1: Single large demo GIF (recommended for simulation)**

```markdown
## 1. Autonomous Inspection Robots (2023 – 2024)

![Inspection Robot Simulation[large][center]](images/robot-sim.gif)

At a small startup group I served **end-to-end ownership as principal technologist**...
```

**Option 2: Multiple images in sequence**

```markdown
## 1. Autonomous Inspection Robots (2023 – 2024)

At a small startup group I served **end-to-end ownership as principal technologist**, leading the design, verification, software & hardware development, and testing of two robotic cells for high-speed inspection on production lines.

### System Demo

![Robot Simulation[medium][center]](images/robot-sim.gif)

*Simulation environment showing robot motion planning and collision avoidance*

### Deployment in Production

![Robot on Production Line 1[medium]](images/robot-working-1.jpg)
![Robot on Production Line 2[medium]](images/robot-working-2.jpg)

**Hands-on scope:**
- HW/SW system design
...
```

**Option 3: Side-by-side with text**

```markdown
## 1. Autonomous Inspection Robots (2023 – 2024)

![Robot Demo[medium][right]](images/robot-sim.gif)

At a small startup group I served **end-to-end ownership as principal technologist**, leading the design, verification, software & hardware development, and testing of two robotic cells for high-speed inspection on production lines.

The system combines computer vision, motion planning, and real-time control to achieve high-speed, high-precision inspection...

**Hands-on scope:**
- HW/SW system design
...
```

## Step 4: Size and Position Control

### Size Options:

- `[small]` - 300px wide (good for small diagrams or icons)
- `[medium]` - 500px wide (good for most demos)
- `[large]` - 800px wide (good for detailed screenshots)
- No tag - Full width (use for very important visuals)

### Position Options:

- `[left]` - Float left, text wraps on right
- `[right]` - Float right, text wraps on left
- `[center]` - Centered with text above and below
- No tag - Default left alignment

### Examples:

```markdown
# Small thumbnail on the left
![Small icon[small][left]](images/icon.png)

# Medium demo in center
![Demo[medium][center]](images/demo.gif)

# Large screenshot, full attention
![Architecture[large][center]](images/architecture.png)

# Multiple images in a row (they'll stack on mobile)
![Result 1[medium]](images/result1.jpg)
![Result 2[medium]](images/result2.jpg)
```

## Step 5: Optimize Your GIFs

If your GIF files are large (> 5MB), consider compressing them:

1. Go to [ezgif.com/optimize](https://ezgif.com/optimize)
2. Upload your GIF
3. Try these settings:
   - Compression level: 35-50 (balance quality/size)
   - Reduce colors to 128 or 64 if acceptable
   - Reduce frame rate if possible (e.g., 15fps instead of 30fps)
4. Download the optimized version

Target: Keep GIFs under 2-3MB for good loading speed

## Example: Complete Robot Project Section

Here's a complete example you can use:

```markdown
## 1. Autonomous Inspection Robots (2023 – 2024)

![Inspection Robot Simulation[large][center]](images/robot-sim.gif)

*Robot simulation showing motion planning and inspection workflow*

---

At a small startup group I served **end-to-end ownership as principal technologist**, leading the design, verification, software & hardware development, and testing of two robotic cells for high-speed inspection on production lines.

### Production Deployment

![Production Line 1[medium]](images/robot-working-1.jpg)
![Production Line 2[medium]](images/robot-working-2.jpg)

**Hands-on scope:**
- HW/SW system design
- Robot control
- QT HMI
- Power circuits, PLC
- Computer-vision pipelines (YOLO, traditional CV, unsupervised methods) with edge deployment of lightweight models

**Toolchain mastery:**
- Operated 10+ industrial robot families via teach pendants, ROS, vendor SDKs, Ethernet/IP, PROFINET, etc.

**Imaging expertise:**
- Skilled at tailoring optical setups to engineering needs and optimising imaging pipelines
```

## Tips for Good Visual Presentation

1. **Don't overwhelm** - Use 1-2 key visuals per project
2. **Add captions** - Use italic text below images: `*Caption text here*`
3. **Show, don't tell** - A good GIF can replace paragraphs of description
4. **Quality over quantity** - One great demo is better than many mediocre ones
5. **Mobile-friendly** - Test on phone - images auto-resize but should still be clear

## Troubleshooting

**Image not showing?**
- Check filename matches exactly (case-sensitive!)
- Verify file is in `images/` folder
- Check file extension is correct (.jpg, .gif, .png)
- Run with local server (not direct file open)

**GIF not animating?**
- Make sure it's a proper animated GIF
- Try opening the file directly to verify it works
- Check file isn't corrupted

**Image too large/small?**
- Adjust size tag: `[small]`, `[medium]`, or `[large]`
- Or edit the CSS in `style.css` to customize sizes

---

Ready to add your visuals! 🎨

