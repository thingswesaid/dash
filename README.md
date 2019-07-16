# DASH

## todo

- [x] REMOVE WATCH AGAIN MODAL AND GIF
- [x] refactor Promo modal show up dates (use String in SitePromo and use same logic used for modal)
- [x] promo should expire (use in one month)
- [x] implement DYNAMIC PRICING (2.99 off for 12 hours)
- [x] remove amount from server prisma
- [x] finish connect users to sendgrid
- [x] add button linkTo to promo banner and promo section
- [x] create modal for discount promo
- [x] Follow SEO practices to rank up in Google (main external source for YT videos)
- [x] build unsubscribe email page
- [x] Rebuild search component
- [x] Figure out search for pick a card - should show only main reading (maybe page) - don't show options
- [x] Revisit overall user access check
- [x] Build Login page (make it a popup instead as shared component) and change navbar item to profile when logged in 
- [x] Figure out PROMO check and redeem with new login system
- [x] Show Loader on homepage while loading dropdownXL
- [x] Adapt Navbar for mobile
- [x] build USER PAGE (timeline)
  - all videos purchased
  - promos active and used
  - personal quotes 
- [x] Create help desk page to answer
  - where do I see my promo code
  - where do I see the videos I purchased
  - how long are the viewable for
- [x] Lower price for India - find bug and fix
- [ ] Build Dashboard to quickly handle customer service
  - check everything about that user (order + videos + promos)
  - assign video to user manually
  - assign promos manually
  - create order when issue (paymentId: manual(gen-ID))
  - user active / not active
- [ ] Build CMS for tarotreaders.net
  - add video
  - change logo / header / mission
  - check orders and payments
  - social media links
- [ ] Wasabi or AWS api to upload images - JS library to compress and blur images in automatic
- [ ] Schedule videos publish date
- [ ] User page - video hover show overlay with title of the video
- [ ] Create page with all readers (will be in the footer)
- [ ] Add settings to User page
  - refer friends
  - external ads and video promos 
  - Settings: Change email address / password - personalize your experience
- [ ] Personalize your experience form popup modal
  - which signs you're interested into
  - type of reading (zodiac - pickacard)
  - more
- [ ] Get lucky popup
- [ ] Create item PICKACARD in navbar and create page (copy style from Raise.com)
- [ ] For search point to keywords instead of name and make it Elastic Search
- [ ] build recommendation engine based on zodiac signs and previously researched keywords
- [ ] Suggest pick-a-card topic (when NO RESULT)
  - dropdownXl
  - pick-a-card page
  - header with main image + title + video preview (only first 30 secs then keep watching on youtube)
  - watch on YouTube button
  - description + options
  - watch the signs section
  - more for you (suggest videos)
  - subscribe for notifications
  - -webkit-box-shadow: 0 2px 6px 0 #e0e2e3; box-shadow: 0 2px 6px 0 #e0e2e3;
- [ ] Gif search input placeholder - typing "are you thinking about me", "is it over" ...
- [ ] Marketing campaign
	- create buy 1 get 1 free emails for Secret reading
	- create marketing campaigns bulk email (don't miss out! 4.99 for all videos at the end of the month)
- [ ] Code refactor
  - TECH: remove all `) : ''}` from ternary operators
  - jwt sign and verify refactor
  - use lodash where possible
  - change link in Video to extended
  - consolidate react-media with react-size (go for react size)
  - merge Utils
  - convert to react HOOKS
- [ ] Build single sign pages with all readings for a sign (Capricorn, Leo) + sign description and tips for that year - TODO when have more readings
- [ ] Build prices page + monthly pass for specific emails - monthly payment 29.99 (add promos on navbar)  
  - add option to checkout pannel
  - videos downloadable - BFF now available
- [ ] Add images (sad and happy) to unsubscribe emails
- [ ] Create OUR MISSION section
- [ ] Fix Google ecommerce track purchase
- [ ] Checkout payment redesign 
  - PayPal to server
  - PayPal, Google Pay, Venmo, Samsung Pay, Skrill, Credit Cards, Paytm (India only)
    - suggest new payment method 
- [ ] refer a friend (one free video for every purchase) - create logic + instruction page + emails confirmation
- [ ] Build following emails: 
	- we'll answer ASAP
	- account suspanded for suspicious activity
- [ ] DASH | Find tool to track income and expenses 
  - laptop, trip, speakers, food, amazon orders, all internet services, editing fees