# GoDaddy Deployment Guide

## Pre-Deployment Checklist

✅ **SEO & Indexing**
- Removed `noindex` meta tags
- Updated `robots.txt` to allow search engine crawling
- Added meta description for better SEO

✅ **Version Control**
- GitHub repository: `hill-auto-group-prototype`
- All files committed and pushed to `main` branch

## Deployment Options for GoDaddy

### Option 1: File Manager Upload (Recommended for Simple Sites)
1. **Access GoDaddy File Manager**
   - Log into your GoDaddy account
   - Go to "My Products" → "Web Hosting" → "Manage"
   - Click "File Manager" or "cPanel File Manager"

2. **Navigate to Public Directory**
   - Go to `public_html` folder (or `www` folder, depending on your hosting)
   - This is your website's root directory

3. **Backup Current Site** (IMPORTANT!)
   - Create a backup folder: `public_html_backup_YYYYMMDD`
   - Copy all current files to the backup folder

4. **Upload New Files**
   - Delete old files (or move to backup)
   - Upload all files from this project:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `robots.txt`
     - `the_hill_companies_logo.png`
     - `car_option_3.mp4`
     - `top_image.jpg`
     - `cadillac.jpeg`
     - `gmc.jpg`
     - Any other assets

5. **Verify**
   - Visit your domain to ensure everything loads
   - Check that video plays
   - Test all links and forms

### Option 2: FTP/SFTP Upload
1. **Get FTP Credentials**
   - In GoDaddy cPanel, go to "FTP Accounts"
   - Note your FTP host, username, and password

2. **Use FTP Client** (FileZilla, Cyberduck, etc.)
   - Connect to your GoDaddy server
   - Navigate to `public_html`
   - Upload all project files

### Option 3: Git Integration (If Available)
Some GoDaddy hosting plans support Git:
1. SSH into your server
2. Clone your repository
3. Set up automatic deployment

## Post-Deployment Steps

### 1. Verify HTTPS
- Ensure your site is accessible via `https://hillautogroup.com`
- GoDaddy should provide SSL certificates automatically

### 2. Test All Functionality
- [ ] Hero video plays automatically
- [ ] Navigation links work
- [ ] Contact form submits (EmailJS)
- [ ] Dealership card links open correctly
- [ ] Mobile responsiveness
- [ ] All images load

### 3. Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://hillautogroup.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap (if you create one)

### 4. Update DNS (If Needed)
- If using a new domain or subdomain
- Update DNS records in GoDaddy
- Allow 24-48 hours for propagation

### 5. Monitor Performance
- Use Google PageSpeed Insights
- Monitor with Google Analytics (if added)
- Check server logs for errors

## Important Notes

⚠️ **Before Going Live:**
- Remove any development/debug code
- Test EmailJS form submission
- Verify all external links
- Check mobile responsiveness
- Test on multiple browsers

⚠️ **File Permissions:**
- HTML/CSS/JS files: `644` (readable by all)
- Directories: `755` (executable)

⚠️ **EmailJS Configuration:**
- Ensure EmailJS service is active
- Verify template IDs are correct
- Test form submission after deployment

## Rollback Plan

If something goes wrong:
1. Access File Manager
2. Delete new files
3. Restore from `public_html_backup_YYYYMMDD`
4. Contact support if needed

## Support Resources

- GoDaddy Support: 1-480-505-8877
- GoDaddy Help Center: https://www.godaddy.com/help
- GitHub Repository: https://github.com/neilmorr/hill-auto-group-prototype

