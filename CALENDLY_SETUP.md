# 📅 Calendly Setup Guide for Gradient Logic

## Complete step-by-step guide to set up professional meeting scheduling

---

## 🚀 Quick Setup (15 minutes)

### Step 1: Create Calendly Account

1. Go to https://calendly.com/signup
2. Sign up with **hello@gradient-logic.com** (recommended) or your personal email
3. Choose the **FREE plan** to start (you can upgrade later)
4. Complete profile:
   - Name: Your name or "Gradient Logic Team"
   - Company: Gradient Logic
   - Role: Founder / Consultant

---

### Step 2: Create "Discovery Call" Event Type

1. Click **"+ New Event Type"** in dashboard
2. Choose **"One-on-One"**
3. Configure the event:

**Event Name:**
```
Discovery Call - Investment Research Automation
```

**Location:**
Choose one:
- ✅ **Google Meet** (recommended - free, professional)
- Zoom (if you have a paid account)
- Phone call (less professional for first call)
- Microsoft Teams

**Description / Instructions:**
```
Let's discuss how AI research automation can save your team 35+ hours per week.

In this 20-minute call, we'll:
• Understand your current research workflow
• Show you a live demo of the platform
• Answer your specific questions
• Discuss pricing and next steps

No sales pressure - just an honest conversation about whether this is a fit.

📧 Questions before the call? Email hello@gradient-logic.com
💬 Prefer async? Join our Discord: https://discord.gg/sFAWANRvV3
```

**Duration:**
- Set to **20 minutes** (shorter feels less intimidating)
- Or 30 minutes if you want more time

**Link:**
```
gradient-logic/discovery-call
```
(This creates: calendly.com/gradient-logic/discovery-call)

---

### Step 3: Configure Availability

**Buffer Time:**
- Before event: 15 minutes (prep time)
- After event: 15 minutes (follow-up notes)

**Date Range:**
- Rolling: 60 days into the future
- Or: specific date range if you want to limit booking

**Available Hours:** (Recommended for freelancers)
- Monday-Friday: 9am - 5pm (your local time)
- Leave 12-1pm blocked for lunch
- No weekends (maintain boundaries)

**Time Slot Increments:**
- Every 30 minutes (gives you flexibility)

---

### Step 4: Add Custom Questions

Ask these before the call so you can prepare:

**Question 1:**
```
What's your role?
Type: One-line text
Required: Yes
```

**Question 2:**
```
What's your firm's AUM (assets under management)?
Type: Multiple choice
Options:
- Under $50M
- $50M - $250M
- $250M - $1B
- $1B+
- Prefer not to say
Required: No
```

**Question 3:**
```
What's your current research workflow? (e.g., what tools do you use, how much time do you spend on research per week?)
Type: Multi-line text
Required: Yes
```

**Question 4:**
```
What are you hoping to accomplish with research automation?
Type: Multi-line text
Required: Yes
```

**Question 5:**
```
How did you hear about us?
Type: Multiple choice
Options:
- LinkedIn
- Twitter/X
- Reddit
- Web search
- Referral
- Other
Required: No
```

---

### Step 5: Customize Email Confirmations

**Email Confirmation Message:**
```
Thanks for booking a call with Gradient Logic! 🎉

I'm looking forward to learning about your research workflow and showing you how we help investment teams save 35+ hours per week.

Before our call:
• Try our interactive demo: https://gradient-logic.com
• Join our Discord for questions: https://discord.gg/sFAWANRvV3
• Check out our comparison with AlphaSense/Bloomberg: [link to competitor page]

See you on [Day, Date] at [Time]!

Best,
[Your Name]
Gradient Logic
https://gradient-logic.com
```

**Email Reminder:**
- Send 1 hour before (default)
- Keep Calendly's default reminder

---

### Step 6: Set Up Calendar Sync

**Connect Your Calendar:**
1. Go to Settings → Calendar Connection
2. Connect **Google Calendar** (recommended) or Outlook
3. Choose which calendars to check for conflicts
4. Enable "Check for conflicts"

**Create Events In:**
- Choose your main work calendar
- Event title: "Discovery Call - [Invitee Name]"
- Add location automatically: Yes

---

### Step 7: Update Your Website

1. Copy your Calendly link:
```
https://calendly.com/gradient-logic/discovery-call
```

2. Replace the placeholder in your website:
```
File: app/page.tsx
Find: https://calendly.com/gradient-logic/discovery-call
Replace with: [your actual Calendly link]
```

3. Deploy the updated website (already done if you're reading this!)

---

## 🎨 Upgrade Options (Optional)

### Calendly Professional ($12/month)

Worth it if you:
- Want to remove Calendly branding
- Need SMS reminders (reduces no-shows by 50%)
- Want custom branding (logo, colors)
- Need workflows/automation (send follow-up sequences)

**Upgrade when:** You're getting 10+ bookings/month

---

### Alternative: Cal.com (Free, Open Source)

If you want more control and no branding:
1. Sign up at https://cal.com
2. Same setup process as Calendly
3. 100% free, no branding
4. Can self-host if you want

**Trade-off:** Slightly less polished UI, but functionally equivalent

---

## 📧 Post-Call Workflow

### Immediately After Call:

**1. Send Follow-up Email (Template):**
```
Subject: Great chatting + next steps

Hi [Name],

Thanks for taking the time to chat today! Really enjoyed learning about [their specific situation].

As discussed, here's what happens next:

1. [Action Item 1 - e.g., I'll send you 3 sample reports by EOD]
2. [Action Item 2 - e.g., You'll review them and share feedback]
3. [Action Item 3 - e.g., We'll reconnect [date] to discuss trial]

Resources we mentioned:
• Interactive demo: https://gradient-logic.com
• Pricing page: [link]
• Comparison with [competitor]: [link]
• Discord community: https://discord.gg/sFAWANRvV3

Questions? Just reply to this email or message me on Discord.

Looking forward to [next step]!

Best,
[Your Name]
```

**2. Log in CRM/Notes:**
- Use Notion, Airtable, or even Google Sheets
- Track: Name, Company, AUM, Pain Points, Next Step, Follow-up Date

**3. Set Reminder:**
- Calendar reminder for follow-up date
- Or use Calendly workflows (Pro plan)

---

## 🎯 Advanced: Calendly + AI Voice Assistant Integration

Once you set up **Bland AI** (from previous guide):

### Workflow:
```
1. Prospect calls your AI assistant
   ↓
2. AI qualifies them, answers basic questions
   ↓
3. If qualified: AI offers to book a call
   ↓
4. AI sends them your Calendly link via SMS
   ↓
5. Prospect books directly
   ↓
6. You get calendar invite + their pre-call answers
```

### How to Connect (Bland AI + Calendly):

**In your Bland AI prompt, add:**
```
If the caller wants to schedule a demo or speaks with a human:

Say: "I can book a time for you to speak with our founder right now. 
I'm sending you a text message with the booking link. You can pick 
any time that works for you - usually within 24-48 hours."

Then use the send_sms function with this message:
"Thanks for your interest in Gradient Logic! Book a time to chat here: 
https://calendly.com/gradient-logic/discovery-call

Looking forward to it!
- Gradient Logic Team"
```

---

## 📊 Tracking Metrics

### Week 1-4 Metrics to Watch:

1. **Booking Rate:**
   - Website visits → Calendly clicks → Bookings
   - Target: 5-10% of visitors book

2. **Show Rate:**
   - Bookings → Actually show up
   - Target: 70-80% show rate
   - (Send reminder 1hr before to improve this)

3. **Conversion Rate:**
   - Calls → Trials → Paid
   - Target: 30% call → trial, 50% trial → paid

4. **Response Time:**
   - How fast do you follow up after call?
   - Target: Within 2 hours

---

## 🚨 Common Issues & Fixes

### Issue: High no-show rate (>30%)

**Fix:**
- Add SMS reminders (Calendly Pro)
- Send personal email 4 hours before
- Reduce booking window to 7 days (not 60)
- Qualify better (add more screening questions)

### Issue: Wrong people booking

**Fix:**
- Add more qualifying questions
- Make it clear who it's for ("For investment firms managing $50M+")
- Add application form before booking

### Issue: Too many bookings, overwhelmed

**Fix:**
- Limit to 2-3 calls per day
- Increase duration (20min → 30min)
- Batch calls (only Tue/Thu)
- Raise qualification bar

### Issue: Getting spam bookings

**Fix:**
- Remove public link from obvious places
- Require company email (not Gmail/Yahoo)
- Add CAPTCHA (Calendly Pro)
- Screen with custom questions

---

## ✅ Quick Launch Checklist

Before making your Calendly link public:

- [ ] Account created and verified
- [ ] Event type created ("Discovery Call")
- [ ] Duration set (20-30 minutes)
- [ ] Calendar connected (Google/Outlook)
- [ ] Availability configured (9-5, M-F)
- [ ] Location added (Google Meet)
- [ ] Custom questions added (4-5 questions)
- [ ] Email confirmations customized
- [ ] Website link updated
- [ ] Test booking (book yourself, test the flow)
- [ ] Confirmation email looks good
- [ ] Google Meet link works
- [ ] Buffer times set (15 min before/after)

---

## 🎓 Pro Tips

1. **Block Prep Time:**
   - 15 minutes before each call
   - Review their answers, look up their company, prepare demo

2. **Block Follow-up Time:**
   - 15 minutes after each call
   - Send email immediately while it's fresh
   - Update CRM/notes

3. **Batch Your Calls:**
   - Group calls on Tue/Thu only
   - Get into "sales mode" vs context switching daily

4. **Prepare Demo Environment:**
   - Have demo companies pre-loaded
   - Test all links before call
   - Close unnecessary tabs/apps
   - Good lighting, quiet space

5. **Record Calls (with permission):**
   - "Mind if I record for note-taking?"
   - Use Zoom/Google Meet recording
   - Review later to improve pitch

6. **Track Everything:**
   - Use a simple spreadsheet
   - Columns: Name, Date, Company, AUM, Outcome, Next Step, Notes
   - Review weekly to see patterns

---

## 📱 Mobile App

Download Calendly mobile app:
- iOS: [App Store Link]
- Android: [Play Store Link]

Get notifications, reschedule, join calls from phone.

---

## 🎉 You're Ready!

Your Calendly is now set up and ready to start booking calls. 

**Next Steps:**
1. Test it by booking yourself
2. Share the link in your LinkedIn/Twitter bio
3. Add it to email signature
4. Start promoting your site!

**Questions?**
Join the Gradient Logic Discord and ask the community!

---

*Setup Time: ~15 minutes*
*Last Updated: January 2025*

