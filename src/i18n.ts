import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Embed resources directly to bypass file loading issues.
const resources = {
  en: {
    translation: {
      "nav": {
        "links": [
          { "href": "/", "label": "Home" },
          { "href": "/services", "label": "Services" },
          { "href": "/portfolio", "label": "Our Work" },
          { "href": "/special-offer", "label": "Special Offer" },
          { "href": "/contact", "label": "Contact" }
        ],
        "getStarted": "Get Started"
      },
      "hero": {
        "eyebrow": "Strategy, design & engineering",
        "title": "<0>Clarity</0> in a Complex<1> Digital World</1>",
        "subtitle": "We don't just build websites; we build digital experiences that drive growth, engage audiences, and deliver measurable results.",
        "getStarted": "Start Your Project",
        "learnMore": "See Our Process"
      },
      "stats": {
        "title": "Proven Results, Delivered with Precision",
        "items": [
          { "endValue": 50, "suffix": "+", "label": "Projects Completed" },
          { "endValue": 98, "suffix": "%", "label": "Client Satisfaction" },
          { "textValue": "24/7", "label": "Support Available" }
        ]
      },
      "services": {
        "title": "Our Services",
        "subtitle": "Our three core disciplines work in synergy to deliver end-to-end digital solutions. We transform complex challenges into elegant, high-performance products.",
        "items": [
          {
            "serviceId": "strategy",
            "title": "Digital Strategy & Consulting",
            "description": "Success starts with a clear roadmap. We dive deep into your market, audience, and objectives to build a data-driven digital strategy that ensures every decision propels you toward your goals.",
            "process": [
              "In-depth Market & Competitor Analysis",
              "User Persona & Journey Mapping",
              "Strategic Technology Stack Consultation",
              "Performance Metrics & KPI Definition"
            ]
          },
          {
            "serviceId": "design",
            "title": "UI/UX Design & Branding",
            "description": "We create intuitive and visually stunning interfaces that captivate users and drive action. Our design process blends artistic creativity with rigorous user-centric research to deliver experiences that are both beautiful and effective.",
            "process": [
              "Collaborative Wireframing & Prototyping",
              "High-Fidelity UI & Visual Design",
              "Comprehensive Brand Identity & Style Guides",
              "Iterative Usability Testing & Feedback Loops"
            ]
          },
          {
            "serviceId": "development",
            "title": "Web & Mobile Development",
            "description": "Our code is our craft. We build robust, scalable, and secure web and mobile applications using cutting-edge technologies. We write clean, maintainable code designed for long-term performance and growth.",
            "process": [
              "Agile Development & Iterative Sprints",
              "Scalable Front-end & Back-end Architecture",
              "Custom API Integration & Development",
              "Rigorous Quality Assurance & Performance Testing"
            ]
          }
        ],
        "details": {
          "ourProcess": "Our Process",
          "clientFeedback": "Client Feedback",
          "relatedWork": "Related Work"
        }
      },
      "detailedServices": {
        "title": "A Closer Look at Our Services",
        "categories": [
          {
            "title": "Strategy",
            "items": [
              { "id": "brandAudits", "title": "Brand Audits", "description": "Whether you’re growing, just starting, or bringing your business online, here’s how we help:", "process": ["Chat with you about your goals, experience, and vision (brand new or seasoned)", "Brand Review: audit your existing assets or help you build foundations from scratch", "Stakeholder Insights: interview your team, customers, or brainstorm together if you’re solo", "Market Analysis: compare you to competitors, tailored to your market stage", "Scorecard: get clarity on strengths, gaps, and potential", "Workshop: collaborative session where we prioritize next moves fitting your journey", "Action Plan: custom growth roadmap, even if you’re starting from zero"] },
              { "id": "marketResearch", "title": "Market Research", "description": "Insights tailored to your journey:", "process": ["Discovery: define what success means, whether refining or launching", "Mapping: scope your industry, whether new, local, or global", "Data Collection: use tools right-sized for your business maturity", "Analysis: get market trends and competitive insights you can act on today", "Strategy: turn findings into simple next steps, whether launching or scaling"] },
              { "id": "uxStrategy", "title": "User Experience (UX) Strategy", "description": "Great experience at every stage:", "process": ["Discovery: map users’ digital or in-person journey", "Research: we do deep dives or help you talk to your very first customers", "Fixes: identify pain points, offer ideas for new or growing brands", "Prototyping: sketch flows that match where you are now", "Testing: validate for improvement, launch, or first impression", "Playbook: step-by-step guide no matter your starting line"] }
            ]
          },
          {
            "title": "Brand Identity",
            "items": [
              { "id": "logoDesign", "title": "Logo Design", "description": "We create a powerful, timeless logo that serves as the foundation for your visual identity.", "process": ["Discovery: share your story, whether long-established or a fresh idea", "Inspiration: choose styles and directions that match or elevate your brand", "Concepting: review designs whether it’s your first or next iteration", "Refinement: collaborate at your own pace", "Delivery: files and how-tos, ready for every touchpoint"] },
              { "id": "visualIdentity", "title": "Visual Identity", "description": "We build a complete visual system—from colors to typography—that makes your brand instantly recognizable.", "process": ["Audit or brainstorm: assess your current look or ideate from the ground up", "Asset creation: colors, type, icons for new launches or rebrands", "Templates: practical tools for every channel, beginner-friendly", "Brand kit: easy instructions so your identity is always clear"] },
              { "id": "brandGuidelines", "title": "Brand Guidelines", "description": "We deliver a comprehensive rulebook for your brand to ensure consistency across your entire team and all platforms.", "process": ["Inventory: gather what you have, or start from scratch together", "Rules: simple standards for existing or new brands", "Training: onboarding for your team or just you", "Updates: support as you evolve"] }
            ]
          },
          {
            "title": "Web Development",
            "items": [
              { "id": "customWebApps", "title": "Custom Web Applications", "description": "Your needs, your scale:", "process": ["Discovery: explore your business processes, whether upgrading or creating anew", "Planning: build technical solutions for growth or for first-time efficiency", "Prototyping: see your solution come to life at your pace", "Development: receive regular updates, test as you go", "Testing/QA: iron out issues for smooth launch (brand new or advanced)", "Launch: deploy with support and confidence for your team", "Training: tailored learning so you have control, beginners welcome"] },
              { "id": "performanceOptimization", "title": "Performance Optimization", "description": "Speed and reliability for everyone:", "process": ["Audit: review your current site, first-time or established", "Diagnosis: breakdown improvements that matter most to your goals", "Implementation: fix issues or establish best habits for starters", "Reporting: compare results, ensure you know what’s working"] },
              { "id": "cmsDevelopment", "title": "CMS Development", "description": "Content for every business size:", "process": ["Consultation: recommend an easy-to-use CMS fit for where you are", "Setup: customize or build from the ground up", "Content Transfer: migrate old content or create new templates", "Training: simple videos and guides to make updates easy for anyone", "Support: here for every question, beginner or pro"] }
            ]
          },
          {
            "title": "Digital Marketing",
            "items": [
              { "id": "seo", "title": "SEO Optimization", "description": "All skill levels welcome:", "process": ["Audit: deep dive or quick checkup for your website", "Research: choose keywords for new sites or growth strategies", "Technical setup: build or improve your search foundation", "Content: map topics whether you’re starting your blog or boosting reach", "Reporting: clear feedback to help you grow"] },
              { "id": "socialMedia", "title": "Social Media Marketing", "description": "Plan and post with confidence:", "process": ["Audit: review your profiles, or help you set up from scratch", "Strategy: tailored calendars for new launches or established brands", "Content: create, schedule, and engage together", "Refine: monthly reviews to evolve as you grow"] },
              { "id": "ppc", "title": "PPC Advertising", "description": "Budget and goals for every stage:", "process": ["Setup: plan your campaign, whether brand new or optimizing spend", "Targeting: find the right audience for now and later", "Creative: design ads that make an impact", "Tracking: real-time feedback so you learn and improve"] }
            ]
          }
        ]
      },
      "differentiators": {
        "title": "Why Choose YourDigitalStep?",
        "subtitle": "Our core principles set us apart. We're more than a service provider; we're your dedicated partner in digital excellence, committed to a process that guarantees success.",
        "items": [
          {
            "title": "Radical Transparency",
            "description": "No black boxes. We believe in total transparency, giving you a real-time view of progress through shared communication channels and project boards. You're a collaborator at every stage, ensuring complete alignment and peace of mind.",
            "features": ["Shared Slack channels", "Weekly sync-up calls", "Access to project boards"]
          },
          {
            "title": "Engineering Mindset",
            "description": "We approach every project with an engineering mindset. Our focus is on creating solutions that are not just visually appealing but are architected for scalability, performance, and long-term maintainability. We build things to last.",
            "features": ["Modular architecture", "Comprehensive documentation", "Code quality standards"]
          },
          {
            "title": "Data-Driven Decisions",
            "description": "Intuition is good; data is better. We eliminate guesswork by grounding every strategic and design decision in comprehensive research and analytics. Our data-driven approach ensures we're not just being creative—we're being effective.",
            "features": ["A/B testing protocols", "User behavior analysis", "Post-launch performance monitoring"]
          }
        ]
      },
      "portfolio": {
        "title": "Our Work",
        "subtitle": "We've had the privilege of collaborating with a diverse range of clients to produce work we're proud of.",
        "items": [
          {
            "image": "portfolio_ambrees_main",
            "category": "E-commerce & Branding",
            "title": "Ambrees – Brand & E-Commerce Solution",
            "description": "A complete digital identity and seamless online store experience, driving sales through stunning visuals, targeted ad campaigns, and hassle-free shopping.",
            "tags": ["Brand Identity", "Shopify", "UI/UX Design", "Digital Ads", "SEO"],
            "serviceId": "design",
            "details": {
              "title": "Ambrees – Complete Brand & E-Commerce Solution",
              "subtitle": "From First Logo Sketch to Online Store Launch & Ad Campaigns",
              "clientVision": "Ambrees needed a memorable brand identity and an inviting online shop where customers instantly connect with their products. They wanted perfectly crafted product visuals, easy navigation, and powerful advertising to bring new customers to their site.",
              "ourSolution": [
                "Developed Ambrees’ signature logo and full brand guidelines",
                "Designed all website elements, product photography, and consistent graphics for a unified look",
                "Built a modern, user-friendly online store allowing quick browsing and secure purchases",
                "Launched digital ad campaigns to drive targeted traffic and boost sales",
                "Set up Google Analytics for actionable insights and campaign tracking",
                "Implemented advanced SEO so Ambrees is easily found by shoppers online"
              ],
              "result": "Ambrees now stands out with a cohesive digital identity and a seamless online store experience. Customers enjoy stunning visuals, hassle-free shopping, and a brand they remember.",
              "screenshots": [
                  "portfolio_ambrees_ss1",
                  "portfolio_ambrees_ss2",
                  "portfolio_ambrees_ss3"
              ]
            }
          },
          {
            "image": "portfolio_curraterra_main",
            "category": "Wellness & Content Platform",
            "title": "Curra Terra – Wellness Blog & Brand Ecosystem",
            "description": "A complete brand ecosystem and wellness blog, designed to build a trusted community through personal stories and practical science.",
            "tags": ["Brand Identity", "Web Development", "Content Strategy", "Monetization", "SEO"],
            "serviceId": "strategy",
             "details": {
              "title": "Curra Terra – Wellness Blog & Brand Ecosystem",
              "subtitle": "Where Personal Story Meets Practical Wellness",
              "clientVision": "Driven by their own journey with gut health, the Curra Terra founder wanted more than a blog. Their dream: a welcoming space where honest stories and helpful science could inspire others built on trust, simplicity, and community.",
              "ourSolution": [
                "Designed a unique logo and complete brand style, making the site warm, modern, and instantly recognizable",
                "Structured intuitive pages and categories for easy discovery recipes, guides, personal stories, and wellness tips",
                "Simplified all the technical set-up: hosting, navigation, mobile experience, and seamless content editing",
                "Guided the creation of a user-focused sitemap so every visitor finds what matters to them, fast",
                "Integrated essential Google tools: Analytics for insights, Search Console for discoverability, and smooth AdSense approval",
                "Developed a step-by-step monetization plan helping the founder move from sharing passion to building a sustainable wellness resource",
                "Offered hands-on help with ads, audience building, and making technical hurdles invisible for the client"
              ],
              "result": "Curra Terra is now a trusted wellness hub: easy to browse, beautiful to read, and uniquely personal. The founder connects directly with a growing community empowering others while steadily building a platform ready for growth and revenue.",
              "screenshots": [
                "portfolio_curraterra_ss1",
                "portfolio_curraterra_ss2",
                "portfolio_curraterra_ss3"
              ]
            }
          },
          {
            "image": "portfolio_villabaltic_main",
            "category": "Hospitality & Booking",
            "title": "Villa Baltic Sea – Booking & Visibility",
            "description": "An elegant hospitality website with an integrated booking system, optimized for local search and social media to attract more guests.",
            "tags": ["Booking System", "Web Development", "Local SEO", "Social Media"],
            "details": {
              "title": "Villa Baltic Sea – Hospitality Website, Booking System, & Digital Visibility",
              "subtitle": "Effortless Booking Meets Powerful Local Presence",
              "clientVision": "Villa Baltic Sea needed more than a website, they wanted tourists and visitors to easily discover and book their rooms online, and as hosts, manage everything without tech skills. On top of that, they aimed to reach a wider audience in their local region through strong social and search engine visibility.",
              "ourSolution": [
                "Created a visually appealing website, showcasing rooms with beautiful photos, clear amenities, and instant booking options",
                "Integrated a simple, intuitive booking system for guests to check availability and reserve rooms directly",
                "Developed a user-friendly admin area for hosts, allowing easy updates to vacancies and pricing—no training required",
                "Ensured seamless access and mobile-friendly design so bookings could happen anywhere, anytime",
                "Set up and branded their social media profiles, including targeted Facebook campaigns to boost awareness among local and traveling audiences",
                "Implemented local SEO and optimized Google presence, making Villa Baltic Sea easy to find for guests searching in the area",
                "Provided hands-on support for ongoing social posts and booking questions, keeping hosts confident and their audience engaged"
              ],
              "result": "Villa Baltic Sea now enjoys a steady stream of bookings, increased online visibility, and lively engagement through both social media and search. Guests find and reserve rooms easily, while hosts keep everything up to date effortlessly turning digital simplicity into real-world growth.",
              "screenshots": ["portfolio_villabaltic_ss1", "portfolio_villabaltic_ss2", "portfolio_villabaltic_ss3"]
            }
          },
          {
            "image": "portfolio_hydrocycle_main",
            "category": "Local Business Website",
            "title": "Hydrocycle Website Launch",
            "description": "A sleek, intuitive website for a local business, optimized for mobile access, local SEO, and effortless client communication.",
            "tags": ["Local SEO", "Mobile First", "UI/UX Design", "Web Development", "Analytics"],
            "details": {
              "title": "Hydrocycle Website Launch",
              "subtitle": "Effortless Solutions, Instantly Accessible",
              "clientVision": "Hydrocycle imagined a web platform where clients could immediately understand services, reach out fast, and get the help they needed all with zero frustration. The priority: total simplicity, rapid response, and clarity at every step.",
              "ourSolution": [
                "Designed a clean, straightforward homepage that guides visitors to action without clutter",
                "Simplified the entire user journey, so every essential service and contact method is easy to find",
                "Built for mobile: responsive layouts ensure quick access and perfect usability on any device",
                "Embedded Google Analytics and a comprehensive technical kit for monitoring and performance",
                "Optimized for local SEO, helping Hydrocycle appear when customers search for solutions in their area",
                "Delivered a future-proof system easy to update, expand, and adapt as the business grows"
              ],
              "result": "Hydrocycle’s clients now enjoy a sleek, intuitive website where solutions are just one click away.",
              "screenshots": [
                  "portfolio_hydrocycle_ss1",
                  "portfolio_hydrocycle_ss2",
                  "portfolio_hydrocycle_ss3"
              ]
            }
          },
          {
            "image": "portfolio_vita_main",
            "category": "Mobile App & UX",
            "title": "Vita - Mindfulness & Wellness App",
            "description": "A beautifully simple mobile app designed to help users build a consistent mindfulness practice through guided meditations and progress tracking.",
            "tags": ["Mobile App", "React Native", "UX Research", "UI/UX Design", "Wellness"],
            "serviceId": "development",
            "details": {
              "title": "Vita – Mobile Mindfulness & Wellness App",
              "subtitle": "Crafting a Serene Digital Space for Daily Mindfulness",
              "clientVision": "The founders of Vita wanted to create an escape from the noise of daily life. Their vision was for a mobile app that was calming, intuitive, and encouraging, helping users of all levels to build a sustainable meditation habit without overwhelming them with features.",
              "ourSolution": [
                "Conducted user research to understand the barriers and motivations for practicing mindfulness.",
                "Designed a minimalist, calming UI with a soothing color palette and gentle animations.",
                "Developed a cross-platform mobile app using React Native for both iOS and Android.",
                "Implemented a personalized progress tracking system to motivate users with visual feedback.",
                "Integrated a library of guided meditations with customizable session timers and background sounds."
              ],
              "result": "Vita achieved a significant number of downloads in its first six months and earned overwhelmingly positive reviews. User feedback consistently praises the app's simplicity and calming user experience, which has led to high daily user retention.",
              "screenshots": ["portfolio_vita_ss1", "portfolio_vita_ss2", "portfolio_vita_ss3"]
            }
          },
          {
            "image": "portfolio_formasecu_main",
            "category": "Corporate & Training Platform",
            "title": "Forma Secu – Security Training Platform",
            "description": "A modern, user-friendly training platform simplifying course discovery, registration, and certification for security professionals.",
            "tags": ["Web Development", "UI/UX Design", "Events Calendar", "SEO"],
            "serviceId": "development",
            "details": {
              "title": "Forma Secu – Security Training Platform",
              "subtitle": "Streamlining Certification and Training for Today’s Professionals",
              "clientVision": "Forma Secu had a well-established logo and a strong in-person reputation, but their online presence wasn’t matching the quality of their real-world offer. With many diverse training sessions and a packed schedule, they needed a digital solution that would make it simple for trainees to find, understand, and register for the right certifications.",
              "ourSolution": [
                "Enhanced their existing visual identity, transforming the shield logo and blue palette into a compelling and trustworthy website design.",
                "Created a clear homepage and intuitive navigation, featuring direct CTAs to course discovery and quote requests.",
                "Developed an advanced, filterable events calendar so users can easily sort and plan upcoming trainings by type, date, or eligibility.",
                "Built detailed training pages explaining, in straightforward language, every course’s requirements and the benefits for participants.",
                "Ensured all user journeys from browsing to registration, to requesting a custom quote were accessible, efficient, and mobile-friendly.",
                "Streamlined registration and information forms, reducing user effort while maintaining compliance and data quality.",
                "Supported their marketing and audience reach with strong on-page SEO practices and a structure ready for further optimization."
              ],
              "result": "Forma Secu is now a top-tier digital platform for security training easy to use, visually clear, and built for seamless course discovery, registration, and support. Trainees can find and plan their certifications quickly, with clarity at every point, while Forma Secu reaches more participants than ever thanks to an improved online presence and optimized SEO.",
              "screenshots": ["portfolio_formasecu_ss1", "portfolio_formasecu_ss2", "portfolio_formasecu_ss3"]
            }
          }
        ]
      },
      "testimonials": {
        "title": "What Our Clients Say",
        "subtitle": "Real stories from businesses we've helped transform. Their success is our greatest achievement.",
        "items": [
          {
            "avatar": "testimonial_angel_unigwe_avatar",
            "name": "Angel Unigwe",
            "title": "Model, Actress, Media Personality",
            "quote": "I wanted a website that feels stylish and truly ‘me’ something easy to show off when I meet new brands or fans. From the start, I felt heard. Every page looks gorgeous, and I love how simple it is to update my pictures or news. It makes me proud to share my work.",
            "rating": 5
          },
          {
            "avatar": "testimonial_piotr_kwiatow_avatar",
            "name": "Piotr Kwiatow",
            "title": "Head of Marketing",
            "quote": "The new site brought us more of the right visitors almost immediately. I’ve worked with a lot of agencies but these folks understood our needs for clear messaging and stronger results. Our campaigns are easier to manage now, and I can show my team what’s working.",
            "rating": 5
          },
          {
            "avatar": "testimonial_youssef_alami_avatar",
            "name": "Youssef Alami",
            "title": "Founder, Marrakech",
            "quote": "I’m not a tech person, but I needed my shop to be really easy for my customers and for me. The process felt smooth from the first call. People say it’s much clearer, and I get more orders than ever. Honestly, I didn’t think it could be this simple.",
            "rating": 5,
            "serviceId": "design"
          },
          {
            "avatar": "testimonial_marie_durond_avatar",
            "name": "Marie Durond",
            "title": "Marketing Director, Paris",
            "quote": "Getting noticed online is always tough. We needed fresh ideas for our social media, not just more posts. Working with the team, our brand started getting real buzz lots of new followers and happy customers. It’s great to see people engaging with what we create.",
            "rating": 5
          },
          {
            "avatar": "testimonial_james_camerron_avatar",
            "name": "James Camerron",
            "title": "Managing Director",
            "quote": "I wanted our website to look sharp, but also make it easier for people to get in touch and buy. The result is eye-catching and practical. We’ve seen real growth in visitors who stick around and reach out to us. The help we got was thorough and focused on what mattered.",
            "rating": 5,
            "serviceId": "strategy"
          },
          {
            "avatar": "testimonial_fatima_benali_avatar",
            "name": "Fatima Benali",
            "title": "Operations Manager, Casablanca",
            "quote": "Before, helping our clients was slow and complicated. With the new chat system, my team can answer questions fast and clients always say it’s easier to get help. We get great feedback now, and I spend less time fixing problems.",
            "rating": 5,
            "serviceId": "development"
          }
        ]
      },
      "contact": {
        "title": "Ready to Start Your Project?",
        "subtitle": "Have a vision for your next project? Let's discuss your goals and craft a plan to achieve them. Reach out for a complimentary, no-obligation strategy session.",
        "cta": "Let's Talk"
      },
      "contactPage": {
        "title": "Contact Us",
        "subtitle": "Ready to transform your digital presence? Let's discuss your project and how we can help you achieve your goals.",
        "whyChooseUs": {
          "title": "Why Choose Us",
          "items": [
            {
              "title": "A Clear Proposal",
              "description": "We respond within 24 hours with a clear project proposal. No vague promises, just a transparent plan of action."
            },
            {
              "title": "Direct Expert Access",
              "description": "Work directly with our senior team members who have years of experience in digital strategy and development."
            },
            {
              "title": "No-Obligation Strategy Call",
              "description": "Get a free 30-minute consultation to discuss your project and explore how we can help you succeed."
            }
          ]
        },
        "form": {
          "title": "Tell Us About Your Project",
          "fullName": "Full Name",
          "fullNamePlaceholder": "Enter your full name",
          "emailAddress": "Email Address",
          "emailAddressPlaceholder": "youremail@company.com",
          "projectType": "Project Type",
          "projectTypePlaceholder": "Select project type",
          "projectTypes": ["Web Design & Development", "UI/UX Design", "Branding", "Digital Strategy", "Other"],
          "projectDetails": "Project Details",
          "projectDetailsPlaceholder": "Tell us about your project goals, timeline, and any specific requirements...",
          "sendMessage": "Send Message"
        },
        "getInTouch": {
          "title": "Get in Touch",
          "email": "Email",
          "emailAddress": "contact@yourdigitalstep.com",
          "businessHours": "Business Hours",
          "businessHoursValue": "Monday - Friday, 9:00 - 17:00 CEST"
        },
        "ourProcess": {
          "title": "Our Process",
          "steps": [
            "We'll review your message and project details",
            "Schedule a 30-minute strategy call",
            "Receive a detailed project proposal"
          ]
        }
      },
      "footer": {
        "tagline": "Clarity in a Complex Digital World.",
        "email": "contact@yourdigitalstep.com",
        "quickLinks": "Quick Links",
        "legal": "Legal",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service",
        "copyright": "© {{year}} YourDigitalStep. All Rights Reserved."
      },
      "projectModal": {
        "title": "Let's Build Something Great Together",
        "subtitle": "Tell us about your project, and we'll be in touch to discuss the next steps.",
        "stepProgress": "Step {{current}} of {{total}}",
        "step1": {
          "title": "First, what kind of business are you?",
          "options": {
            "individual": "Individual / Startup",
            "business": "Established Business",
            "ecommerce": "E-commerce Store",
            "other": "Other"
          }
        },
        "step2": {
          "title": "What services are you interested in? (Select all that apply)",
          "options": [
            "Digital Strategy & Consulting",
            "UI/UX Design & Branding",
            "Web & Mobile Development",
            "Not sure yet"
          ]
        },
        "step2_addons": {
          "title": "Any Optional Add-ons?",
          "options": [
            "Logo Design",
            "Professional Content Writing",
            "Advanced SEO Audit",
            "Social Media Strategy & Setup",
            "Paid Ad Campaign Launch"
          ]
        },
        "step3": {
          "title": "What industry are you in?",
          "placeholder": "Select your industry...",
          "options": ["Technology", "Retail & E-commerce", "Healthcare", "Finance", "Real Estate", "Education", "Other"]
        },
        "step4": {
          "title": "Briefly describe your project vision",
          "placeholder": "e.g., 'I want to build a modern e-commerce platform for my clothing brand...' or 'I need to redesign my existing corporate website to be more user-friendly.'"
        },
        "step4_starter_website": {
          "title": "Tell us about your 'Starter' project",
          "placeholder": "Tell us about your business. What are the essential 3 pages you need to get started (e.g., Home, Services, Contact)?"
        },
        "step4_premium_shopify": {
          "title": "Let's plan your 'Premium Shopify' store",
          "placeholder": "Great! The Premium Shopify package is built for scale. What kind of products will you be selling, and are there any advanced features (like customer reviews or live chat) you're excited about?"
        },
        "step5": {
          "title": "Finally, how can we reach you?",
          "namePlaceholder": "Your Name",
          "emailPlaceholder": "Your Email",
          "phonePlaceholder": "Your Phone Number (Optional)"
        },
        "step5_reinforcement": "You're one step away from launching your <1>{{packageName}}</1>! Just let us know how to reach you.",
        "buttons": {
          "back": "Back",
          "next": "Next",
          "submit": "Submit Project"
        },
        "success": {
            "close": "Close"
        }
      },
      "specialOfferPage": {
        "title": "Special Offer",
        "subtitle": "🚀 Launch Your Digital Presence: Our Essential Packages",
        "intro": "We believe the perfect moment to launch is now. We’ve created streamlined, high-value packages designed to get you online, visible, and operational quickly. Choose the foundation that fits your immediate goals and let's build your digital future.",
        "toggle": {
          "website": "Website Packages",
          "shopify": "Shopify Packages"
        },
        "mostPopular": "Most Popular",
        "whoShouldChoose": {
          "title": "🎯 Who Should Choose Which Package?",
          "intro": "We structure our offers to meet you exactly where you are in your business journey.",
          "websiteClients": {
            "title": "For Website Clients"
          },
          "shopifyClients": {
            "title": "For Shopify Clients"
          }
        },
        "websitePackages": {
          "title": "🌐 Website Launch Packages",
          "intro": "This structure is built for rapid deployment and maximum initial credibility, with clear pathways for future scaling.",
          "packages": [
            {
              "name": "💡 Starter",
              "price": "€499",
              "priceDetails": "net",
              "description": "Perfect for freelancers, solopreneurs, and new local businesses who need to establish immediate credibility and start capturing their first leads.",
              "features": [
                "Up to 3 Pages: Home, Services, Contact Us.",
                "Custom design, Mobile Responsive.",
                "Up to 1 Business Email. Contact Form.",
                "Basic SEO (Meta Titles/Descriptions). GA/GSC Setup.",
                "Client provides all content.",
                "3 Months Basic Maintenance (Reactive)."
              ],
              "isMostPopular": false,
              "cta": "Choose Starter"
            },
            {
              "name": "🟠 Plus",
              "price": "€899",
              "priceDetails": "net",
              "description": "Designed for growing small businesses that need to showcase diverse services or begin basic content marketing to prove their expertise.",
              "features": [
                "Up to 6 Pages: Adds About, Portfolio/Projects, Testimonials.",
                "Refined, Custom-Branded Design with image gallery.",
                "Up to 2 Business Emails. Advanced Forms (Multi-step).",
                "Extended SEO (Sitemap submission). Advanced GA Reporting.",
                "Basic content upload for up to 5 Services/Projects.",
                "6 Months Maintenance."
              ],
              "isMostPopular": true,
              "cta": "Choose Plus"
            },
            {
              "name": "🟡 Premium",
              "price": "€2,499",
              "priceDetails": "net",
              "description": "The complete solution for established SMEs, schools, or companies requiring advanced functionality, custom UX, and a strategic digital asset built for conversion.",
              "features": [
                "Up to 12 Pages: Including Blog, Case Studies, Careers, Custom landing pages, etc.",
                "Premium Bespoke Design (Custom icons/UX enhancements).",
                "Up to 5 Business Emails. Enhanced Forms (Booking/Advanced Contact).",
                "Full Technical & Strategic SEO (Schema, Speed Optimization). Newsletter/Lead Magnet Integration.",
                "Content upload for up to 10 items + 1-Hour 1:1 Training.",
                "12 Months Maintenance & Priority Technical Support.",
                "Facebook/Instagram Ads Account Setup & First Campaign Structure."
              ],
              "isMostPopular": false,
              "cta": "Choose Premium"
            }
          ]
        },
        "shopifyPackages": {
          "title": "🛒 Shopify Launch Packages",
          "intro": "Launch your shop with secure checkout, basic product setup, and essential European compliance configured.",
          "packages": [
            {
              "name": "🚀 Mini",
              "price": "€599",
              "priceDetails": "net",
              "description": "Ideal for entrepreneurs testing a niche product or small specialty stores focused locally. Get your first sales live quickly with secure checkout.",
              "features": [
                "Up to 3 Pages: Home, Product Catalog, Contact Us.",
                "Up to 5 Products Uploaded.",
                "Free Shopify Theme setup (basic color match).",
                "GA/GGSC Setup.",
                "Payments & basic shipping rules configuration.",
                "3 Months Maintenance."
              ],
              "isMostPopular": false,
              "cta": "Choose Mini"
            },
            {
              "name": "🟠 Growth",
              "price": "€1,099",
              "priceDetails": "net",
              "description": "Built for developing e-commerce businesses with a growing inventory. This package builds a true online destination that captures emails and ranks products.",
              "features": [
                "Up to 7 Pages: Home, Shop, About, FAQs, Policy pages, Blog, Contact Us.",
                "Up to 15 Products Uploaded.",
                "Enhanced Theme Styling & minor logo design tweaks.",
                "Newsletter Signup Integration. SEO for Products & Pages.",
                "Comprehensive shipping rules setup.",
                "6 Months Maintenance."
              ],
              "isMostPopular": true,
              "cta": "Choose Growth"
            },
            {
              "name": "🟡 Premium",
              "price": "€2,799",
              "priceDetails": "net",
              "description": "For scaling retailers and brands with complex inventory ready for high-volume sales. This is an optimized sales machine with advanced marketing integration and full reporting.",
              "features": [
                "Up to 15 Pages: All Growth pages, plus Collections, Reviews, Media, Custom landing.",
                "Up to 40 Products Uploaded (with variants/descriptions).",
                "Premium Theme Customization (Custom banners, advanced navigation, UX refinements).",
                "Full Marketing Suite: Popups, Abandoned Cart, Reviews, Live Chat.",
                "Advanced reporting & CRM Integration.",
                "12 Months Maintenance & Priority Technical Assistance.",
                "Facebook/Instagram Ads Account Setup & First Campaign Structure."
              ],
              "isMostPopular": false,
              "cta": "Choose Premium"
            }
          ]
        },
        "beyondLaunch": {
          "title": "📈 Beyond the Launch: Secure Your Growth with a Support Membership",
          "intro": "These introductory prices secure your launch. Once your initial maintenance period expires, your focus must shift to growth, security, and feature expansion.",
          "features": [
            {
              "title": "Proactive Security",
              "points": [
                "Continuous uptime monitoring and performance checks.",
                "Regular platform updates and security patching.",
                "Daily off-site backups to protect your data.",
                "Proactive malware scanning and threat detection."
              ]
            },
            {
              "title": "Growth Allocation",
              "points": [
                "Dedicated monthly hours for strategic digital growth.",
                "Content creation: new pages, blog posts, and portfolio updates.",
                "Ongoing SEO refinement to improve search rankings.",
                "Social media content strategy and ad campaign management."
              ]
            },
            {
              "title": "Priority Support",
              "points": [
                "Direct access to our senior support team via Slack & email.",
                "Guaranteed faster response times for all technical inquiries.",
                "Skip the queue for any urgent fixes or adjustments.",
                "Expert troubleshooting and issue resolution."
              ]
            }
          ]
        },
        "cta": {
          "title": "Ready to discuss which launch package will get you the fastest, most professional start?",
          "button": "BOOK YOUR FREE 15-MINUTE SCOPE CALL"
        },
        "packageForm": {
            "namePlaceholder": "Your Name",
            "emailPlaceholder": "Your Email",
            "submitButton": "Submit Inquiry"
        }
      },
      "privacyPolicyPage": {
        "title": "Privacy Policy",
        "subtitle": "Effective date: October 26, 2023",
        "sections": [
          {
            "heading": "Introduction",
            "content": "<p>This Privacy Policy explains how YourDigitalStep (“the agency,” “we,” “us,” or “our”) collects, uses, discloses, and protects the personal information you provide to us when you use our services or visit our website.</p>"
          },
          {
            "heading": "1. Information We Collect",
            "content": "<p>We collect information necessary to provide you with our digital services and to maintain our business operations. This may include:</p><ul><li><b>Contact and Identification Information:</b> Names, email addresses, phone numbers, and mailing addresses provided during inquiries, contracting, or service delivery.</li><li><b>Service-Related Data:</b> Information contained within project proposals, client files, communications, and login credentials necessary for website development, SEO, branding, or consulting services.</li><li><b>Financial and Billing Data:</b> Information necessary for processing payments, such as billing addresses. Note: We do not store full credit card numbers; this information is processed securely by third-party payment processors.</li><li><b>Website Usage Data (If Applicable):</b> Information collected automatically when you visit our website, such as IP address, browser type, pages visited, and time spent on the site, often via analytics tools.</li></ul>"
          },
          {
            "heading": "2. How We Use Your Information",
            "content": "<p>We use the information we collect for the following essential business purposes:</p><ul><li>To provide, manage, and maintain the digital services requested by you.</li><li>To process transactions and send you related financial information, such as invoices and receipts.</li><li>To communicate with you regarding service updates, support requests, or important changes to our Terms of Service or this Policy.</li><li>To analyze and improve the performance of our website and services.</li><li>To conduct direct marketing, where permitted by law, which you may opt out of at any time.</li></ul>"
          },
          {
            "heading": "3. Sharing and Disclosure of Information",
            "content": "<p>We will only share your personal information in the following circumstances:</p><ul><li><b>With Third-Party Service Providers:</b> We share necessary data with trusted third parties who perform services on our behalf, such as payment processors, hosting providers, or specialized subcontractors (e.g., specific coding expertise) assisting in fulfilling your service order, under strict confidentiality agreements.</li><li><b>Legal Requirements:</b> We may disclose your information if required to do so by law, court order, or governmental requests.</li><li><b>Business Operations:</b> In the event of a sale, merger, or transfer of the agency’s assets, information may be transferred to the new entity, subject to continued adherence to this Privacy Policy.</li><li><b>With Your Explicit Consent:</b> For any purpose not specified in this policy, we will obtain your prior consent.</li></ul>"
          },
          {
            "heading": "4. Data Security",
            "content": "<p>We implement reasonable administrative, technical, and physical safeguards designed to protect the personal information we hold against accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>"
          },
          {
            "heading": "5. Data Retention",
            "content": "<p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, and to comply with legal, accounting, and reporting requirements. Once data is no longer necessary, it will be securely deleted or anonymized.</p>"
          },
          {
            "heading": "6. Your Data Rights",
            "content": "<p>Depending on where you reside, you may have specific rights regarding your personal data, including the right to:</p><ul><li>Access the personal data we hold about you.</li><li>Correct inaccurate or incomplete data.</li><li>Request Deletion of your personal data (the \"right to be forgotten\").</li><li>Object to or Restrict certain types of processing.</li></ul><p>To exercise any of these rights, please contact us using the details below.</p>"
          },
          {
            "heading": "7. Children's Privacy",
            "content": "<p>Our services are directed to businesses and individuals legally capable of entering binding contracts (age 18 or older). We do not knowingly collect personal information from individuals under the age of 18.</p>"
          },
          {
            "heading": "8. Contact Information",
            "content": "<p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p><p>Email: contact@yourdigitalstep.com</p>"
          }
        ]
      },
      "termsOfServicePage": {
        "title": "Terms of Service",
        "subtitle": "Effective date: October 26, 2023",
        "sections": [
          {
            "heading": "Acceptance of Terms",
            "content": "<p>By accessing or using services provided under the business name “YourDigitalStep” (“the agency,” “we,” “us,” or “our”), you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>"
          },
          {
            "heading": "Modifications",
            "content": "<p>We reserve the right to modify these Terms at any time, at our sole discretion. Changes will be posted on this page or communicated directly. Continued use of our services after any changes constitutes acceptance of the modified Terms, so please review this page regularly.</p>"
          },
          {
            "heading": "Eligibility",
            "content": "<p>You may use our services only if you are at least 18 years old, legally capable of entering binding contracts, and not prohibited from using our services under applicable law.</p>"
          },
          {
            "heading": "Scope of Services",
            "content": "<p>YourDigitalStep provides digital services, which may include website creation, SEO, app development, branding, and consulting. The details, deliverables, and fees for any services will be stated in your individual agreement, project proposal, or invoice. The terms of this ToS supplement, but do not replace, the specific terms of the executed Service Agreement or Proposal.</p>"
          },
          {
            "heading": "Client & User Content",
            "content": "<p>You retain all rights to content you create, upload, or share (“User Content”) while using our services. You grant us a non-exclusive, royalty-free license to use, host, display, and distribute your User Content solely to provide or improve our services to you.</p><p>All intellectual property developed by YourDigitalStep, including designs, code, documentation, and materials not provided by you, remain the property of the agency unless and until expressly assigned to you in a fully executed, separate written agreement following receipt of all due and undisputed payments.</p>"
          },
          {
            "heading": "Payments, Refunds, & Cancellations",
            "content": "<p>Fees, payment schedules, and refund policies are defined in your agreement, proposal, or invoice. You agree to pay all undisputed amounts on time. Refund requests will be reviewed case-by-case with consideration of the project status and obligations met. Failure to remit payment on time grants us the right to halt all work immediately and charge a late fee of <b>1.5%</b> per month on the outstanding balance.</p>"
          },
          {
            "heading": "Prohibited Conduct",
            "content": "<p>You agree not to:</p><ul><li>Use our services for any illegal or unauthorized purposes</li><li>Interfere with or disrupt our website or systems</li><li>Infringe on our intellectual property or the rights of others</li><li>Attempt to access other user data without authorization</li><li>Provide us with content or materials for which you do not hold the necessary licenses or rights.</li></ul>"
          },
          {
            "heading": "Limitation of Liability",
            "content": "<p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL YOURDIGITALSTEP, THE PROPRIETOR, OR ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS OPPORTUNITY, DATA LOSS, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN ANY WAY RELATED TO THE USE OF OR INABILITY TO USE THE SERVICES, EVEN IF THE AGENCY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p><p>The agency’s total cumulative liability to you for any and all claims arising out of or related to these Terms or the Services shall not exceed the total fees paid by you to the agency for the specific service giving rise to the claim in the preceding three (3) months.</p>"
          },
          {
            "heading": "Indemnification",
            "content": "<p>You agree to indemnify and hold harmless YourDigitalStep, the proprietor, and their respective agents and employees from and against any and all third-party claims, demands, liabilities, costs, or expenses, including reasonable attorneys' fees, resulting from: (a) your violation of these Terms; (b) your use of the services in a manner not authorized by these Terms; or (c) any User Content or materials provided by you, including any claims of infringement of intellectual property rights by a third party.</p>"
          },
          {
            "heading": "Business Entity Notice",
            "content": "<p>YourDigitalStep is the trading name of a sole proprietorship operated by the owner. References to “YourDigitalStep,” “the agency,” “we,” “us,” or “our” in these Terms refer to the owner acting under this business name. By accepting these terms, you acknowledge that no partnership, joint venture, or employment relationship is created. The proprietor’s liability is limited only to the extent permitted by law and does not offer the protections of a corporation or limited liability company.</p>"
          },
          {
            "heading": "Governing Law",
            "content": "<p>These Terms are governed by and construed in accordance with the laws of the proprietor’s jurisdiction. Any legal disputes will be addressed in the courts of this jurisdiction.</p>"
          },
          {
            "heading": "Contact & Legal Notices",
            "content": "<p>For any questions about these Terms, please contact: contact@yourdigitalstep.com</p>"
          }
        ]
      },
      "thankYouPage": {
        "title": "Thank You!",
        "subtitle": "Your message has been sent successfully. We will get back to you within 24 hours.",
        "backToHome": "Back to Home"
      },
      "forms": {
        "submitting": "Submitting...",
        "submitError": "An error occurred. Please try again."
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "links": [
          { "href": "/", "label": "Accueil" },
          { "href": "/services", "label": "Services" },
          { "href": "/portfolio", "label": "Notre Travail" },
          { "href": "/special-offer", "label": "Offre Spéciale" },
          { "href": "/contact", "label": "Contact" }
        ],
        "getStarted": "Commencer"
      },
      "hero": {
        "eyebrow": "Stratégie, design et ingénierie",
        "title": "<0>Clarté</0> dans un Monde<1> Numérique Complexe</1>",
        "subtitle": "Nous ne nous contentons pas de créer des sites web ; nous construisons des expériences numériques qui stimulent la croissance, engagent les publics et fournissent des résultats mesurables.",
        "getStarted": "Démarrer Votre Projet",
        "learnMore": "Voir Notre Processus"
      },
      "stats": {
        "title": "Résultats Prouvés, Livrés avec Précision",
        "items": [
          { "endValue": 50, "suffix": "+", "label": "Projets Terminés" },
          { "endValue": 98, "suffix": "%", "label": "Satisfaction Client" },
          { "textValue": "24/7", "label": "Support Disponible" }
        ]
      },
      "services": {
        "title": "Nos Services",
        "subtitle": "Nos trois disciplines principales travaillent en synergie pour fournir des solutions numériques complètes. Nous transformons des défis complexes en produits élégants et performants.",
        "items": [
          {
            "serviceId": "strategy",
            "title": "Stratégie & Conseil Numérique",
            "description": "Le succès commence par une feuille de route claire. Nous analysons en profondeur votre marché, votre audience et vos objectifs pour construire une stratégie numérique basée sur les données qui garantit que chaque décision vous rapproche de vos buts.",
            "process": [
              "Analyse approfondie du marché et des concurrents",
              "Cartographie des personas et des parcours utilisateurs",
              "Consultation sur la pile technologique stratégique",
              "Définition des métriques de performance et des KPI"
            ]
          },
          {
            "serviceId": "design",
            "title": "Design UI/UX & Image de Marque",
            "description": "Nous créons des interfaces intuitives et visuellement époustouflantes qui captivent les utilisateurs et incitent à l'action. Notre processus de conception allie créativité artistique et recherche rigoureuse centrée sur l'utilisateur pour offrir des expériences à la fois belles et efficaces.",
            "process": [
              "Wireframing & Prototypage collaboratifs",
              "Conception d'interface utilisateur et visuelle haute-fidélité",
              "Identité de marque complète et guides de style",
              "Tests d'utilisabilité itératifs et boucles de rétroaction"
            ]
          },
          {
            "serviceId": "development",
            "title": "Développement Web & Mobile",
            "description": "Notre code est notre métier. Nous construisons des applications web et mobiles robustes, évolutives et sécurisées en utilisant des technologies de pointe. Nous écrivons un code propre et maintenable, conçu pour la performance et la croissance à long terme.",
            "process": [
              "Développement Agile et Sprints itératifs",
              "Architecture Front-end & Back-end évolutive",
              "Intégration et développement d'API personnalisées",
              "Assurance qualité et tests de performance rigoureux"
            ]
          }
        ],
        "details": {
          "ourProcess": "Notre Processus",
          "clientFeedback": "Avis Client",
          "relatedWork": "Projet Associé"
        }
      },
      "detailedServices": {
        "title": "Un Regard Approfondi sur Nos Services",
        "categories": [
          {
            "title": "Stratégie",
            "items": [
              { "id": "brandAudits", "title": "Audits de Marque", "description": "Que vous soyez en croissance, que vous débutiez ou que vous mettiez votre entreprise en ligne, voici comment nous vous aidons :", "process": ["Discuter avec vous de vos objectifs, de votre expérience et de votre vision (nouvelle ou expérimentée)", "Audit de la marque : auditer vos actifs existants ou vous aider à construire des fondations à partir de zéro", "Perspectives des parties prenantes : interviewer votre équipe, vos clients, ou réfléchir ensemble si vous êtes en solo", "Analyse du marché : vous comparer à la concurrence, en fonction de votre position sur le marché", "Fiche d'évaluation : obtenir une vision claire des forces, des faiblesses et du potentiel", "Atelier : session collaborative où nous priorisons les prochaines étapes adaptées à votre parcours", "Plan d'action : une feuille de route de croissance sur mesure, même si vous partez de zéro"] },
              { "id": "marketResearch", "title": "Étude de Marché", "description": "Des informations adaptées à votre parcours :", "process": ["Découverte : définir ce que signifie le succès, que ce soit pour affiner ou lancer", "Cartographie : délimiter votre secteur, qu'il soit nouveau, local ou mondial", "Collecte de données : utiliser des outils adaptés à la maturité de votre entreprise", "Analyse : obtenir des tendances de marché et des informations concurrentielles exploitables dès aujourd'hui", "Stratégie : transformer les résultats en prochaines étapes simples, que ce soit pour un lancement ou une mise à l'échelle"] },
              { "id": "uxStrategy", "title": "Stratégie d'Expérience Utilisateur (UX)", "description": "Une excellente expérience à chaque étape :", "process": ["Découverte : cartographier le parcours numérique ou en personne des utilisateurs", "Recherche : nous effectuons des analyses approfondies ou vous aidons à parler à vos tout premiers clients", "Solutions : identifier les points de douleur, proposer des idées pour les marques nouvelles ou en croissance", "Prototypage : esquisser des flux qui correspondent à votre situation actuelle", "Test : valider pour l'amélioration, le lancement ou la première impression", "Guide : un guide étape par étape, peu importe votre point de départ"] }
            ]
          },
          {
            "title": "Identité de Marque",
            "items": [
              { "id": "logoDesign", "title": "Création de Logo", "description": "Nous créons un logo puissant et intemporel qui sert de fondation à votre identité visuelle.", "process": ["Découverte : partagez votre histoire, qu'elle soit bien établie ou une nouvelle idée", "Inspiration : choisissez des styles et des directions qui correspondent ou rehaussent votre marque", "Conception : examinez les designs, qu'il s'agisse de votre première ou de votre prochaine itération", "Affinage : collaborez à votre propre rythme", "Livraison : fichiers et guides d'utilisation, prêts pour chaque point de contact"] },
              { "id": "visualIdentity", "title": "Identité Visuelle", "description": "Nous construisons un système visuel complet—des couleurs à la typographie—qui rend votre marque instantanément reconnaissable.", "process": ["Audit ou brainstorming : évaluez votre apparence actuelle ou imaginez des idées à partir de zéro", "Création d'actifs : couleurs, typographies, icônes pour les nouveaux lancements ou les refontes de marque", "Modèles : des outils pratiques pour chaque canal, adaptés aux débutants", "Kit de marque : des instructions simples pour que votre identité soit toujours claire"] },
              { "id": "brandGuidelines", "title": "Charte Graphique", "description": "Nous livrons un guide de référence complet pour votre marque afin d'assurer la cohérence au sein de votre équipe et sur toutes les plateformes.", "process": ["Inventaire : rassemblez ce que vous avez, ou partez de zéro ensemble", "Règles : des normes simples pour les marques existantes ou nouvelles", "Formation : intégration pour votre équipe ou juste pour vous", "Mises à jour : soutien au fur et à mesure de votre évolution"] }
            ]
          },
          {
            "title": "Développement Web",
            "items": [
              { "id": "customWebApps", "title": "Applications Web sur Mesure", "description": "Vos besoins, votre échelle :", "process": ["Découverte : explorez vos processus métier, que ce soit pour une mise à niveau ou une création", "Planification : construisez des solutions techniques pour la croissance ou pour une efficacité initiale", "Prototypage : voyez votre solution prendre vie à votre rythme", "Développement : recevez des mises à jour régulières, testez au fur et à mesure", "Test/AQ : réglez les problèmes pour un lancement en douceur (tout neuf ou avancé)", "Lancement : déployez avec le soutien et la confiance de votre équipe", "Formation : un apprentissage sur mesure pour que vous ayez le contrôle, les débutants sont les bienvenus"] },
              { "id": "performanceOptimization", "title": "Optimisation des Performances", "description": "Vitesse et fiabilité pour tous :", "process": ["Audit : examinez votre site actuel, qu'il soit nouveau ou établi", "Diagnostic : détaillez les améliorations qui comptent le plus pour vos objectifs", "Mise en œuvre : corrigez les problèmes ou établissez de bonnes habitudes pour les débutants", "Rapports : comparez les résultats, assurez-vous de savoir ce qui fonctionne"] },
              { "id": "cmsDevelopment", "title": "Développement de CMS", "description": "Contenu pour toutes les tailles d'entreprise :", "process": ["Consultation : recommandez un CMS facile à utiliser et adapté à votre situation", "Configuration : personnalisez ou construisez à partir de zéro", "Transfert de contenu : migrez l'ancien contenu ou créez de nouveaux modèles", "Formation : des vidéos et des guides simples pour faciliter les mises à jour pour tous", "Support : là pour chaque question, débutant ou pro"] }
            ]
          },
          {
            "title": "Marketing Numérique",
            "items": [
              { "id": "seo", "title": "Optimisation pour les Moteurs de Recherche (SEO)", "description": "Tous les niveaux de compétence sont les bienvenus :", "process": ["Audit : analyse approfondie ou vérification rapide de votre site web", "Recherche : choisissez des mots-clés pour les nouveaux sites ou les stratégies de croissance", "Configuration technique : construisez ou améliorez votre base de recherche", "Contenu : cartographiez les sujets, que vous commenciez votre blog ou que vous augmentiez votre portée", "Rapports : des retours clairs pour vous aider à grandir"] },
              { "id": "socialMedia", "title": "Marketing sur les Réseaux Sociaux", "description": "Planifiez et publiez en toute confiance :", "process": ["Audit : examinez vos profils, ou aidez-vous à les configurer à partir de zéro", "Stratégie : des calendriers sur mesure pour les nouveaux lancements ou les marques établies", "Contenu : créez, planifiez et engagez-vous ensemble", "Affinage : des examens mensuels pour évoluer au fur et à mesure de votre croissance"] },
              { "id": "ppc", "title": "Publicité au Clic (PPC)", "description": "Budget et objectifs pour chaque étape :", "process": ["Configuration : planifiez votre campagne, qu'elle soit toute nouvelle ou que vous optimisiez vos dépenses", "Ciblage : trouvez le bon public pour aujourd'hui et pour demain", "Créatif : concevez des publicités qui ont de l'impact", "Suivi : des retours en temps réel pour que vous appreniez et vous amélioriez"] }
            ]
          }
        ]
      },
      "differentiators": {
        "title": "Pourquoi Choisir YourDigitalStep?",
        "subtitle": "Nos principes fondamentaux nous distinguent. Nous sommes plus qu'un prestataire de services ; nous sommes votre partenaire dévoué dans l'excellence numérique, engagé dans un processus qui garantit le succès.",
        "items": [
          {
            "title": "Transparence Radicale",
            "description": "Pas de boîtes noires. Nous croyons en une transparence totale, vous donnant une vue en temps réel de l'avancement grâce à des canaux de communication et des tableaux de projet partagés. Vous êtes un collaborateur à chaque étape, garantissant un alignement complet et une tranquillité d'esprit.",
            "features": ["Canaux Slack partagés", "Appels de synchronisation hebdomadaires", "Accès aux tableaux de projet"]
          },
          {
            "title": "Mentalité d'Ingénieur",
            "description": "Nous abordons chaque projet avec une mentalité d'ingénieur. Notre objectif est de créer des solutions qui ne sont pas seulement esthétiques, mais qui sont architecturées pour l'évolutivité, la performance et la maintenabilité à long terme. Nous construisons pour durer.",
            "features": ["Architecture modulaire", "Documentation complète", "Normes de qualité de code"]
          },
          {
            "title": "Décisions Basées sur les Données",
            "description": "L'intuition, c'est bien ; les données, c'est mieux. Nous éliminons les conjectures en fondant chaque décision stratégique et de conception sur des recherches et des analyses complètes. Notre approche basée sur les données garantit que nous ne sommes pas seulement créatifs, nous sommes efficaces.",
            "features": ["Protocoles de test A/B", "Analyse du comportement des utilisateurs", "Suivi des performances post-lancement"]
          }
        ]
      },
      "portfolio": {
        "title": "Notre Travail",
        "subtitle": "Nous avons eu le privilège de collaborer avec une gamme variée de clients pour produire un travail dont nous sommes fiers.",
        "items": [
          {
            "image": "portfolio_ambrees_main",
            "category": "E-commerce & Branding",
            "title": "Ambrees – Solution Marque & E-Commerce",
            "description": "Une identité numérique complète et une expérience de boutique en ligne transparente, stimulant les ventes grâce à des visuels époustouflants, des campagnes publicitaires ciblées et des achats sans tracas.",
            "tags": ["Identité de marque", "Shopify", "Design UI/UX", "Publicités numériques", "SEO"],
            "serviceId": "design",
            "details": {
              "title": "Ambrees – Solution Complète Marque & E-Commerce",
              "subtitle": "Du premier croquis de logo au lancement de la boutique en ligne et aux campagnes publicitaires",
              "clientVision": "Ambrees avait besoin d'une identité de marque mémorable et d'une boutique en ligne accueillante où les clients se connectent instantanément à leurs produits. Ils voulaient des visuels de produits perfectly conçus, une navigation facile et une publicité puissante pour attirer de nouveaux clients sur leur site.",
              "ourSolution": [
                "Développement du logo signature d'Ambrees et de la charte graphique complète",
                "Conception de tous les éléments du site web, de la photographie des produits et des graphiques cohérents pour un aspect unifié",
                "Construction d'une boutique en ligne moderne et conviviale permettant une navigation rapide et des achats sécurisés",
                "Lancement de campagnes publicitaires numériques pour générer un trafic ciblé et augmenter les ventes",
                "Mise en place de Google Analytics pour des informations exploitables et le suivi des campagnes",
                "Mise en œuvre d'un SEO avancé pour qu'Ambrees soit facilement trouvé par les acheteurs en ligne"
              ],
              "result": "Ambrees se distingue désormais par une identité numérique cohérente et une expérience de boutique en ligne transparente. Les clients apprécient des visuels époustouflants, des achats sans tracas et une marque dont ils se souviennent.",
              "screenshots": [
                  "portfolio_ambrees_ss1",
                  "portfolio_ambrees_ss2",
                  "portfolio_ambrees_ss3"
              ]
            }
          },
          {
            "image": "portfolio_curraterra_main",
            "category": "Plateforme de Bien-être & Contenu",
            "title": "Curra Terra – Écosystème de Marque & Blog Bien-être",
            "description": "Un écosystème de marque complet et un blog sur le bien-être, conçus pour construire une communauté de confiance grâce à des histoires personnelles et une science pratique.",
            "tags": ["Identité de Marque", "Développement Web", "Stratégie de Contenu", "Monétisation", "SEO"],
            "serviceId": "strategy",
             "details": {
              "title": "Curra Terra – Écosystème de Marque & Blog Bien-être",
              "subtitle": "Quand l'Histoire Personnelle Rencontre le Bien-être Pratique",
              "clientVision": "Poussée par son propre parcours avec la santé intestinale, la fondatrice de Curra Terra voulait plus qu'un simple blog. Son rêve : un espace accueillant où des histoires honnêtes et une science utile pourraient inspirer les autres, bâti sur la confiance, la simplicité et la communauté.",
              "ourSolution": [
                "Conception d'un logo unique et d'un style de marque complet, rendant le site chaleureux, moderne et instantanément reconnaissable.",
                "Structure de pages et de catégories intuitives pour une découverte facile : recettes, guides, histoires personnelles et conseils bien-être.",
                "Simplification de toute la configuration technique : hébergement, navigation, expérience mobile et édition de contenu transparente.",
                "Accompagnement dans la création d'un plan de site centré sur l'utilisateur pour que chaque visiteur trouve rapidement ce qui compte pour lui.",
                "Intégration des outils Google essentiels : Analytics pour les informations, Search Console pour la découvrabilité et approbation fluide d'AdSense.",
                "Développement d'un plan de monétisation étape par étape pour aider la fondatrice à passer du partage de sa passion à la construction d'une ressource de bien-être durable.",
                "Offre d'une aide pratique pour les publicités, le développement de l'audience et la suppression des obstacles techniques pour le client."
              ],
              "result": "Curra Terra est maintenant un pôle de bien-être de confiance : facile à parcourir, agréable à lire et unique. La fondatrice se connecte directement avec une communauté grandissante, inspirant les autres tout en construisant une plateforme prête pour la croissance et les revenus.",
              "screenshots": [
                "portfolio_curraterra_ss1",
                "portfolio_curraterra_ss2",
                "portfolio_curraterra_ss3"
              ]
            }
          },
          {
            "image": "portfolio_villabaltic_main",
            "category": "Hôtellerie & Réservation",
            "title": "Villa Baltic Sea – Réservation & Visibilité",
            "description": "Un site web hôtelier élégant avec un système de réservation intégré, optimisé pour la recherche locale et les médias sociaux afin d'attirer plus de clients.",
            "tags": ["Système de Réservation", "Développement Web", "SEO Local", "Médias Sociaux"],
            "details": {
              "title": "Villa Baltic Sea – Site Hôtelier, Système de Réservation & Visibilité Numérique",
              "subtitle": "La Réservation sans Effort Rencontre une Présence Locale Puissante",
              "clientVision": "Villa Baltic Sea avait besoin de plus qu'un site web ; ils voulaient que les touristes et visiteurs puissent facilement découvrir et réserver leurs chambres en ligne, et que les hôtes puissent tout gérer sans compétences techniques. De plus, ils visaient à atteindre un public plus large dans leur région grâce à une forte visibilité sur les réseaux sociaux et les moteurs de recherche.",
              "ourSolution": [
                "Création d'un site web visuellement attrayant, présentant les chambres avec de belles photos, des commodités claires et des options de réservation instantanée",
                "Intégration d'un système de réservation simple et intuitif pour que les clients puissent vérifier la disponibilité et réserver des chambres directement",
                "Développement d'un espace d'administration convivial pour les hôtes, permettant des mises à jour faciles des disponibilités et des prix — aucune formation requise",
                "Garantie d'un accès fluide et d'un design adapté aux mobiles pour que les réservations puissent se faire n'importe où, n'importe quand",
                "Configuration et branding de leurs profils de médias sociaux, y compris des campagnes Facebook ciblées pour accroître la notoriété auprès des publics locaux et voyageurs",
                "Mise en œuvre du SEO local et optimisation de la présence Google, rendant Villa Baltic Sea facile à trouver pour les clients recherchant dans la région",
                "Fourniture d'un support pratique pour les publications sociales continues et les questions de réservation, assurant la confiance des hôtes et l'engagement de leur public"
              ],
              "result": "Villa Baltic Sea bénéficie désormais d'un flux constant de réservations, d'une visibilité en ligne accrue et d'un engagement dynamique via les médias sociaux et la recherche. Les clients trouvent et réservent facilement des chambres, tandis que les hôtes maintiennent tout à jour sans effort, transformant la simplicité numérique en croissance réelle.",
              "screenshots": ["portfolio_villabaltic_ss1", "portfolio_villabaltic_ss2", "portfolio_villabaltic_ss3"]
            }
          },
          {
            "image": "portfolio_hydrocycle_main",
            "category": "Site Web d'Entreprise Locale",
            "title": "Lancement du Site Web Hydrocycle",
            "description": "Un site web élégant et intuitif pour une entreprise locale, optimisé pour l'accès mobile, le SEO local et une communication client sans effort.",
            "tags": ["SEO Local", "Mobile First", "Design UI/UX", "Développement Web", "Analytics"],
            "details": {
              "title": "Lancement du Site Web Hydrocycle",
              "subtitle": "Des solutions sans effort, instantanément accessibles",
              "clientVision": "Hydrocycle a imaginé une plateforme web où les clients pourraient immédiatement comprendre les services, prendre contact rapidement et obtenir l'aide dont ils ont besoin sans aucune frustration. La priorité : une simplicité totale, une réponse rapide et une clarté à chaque étape.",
              "ourSolution": [
                "Conception d'une page d'accueil propre et simple qui guide les visiteurs vers l'action sans encombrement",
                "Simplification de l'ensemble du parcours utilisateur, de sorte que chaque service essentiel et chaque méthode de contact soient faciles à trouver",
                "Conçu pour le mobile : des mises en page réactives garantissent un accès rapide et une convivialité parfaite sur n'importe quel appareil",
                "Intégration de Google Analytics et d'un kit technique complet pour la surveillance et les performances",
                "Optimisé pour le référencement local, aidant Hydrocycle à apparaître lorsque les clients recherchent des solutions dans leur région",
                "Livraison d'un système pérenne, facile à mettre à jour, à étendre et à adapter à mesure que l'entreprise se développe"
              ],
              "result": "Les clients d'Hydrocycle bénéficient désormais d'un site web élégant et intuitif où les solutions ne sont qu'à un clic.",
              "screenshots": [
                  "portfolio_hydrocycle_ss1",
                  "portfolio_hydrocycle_ss2",
                  "portfolio_hydrocycle_ss3"
              ]
            }
          },
          {
            "image": "portfolio_vita_main",
            "category": "App Mobile & UX",
            "title": "Vita - App de Pleine Conscience & Bien-être",
            "description": "Une application mobile d'une simplicité élégante, conçue pour aider les utilisateurs à développer une pratique de pleine conscience régulière grâce à des méditations guidées et un suivi des progrès.",
            "tags": ["App Mobile", "React Native", "Recherche UX", "Design UI/UX", "Bien-être"],
            "serviceId": "development",
            "details": {
              "title": "Vita – App Mobile de Pleine Conscience & Bien-être",
              "subtitle": "Créer un Espace Numérique Serein pour la Pleine Conscience Quotidienne",
              "clientVision": "Les fondateurs de Vita voulaient créer une échappatoire au bruit de la vie quotidienne. Leur vision était une application mobile apaisante, intuitive et encourageante, aidant les utilisateurs de tous niveaux à développer une habitude de méditation durable sans les submerger de fonctionnalités.",
              "ourSolution": [
                "Réalisation d'une recherche utilisateur pour comprendre les obstacles et les motivations à la pratique de la pleine conscience.",
                "Conception d'une interface utilisateur minimaliste et apaisante avec une palette de couleurs douces et des animations délicates.",
                "Développement d'une application mobile multiplateforme en utilisant React Native pour iOS et Android.",
                "Mise en place d'un système de suivi des progrès personnalisé pour motiver les utilisateurs avec des retours visuels.",
                "Intégration d'une bibliothèque de méditations guidées avec des minuteurs de session personnalisables et des sons d'ambiance."
              ],
              "result": "Vita a rapidement atteint un nombre significatif de téléchargements au cours de ses six premiers mois, obtenant des avis extrêmement positifs. Les retours des utilisateurs louent constamment la simplicité de l'application et son expérience utilisateur apaisante, ce qui a conduit à une forte rétention quotidienne.",
              "screenshots": ["portfolio_vita_ss1", "portfolio_vita_ss2", "portfolio_vita_ss3"]
            }
          },
          {
            "image": "portfolio_formasecu_main",
            "category": "Plateforme de Formation d'Entreprise",
            "title": "Forma Secu – Plateforme de Formation en Sécurité",
            "description": "Une plateforme de formation moderne et conviviale simplifiant la découverte des cours, l'inscription et la certification pour les professionnels de la sécurité.",
            "tags": ["Développement Web", "Design UI/UX", "Calendrier d'Événements", "SEO"],
            "serviceId": "development",
            "details": {
              "title": "Forma Secu – Plateforme de Formation en Sécurité",
              "subtitle": "Optimisation de la Certification et de la Formation pour les Professionnels d'Aujourd'hui",
              "clientVision": "Forma Secu avait un logo bien établi et une solide réputation en personne, mais sa présence en ligne ne correspondait pas à la qualité de son offre réelle. Avec de nombreuses sessions de formation diverses et un calendrier chargé, ils avaient besoin d'une solution numérique qui simplifierait pour les stagiaires la recherche, la compréhension et l'inscription aux bonnes certifications.",
              "ourSolution": [
                "Amélioration de leur identité visuelle existante, transformant le logo du bouclier et la palette de bleus en un design de site web convaincant et digne de confiance.",
                "Création d'une page d'accueil claire et d'une navigation intuitive, avec des appels à l'action directs vers la découverte de cours et les demandes de devis.",
                "Développement d'un calendrier d'événements avancé et filtrable afin que les utilisateurs puissent facilement trier et planifier les formations à venir par type, date ou éligibilité.",
                "Construction de pages de formation détaillées expliquant, dans un langage simple, les exigences de chaque cours et les avantages pour les participants.",
                "Assurance que tous les parcours utilisateurs, de la navigation à l'inscription, en passant par la demande de devis personnalisé, soient accessibles, efficaces et adaptés aux mobiles.",
                "Rationalisation des formulaires d'inscription et d'information, réduisant l'effort de l'utilisateur tout en maintenant la conformité et la qualité des données.",
                "Soutien de leur marketing et de leur portée d'audience avec de solides pratiques de SEO sur la page et une structure prête pour une optimisation future."
              ],
              "result": "Forma Secu est désormais une plateforme numérique de premier plan pour la formation en sécurité, facile à utiliser, visuellement claire et conçue pour une découverte, une inscription et un soutien sans faille des cours. Les stagiaires peuvent trouver et planifier leurs certifications rapidement, avec clarté à chaque étape, tandis que Forma Secu atteint plus de participants que jamais grâce à une présence en ligne améliorée et un SEO optimisé.",
              "screenshots": ["portfolio_formasecu_ss1", "portfolio_formasecu_ss2", "portfolio_formasecu_ss3"]
            }
          }
        ]
      },
      "testimonials": {
        "title": "Ce Que Disent Nos Clients",
        "subtitle": "Des histoires vraies d'entreprises que nous avons aidées à se transformer. Leur succès est notre plus grande réussite.",
        "items": [
          {
            "avatar": "testimonial_angel_unigwe_avatar",
            "name": "Angel Unigwe",
            "title": "Mannequin, Actrice, Personnalité médiatique",
            "quote": "Je voulais un site web qui soit élégant et qui me ressemble vraiment, quelque chose de facile à montrer lorsque je rencontre de nouvelles marques ou des fans. Dès le début, je me suis sentie écoutée. Chaque page est magnifique, et j'adore la simplicité avec laquelle je peux mettre à jour mes photos ou mes actualités. Cela me rend fière de partager mon travail.",
            "rating": 5
          },
          {
            "avatar": "testimonial_piotr_kwiatow_avatar",
            "name": "Piotr Kwiatow",
            "title": "Directeur du Marketing",
            "quote": "Le nouveau site nous a immédiatement attiré plus de visiteurs qualifiés. J'ai travaillé avec de nombreuses agences, mais celle-ci a compris nos besoins en matière de message clair et de résultats plus solides. Nos campagnes sont plus faciles à gérer maintenant, et je peux montrer à mon équipe ce qui fonctionne.",
            "rating": 5
          },
          {
            "avatar": "testimonial_youssef_alami_avatar",
            "name": "Youssef Alami",
            "title": "Fondateur, Marrakech",
            "quote": "Je ne suis pas un expert en technologie, mais j'avais besoin que ma boutique soit vraiment simple pour mes clients et pour moi. Le processus s'est déroulé sans accroc dès le premier appel. Les gens disent que c'est beaucoup plus clair, et je reçois plus de commandes que jamais. Honnêtement, je ne pensais pas que ça pouvait être aussi simple.",
            "rating": 5,
            "serviceId": "design"
          },
          {
            "avatar": "testimonial_marie_durond_avatar",
            "name": "Marie Durond",
            "title": "Directrice Marketing, Paris",
            "quote": "Se faire remarquer en ligne est toujours difficile. Nous avions besoin d'idées neuves pour nos réseaux sociaux, pas seulement de plus de publications. En travaillant avec l'équipe, notre marque a commencé à créer un véritable engouement : beaucoup de nouveaux abonnés et des clients satisfaits. C'est formidable de voir les gens interagir avec ce que nous créons.",
            "rating": 5
          },
          {
            "avatar": "testimonial_james_camerron_avatar",
            "name": "James Camerron",
            "title": "Directeur Général",
            "quote": "Je voulais que notre site web soit élégant, mais aussi qu'il facilite la prise de contact et l'achat pour les gens. Le résultat est à la fois attrayant et pratique. Nous avons constaté une réelle croissance du nombre de visiteurs qui restent sur le site et nous contactent. L'aide que nous avons reçue était complète et ciblée sur l'essentiel.",
            "rating": 5,
            "serviceId": "strategy"
          },
          {
            "avatar": "testimonial_fatima_benali_avatar",
            "name": "Fatima Benali",
            "title": "Responsable des Opérations, Casablanca",
            "quote": "Avant, aider nos clients était lent et compliqué. Avec le nouveau système de chat, mon équipe peut répondre rapidement aux questions et les clients disent toujours qu'il est plus facile d'obtenir de l'aide. Nous recevons d'excellents retours maintenant, et je passe moins de temps à résoudre des problèmes.",
            "rating": 5,
            "serviceId": "development"
          }
        ]
      },
      "contact": {
        "title": "Prêt à Démarrer Votre Projet?",
        "subtitle": "Vous avez une vision pour votre prochain projet ? Discutons de vos objectifs et élaborons un plan pour les atteindre. Contactez-nous pour une session stratégique gratuite et sans engagement.",
        "cta": "Discutons"
      },
      "contactPage": {
        "title": "Contactez-Nous",
        "subtitle": "Prêt à transformer votre présence numérique ? Discutons de votre projet et de la manière dont nous pouvons vous aider à atteindre vos objectifs.",
        "whyChooseUs": {
          "title": "Pourquoi Nous Choisir",
          "items": [
            {
              "title": "Une Proposition Claire",
              "description": "Nous répondons dans les 24 heures avec une proposition de projet claire. Pas de promesses vagues, juste un plan d'action transparent."
            },
            {
              "title": "Accès Direct aux Experts",
              "description": "Travaillez directement avec nos membres d'équipe seniors qui ont des années d'expérience en stratégie et développement numérique."
            },
            {
              "title": "Appel Stratégique Sans Engagement",
              "description": "Bénéficiez d'une consultation gratuite de 30 minutes pour discuter de votre projet et explorer comment nous pouvons vous aider à réussir."
            }
          ]
        },
        "form": {
          "title": "Parlez-Nous de Votre Projet",
          "fullName": "Nom Complet",
          "fullNamePlaceholder": "Entrez votre nom complet",
          "emailAddress": "Adresse E-mail",
          "emailAddressPlaceholder": "votreemail@entreprise.com",
          "projectType": "Type de Projet",
          "projectTypePlaceholder": "Sélectionnez le type de projet",
          "projectTypes": ["Conception & Développement Web", "Design UI/UX", "Branding", "Stratégie Numérique", "Autre"],
          "projectDetails": "Détails du Projet",
          "projectDetailsPlaceholder": "Parlez-nous de vos objectifs de projet, de votre calendrier et de toute exigence spécifique...",
          "sendMessage": "Envoyer le Message"
        },
        "getInTouch": {
          "title": "Nous Contacter",
          "email": "E-mail",
          "emailAddress": "contact@yourdigitalstep.com",
          "businessHours": "Heures d'Ouverture",
          "businessHoursValue": "Lundi - Vendredi, 9:00 - 17:00 CEST"
        },
        "ourProcess": {
          "title": "Notre Processus",
          "steps": [
            "Nous examinerons votre message et les détails de votre projet",
            "Planifier un appel stratégique de 30 minutes",
            "Recevoir une proposition de projet détaillée"
          ]
        }
      },
      "footer": {
        "tagline": "La clarté dans un monde numérique complexe.",
        "email": "contact@yourdigitalstep.com",
        "quickLinks": "Liens Rapides",
        "legal": "Légal",
        "privacy": "Politique de Confidentialité",
        "terms": "Conditions d'Utilisation",
        "copyright": "© {{year}} YourDigitalStep. Tous Droits Réservés."
      },
      "projectModal": {
        "title": "Construisons Quelque Chose de Grand Ensemble",
        "subtitle": "Parlez-nous de votre project, et nous vous contacterons pour discuter des prochaines étapes.",
        "stepProgress": "Étape {{current}} sur {{total}}",
        "step1": {
          "title": "D'abord, quel type d'entreprise êtes-vous?",
          "options": {
            "individual": "Individuel / Startup",
            "business": "Entreprise Établie",
            "ecommerce": "Boutique E-commerce",
            "other": "Autre"
          }
        },
        "step2": {
          "title": "Quels services vous intéressent? (Sélectionnez tout ce qui s'applique)",
          "options": [
            "Stratégie & Conseil Numérique",
            "Design UI/UX & Image de Marque",
            "Développement Web & Mobile",
            "Pas encore sûr"
          ]
        },
        "step2_addons": {
          "title": "Des modules complémentaires en option ?",
          "options": [
            "Création de Logo",
            "Rédaction de Contenu Professionnel",
            "Audit SEO Avancé",
            "Stratégie et Configuration des Réseaux Sociaux",
            "Lancement de Campagne Publicitaire Payante"
          ]
        },
        "step3": {
          "title": "Dans quel secteur êtes-vous?",
          "placeholder": "Sélectionnez votre secteur...",
          "options": ["Technologie", "Vente au détail & E-commerce", "Santé", "Finance", "Immobilier", "Éducation", "Autre"]
        },
        "step4": {
          "title": "Décrivez brièvement la vision de votre projet",
          "placeholder": "ex: 'Je veux construire une plateforme e-commerce moderne pour ma marque de vêtements...' ou 'Je dois redessiner mon site web d'entreprise existant pour qu'il soit plus convivial.'"
        },
        "step4_starter_website": {
          "title": "Parlez-nous de votre projet 'Starter'",
          "placeholder": "Parlez-nous de votre entreprise. Quelles sont les 3 pages essentielles dont vous avez besoin pour commencer (par ex. Accueil, Services, Contact) ?"
        },
        "step4_premium_shopify": {
          "title": "Planifions votre boutique 'Premium Shopify'",
          "placeholder": "Génial ! Le forfait Premium Shopify est conçu pour évoluer. Quel type de produits vendrez-vous et y a-t-il des fonctionnalités avancées (comme les avis clients ou le chat en direct) qui vous intéressent ?"
        },
        "step5": {
          "title": "Enfin, comment pouvons-nous vous joindre?",
          "namePlaceholder": "Votre Nom",
          "emailPlaceholder": "Votre E-mail",
          "phonePlaceholder": "Votre Numéro de Téléphone (Optionnel)"
        },
        "step5_reinforcement": "Vous êtes à un pas de lancer votre <1>{{packageName}}</1> ! Indiquez-nous simplement comment vous contacter.",
        "buttons": {
          "back": "Retour",
          "next": "Suivant",
          "submit": "Soumettre le Projet"
        },
        "success": {
            "close": "Fermer"
        }
      },
      "specialOfferPage": {
        "title": "Offre Spéciale",
        "subtitle": "🚀 Lancez Votre Présence Numérique : Nos Forfaits Essentiels",
        "intro": "Nous croyons que le moment idéal pour se lancer, c'est maintenant. Nous avons créé des forfaits simplifiés et à haute valeur ajoutée, conçus pour vous mettre en ligne, vous rendre visible et opérationnel rapidement. Choisissez la base qui correspond à vos objectifs immédiats et construisons ensemble votre avenir numérique.",
        "toggle": {
          "website": "Forfaits Site Web",
          "shopify": "Forfaits Shopify"
        },
        "mostPopular": "Le Plus Populaire",
        "whoShouldChoose": {
          "title": "🎯 À Qui S'adressent Nos Forfaits ?",
          "intro": "Nous structurons nos offres pour répondre précisément à vos besoins, où que vous en soyez dans votre parcours entrepreneurial.",
          "websiteClients": {
            "title": "Pour les Clients Site Web"
          },
          "shopifyClients": {
            "title": "Pour les Clients Shopify"
          }
        },
        "websitePackages": {
          "title": "🌐 Forfaits de Lancement de Site Web",
          "intro": "Cette structure est conçue pour un déploiement rapide et une crédibilité initiale maximale, avec des voies claires pour une mise à l'échelle future.",
          "packages": [
            {
              "name": "💡 Starter",
              "price": "499€",
              "priceDetails": "net",
              "description": "Idéal pour les freelances, les solopreneurs et les nouvelles entreprises locales qui ont besoin d'établir une crédibilité immédiate et de commencer à capter leurs premiers prospects.",
              "features": [
                "Jusqu'à 3 pages : Accueil, Services, Contact.",
                "Design personnalisé, Adaptatif mobile.",
                "Jusqu'à 1 e-mail professionnel. Formulaire de contact.",
                "SEO de base (Balises Méta). Configuration GA/GSC.",
                "Le client fournit tout le contenu.",
                "3 mois de maintenance de base (Réactive)."
              ],
              "isMostPopular": false,
              "cta": "Choisir Starter"
            },
            {
              "name": "🟠 Plus",
              "price": "899€",
              "priceDetails": "net",
              "description": "Conçu pour les petites entreprises en croissance qui ont besoin de présenter divers services ou de commencer un marketing de contenu de base pour prouver leur expertise.",
              "features": [
                "Jusqu'à 6 pages : Ajout de À propos, Portfolio/Projets, Témoignages.",
                "Design raffiné et personnalisé avec galerie d'images.",
                "Jusqu'à 2 e-mails professionnels. Formulaires avancés (multi-étapes).",
                "SEO étendu (soumission sitemap). Rapports GA avancés.",
                "Téléchargement de contenu de base pour 5 Services/Projets.",
                "6 mois de maintenance."
              ],
              "isMostPopular": true,
              "cta": "Choisir Plus"
            },
            {
              "name": "🟡 Premium",
              "price": "2 499€",
              "priceDetails": "net",
              "description": "La solution complète pour les PME établies, les écoles ou les entreprises nécessitant des fonctionnalités avancées, une UX personnalisée et un atout numérique stratégique conçu pour la conversion.",
              "features": [
                "Jusqu'à 12 pages : Incluant Blog, Études de cas, Carrières, Pages de destination personnalisées, etc.",
                "Design sur mesure premium (icônes personnalisées/améliorations UX).",
                "Jusqu'à 5 e-mails professionnels. Formulaires améliorés (Réservation/Contact avancé).",
                "SEO technique et stratégique complet (Schema, Optimisation vitesse). Intégration Newsletter/Lead Magnet.",
                "Téléchargement de contenu pour 10 éléments + Formation 1h en 1-pour-1.",
                "12 mois de maintenance & Support technique prioritaire.",
                "Configuration de compte publicitaire Facebook/Instagram & Structure de la première campagne."
              ],
              "isMostPopular": false,
              "cta": "Choisir Premium"
            }
          ]
        },
        "shopifyPackages": {
          "title": "🛒 Forfaits de Lancement Shopify",
          "intro": "Lancez votre boutique avec un paiement sécurisé, une configuration de base des produits et une conformité européenne essentielle.",
          "packages": [
            {
              "name": "🚀 Mini",
              "price": "599€",
              "priceDetails": "net",
              "description": "Parfait pour les entrepreneurs qui testent un produit de niche ou les petites boutiques spécialisées axées sur le local. Réalisez vos premières ventes rapidement avec un paiement sécurisé.",
              "features": [
                "Jusqu'à 3 pages : Accueil, Catalogue, Contact.",
                "Jusqu'à 5 produits téléchargés.",
                "Configuration de thème Shopify gratuit (couleurs de base).",
                "Configuration GA/GSC.",
                "Configuration des paiements & règles d'expédition de base.",
                "3 mois de maintenance."
              ],
              "isMostPopular": false,
              "cta": "Choisir Mini"
            },
            {
              "name": "🟠 Croissance",
              "price": "1 099€",
              "priceDetails": "net",
              "description": "Conçu pour les entreprises de e-commerce en développement avec un inventaire croissant. Ce forfait construit une véritable destination en ligne qui capture les e-mails et classe les produits.",
              "features": [
                "Jusqu'à 7 pages : Accueil, Boutique, À propos, FAQ, Pages légales, Blog, Contact.",
                "Jusqu'à 15 produits téléchargés.",
                "Style de thème amélioré & légères retouches logo.",
                "Intégration inscription newsletter. SEO produits & pages.",
                "Configuration complète des règles d'expédition.",
                "6 mois de maintenance."
              ],
              "isMostPopular": true,
              "cta": "Choisir Croissance"
            },
            {
              "name": "🟡 Premium",
              "price": "2 799€",
              "priceDetails": "net",
              "description": "Pour les détaillants et les marques en pleine expansion avec un inventaire complexe, prêts pour des ventes à grand volume. C'est une machine de vente optimisée avec une intégration marketing avancée et des rapports complets.",
              "features": [
                "Jusqu'à 15 pages : Toutes les pages Croissance, plus Collections, Avis, Média, Landing page personnalisée.",
                "Jusqu'à 40 produits téléchargés (avec variantes/descriptions).",
                "Personnalisation de thème premium (bannières, navigation avancée, améliorations UX).",
                "Suite marketing complète : Popups, Panier abandonné, Avis, Chat en direct.",
                "Rapports avancés & Intégration CRM.",
                "12 mois de maintenance & Assistance technique prioritaire.",
                "Configuration de compte publicitaire Facebook/Instagram & Structure de la première campagne."
              ],
              "isMostPopular": false,
              "cta": "Choisir Premium"
            }
          ]
        },
        "beyondLaunch": {
          "title": "📈 Au-delà du Lancement : Assurez Votre Croissance avec un Abonnement de Support",
          "intro": "Ces prix de lancement assurent votre départ. Une fois votre période de maintenance initiale expirée, votre attention doit se porter sur la croissance, la sécurité et l'expansion des fonctionnalités.",
          "features": [
            {
              "title": "Sécurité Proactive",
              "points": [
                "Surveillance continue de la disponibilité et des performances.",
                "Mises à jour régulières de la plateforme et correctifs de sécurité.",
                "Sauvegardes quotidiennes hors site pour protéger vos données.",
                "Analyse proactive des malwares et détection des menaces."
              ]
            },
            {
              "title": "Allocation de Croissance",
              "points": [
                "Heures mensuelles dédiées à la croissance numérique stratégique.",
                "Création de contenu : nouvelles pages, articles de blog et mises à jour du portfolio.",
                "Affinement continu du SEO pour améliorer le classement dans les recherches.",
                "Stratégie de contenu pour les réseaux sociaux et gestion des campagnes publicitaires."
              ]
            },
            {
              "title": "Support Prioritaire",
              "points": [
                "Accès direct à notre équipe de support senior via Slack et e-mail.",
                "Temps de réponse plus rapides garantis pour toutes les demandes techniques.",
                "Évitez la file d'attente pour toute correction ou ajustement urgent.",
                "Dépannage expert et résolution des problèmes."
              ]
            }
          ]
        },
        "cta": {
          "title": "Prêt à discuter du forfait de lancement qui vous offrira le départ le plus rapide et le plus professionnel ?",
          "button": "RÉSERVEZ VOTRE APPEL DE DÉCOUVERTE GRATUIT DE 15 MINUTES"
        },
        "packageForm": {
            "namePlaceholder": "Votre Nom",
            "emailPlaceholder": "Votre E-mail",
            "submitButton": "Envoyer la demande"
        }
      },
      "privacyPolicyPage": {
        "title": "Politique de Confidentialité",
        "subtitle": "Date d'entrée en vigueur : 26 octobre 2023",
        "sections": [
          {
            "heading": "Introduction",
            "content": "<p>Cette Politique de Confidentialité explique comment YourDigitalStep (“l'agence”, “nous” ou “notre”) collecte, utilise, divulgue et protège les informations personnelles que vous nous fournissez lorsque vous utilisez nos services ou visitez notre site web.</p>"
          },
          {
            "heading": "1. Informations que nous collectons",
            "content": "<p>Nous collectons les informations nécessaires pour vous fournir nos services numériques et pour maintenir nos opérations commerciales. Cela peut inclure :</p><ul><li><b>Coordonnées et informations d'identification :</b> Noms, adresses e-mail, numéros de téléphone et adresses postales fournis lors des demandes, de la contractualisation ou de la prestation de services.</li><li><b>Données liées au service :</b> Informations contenues dans les propositions de projet, les dossiers clients, les communications et les identifiants de connexion nécessaires au développement de sites web, au SEO, au branding ou aux services de conseil.</li><li><b>Données financières et de facturation :</b> Informations nécessaires au traitement des paiements, telles que les adresses de facturation. Remarque : Nous не conservons pas les numéros complets de carte de crédit ; ces informations sont traitées de manière sécurisée par des processeurs de paiement tiers.</li><li><b>Données d'utilisation du site web (le cas échéant) :</b> Informations collectées automatiquement lorsque vous visitez notre site web, telles que l'adresse IP, le type de navigateur, les pages visitées et le temps passé sur le site, souvent via des outils d'analyse.</li></ul>"
          },
          {
            "heading": "2. Comment nous utilisons vos informations",
            "content": "<p>Nous utilisons les informations que nous collectons aux fins commerciales essentielles suivantes :</p><ul><li>Pour fournir, gérer et maintenir les services numériques que vous avez demandés.</li><li>Pour traiter les transactions et vous envoyer des informations financières connexes, telles que des factures et des reçus.</li><li>Pour communiquer avec vous concernant les mises à jour de service, les demandes de support ou les modifications importantes de nos Conditions d'Utilisation ou de cette Politique.</li><li>Pour analyser et améliorer les performances de notre site web et de nos services.</li><li>Pour mener des actions de marketing direct, lorsque la loi le permet, dont vous pouvez vous désinscrire à tout moment.</li></ul>"
          },
          {
            "heading": "3. Partage et divulgation des informations",
            "content": "<p>Nous ne partagerons vos informations personnelles que dans les circonstances suivantes :</p><ul><li><b>Avec des prestataires de services tiers :</b> Nous partageons les données nécessaires avec des tiers de confiance qui fournissent des services en notre nom, tels que des processeurs de paiement, des hébergeurs ou des sous-traitants spécialisés (par exemple, expertise en codage spécifique) aidant à l'exécution de votre commande de service, dans le cadre d'accords de confidentialité stricts.</li><li><b>Exigences légales :</b> Nous pouvons divulguer vos informations si la loi, une ordonnance du tribunal ou une demande gouvernementale l'exige.</li><li><b>Opérations commerciales :</b> En cas de vente, de fusion ou de transfert des actifs de l'agence, les informations peuvent être transférées à la nouvelle entité, sous réserve du respect continu de cette Politique de Confidentialité.</li><li><b>Avec votre consentement explicite :</b> Pour toute fin non spécifiée dans cette politique, nous obtiendrons votre consentement préalable.</li></ul>"
          },
          {
            "heading": "4. Sécurité des données",
            "content": "<p>Nous mettons en œuvre des mesures de protection administratives, techniques et physiques raisonnables conçues pour protéger les informations personnelles que nous détenons contre la destruction, la perte, l'altération, l'accès, la divulgation ou l'utilisation accidentels, illégaux ou non autorisés. Cependant, aucun système de sécurité n'est impénétrable, et nous ne pouvons garantir la sécurité absolue de vos informations.</p>"
          },
          {
            "heading": "5. Conservation des données",
            "content": "<p>Nous conservons vos données personnelles uniquement le temps nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, et pour nous conformer aux exigences légales, comptables et de reporting. Une fois que les données ne sont plus nécessaires, elles seront supprimées de manière sécurisée ou anonymisées.</p>"
          },
          {
            "heading": "6. Vos droits en matière de données",
            "content": "<p>Selon votre lieu de résidence, vous pouvez avoir des droits spécifiques concernant vos données personnelles, y compris le droit de :</p><ul><li>Accéder aux données personnelles que nous détenons à votre sujet.</li><li>Corriger des données inexactes ou incomplètes.</li><li>Demander la suppression de vos données personnelles (le \"droit à l'oubli\").</li><li>Vous opposer à certains types de traitement ou les restreindre.</li></ul><p>Pour exercer l'un de ces droits, veuillez nous contacter en utilisant les coordonnées ci-dessous.</p>"
          },
          {
            "heading": "7. Confidentialité des enfants",
            "content": "<p>Nos services s'adressent aux entreprises et aux personnes légalement capables de conclure des contrats contraignants (âgées de 18 ans ou plus). Nous ne collectons pas sciemment d'informations personnelles auprès de personnes de moins de 18 ans.</p>"
          },
          {
            "heading": "8. Coordonnées",
            "content": "<p>Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter :</p><p>E-mail : contact@yourdigitalstep.com</p>"
          }
        ]
      },
      "termsOfServicePage": {
        "title": "Conditions d'Utilisation",
        "subtitle": "Date d'entrée en vigueur : 26 octobre 2023",
        "sections": [
          {
            "heading": "Acceptation des Conditions",
            "content": "<p>En accédant ou en utilisant les services fournis sous le nom commercial “YourDigitalStep” (“l'agence”, “nous”, ou “notre”), vous acceptez de vous conformer et d'être lié par ces Conditions d'Utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser nos services.</p>"
          },
          {
            "heading": "Modifications",
            "content": "<p>Nous nous réservons le droit de modifier ces Conditions à tout moment, à notre seule discrétion. Les changements seront publiés sur cette page ou communiqués directement. L'utilisation continue de nos services après toute modification constitue une acceptation des Conditions modifiées, veuillez donc consulter cette page régulièrement.</p>"
          },
          {
            "heading": "Éligibilité",
            "content": "<p>Vous ne pouvez utiliser nos services que si vous avez au moins 18 ans, si vous êtes légalement capable de conclure des contrats contraignants et si l'utilisation de nos services n'est pas interdite par la loi applicable.</p>"
          },
          {
            "heading": "Portée des Services",
            "content": "<p>YourDigitalStep fournit des services numériques, qui могут inclure la création de sites web, le SEO, le développement d'applications, le branding et le conseil. Les détails, les livrables et les frais pour tous les services seront indiqués dans votre accord individuel, votre proposition de projet ou votre facture. Les termes de ces CGU complètent, mais ne remplacent pas, les termes spécifiques de l'Accord de Service ou de la Proposition exécutée.</p>"
          },
          {
            "heading": "Contenu du Client et de l'Utilisateur",
            "content": "<p>Vous conservez tous les droits sur le contenu que vous créez, téléchargez ou partagez (“Contenu Utilisateur”) en utilisant nos services. Vous nous accordez une licence non exclusive et libre de droits pour utiliser, héberger, afficher et distribuer votre Contenu Utilisateur uniquement pour vous fournir ou améliorer nos services.</p><p>Toute propriété intellectuelle développée par YourDigitalStep, y compris les conceptions, le code, la documentation et les matériaux non fournis par vous, reste la propriété de l'agence, sauf si et jusqu'à ce qu'elle vous soit expressément cédée dans un accord écrit distinct et entièrement exécuté après réception de tous les paiements dus et non contestés.</p>"
          },
          {
            "heading": "Paiements, Remboursements et Annulations",
            "content": "<p>Les frais, les échéanciers de paiement et les politiques de remboursement sont définis dans votre accord, proposition ou facture. Vous acceptez de payer tous les montants non contestés à temps. Les demandes de remboursement seront examinées au cas par cas en tenant compte de l'état d'avancement du projet et des obligations remplies. Le non-paiement à temps nous donne le droit d'arrêter immédiatement tout travail et de facturer des frais de retard de <b>1,5 %</b> par mois sur le solde impayé.</p>"
          },
          {
            "heading": "Conduite Interdite",
            "content": "<p>Vous vous engagez à ne pas :</p><ul><li>Utiliser nos services à des fins illégales ou non autorisées</li><li>Interférer avec ou perturber notre site web ou nos systèmes</li><li>Enfreindre notre propriété intellectuelle ou les droits d'autrui</li><li>Tenter d'accéder aux données d'autres utilisateurs sans autorisation</li><li>Nous fournir du contenu ou des matériaux pour lesquels vous ne détenez pas les licences ou droits nécessaires.</li></ul>"
          },
          {
            "heading": "Limitation de Responsabilité",
            "content": "<p>DANS LA MESURE MAXIMALE AUTORISÉE PAR LA LOI APPLICABLE, EN AUCUN CAS YOURDIGITALSTEP, LE PROPRIÉTAIRE, OU SES FOURNISSEURS NE SERONT RESPONSABLES DE TOUT DOMMAGE SPÉCIAL, ACCESSOIRE, INDIRECT, PUNITIF OU CONSÉCUTIF QUEL QU'IL SOIT (Y COMPRIS, SANS LIMITATION, LES DOMMAGES POUR PERTE DE PROFITS, PERTE DE REVENUS, PERTE D'OPPORTUNITÉ COMMERCIALE, PERTE DE DONNées OU INTERRUPTION D'ACTIVITÉ) DÉCOULANT DE OU LIÉ DE QUELQUE MANIÈRE QUE CE SOIT À L'UTILISATION OU À L'INCAPACITÉ D'UTILISER LES SERVICES, MÊME SI L'AGENCE A ÉTÉ INFORMÉE DE LA POSSIBILITÉ DE TELS DOMMAGES.</p><p>La responsabilité cumulative totale de l'agence envers vous pour toutes les réclamations découlant de ou liées à ces Conditions ou aux Services ne dépassera pas le total des frais que vous avez payés à l'agence pour le service spécifique donnant lieu à la réclamation au cours des trois (3) mois précédents.</p>"
          },
          {
            "heading": "Indemnisation",
            "content": "<p>Vous acceptez d'indemniser et de dégager de toute responsabilité YourDigitalStep, le propriétaire, ainsi que leurs agents et employés respectifs, contre toute réclamation, demande, responsabilité, coût ou dépense de tiers, y compris les honoraires d'avocat raisonnables, résultant de : (a) votre violation de ces Conditions ; (b) votre utilisation des services d'une manière non autorisée par ces Conditions ; ou (c) tout Contenu Utilisateur ou matériel fourni par vous, y compris toute réclamation pour violation des droits de propriété intellectuelle par un tiers.</p>"
          },
          {
            "heading": "Avis sur l'Entité Commerciale",
            "content": "<p>YourDigitalStep est le nom commercial d'une entreprise individuelle exploitée par le propriétaire. Les références à “YourDigitalStep,” “l'agence,” “nous,” ou “notre” dans ces Conditions se réfèrent au propriétaire agissant sous ce nom commercial. En acceptant ces termes, vous reconnaissez qu'aucune relation de partenariat, de coentreprise ou d'emploi n'est créée. La responsabilité du propriétaire est limitée uniquement dans la mesure permise par la loi et n'offre pas les protections d'une société ou d'une société à responsabilité limitée.</p>"
          },
          {
            "heading": "Droit Applicable",
            "content": "<p>Ces Conditions sont régies et interprétées conformément aux lois de la juridiction du propriétaire. Tout litige juridique sera traité par les tribunaux de cette juridiction.</p>"
          },
          {
            "heading": "Contact et Mentions Légales",
            "content": "<p>Pour toute question concernant ces Conditions, veuillez contacter : contact@yourdigitalstep.com</p>"
          }
        ]
      },
      "thankYouPage": {
        "title": "Merci !",
        "subtitle": "Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.",
        "backToHome": "Retour à l'accueil"
      },
      "forms": {
        "submitting": "Envoi en cours...",
        "submitError": "Une erreur est survenue. Veuillez réessayer."
      }
    }
  },
  pl: {
    translation: {
      "nav": {
        "links": [
          { "href": "/", "label": "Start" },
          { "href": "/services", "label": "Usługi" },
          { "href": "/portfolio", "label": "Nasze Prace" },
          { "href": "/special-offer", "label": "Oferta Specjalna" },
          { "href": "/contact", "label": "Kontakt" }
        ],
        "getStarted": "Zacznij"
      },
      "hero": {
        "eyebrow": "Strategia, design i inżynieria",
        "title": "<0>Jasność</0> w Złożonym<1> Cyfrowym Świecie</1>",
        "subtitle": "Nie tylko budujemy strony internetowe; tworzymy cyfrowe doświadczenia, które napędzają wzrost, angażują odbiorców i przynoszą wymierne rezultaty.",
        "getStarted": "Rozpocznij Swój Projekt",
        "learnMore": "Zobacz Nasz Proces"
      },
      "stats": {
        "title": "Sprawdzone Wyniki, Dostarczane z Precyzją",
        "items": [
          { "endValue": 50, "suffix": "+", "label": "Ukończonych Projektów" },
          { "endValue": 98, "suffix": "%", "label": "Satysfakcji Klientów" },
          { "textValue": "24/7", "label": "Dostępne Wsparcie" }
        ]
      },
      "services": {
        "title": "Nasze Usługi",
        "subtitle": "Nasze trzy kluczowe dyscypliny działają w synergii, aby dostarczać kompleksowe rozwiązania cyfrowe. Przekształcamy złożone wyzwania w eleganckie, wysokowydajne produkty.",
        "items": [
          {
            "serviceId": "strategy",
            "title": "Strategia Cyfrowa i Doradztwo",
            "description": "Sukces zaczyna się od jasnej mapy drogowej. Dogłębnie analizujemy Twój rynek, odbiorców i cele, aby zbudować strategię cyfrową opartą na danych, która gwarantuje, że każda decyzja przybliża Cię do celu.",
            "process": [
              "Dogłębna analiza rynku i konkurencji",
              "Mapowanie person i podróży użytkownika",
              "Strategiczne doradztwo w zakresie stosu technologicznego",
              "Definicja metryk wydajności i wskaźników KPI"
            ]
          },
          {
            "serviceId": "design",
            "title": "Projektowanie UI/UX i Branding",
            "description": "Tworzymy intuicyjne i oszałamiające wizualnie interfejsy, które urzekają użytkowników i skłaniają do działania. Nasz proces projektowy łączy artystyczną kreatywność z rygorystycznymi badaniami zorientowanymi na użytkownika, aby dostarczać doświadczenia, które są zarówno piękne, jak i skuteczne.",
            "process": [
              "Współpraca przy tworzeniu makiet i prototypów",
              "Projektowanie UI i wizualne o wysokiej wierności",
              "Kompleksowa tożsamość marki i przewodniki po stylu",
              "Iteracyjne testowanie użyteczności i pętle opinii"
            ]
          },
          {
            "serviceId": "development",
            "title": "Rozwój Aplikacji Webowych i Mobilnych",
            "description": "Nasz kod to nasze rzemiosło. Budujemy solidne, skalowalne i bezpieczne aplikacje internetowe i mobilne przy użyciu najnowocześniejszych technologii. Piszemy czysty, łatwy w utrzymaniu kod, zaprojektowany z myślą o długoterminowej wydajności i rozwoju.",
            "process": [
              "Zwinny rozwój i iteracyjne sprinty",
              "Skalowalna architektura Front-end i Back-end",
              "Niestandardowa integracja i rozwój API",
              "Rygorystyczne zapewnienie jakości i testowanie wydajności"
            ]
          }
        ],
        "details": {
          "ourProcess": "Nasz Proces",
          "clientFeedback": "Opinia Klienta",
          "relatedWork": "Powiązany Projekt"
        }
      },
      "detailedServices": {
        "title": "Szczegółowy Opis Naszych Usług",
        "categories": [
          {
            "title": "Strategia",
            "items": [
              { "id": "brandAudits", "title": "Audyty Marki", "description": "Niezależnie od tego, czy się rozwijasz, dopiero zaczynasz, czy przenosisz swoją firmę do internetu, oto jak pomagamy:", "process": ["Rozmowa o Twoich celach, doświadczeniu i wizji (nowej lub ugruntowanej)", "Przegląd marki: audyt istniejących zasobów lub pomoc w budowaniu fundamentów od zera", "Opinie interesariuszy: wywiady z Twoim zespołem, klientami lub wspólna burza mózgów, jeśli działasz solo", "Analiza rynku: porównanie z konkurencją, dostosowane do etapu Twojego rynku", "Karta wyników: jasność co do mocnych stron, luk i potencjału", "Warsztaty: wspólna sesja, podczas której priorytetyzujemy kolejne kroki dopasowane do Twojej drogi", "Plan działania: spersonalizowana mapa drogowa rozwoju, nawet jeśli zaczynasz od zera"] },
              { "id": "marketResearch", "title": "Badania Rynku", "description": "Wglądy dostosowane do Twojej podróży:", "process": ["Odkrycie: zdefiniuj, co oznacza sukces, czy to doskonalenie, czy uruchomienie", "Mapowanie: określ zakres swojej branży, niezależnie od tego, czy jest nowa, lokalna czy globalna", "Gromadzenie danych: używaj narzędzi dostosowanych do dojrzałości Twojego biznesu", "Analiza: uzyskaj trendy rynkowe i wglądy w konkurencję, na których możesz działać już dziś", "Strategia: przekształć wnioski w proste następne kroki, niezależnie od tego, czy uruchamiasz, czy skalujesz"] },
              { "id": "uxStrategy", "title": "Strategia Doświadczeń Użytkownika (UX)", "description": "Doskonałe doświadczenie na każdym etapie:", "process": ["Odkrycie: zmapuj cyfrową lub osobistą podróż użytkowników", "Badania: przeprowadzamy dogłębne analizy lub pomagamy Ci rozmawiać z Twoimi pierwszymi klientami", "Naprawy: zidentyfikuj bolączki, zaproponuj pomysły dla nowych lub rozwijających się marek", "Prototypowanie: naszkicuj przepływy, które pasują do Twojej obecnej sytuacji", "Testowanie: zweryfikuj w celu ulepszenia, uruchomienia lub pierwszego wrażenia", "Podręcznik: przewodnik krok po kroku, bez względu na Twój punkt wyjścia"] }
            ]
          },
          {
            "title": "Tożsamość Marki",
            "items": [
              { "id": "logoDesign", "title": "Projektowanie Logo", "description": "Tworzymy potężne, ponadczasowe logo, które stanowi fundament Twojej tożsamości wizualnej.", "process": ["Odkrycie: podziel się swoją historią, czy to długo istniejącą, czy świeżym pomysłem", "Inspiracja: wybierz style i kierunki, które pasują lub podnoszą rangę Twojej marki", "Koncepcja: przejrzyj projekty, niezależnie od tego, czy jest to Twoja pierwsza, czy kolejna iteracja", "Dopracowanie: współpracuj we własnym tempie", "Dostarczenie: pliki i instrukcje, gotowe na każdy punkt styku"] },
              { "id": "visualIdentity", "title": "Identyfikacja Wizualna", "description": "Budujemy kompletny system wizualny—od kolorów po typografię—który sprawia, że Twoja marka jest natychmiast rozpoznawalna.", "process": ["Audyt lub burza mózgów: oceń swój obecny wygląd lub wygeneruj pomysły od zera", "Tworzenie zasobów: kolory, czcionki, ikony dla nowych premier lub rebrandingów", "Szablony: praktyczne narzędzia dla każdego kanału, przyjazne dla początkujących", "Zestaw marki: proste instrukcje, dzięki którym Twoja tożsamość jest zawsze jasna"] },
              { "id": "brandGuidelines", "title": "Księga Znaku", "description": "Dostarczamy kompleksowy podręcznik dla Twojej marki, aby zapewnić spójność w całym zespole i na wszystkich platformach.", "process": ["Inwentaryzacja: zbierz to, co masz, lub zacznij od zera razem", "Zasady: proste standardy dla istniejących lub nowych marek", "Szkolenie: wdrożenie dla Twojego zespołu lub tylko dla Ciebie", "Aktualizacje: wsparcie w miarę Twojego rozwoju"] }
            ]
          },
          {
            "title": "Tworzenie Stron Internetowych",
            "items": [
              { "id": "customWebApps", "title": "Niestandardowe Aplikacje Internetowe", "description": "Twoje potrzeby, Twoja skala:", "process": ["Odkrycie: zbadaj swoje procesy biznesowe, niezależnie od tego, czy chodzi o modernizację, czy tworzenie od nowa", "Planowanie: buduj rozwiązania techniczne na rzecz wzrostu lub początkowej wydajności", "Prototypowanie: zobacz, jak Twoje rozwiązanie ożywa w Twoim tempie", "Rozwój: otrzymuj regularne aktualizacje, testuj na bieżąco", "Testowanie/QA: wyeliminuj problemy, aby zapewnić płynne uruchomienie (całkiem nowe lub zaawansowane)", "Uruchomienie: wdrażaj ze wsparciem i pewnością dla swojego zespołu", "Szkolenie: dostosowana nauka, abyś miał kontrolę, początkujący mile widziani"] },
              { "id": "performanceOptimization", "title": "Optymalizacja Wydajności", "description": "Szybkość i niezawodność dla każdego:", "process": ["Audyt: przejrzyj swoją obecną stronę, niezależnie od tego, czy jest nowa, czy ugruntowana", "Diagnoza: wyszczególnij ulepszenia, które mają największe znaczenie dla Twoich celów", "Wdrożenie: napraw problemy lub ustal dobre nawyki dla początkujących", "Raportowanie: porównaj wyniki, upewnij się, że wiesz, co działa"] },
              { "id": "cmsDevelopment", "title": "Rozwój CMS", "description": "Treść dla każdej wielkości firmy:", "process": ["Konsultacja: poleć łatwy w użyciu CMS dostosowany do Twojej sytuacji", "Konfiguracja: dostosuj lub zbuduj od zera", "Transfer treści: przenieś starą treść lub utwórz nowe szablony", "Szkolenie: proste filmy i przewodniki, aby ułatwić aktualizacje każdemu", "Wsparcie: jesteśmy tu na każde pytanie, dla początkujących i profesjonalistów"] }
            ]
          },
          {
            "title": "Marketing Cyfrowy",
            "items": [
              { "id": "seo", "title": "Optymalizacja SEO", "description": "Wszystkie poziomy umiejętności mile widziane:", "process": ["Audyt: dogłębna analiza lub szybkie sprawdzenie Twojej strony internetowej", "Badania: wybierz słowa kluczowe dla nowych stron lub strategii wzrostu", "Konfiguracja techniczna: zbuduj lub ulepsz swój fundament wyszukiwania", "Treść: zaplanuj tematy, niezależnie od tego, czy zaczynasz bloga, czy zwiększasz zasięg", "Raportowanie: jasne opinie, które pomogą Ci się rozwijać"] },
              { "id": "socialMedia", "title": "Marketing w Mediach Społecznościowych", "description": "Planuj i publikuj z pewnością siebie:", "process": ["Audyt: przejrzyj swoje profile lub pomóż w ich założeniu od zera", "Strategia: spersonalizowane kalendarze dla nowych premier lub ugruntowanych marek", "Treść: twórz, planuj i angażuj razem", "Doskonalenie: comiesięczne przeglądy, aby ewoluować w miarę wzrostu"] },
              { "id": "ppc", "title": "Reklama PPC", "description": "Budżet i cele na każdym etapie:", "process": ["Konfiguracja: zaplanuj swoją kampanię, niezależnie od tego, czy jest nowa, czy optymalizujesz wydatki", "Targetowanie: znajdź odpowiednią publiczność na teraz i na później", "Kreacja: projektuj reklamy, które robią wrażenie", "Śledzenie: informacje zwrotne w czasie rzeczywistym, dzięki którym uczysz się i ulepszasz"] }
            ]
          }
        ]
      },
      "differentiators": {
        "title": "Dlaczego Wybrać YourDigitalStep?",
        "subtitle": "Nasze podstawowe zasady nas wyróżniają. Jesteśmy kimś więcej niż dostawcą usług; jesteśmy Twoim oddanym partnerem w cyfrowej doskonałości, zaangażowanym w proces, który gwarantuje sukces.",
        "items": [
          {
            "title": "Radykalna Przejrzystość",
            "description": "Żadnych czarnych skrzynek. Wierzymy w całkowitą przejrzystość, dając Ci wgląd w postępy w czasie rzeczywistym dzięki współdzielonym kanałom komunikacji i tablicom projektowym. Jesteś współpracownikiem na każdym etapie, co zapewnia pełne zgranie i spokój ducha.",
            "features": ["Współdzielone kanały Slack", "Cotygodniowe rozmowy synchronizacyjne", "Dostęp do tablic projektowych"]
          },
          {
            "title": "Inżynierskie Podejście",
            "description": "Do każdego projektu podchodzimy z inżynierskim nastawieniem. Skupiamy się na tworzeniu rozwiązań, które są nie tylko atrakcyjne wizualnie, ale są zaprojektowane pod kątem skalowalności, wydajności i długoterminowej łatwości utrzymania. Budujemy na lata.",
            "features": ["Architektura modułowa", "Kompleksowa dokumentacja", "Standardy jakości kodu"]
          },
          {
            "title": "Decyzje Oparte na Danych",
            "description": "Intuicja jest dobra, ale dane są lepsze. Eliminujemy zgadywanie, opierając każdą decyzję strategiczną i projektową na kompleksowych badaniach i analizach. Nasze podejście oparte na danych gwarantuje, że jesteśmy nie tylko kreatywni—jesteśmy skuteczni.",
            "features": ["Protokoły testów A/B", "Analiza zachowań użytkowników", "Monitorowanie wydajności po wdrożeniu"]
          }
        ]
      },
      "portfolio": {
        "title": "Nasze Prace",
        "subtitle": "Mieliśmy przywilej współpracować z różnorodnymi klientami, aby stworzyć prace, z których jesteśmy dumni.",
        "items": [
          {
            "image": "portfolio_ambrees_main",
            "category": "E-commerce i Branding",
            "title": "Ambrees – Rozwiązanie Markowe i E-Commerce",
            "description": "Kompletna tożsamość cyfrowa i bezproblemowe doświadczenie sklepu internetowego, napędzające sprzedaż dzięki oszałamiającym wizualizacjom, ukierunkowanym kampaniom reklamowym i bezproblemowym zakupom.",
            "tags": ["Tożsamość Marki", "Shopify", "Projektowanie UI/UX", "Reklamy Cyfrowe", "SEO"],
            "serviceId": "design",
            "details": {
              "title": "Ambrees – Kompletne Rozwiązanie Markowe i E-Commerce",
              "subtitle": "Od pierwszego szkicu logo po uruchomienie sklepu internetowego i kampanie reklamowe",
              "clientVision": "Ambrees potrzebowało zapadającej w pamięć tożsamości marki i przyjaznego sklepu internetowego, w którym klienci natychmiast nawiązują więź z produktami. Chcieli doskonale przygotowanych wizualizacji produktów, łatwej nawigacji i potężnej reklamy, aby przyciągnąć nowych klientów na swoją stronę.",
              "ourSolution": [
                "Opracowanie charakterystycznego logo Ambrees i pełnych wytycznych dotyczących marki",
                "Zaprojektowanie wszystkich elementów strony internetowej, fotografii produktowej i spójnej grafiki dla jednolitego wyglądu",
                "Zbudowanie nowoczesnego, przyjaznego dla użytkownika sklepu internetowego umożliwiającego szybkie przeglądanie i bezpieczne zakupy",
                "Uruchomienie cyfrowych kampanii reklamowych w celu generowania ukierunkowanego ruchu i zwiększenia sprzedaży",
                "Skonfigurowanie Google Analytics w celu uzyskania przydatnych informacji i śledzenia kampanii",
                "Wdrożenie zaawansowanego SEO, aby Ambrees było łatwo znajdowane przez kupujących online"
              ],
              "result": "Ambrees wyróżnia się teraz spójną tożsamością cyfrową i bezproblemowym doświadczeniem sklepu internetowego. Klienci cieszą się oszałamiającymi wizualizacjami, bezproblemowymi zakupami i marką, którą zapamiętują.",
              "screenshots": [
                  "portfolio_ambrees_ss1",
                  "portfolio_ambrees_ss2",
                  "portfolio_ambrees_ss3"
              ]
            }
          },
          {
            "image": "portfolio_curraterra_main",
            "category": "Blog Wellness i Ekosystem Marki",
            "title": "Curra Terra – Blog Wellness i Ekosystem Marki",
            "description": "Kompletny ekosystem marki i blog wellness, zaprojektowany w celu budowania zaufanej społeczności poprzez osobiste historie i praktyczną naukę.",
            "tags": ["Tożsamość Marki", "Tworzenie Stron WWW", "Strategia Treści", "Monetyzacja", "SEO"],
            "serviceId": "strategy",
            "details": {
              "title": "Curra Terra – Blog Wellness i Ekosystem Marki",
              "subtitle": "Gdzie Osobista Historia Spotyka Praktyczny Wellness",
              "clientVision": "Kierowana własną podróżą ze zdrowiem jelit, założycielka Curra Terra chciała czegoś więcej niż tylko bloga. Jej marzeniem było przyjazne miejsce, gdzie szczere historie i pomocna nauka mogłyby inspirować innych, zbudowane na zaufaniu, prostocie i społeczności.",
              "ourSolution": [
                "Zaprojektowaliśmy unikalne logo i kompletny styl marki, dzięki czemu strona stała się ciepła, nowoczesna i natychmiast rozpoznawalna.",
                "Zbudowaliśmy intuicyjne strony i kategorie dla łatwego odkrywania przepisów, poradników, osobistych historii i wskazówek wellness.",
                "Uprościliśmy całą konfigurację techniczną: hosting, nawigację, doświadczenie mobilne i płynną edycję treści.",
                "Poprowadziliśmy tworzenie mapy strony zorientowanej na użytkownika, aby każdy odwiedzający szybko znalazł to, co dla niego ważne.",
                "Zintegrowaliśmy niezbędne narzędzia Google: Analytics do wglądów, Search Console do wykrywalności i płynne zatwierdzenie AdSense.",
                "Opracowaliśmy krok po kroku plan monetyzacji, pomagając założycielce przejść od dzielenia się pasją do budowania zrównoważonego zasobu wellness.",
                "Zaoferowaliśmy praktyczną pomoc w zakresie reklam, budowania publiczności i uczynienia przeszkód technicznych niewidocznymi dla klienta."
              ],
              "result": "Curra Terra jest teraz zaufanym centrum wellness: łatwym do przeglądania, pięknym do czytania i wyjątkowo osobistym. Założycielka nawiązuje bezpośredni kontakt z rosnącą społecznością, wzmacniając innych, jednocześnie stale budując platformę gotową na wzrost i przychody.",
              "screenshots": [
                "portfolio_curraterra_ss1",
                "portfolio_curraterra_ss2",
                "portfolio_curraterra_ss3"
              ]
            }
          },
          {
            "image": "portfolio_villabaltic_main",
            "category": "Hotelarstwo i Rezerwacje",
            "title": "Villa Baltic Sea – Rezerwacje i Widoczność",
            "description": "Elegancka strona hotelowa z zintegrowanym systemem rezerwacji, zoptymalizowana pod kątem lokalnego wyszukiwania i mediów społecznościowych, aby przyciągnąć więcej gości.",
            "tags": ["System Rezerwacji", "Tworzenie Stron WWW", "Lokalne SEO", "Media Społecznościowe"],
            "details": {
              "title": "Villa Baltic Sea – Strona Hotelowa, System Rezerwacji i Widoczność Cyfrowa",
              "subtitle": "Łatwa Rezerwacja Spotyka Silną Obecność Lokalną",
              "clientVision": "Villa Baltic Sea potrzebowała czegoś więcej niż strony internetowej; chcieli, aby turyści i goście mogli łatwo odkrywać i rezerwować pokoje online, a jako gospodarze, zarządzać wszystkim bez umiejętności technicznych. Co więcej, dążyli do dotarcia do szerszej publiczności w swoim regionie poprzez silną widoczność w mediach społecznościowych i wyszukiwarkach.",
              "ourSolution": [
                "Stworzenie atrakcyjnej wizualnie strony internetowej, prezentującej pokoje z pięknymi zdjęciami, jasnymi udogodnieniami i opcjami natychmiastowej rezerwacji",
                "Integracja prostego, intuicyjnego systemu rezerwacji, aby goście mogli sprawdzać dostępność i rezerwować pokoje bezpośrednio",
                "Opracowanie przyjaznego dla użytkownika panelu administracyjnego dla gospodarzy, umożliwiającego łatwe aktualizowanie wolnych miejsc i cen — bez potrzeby szkolenia",
                "Zapewnienie bezproblemowego dostępu i projektu przyjaznego dla urządzeń mobilnych, aby rezerwacje mogły odbywać się w dowolnym miejscu i czasie",
                "Założenie i branding ich profili w mediach społecznościowych, w tym ukierunkowane kampanie na Facebooku w celu zwiększenia świadomości wśród lokalnych i podróżujących odbiorców",
                "Wdrożenie lokalnego SEO i optymalizacja obecności w Google, dzięki czemu Villa Baltic Sea jest łatwa do znalezienia dla gości szukających w okolicy",
                "Zapewnienie praktycznego wsparcia w zakresie bieżących postów w mediach społecznościowych i pytań dotyczących rezerwacji, utrzymując pewność siebie gospodarzy i zaangażowanie ich publiczności"
              ],
              "result": "Villa Baltic Sea cieszy się teraz stałym napływem rezerwacji, zwiększoną widocznością online i ożywionym zaangażowaniem zarówno w mediach społecznościowych, jak i w wyszukiwarkach. Goście łatwo znajdują i rezerwują pokoje, podczas gdy gospodarze bez wysiłku aktualizują wszystko, przekształcając cyfrową prostotę w realny wzrost.",
              "screenshots": ["portfolio_villabaltic_ss1", "portfolio_villabaltic_ss2", "portfolio_villabaltic_ss3"]
            }
          },
          {
            "image": "portfolio_hydrocycle_main",
            "category": "Strona Internetowa dla Firmy Lokalnej",
            "title": "Uruchomienie Strony Hydrocycle",
            "description": "Elegancka, intuicyjna strona internetowa dla lokalnej firmy, zoptymalizowana pod kątem dostępu mobilnego, lokalnego SEO i bezproblemowej komunikacji z klientami.",
            "tags": ["Lokalne SEO", "Mobile First", "Projektowanie UI/UX", "Tworzenie Stron WWW", "Analityka"],
            "details": {
              "title": "Uruchomienie Strony Internetowej Hydrocycle",
              "subtitle": "Bezproblemowe rozwiązania, natychmiast dostępne",
              "clientVision": "Hydrocycle wyobrażało sobie platformę internetową, na której klienci mogliby natychmiast zrozumieć usługi, szybko się skontaktować i uzyskać potrzebną pomoc bez żadnej frustracji. Priorytetem była całkowita prostota, szybka reakcja i przejrzystość na każdym kroku.",
              "ourSolution": [
                "Zaprojektowanie czystej, prostej strony głównej, która bez bałaganu prowadzi odwiedzających do działania",
                "Uproszczenie całej podróży użytkownika, dzięki czemu każda niezbędna usługa i metoda kontaktu są łatwe do znalezienia",
                "Stworzona z myślą o urządzeniach mobilnych: responsywne układy zapewniają szybki dostęp i doskonałą użyteczność na każdym urządzeniu",
                "Wbudowanie Google Analytics i kompleksowego zestawu technicznego do monitorowania i wydajności",
                "Zoptymalizowana pod kątem lokalnego SEO, pomagając Hydrocycle pojawiać się, gdy klienci szukają rozwiązań w ich okolicy",
                "Dostarczenie systemu gotowego na przyszłość, łatwego do aktualizacji, rozbudowy i adaptacji w miarę rozwoju firmy"
              ],
              "result": "Klienci Hydrocycle mogą teraz cieszyć się elegancką, intuitywną stroną internetową, na której rozwiązania są na wyciągnięcie ręki.",
              "screenshots": [
                "portfolio_hydrocycle_ss1",
                "portfolio_hydrocycle_ss2",
                "portfolio_hydrocycle_ss3"
              ]
            }
          },
          {
            "image": "portfolio_vita_main",
            "category": "Aplikacja Mobilna i UX",
            "title": "Vita - Aplikacja do Mindfulness i Dobrego Samopoczucia",
            "description": "Pięknie prosta aplikacja mobilna, zaprojektowana, aby pomóc użytkownikom w budowaniu regularnej praktyki uważności poprzez medytacje z przewodnikiem i śledzenie postępów.",
            "tags": ["Aplikacja Mobilna", "React Native", "Badania UX", "Projektowanie UI/UX", "Wellness"],
            "serviceId": "development",
            "details": {
              "title": "Vita – Aplikacja Mobilna do Mindfulness i Dobrego Samopoczucia",
              "subtitle": "Tworzenie Spokojnej Przestrzeni Cyfrowej dla Codziennej Uważności",
              "clientVision": "Założyciele Vity chcieli stworzyć ucieczkę od zgiełku codziennego życia. Ich wizją była aplikacja mobilna, która byłaby uspokajająca, intuicyjna i zachęcająca, pomagając użytkownikom na wszystkich poziomach w budowaniu trwałego nawyku medytacyjnego bez przytłaczania ich funkcjami.",
              "ourSolution": [
                "Przeprowadzenie badań użytkowników w celu zrozumienia barier i motywacji do praktykowania uważności.",
                "Zaprojektowanie minimalistycznego, uspokajającego interfejsu użytkownika z kojącą paletą kolorów i delikatnymi animacjami.",
                "Opracowanie wieloplatformowej aplikacji mobilnej przy użyciu React Native dla systemów iOS i Android.",
                "Wdrożenie spersonalizowanego systemu śledzenia postępów w celu motywowania użytkowników za pomocą wizualnych informacji zwrotnych.",
                "Zintegrowanie biblioteki medytacji z przewodnikiem z dostosowywanymi licznikami sesji i dźwiękami tła."
              ],
              "result": "Vita osiągnęła znaczną liczbę pobrań w ciągu pierwszych sześciu miesięcy i zdobyła niezwykle pozytywne recenzje. Opinie użytkowników konsekwentnie chwalą prostotę aplikacji i jej uspokajające doświadczenie użytkownika, co doprowadziło do wysokiej dziennej retencji użytkowników.",
              "screenshots": ["portfolio_vita_ss1", "portfolio_vita_ss2", "portfolio_vita_ss3"]
            }
          },
          {
            "image": "portfolio_formasecu_main",
            "category": "Korporacyjna Platforma Szkoleniowa",
            "title": "Forma Secu – Platforma Szkoleń z Bezpieczeństwa",
            "description": "Nowoczesna, przyjazna dla użytkownika platforma szkoleniowa upraszczająca wyszukiwanie kursów, rejestrację i certyfikację dla profesjonalistów z branży bezpieczeństwa.",
            "tags": ["Tworzenie Stron WWW", "Projektowanie UI/UX", "Kalendarz Wydarzeń", "SEO"],
            "serviceId": "development",
            "details": {
              "title": "Forma Secu – Platforma Szkoleń z Bezpieczeństwa",
              "subtitle": "Usprawnienie Certyfikacji i Szkoleń dla Współczesnych Profesjonalistów",
              "clientVision": "Forma Secu miała ugruntowane logo i silną reputację w świecie rzeczywistym, ale ich obecność online nie dorównywała jakości ich oferty. Przy wielu różnorodnych sesjach szkoleniowych i napiętym harmonogramie potrzebowali cyfrowego rozwiązania, które ułatwiłoby kursantom znajdowanie, rozumienie i rejestrowanie się na odpowiednie certyfikaty.",
              "ourSolution": [
                "Wzmocniliśmy ich istniejącą tożsamość wizualną, przekształcając logo tarczy i paletę niebieskiego w przekonujący i godny zaufania projekt strony internetowej.",
                "Stworzyliśmy przejrzystą stronę główną i intuicyjną nawigację, z bezpośrednimi wezwaniami do działania prowadzącymi do odkrywania kursów i zapytań o wycenę.",
                "Opracowaliśmy zaawansowany, filtrowalny kalendarz wydarzeń, dzięki czemu użytkownicy mogą łatwo sortować i planować nadchodzące szkolenia według typu, daty lub wymagań.",
                "Zbudowaliśmy szczegółowe strony szkoleniowe wyjaśniające w prostym języku wymagania każdego kursu i korzyści dla uczestników.",
                "Zapewniliśmy, że wszystkie ścieżki użytkownika — od przeglądania po rejestrację i prośbę o indywidualną wycenę — są dostępne, wydajne i przyjazne dla urządzeń mobilnych.",
                "Usprawniliśmy formularze rejestracyjne i informacyjne, zmniejszając wysiłek użytkownika przy jednoczesnym zachowaniu zgodności i jakości danych.",
                "Wspieraliśmy ich marketing i zasięg poprzez solidne praktyki SEO na stronie oraz strukturę gotową do dalszej optymalizacji."
              ],
              "result": "Forma Secu to teraz czołowa cyfrowa platforma do szkoleń z zakresu bezpieczeństwa — łatwa w obsłudze, wizualnie przejrzysta i stworzona z myślą o bezproblemowym odkrywaniu kursów, rejestracji i wsparciu. Kursanci mogą szybko znajdować i planować swoje certyfikacje, z jasnością na każdym kroku, podczas gdy Forma Secu dociera do większej liczby uczestników niż kiedykolwiek dzięki ulepszonej obecności online i zoptymalizowanemu SEO.",
              "screenshots": ["portfolio_formasecu_ss1", "portfolio_formasecu_ss2", "portfolio_formasecu_ss3"]
            }
          }
        ]
      },
      "testimonials": {
        "title": "Co Mówią Nasi Klienci",
        "subtitle": "Prawdziwe historie firm, którym pomogliśmy się przekształcić. Ich sukces jest naszym największym osiągnięciem.",
        "items": [
          {
            "avatar": "testimonial_angel_unigwe_avatar",
            "name": "Angel Unigwe",
            "title": "Modelka, Aktorka, Osobowość Medialna",
            "quote": "Chciałam mieć stronę, która jest stylowa i naprawdę 'moja', coś, co łatwo pokazać, gdy spotykam nowe marki lub fanów. Od samego początku czułam się wysłuchana. Każda strona wygląda przepięknie, i uwielbiam, jak łatwo mogę aktualizować swoje zdjęcia czy wiadomości. To sprawia, że z dumą dzielę się swoją pracą.",
            "rating": 5
          },
          {
            "avatar": "testimonial_piotr_kwiatow_avatar",
            "name": "Piotr Kwiatow",
            "title": "Szef Marketingu",
            "quote": "Nowa strona niemal natychmiast przyciągnęła do nas więcej właściwych odwiedzających. Pracowałem z wieloma agencjami, ale ci ludzie zrozumieli nasze potrzeby dotyczące jasnego przekazu i lepszych wyników. Nasze kampanie są teraz łatwiejsze do zarządzania, i mogę pokazać mojemu zespołowi, co działa.",
            "rating": 5
          },
          {
            "avatar": "testimonial_youssef_alami_avatar",
            "name": "Youssef Alami",
            "title": "Założyciel, Marrakesz",
            "quote": "Nie jestem osobą techniczną, ale potrzebowałem, żeby mój sklep był naprawdę łatwy dla moich klientów i dla mnie. Proces przebiegał gładko od pierwszego telefonu. Ludzie mówią, że jest o wiele jaśniej, a ja dostaję więcej zamówień niż kiedykolwiek. Szczerze, nie sądziłem, że to może być takie proste.",
            "rating": 5,
            "serviceId": "design"
          },
          {
            "avatar": "testimonial_marie_durond_avatar",
            "name": "Marie Durond",
            "title": "Dyrektor Marketingu, Paryż",
            "quote": "Zauważenie w internecie jest zawsze trudne. Potrzebowaliśmy świeżych pomysłów na nasze media społecznościowe, a nie tylko więcej postów. Współpracując z zespołem, nasza marka zaczęła naprawdę zyskiwać na popularności – mnóstwo nowych obserwujących i zadowolonych klientów. Wspaniale jest widzieć, jak ludzie angażują się w to, co tworzymy.",
            "rating": 5
          },
          {
            "avatar": "testimonial_james_camerron_avatar",
            "name": "James Camerron",
            "title": "Dyrektor Zarządzający",
            "quote": "Chciałem, żeby nasza strona wyglądała nowocześnie, ale także ułatwiała ludziom kontakt i zakupy. Efekt jest efektowny i praktyczny. Zauważyliśmy realny wzrost liczby odwiedzających, którzy zostają na dłużej i kontaktują się z nami. Pomoc, którą otrzymaliśmy, była gruntowna i skupiona na tym, co najważniejsze.",
            "rating": 5,
            "serviceId": "strategy"
          },
          {
            "avatar": "testimonial_fatima_benali_avatar",
            "name": "Fatima Benali",
            "title": "Menedżer Operacyjny, Casablanca",
            "quote": "Wcześniej pomaganie naszym klientom było powolne i skomplikowane. Dzięki nowemu systemowi czatu mój zespół może szybko odpowiadać na pytania, a klienci zawsze mówią, że łatwiej jest uzyskać pomoc. Teraz otrzymujemy świetne opinie, a ja spędzam mniej czasu na rozwiązywaniu problemów.",
            "rating": 5,
            "serviceId": "development"
          }
        ]
      },
      "contact": {
        "title": "Gotowy na Rozpoczęcie Projektu?",
        "subtitle": "Masz wizję swojego następnego projektu? Porozmawiajmy o Twoich celach i opracujmy plan ich osiągnięcia. Skontaktuj się z nami w celu bezpłatnej, niezobowiązującej sesji strategicznej.",
        "cta": "Porozmawiajmy"
      },
      "contactPage": {
        "title": "Skontaktuj się z nami",
        "subtitle": "Gotowy na transformację swojej obecności cyfrowej? Porozmawiajmy o Twoim projekcie i o tym, jak możemy pomóc Ci osiągnąć Twoje cele.",
        "whyChooseUs": {
          "title": "Dlaczego Warto Nas Wybrać",
          "items": [
            {
              "title": "Jasna Propozycja",
              "description": "Odpowiadamy w ciągu 24 godzin z jasną propozycją projektu. Bez niejasnych obietnic, tylko przejrzysty plan działania."
            },
            {
              "title": "Bezpośredni Dostęp do Ekspertów",
              "description": "Pracuj bezpośrednio z naszymi starszymi członkami zespołu, którzy mają lata doświadczenia w strategii cyfrowej i rozwoju."
            },
            {
              "title": "Niezobowiązująca Rozmowa Strategiczna",
              "description": "Skorzystaj z bezpłatnej 30-minutowej konsultacji, aby omówić swój projekt i zbadać, jak możemy pomóc Ci odnieść sukces."
            }
          ]
        },
        "form": {
          "title": "Opowiedz Nam o Swoim Projekcie",
          "fullName": "Imię i Nazwisko",
          "fullNamePlaceholder": "Wprowadź swoje imię i nazwisko",
          "emailAddress": "Adres E-mail",
          "emailAddressPlaceholder": "twojemail@firma.com",
          "projectType": "Rodzaj Projektu",
          "projectTypePlaceholder": "Wybierz rodzaj projektu",
          "projectTypes": ["Projektowanie i Tworzenie Stron WWW", "Projektowanie UI/UX", "Branding", "Strategia Cyfrowa", "Inne"],
          "projectDetails": "Szczegóły Projektu",
          "projectDetailsPlaceholder": "Opowiedz nam o celach projektu, harmonogramie i wszelkich specyficznych wymaganiach...",
          "sendMessage": "Wyślij Wiadomość"
        },
        "getInTouch": {
          "title": "Skontaktuj się z nami",
          "email": "Email",
          "emailAddress": "contact@yourdigitalstep.com",
          "businessHours": "Godziny pracy",
          "businessHoursValue": "Poniedziałek - Piątek, 9:00 - 17:00 CEST"
        },
        "ourProcess": {
          "title": "Nasz Proces",
          "steps": [
            "Przeanalizujemy Twoją wiadomość i szczegóły projektu",
            "Umówimy się na 30-minutową rozmowę strategiczną",
            "Otrzymasz szczegółową propozycję projektu"
          ]
        }
      },
      "footer": {
        "tagline": "Jasność w złożonym cyfrowym świecie.",
        "email": "contact@yourdigitalstep.com",
        "quickLinks": "Szybkie linki",
        "legal": "Prawne",
        "privacy": "Polityka Prywatności",
        "terms": "Warunki Korzystania z Usług",
        "copyright": "© {{year}} YourDigitalStep. Wszelkie prawa zastrzeżone."
      },
      "projectModal": {
        "title": "Zbudujmy Razem Coś Wspaniałego",
        "subtitle": "Opowiedz nam o swoim projekcie, a my skontaktujemy się, aby omówić kolejne kroki.",
        "stepProgress": "Krok {{current}} z {{total}}",
        "step1": {
          "title": "Po pierwsze, jakiego rodzaju firmę prowadzisz?",
          "options": {
            "individual": "Osoba Prywatna / Startup",
            "business": "Ugruntowana Firma",
            "ecommerce": "Sklep E-commerce",
            "other": "Inne"
          }
        },
        "step2": {
          "title": "Jakie usługi Cię interesują? (Wybierz wszystkie pasujące)",
          "options": [
            "Strategia Cyfrowa i Doradztwo",
            "Projektowanie UI/UX i Branding",
            "Rozwój Aplikacji Webowych i Mobilnych",
            "Jeszcze nie wiem"
          ]
        },
        "step2_addons": {
          "title": "Jakieś opcjonalne dodatki?",
          "options": [
            "Projekt Logo",
            "Profesjonalne Pisanie Treści",
            "Zaawansowany Audyt SEO",
            "Strategia i Konfiguracja Mediów Społecznościowych",
            "Uruchomienie Płatnej Kampanii Reklamowej"
          ]
        },
        "step3": {
          "title": "W jakiej branży działasz?",
          "placeholder": "Wybierz swoją branżę...",
          "options": ["Technologia", "Handel detaliczny i E-commerce", "Opieka zdrowotna", "Finanse", "Nieruchomości", "Edukacja", "Inne"]
        },
        "step4": {
          "title": "Opisz krótko wizję swojego projektu",
          "placeholder": "np. 'Chcę zbudować nowoczesną platformę e-commerce dla mojej marki odzieżowej...' lub 'Muszę przeprojektować moją obecną stronę korporacyjną, aby była bardziej przyjazna dla użytkownika.'"
        },
        "step4_starter_website": {
          "title": "Opowiedz nam o swoim projekcie 'Starter'",
          "placeholder": "Opowiedz nam o swojej firmie. Jakie są 3 niezbędne strony, których potrzebujesz na początek (np. Strona główna, Usługi, Kontakt)?"
        },
        "step4_premium_shopify": {
          "title": "Zaplanujmy Twój sklep 'Premium Shopify'",
          "placeholder": "Świetnie! Pakiet Premium Shopify jest stworzony do skalowania. Jakie produkty będziesz sprzedawać i czy są jakieś zaawansowane funkcje (takie jak opinie klientów lub czat na żywo), na które czekasz?"
        },
        "step5": {
          "title": "Na koniec, jak możemy się z Tobą skontaktować?",
          "namePlaceholder": "Twoje Imię i Nazwisko",
          "emailPlaceholder": "Twój E-mail",
          "phonePlaceholder": "Twój Numer Telefonu (Opcjonalnie)"
        },
        "step5_reinforcement": "Jesteś o krok od uruchomienia swojego <1>{{packageName}}</1>! Daj nam tylko znać, jak możemy się z Tobą skontaktować.",
        "buttons": {
          "back": "Wstecz",
          "next": "Dalej",
          "submit": "Zgłoś Projekt"
        },
        "success": {
            "close": "Zamknij"
        }
      },
       "specialOfferPage": {
        "title": "Oferta Specjalna",
        "subtitle": "🚀 Uruchom Swoją Obecność w Internecie: Nasze Pakiety Podstawowe",
        "intro": "Wierzymy, że idealny moment na start jest teraz. Stworzyliśmy uproszczone, wartościowe pakiety, zaprojektowane, aby szybko zaistnieć w sieci, być widocznym i działać. Wybierz fundament, który pasuje do Twoich natychmiastowych celów, i budujmy razem Twoją cyfrową przyszłość.",
        "toggle": {
          "website": "Pakiety Stron WWW",
          "shopify": "Pakiety Shopify"
        },
        "mostPopular": "Najpopularniejszy",
        "whoShouldChoose": {
          "title": "🎯 Kto Powinien Wybrać Który Pakiet?",
          "intro": "Strukturyzujemy nasze oferty, aby idealnie dopasować się do etapu, na którym znajduje się Twój biznes.",
          "websiteClients": {
            "title": "Dla Klientów Stron WWW"
          },
          "shopifyClients": {
            "title": "Dla Klientów Shopify"
          }
        },
        "websitePackages": {
          "title": "🌐 Pakiety Startowe Stron WWW",
          "intro": "Ta struktura jest stworzona do szybkiego wdrożenia i maksymalnej wiarygodności początkowej, z jasnymi ścieżkami przyszłego skalowania.",
          "packages": [
            {
              "name": "💡 Starter",
              "price": "2,199 PLN",
              "priceDetails": "netto",
              "description": "Idealny dla freelancerów, solopreneurów i nowych lokalnych firm, które potrzebują natychmiastowej wiarygodności i chcą zacząć pozyskiwać pierwszych klientów.",
              "features": [
                "Do 3 stron: Strona główna, Usługi, Kontakt.",
                "Niestandardowy projekt, responsywność mobilna.",
                "Do 1 firmowego adresu e-mail. Formularz kontaktowy.",
                "Podstawowe SEO (tytuły/opisy meta). Konfiguracja GA/GSC.",
                "Klient dostarcza całą treść.",
                "3 miesiące podstawowego utrzymania (reaktywne)."
              ],
              "isMostPopular": false,
              "cta": "Wybierz Starter"
            },
            {
              "name": "🟠 Plus",
              "price": "3,999 PLN",
              "priceDetails": "netto",
              "description": "Zaprojektowany dla rozwijających się małych firm, które chcą zaprezentować różnorodne usługi lub rozpocząć podstawowy marketing treści, aby udowodnić swoją wiedzę.",
              "features": [
                "Do 6 stron: Dodatkowo O nas, Portfolio/Projekty, Opinie.",
                "Dopracowany, markowy projekt z galerią zdjęć.",
                "Do 2 firmowych adresów e-mail. Zaawansowane formularze (wieloetapowe).",
                "Rozszerzone SEO (przesłanie mapy strony). Zaawansowane raportowanie GA.",
                "Podstawowe wgranie treści dla 5 usług/projektów.",
                "6 miesięcy utrzymania."
              ],
              "isMostPopular": true,
              "cta": "Wybierz Plus"
            },
            {
              "name": "🟡 Premium",
              "price": "10,999 PLN",
              "priceDetails": "netto",
              "description": "Kompletne rozwiązanie dla ugruntowanych MŚP, szkół lub firm wymagających zaawansowanych funkcji, niestandardowego UX i strategicznego zasobu cyfrowego stworzonego do konwersji.",
              "features": [
                "Do 12 stron: W tym Blog, Studia przypadków, Kariera, Niestandardowe strony docelowe itp.",
                "Indywidualny projekt premium (niestandardowe ikony/ulepszenia UX).",
                "Do 5 firmowych adresów e-mail. Rozszerzone formularze (rezerwacja/zaawansowany kontakt).",
                "Pełne techniczne i strategiczne SEO (Schema, optymalizacja prędkości). Integracja z newsletterem/lead magnetem.",
                "Wgranie treści dla 10 pozycji + 1-godzinne szkolenie 1:1.",
                "12 miesięcy utrzymania i priorytetowe wsparcie techniczne.",
                "Konfiguracja konta reklamowego Facebook/Instagram i struktura pierwszej kampanii."
              ],
              "isMostPopular": false,
              "cta": "Wybierz Premium"
            }
          ]
        },
        "shopifyPackages": {
          "title": "🛒 Pakiety Startowe Shopify",
          "intro": "Uruchom swój sklep z bezpiecznymi płatnościami, podstawową konfiguracją produktów i niezbędną europejską zgodnością.",
          "packages": [
            {
              "name": "🚀 Mini",
              "price": "2,699 PLN",
              "priceDetails": "netto",
              "description": "Idealny dla przedsiębiorców testujących niszowy produkt lub małych sklepów specjalistycznych działających lokalnie. Szybko uruchom swoją sprzedaż z bezpiecznymi płatnościami.",
              "features": [
                "Do 3 stron: Strona główna, Katalog produktów, Kontakt.",
                "Do 5 wgranych produktów.",
                "Konfiguracja darmowego motywu Shopify (podstawowe dopasowanie kolorów).",
                "Konfiguracja GA/GSC.",
                "Konfiguracja płatności i podstawowych zasad wysyłki.",
                "3 miesiące utrzymania."
              ],
              "isMostPopular": false,
              "cta": "Wybierz Mini"
            },
            {
              "name": "🟠 Wzrostowy",
              "price": "4,899 PLN",
              "priceDetails": "netto",
              "description": "Stworzony dla rozwijających się firm e-commerce z rosnącym asortymentem. Ten pakiet buduje prawdziwe miejsce docelowe online, które zbiera e-maile i pozycjonuje produkty.",
              "features": [
                "Do 7 stron: Strona główna, Sklep, O nas, FAQ, Strony z politykami, Blog, Kontakt.",
                "Do 15 wgranych produktów.",
                "Ulepszona stylizacja motywu i drobne poprawki logo.",
                "Integracja zapisu na newsletter. SEO dla produktów i stron.",
                "Kompleksowa konfiguracja zasad wysyłki.",
                "6 miesięcy utrzymania."
              ],
              "isMostPopular": true,
              "cta": "Wybierz Wzrost"
            },
            {
              "name": "🟡 Premium",
              "price": "12,499 PLN",
              "priceDetails": "netto",
              "description": "Dla skalujących się sprzedawców i marek ze złożonym asortymentem, gotowych на sprzedaż na dużą skalę. To zoptymalizowana maszyna sprzedażowa z zaawansowaną integracją marketingową i pełnym raportowaniem.",
              "features": [
                "Do 15 stron: Wszystkie strony Wzrostowego, plus Kolekcje, Opinie, Media, Niestandardowe strony docelowe.",
                "Do 40 wgranych produktów (z wariantami/opisami).",
                "Personalizacja motywu premium (niestandardowe banery, zaawansowana nawigacja, udoskonalenia UX).",
                "Pełny pakiet marketingowy: Pop-upy, porzucony koszyk, opinie, czat na żywo.",
                "Zaawansowane raportowanie i integracja z CRM.",
                "12 miesięcy utrzymania i priorytetowa pomoc techniczna.",
                "Konfiguracja konta reklamowego Facebook/Instagram i struktura pierwszej kampanii."
              ],
              "isMostPopular": false,
              "cta": "Wybierz Premium"
            }
          ]
        },
        "beyondLaunch": {
          "title": "📈 Po Uruchomieniu: Zabezpiecz Swój Rozwój dzięki Członkostwu Wsparcia",
          "intro": "Te ceny startowe zabezpieczają Twoje uruchomienie. Po wygaśnięciu początkowego okresu utrzymania, Twój nacisk musi przenieść się на wzrost, bezpieczeństwo i rozbudowę funkcji.",
          "features": [
            {
              "title": "Proaktywne Bezpieczeństwo",
              "points": [
                "Ciągłe monitorowanie dostępności i wydajności.",
                "Regularne aktualizacje platformy i wdrażanie poprawek bezpieczeństwa.",
                "Codzienne kopie zapasowe poza serwerem w celu ochrony danych.",
                "Proaktywne skanowanie w poszukiwaniu złośliwego oprogramowania i wykrywanie zagrożeń."
              ]
            },
            {
              "title": "Alokacja na Rozwój",
              "points": [
                "Dedykowane miesięczne godziny na strategiczny rozwój cyfrowy.",
                "Tworzenie treści: nowe strony, wpisy na blogu i aktualizacje portfolio.",
                "Ciągłe doskonalenie SEO w celu poprawy pozycji w wynikach wyszukiwania.",
                "Strategia treści w mediach społecznościowych i zarządzanie kampaniami reklamowymi."
              ]
            },
            {
              "title": "Priorytetowe Wsparcie",
              "points": [
                "Bezpośredni dostęp do naszego zespołu wsparcia seniorów przez Slack i e-mail.",
                "Gwarantowany szybszy czas reakcji na wszystkie zapytania techniczne.",
                "Omiń kolejkę w przypadku pilnych poprawek lub dostosowań.",
                "Eksperckie rozwiązywanie problemów i usuwanie usterek."
              ]
            }
          ]
        },
        "cta": {
          "title": "Gotowy, aby omówić, który pakiet startowy zapewni Ci najszybszy i najbardziej profesjonalny start?",
          "button": "ZAREZERWUJ BEZPŁATNĄ 15-MINUTOWĄ ROZMOWĘ O ZAKRESIE PROJEKTU"
        },
        "packageForm": {
            "namePlaceholder": "Twoje Imię i Nazwisko",
            "emailPlaceholder": "Twój E-mail",
            "submitButton": "Wyślij zapytanie"
        }
      },
      "privacyPolicyPage": {
        "title": "Polityka Prywatności",
        "subtitle": "Data wejścia w życie: 26 października 2023",
        "sections": [
          {
            "heading": "Wprowadzenie",
            "content": "<p>Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób YourDigitalStep („agencja”, „my”, „nas” lub „nasze”) gromadzi, wykorzystuje, ujawnia i chroni dane osobowe, które nam przekazujesz podczas korzystania z naszych usług lub odwiedzania naszej strony internetowej.</p>"
          },
          {
            "heading": "1. Informacje, które zbieramy",
            "content": "<p>Gromadzimy informacje niezbędne do świadczenia Państwu naszych usług cyfrowych i do prowadzenia naszej działalności gospodarczej. Może to obejmować:</p><ul><li><b>Dane kontaktowe i identyfikacyjne:</b> Imiona i nazwiska, adresy e-mail, numery telefonów oraz adresy pocztowe podawane podczas zapytań, zawierania umów lub świadczenia usług.</li><li><b>Dane związane z usługą:</b> Informacje zawarte w propozycjach projektów, plikach klientów, komunikacji oraz dane logowania niezbędne do tworzenia stron internetowych, SEO, brandingu lub usług doradczych.</li><li><b>Dane finansowe i rozliczeniowe:</b> Informacje niezbędne do przetwarzania płatności, takie jak adresy rozliczeniowe. Uwaga: Nie przechowujemy pełnych numerów kart kredytowych; informacje te są bezpiecznie przetwarzane przez zewnętrznych operatorów płatności.</li><li><b>Dane dotyczące użytkowania strony internetowej (jeśli dotyczy):</b> Informacje zbierane automatycznie podczas odwiedzania naszej strony, takie jak adres IP, typ przeglądarki, odwiedzane strony i czas spędzony na stronie, często za pośrednictwem narzędzi analitycznych.</li></ul>"
          },
          {
            "heading": "2. Jak wykorzystujemy Twoje informacje",
            "content": "<p>Gromadzone informacje wykorzystujemy w następujących podstawowych celach biznesowych:</p><ul><li>Aby świadczyć, zarządzać i utrzymywać zamówione przez Ciebie usługi cyfrowe.</li><li>Aby przetwarzać transakcje i wysyłać Ci powiązane informacje finansowe, takie jak faktury i rachunki.</li><li>Aby komunikować się z Tobą w sprawie aktualizacji usług, próśb o wsparcie lub ważnych zmian w naszych Warunkach Świadczenia Usług lub niniejszej Polityce.</li><li>Aby analizować i poprawiać wydajność naszej strony internetowej i usług.</li><li>Aby prowadzić marketing bezpośredni, jeśli jest to dozwolone przez prawo, z którego możesz w każdej chwili zrezygnować.</li></ul>"
          },
          {
            "heading": "3. Udostępnianie i ujawnianie informacji",
            "content": "<p>Będziemy udostępniać Twoje dane osobowe tylko w następujących okolicznościach:</p><ul><li><b>Zewnętrznym dostawcom usług:</b> Udostępniamy niezbędne dane zaufanym stronom trzecim, które wykonują usługi w naszym imieniu, takim jak operatorzy płatności, dostawcy hostingu lub wyspecjalizowani podwykonawcy (np. o określonej wiedzy programistycznej) pomagający w realizacji Twojego zamówienia, na podstawie ścisłych umów o zachowaniu poufności.</li><li><b>Wymogi prawne:</b> Możemy ujawnić Twoje informacje, jeśli będzie to wymagane przez prawo, nakaz sądowy lub żądania rządowe.</li><li><b>Operacje biznesowe:</b> W przypadku sprzedaży, fuzji lub przeniesienia aktywów agencji, informacje mogą zostać przekazane nowemu podmiotowi, pod warunkiem dalszego przestrzegania niniejszej Polityki Prywatności.</li><li><b>Za Twoją wyraźną zgodą:</b> W każdym celu niewymienionym w niniejszej polityce, uzyskamy Twoją uprzednią zgodę.</li></ul>"
          },
          {
            "heading": "4. Bezpieczeństwo danych",
            "content": "<p>Wdrażamy rozsądne środki administracyjne, techniczne i fizyczne mające na celu ochronę posiadanych przez nas danych osobowych przed przypadkowym, niezgodnym z prawem lub nieuprawnionym zniszczeniem, utratą, zmianą, dostępem, ujawnieniem lub wykorzystaniem. Jednak żaden system bezpieczeństwa nie jest nieprzenikniony i nie możemy zagwarantować absolutnego bezpieczeństwa Twoich informacji.</p>"
          },
          {
            "heading": "5. Przechowywanie danych",
            "content": "<p>Przechowujemy Twoje dane osobowe tylko tak długo, jak jest to konieczne do realizacji celów, dla których zostały zebrane, oraz do spełnienia wymogów prawnych, księgowych i sprawozdawczych. Gdy dane nie będą już potrzebne, zostaną bezpiecznie usunięte lub zanonimizowane.</p>"
          },
          {
            "heading": "6. Twoje prawa dotyczące danych",
            "content": "<p>W zależności od miejsca zamieszkania, możesz mieć określone prawa dotyczące Twoich danych osobowych, w tym prawo do:</p><ul><li>Dostępu do danych osobowych, które przechowujemy na Twój temat.</li><li>Poprawienia niedokładnych lub niekompletnych danych.</li><li>Żądania usunięcia Twoich danych osobowych („prawo do bycia zapomnianym”).</li><li>Sprzeciwu wobec niektórych rodzajów przetwarzania lub ich ograniczenia.</li></ul><p>Aby skorzystać z któregokolwiek z tych praw, skontaktuj się z nami, korzystając z poniższych danych kontaktowych.</p>"
          },
          {
            "heading": "7. Prywatność dzieci",
            "content": "<p>Nasze usługi są skierowane do firm i osób fizycznych zdolnych do zawierania wiążących umów (w wieku 18 lat lub starszych). Świadomie nie gromadzimy danych osobowych od osób poniżej 18 roku życia.</p>"
          },
          {
            "heading": "8. Informacje kontaktowe",
            "content": "<p>Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące niniejszej Polityki Prywatności lub naszych praktyk w zakresie danych, skontaktuj się z nami:</p><p>Email: contact@yourdigitalstep.com</p>"
          }
        ]
      },
      "termsOfServicePage": {
        "title": "Warunki Korzystania z Usług",
        "subtitle": "Data wejścia w życie: 26 października 2023",
        "sections": [
          {
            "heading": "Akceptacja Warunków",
            "content": "<p>Poprzez dostęp lub korzystanie z usług świadczonych pod nazwą handlową “YourDigitalStep” (“agencja”, “my”, “nas” lub “nasze”), zgadzasz się przestrzegać i być związanym niniejszymi Warunkami Świadczenia Usług. Jeśli się nie zgadzasz, prosimy o niekorzystanie z naszych usług.</p>"
          },
          {
            "heading": "Modyfikacje",
            "content": "<p>Zastrzegamy sobie prawo do modyfikacji niniejszych Warunków w dowolnym momencie, według własnego uznania. Zmiany będą publikowane на tej stronie lub komunikowane bezpośrednio. Dalsze korzystanie z naszych usług po wprowadzeniu jakichkolwiek zmian stanowi akceptację zmodyfikowanych Warunków, dlatego prosimy o regularne przeglądanie tej strony.</p>"
          },
          {
            "heading": "Uprawnienia",
            "content": "<p>Możesz korzystać z naszych usług tylko wtedy, gdy masz co najmniej 18 lat, jesteś prawnie zdolny do zawierania wiążących umów i nie jesteś objęty zakazem korzystania z naszych usług na mocy obowiązującego prawa.</p>"
          },
          {
            "heading": "Zakres Usług",
            "content": "<p>YourDigitalStep świadczy usługi cyfrowe, które mogą obejmować tworzenie stron internetowych, SEO, rozwój aplikacji, branding i doradztwo. Szczegóły, produkty i opłaty za wszelkie usługi zostaną określone w Twojej indywidualnej umowie, propozycji projektu lub fakturze. Postanowienia niniejszych Warunków Świadczenia Usług uzupełniają, ale не zastępują, szczegółowych warunków wykonanej Umowy o Świadczenie Usług lub Propozycji.</p>"
          },
          {
            "heading": "Treści Klienta i Użytkownika",
            "content": "<p>Zachowujesz wszelkie prawa do treści, które tworzysz, przesyłasz lub udostępniasz (“Treści Użytkownika”) podczas korzystania z naszych usług. Udzielasz nam niewyłącznej, bezpłatnej licencji na używanie, hostowanie, wyświetlanie i dystrybucję Twoich Treści Użytkownika wyłącznie w celu świadczenia lub ulepszania naszych usług dla Ciebie.</p><p>Wszelka własność intelektualna opracowana przez YourDigitalStep, w tym projekty, kod, dokumentacja i materiały niedostarczone przez Ciebie, pozostają własnością agencji, chyba że i dopóki nie zostaną Ci wyraźnie przekazane w pełni wykonanej, odrębnej pisemnej umowie po otrzymaniu wszystkich należnych i niekwestionowanych płatności.</p>"
          },
          {
            "heading": "Płatności, Zwroty i Anulacje",
            "content": "<p>Opłaty, harmonogramy płatności i polityka zwrotów są zdefiniowane w Twojej umowie, propozycji lub fakturze. Zgadzasz się na terminowe regulowanie wszystkich niekwestionowanych kwot. Wnioski o zwrot pieniędzy będą rozpatrywane indywidualnie z uwzględnieniem stanu projektu i spełnionych zobowiązań. Brak terminowej płatności uprawnia nas do natychmiastowego wstrzymania wszelkich prac i naliczenia opłaty za opóźnienie w wysokości <b>1,5%</b> miesięcznie od zaległej kwoty.</p>"
          },
          {
            "heading": "Zabronione Postępowanie",
            "content": "<p>Zgadzasz się nie:</p><ul><li>Korzystać z naszych usług w celach nielegalnych lub nieautoryzowanych</li><li>Ingerować w działanie lub zakłócać naszą stronę internetową lub systemy</li><li>Naruszać naszej własności intelektualnej lub praw innych osób</li><li>Podejmować prób uzyskania dostępu do danych innych użytkowników bez upoważnienia</li><li>Dostarczać nam treści lub materiałów, do których nie posiadasz niezbędnych licencji lub praw.</li></ul>"
          },
          {
            "heading": "Ograniczenie Odpowiedzialności",
            "content": "<p>W MAKSYMALNYM ZAKRESIE DOZWOLONYM PRZEZ OBOWIĄZUJĄCE PRAWO, W ŻADNYM WYPADKU YOURDIGITALSTEP, WŁAŚCICIEL, ANI JEGO DOSTAWCY NIE BĘDĄ ODPOWIEDZIALNI ZA JAKIEKOLWIEK SZCZEGÓLNE, PRZYPADKOWE, POŚREDNIE, KARNE LUB WYNIKOWE SZKODY (W TYM, BEZ OGRANICZEŃ, SZKODY Z TYTUŁU UTRATY ZYSKÓW, UTRATY PRZYCHODÓW, UTRATY MOŻLIWOŚCI BIZNESOWYCH, UTRATY DANYCH LUB PRZERWY W DZIAŁALNOŚCI) WYNIKAJĄCE Z LUB W JAKIKOLWIEK SPOSÓB ZWIĄZANE Z KORZYSTANIEM LUB NIEMOŻNOŚCIĄ KORZYSTANIA Z USŁUG, NAWET JEŚLI AGENCJA ZOSTAŁA POINFORMOWANA O MOŻLIWOŚCI WYSTĄPIENIA TAKICH SZKÓD.</p><p>Całkowita skumulowana odpowiedzialność agencji wobec Ciebie za wszelkie roszczenia wynikające z niniejszych Warunków lub Usług lub z nimi związane nie przekroczy całkowitych opłat zapłaconych przez Ciebie agencji za konkretną usługę, która dała początek roszczeniu w ciągu poprzednich trzech (3) miesięcy.</p>"
          },
          {
            "heading": "Odszkodowanie",
            "content": "<p>Zgadzasz się zabezpieczyć i chronić YourDigitalStep, właściciela oraz ich odpowiednich agentów i pracowników przed wszelkimi roszczeniami, żądaniami, zobowiązaniami, kosztami lub wydatkami stron trzecich, w tym uzasadnionymi kosztami obsługi prawnej, wynikającymi z: (a) naruszenia przez Ciebie niniejszych Warunków; (b) korzystania z usług w sposób nieautoryzowany przez niniejsze Warunki; lub (c) wszelkich Treści Użytkownika lub materiałów dostarczonych przez Ciebie, w tym wszelkich roszczeń o naruszenie praw własności intelektualnej przez stronę trzecią.</p>"
          },
          {
            "heading": "Informacja o Formie Prawnej Działalności",
            "content": "<p>YourDigitalStep to nazwa handlowa jednoosobowej działalności gospodarczej prowadzonej przez właściciela. Odniesienia do “YourDigitalStep,” “agencji,” “my,” “nas,” lub “nasze” w niniejszych Warunkach odnoszą się do właściciela działającego pod tą nazwą handlową. Akceptując niniejsze warunki, potwierdzasz, że nie powstaje żadna spółka, wspólne przedsięwzięcie ani stosunek pracy. Odpowiedzialność właściciela jest ograniczona wyłącznie w zakresie dozwolonym przez prawo i nie oferuje ochrony korporacji ani spółki z ograniczoną odpowiedzialnością.</p>"
          },
          {
            "heading": "Prawo Właściwe",
            "content": "<p>Niniejsze Warunki są regulowane i interpretowane zgodnie z prawem jurysdykcji właściciela. Wszelkie spory prawne będą rozstrzygane w sądach tej jurysdykcji.</p>"
          },
          {
            "heading": "Kontakt i Informacje Prawne",
            "content": "<p>W przypadku jakichkolwiek pytań dotyczących niniejszych Warunków, prosimy o kontakt: contact@yourdigitalstep.com</p>"
          }
        ]
      },
      "thankYouPage": {
        "title": "Dziękujemy!",
        "subtitle": "Twoja wiadomość została pomyślnie wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.",
        "backToHome": "Powrót na stronę główną"
      },
      "forms": {
        "submitting": "Wysyłanie...",
        "submitError": "Wystąpił błąd. Proszę spróbować ponownie."
      }
    }
  }
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18n;