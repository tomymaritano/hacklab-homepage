# 🎯 Sanity CMS Setup Guide

## 1. Create Sanity Account & Project

1. Go to [sanity.io](https://sanity.io)
2. Sign up with GitHub
3. Create new project:
   - Project name: "Hacklab Portfolio"
   - Dataset: "production"
   - Template: "Clean project"

## 2. Environment Variables

Create `.env.local`:
```bash
cp .env.local.example .env.local
```

Add your project details:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Initialize Sanity Studio

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize studio in your project
sanity init
# Choose: Use existing project
# Select your project
# Choose: Clean project
```

## 4. Deploy Sanity Studio

```bash
# Deploy studio
sanity deploy

# Your studio will be available at:
# https://your-project-name.sanity.studio
```

## 5. Content Structure

### Projects Schema
- Title, Slug, Description
- Year, Platform, Tech Stack
- Metrics (Users, ROI, Growth)
- Images (Main + Gallery)
- Type (Main/Collaboration/Side)

### About Schema  
- Name, Title, Description
- Profile Image, Location
- Bio (Rich Text)
- Experience Timeline
- Skills & Social Links

## 6. Migrate Existing Content

Use the studio to add your current projects:

### Example Project Entry:
```
Title: Unicoin Web Platform
Slug: unicoin
Year: 2022-2024
Platform: Web Application
Stack: [React, Node.js, Web3, Blockchain APIs]
Users: 1,200+ connected wallets
Type: Main Project
Featured: true
```

## 7. Next.js Integration

The CMS is already integrated with:
- `/lib/sanity.js` - Client & queries
- `/lib/sanity-helpers.js` - Helper functions
- `/components/sanity-image.js` - Optimized images

## 8. Usage Examples

```javascript
// Get all projects
import { getAllProjects } from '../lib/sanity-helpers'
const projects = await getAllProjects()

// Get single project
import { getProject } from '../lib/sanity-helpers'
const project = await getProject('unicoin')

// Get about content
import { getAbout } from '../lib/sanity-helpers'
const about = await getAbout()
```

## 🚀 Free Tier Limits
- ✅ Unlimited API requests
- ✅ 3 users
- ✅ 5GB asset storage
- ✅ 2 datasets

Perfect for a portfolio! 💪