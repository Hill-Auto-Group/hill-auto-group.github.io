# Background Video Setup Guide

## 🎥 How to Add Your MP4 Video

### Step 1: Prepare Your Video File
1. **Optimize your MP4 file** for web:
   - **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
   - **Duration**: 10-30 seconds (loops seamlessly)
   - **File size**: Keep under 10MB for fast loading
   - **Format**: MP4 with H.264 codec

### Step 2: Add Your Video File
1. **Place your MP4 file** in the same directory as `index.html`
2. **Rename it to** `hero-video.mp4` (or update the source path in the HTML)

### Step 3: File Structure
```
your-project/
├── index.html
├── styles.css
├── script.js
├── hero-video.mp4    ← Your video file here
└── README.md
```

## 🎬 Video Best Practices

### Content Recommendations
- **Luxury car footage**: Driving shots, showroom views, or brand imagery
- **Smooth motion**: Avoid jerky camera movements
- **Good lighting**: Well-lit scenes work better with the overlay
- **Loop seamlessly**: End should flow naturally into the beginning

### Technical Specifications
- **Aspect ratio**: 16:9 (widescreen) works best
- **Frame rate**: 24-30 fps
- **Bitrate**: 2-5 Mbps for good quality
- **Audio**: Remove audio or keep very low (video is muted by default)

## 🔧 Customization Options

### Change Video Source
If you want to use a different filename or path:

```html
<!-- In index.html, line 35 -->
<source src="your-video-name.mp4" type="video/mp4">
```

### Adjust Video Overlay
To change the darkness of the overlay:

```css
/* In styles.css, around line 95 */
.hero-overlay {
    background: rgba(0, 0, 0, 0.4); /* 0.4 = 40% darkness */
}
```

### Video Positioning
To adjust how the video is positioned:

```css
/* In styles.css, around line 85 */
.hero-background video {
    object-position: center; /* Options: center, top, bottom, left, right */
}
```

## 📱 Mobile Considerations

### Performance
- **Mobile devices** may have slower video playback
- **Consider creating a mobile-optimized version** (lower resolution)
- **Test on actual devices** to ensure smooth playback

### Mobile-Specific Video
To use a different video for mobile devices:

```html
<video autoplay muted loop playsinline>
    <source src="hero-video-desktop.mp4" type="video/mp4" media="(min-width: 768px)">
    <source src="hero-video-mobile.mp4" type="video/mp4" media="(max-width: 767px)">
    <div class="hero-fallback"></div>
</video>
```

## 🚀 Alternative: YouTube Video

If you prefer to use a YouTube video instead:

```html
<video autoplay muted loop playsinline>
    <source src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID" type="video/mp4">
    <div class="hero-fallback"></div>
</video>
```

## ⚠️ Important Notes

### Browser Compatibility
- **Modern browsers** support HTML5 video well
- **Fallback image** will show if video fails to load
- **Mobile browsers** may have restrictions on autoplay

### Performance Tips
- **Compress your video** using tools like HandBrake or FFmpeg
- **Consider WebM format** for better compression (add as additional source)
- **Test loading times** on slower connections

### Accessibility
- **Video is muted by default** (required for autoplay)
- **Play button** allows users to control playback
- **Fallback image** ensures content is always visible

## 🛠️ Troubleshooting

### Video Not Playing
1. Check file path is correct
2. Ensure video format is MP4 with H.264 codec
3. Verify file isn't corrupted
4. Check browser console for errors

### Video Too Large/Slow
1. Compress video to smaller file size
2. Reduce resolution to 1280x720
3. Lower bitrate to 2-3 Mbps
4. Consider using WebM format as well

### Mobile Issues
1. Test on actual mobile devices
2. Create mobile-optimized version
3. Check if autoplay is blocked
4. Ensure video is under 5MB for mobile

---

**Your video should now create a stunning, dynamic hero section that perfectly complements the luxury car dealership theme!** 🚗✨ 