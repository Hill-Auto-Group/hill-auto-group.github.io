# EmailJS Setup Guide - Hill Auto Group

## 🚀 **Step-by-Step EmailJS Configuration**

### **Step 1: Create EmailJS Account**

1. **Go to [emailjs.com](https://emailjs.com)**
2. **Sign up** for a free account
3. **Verify your email** address

### **Step 2: Connect Email Service**

1. **Go to Email Services** in your dashboard
2. **Click "Add New Service"**
3. **Choose your email provider**:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP**
4. **Follow the setup instructions**
5. **Save your service** and note the **Service ID**

### **Step 3: Create Email Template**

1. **Go to Email Templates** in your dashboard
2. **Click "Create New Template"**
3. **Use this template**:

```html
Subject: New Contact Form Submission - Hill Auto Group

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Preferred Dealership: {{dealership}}
Message: {{message}}

---
This message was sent from the Hill Auto Group contact form.
```

4. **Save the template** and note the **Template ID**

### **Step 4: Get Your Public Key**

1. **Go to Account** in your dashboard
2. **Copy your Public Key**

### **Step 5: Update Your Code**

Replace the placeholders in `script.js`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your service ID
// Replace YOUR_TEMPLATE_ID with your template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

### **Example with Real Values:**

```javascript
emailjs.init("user_abc123def456");

emailjs.send('service_xyz789', 'template_contact_form', formData)
```

## 🎯 **Testing Your Setup**

1. **Fill out the contact form** on your site
2. **Submit the form**
3. **Check your email** for the notification
4. **Check browser console** for success/error messages

## 📧 **Email Template Customization**

### **Professional Template Example:**

```html
Subject: New Customer Inquiry - Hill Auto Group

Dear Hill Auto Group Team,

A new customer inquiry has been submitted:

Customer Information:
- Name: {{name}}
- Email: {{email}}
- Phone: {{phone}}
- Preferred Dealership: {{dealership}}

Message:
{{message}}

Please respond to this inquiry within 24 hours.

Best regards,
Hill Auto Group Website
```

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **"Service not found" error**:
   - Check your Service ID is correct
   - Verify your email service is connected

2. **"Template not found" error**:
   - Check your Template ID is correct
   - Verify template variables match form fields

3. **Emails not sending**:
   - Check your Public Key is correct
   - Verify email service connection
   - Check browser console for errors

### **Testing Tips:**

1. **Use Gmail** for initial testing
2. **Check spam folder** for test emails
3. **Test on different browsers**
4. **Check mobile functionality**

## 💰 **Pricing**

- **Free Tier**: 200 emails/month
- **Starter Plan**: $15/month for 1,000 emails
- **Business Plan**: $35/month for 5,000 emails

## 🚀 **Deployment**

1. **Update your code** with real EmailJS credentials
2. **Test locally** first
3. **Push to GitHub** for Netlify deployment
4. **Test on live site**

## 📞 **Support**

- **EmailJS Docs**: [emailjs.com/docs](https://emailjs.com/docs)
- **EmailJS Support**: Available in dashboard
- **Community Forum**: [emailjs.com/community](https://emailjs.com/community)

---

**Your contact form will now send real emails to your team!** 🚗✨ 