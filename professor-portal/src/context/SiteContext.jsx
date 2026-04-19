/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'professor-portal-content-v2';

const defaultContent = {
  profile: {
    fullName: 'حسام عبد الله مرامرية',
    role: {
      ar: 'أستاذ مكلف بالهندسة البيداغوجية',
      en: 'Professor in Charge of Pedagogical Engineering',
      fr: 'Professeur charge de l ingenierie pedagogique',
    },
    welcome: {
      ar: 'نصنع معًا جيلاً متعلمًا يمتلك مهارات المستقبل ويحوّل المعرفة إلى أثر حقيقي في المجتمع.',
      en: 'Together we build a generation that masters future skills and transforms knowledge into real impact.',
      fr: 'Ensemble, nous formons une generation qui maitrise les competences d avenir et transforme le savoir en impact reel.',
    },
    email: 'houssamhassou12@gmail.com',
    phone: '0665267612',
    location: 'Algerie',
    links: [
      { id: 'facebook', label: 'Facebook - Houssam Abdallah Mrameria', url: 'https://www.facebook.com/hassou.meramria' },
    ],
  },
  domains: [
    {
      id: 'informatique',
      icon: '🖥️',
      colorClass: 'blue',
      title: { ar: 'الإعلام الآلي وقواعد البيانات', en: 'Computer Science and Databases', fr: 'Informatique et bases de donnees' },
      description: {
        ar: 'دروس عملية في البرمجة، تطوير الويب، ونظم قواعد البيانات.',
        en: 'Practical lessons in programming, web development, and database systems.',
        fr: 'Cours pratiques en programmation, developpement web et systemes de bases de donnees.',
      },
      resources: {
        lessons: [
          { id: 'inf-l-1', title: 'CS50x - Introduction to Computer Science', description: 'Harvard full introductory CS course.', type: 'link', url: 'https://cs50.harvard.edu/x/' },
          { id: 'inf-l-2', title: 'MIT OCW 6.0001', description: 'Intro to computer science and Python.', type: 'link', url: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/' },
        ],
        books: [
          { id: 'inf-b-1', title: 'Think Python 2e (PDF)', description: 'Free Python textbook with direct download.', type: 'pdf', url: 'https://greenteapress.com/thinkpython2/thinkpython2.pdf' },
        ],
        files: [],
        videos: [
          { id: 'inf-v-1', title: 'CS50 2025 Playlist', description: 'Complete CS50 lecture series.', type: 'video', url: 'https://www.youtube.com/@cs50' },
        ],
      },
    },
    {
      id: 'reseaux',
      icon: '🔐',
      colorClass: 'cyan',
      title: { ar: 'الشبكات وأمن المعلومات', en: 'Networks and Cybersecurity', fr: 'Reseaux et cybersecurite' },
      description: {
        ar: 'مسار متدرج من أساسيات الشبكات إلى الأمن السيبراني.',
        en: 'A progressive track from networking basics to cybersecurity.',
        fr: 'Parcours progressif des fondamentaux reseaux a la cybersecurite.',
      },
      resources: {
        lessons: [
          { id: 'net-l-1', title: 'Cisco Networking Academy', description: 'Structured networking and cybersecurity tracks.', type: 'link', url: 'https://www.netacad.com/courses/networking' },
          { id: 'net-l-2', title: 'Fortinet Training Institute', description: 'Free security awareness and NSE training paths.', type: 'link', url: 'https://training.fortinet.com/' },
          { id: 'net-l-3', title: 'TryHackMe Learning Paths', description: 'Hands-on cybersecurity labs and guided tracks.', type: 'link', url: 'https://tryhackme.com/r/path' },
          { id: 'net-l-4', title: 'Hack The Box Academy', description: 'Practical penetration testing and defensive modules.', type: 'link', url: 'https://academy.hackthebox.com/' },
          { id: 'net-l-5', title: 'Cybrary Catalog', description: 'Blue team and red team oriented learning paths.', type: 'link', url: 'https://www.cybrary.it/catalog' },
          { id: 'net-l-ar-1', title: 'مقدمة للأمن السيبراني - Cybrary', description: 'مقدمة شاملة مجانية للأمن السيبراني من Cybrary.', type: 'link', url: 'https://www.cybrary.it/course/introduction-to-it-and-cybersecurity' },
          { id: 'net-l-ar-2', title: 'مسار Pre-Security - TryHackMe', description: 'مسار تفاعلي للمبتدئين في الأمن.', type: 'link', url: 'https://tryhackme.com/path/outline/presecurity' },
          { id: 'net-l-ar-3', title: 'أساسيات الشبكات - Professor Messer', description: 'كورس مجاني شامل لأساسيات الشبكات.', type: 'link', url: 'https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course' },
          { id: 'net-l-ar-4', title: 'أساسيات Linux - TryHackMe', description: 'وحدة تفاعلية لأساسيات Linux.', type: 'link', url: 'https://tryhackme.com/module/linux-fundamentals' },
          { id: 'net-l-ar-5', title: ' SOC Level 1 - TryHackMe', description: 'مسار تدريبي كامل لمحلل SOC.', type: 'link', url: 'https://tryhackme.com/path/outline/soclevel1' },
        ],
        books: [
          { id: 'net-b-1', title: 'The TCP/IP Guide', description: 'Comprehensive reference on TCP/IP protocols.', type: 'ebook', url: 'http://www.tcpipguide.com/free/' },
          { id: 'net-b-2', title: 'Nmap Network Scanning', description: 'Official Nmap book for reconnaissance and scanning.', type: 'ebook', url: 'https://nmap.org/book/' },
          { id: 'net-b-3', title: 'OWASP Web Security Testing Guide', description: 'High-quality security testing methodology guide.', type: 'ebook', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
          { id: 'net-b-4', title: 'Metasploit Unleashed', description: 'Official free penetration testing guide.', type: 'ebook', url: 'https://www.offsec.com/metasploit-unleashed/' },
          { id: 'net-b-5', title: 'CIS Controls v8', description: 'Industry-recognized cybersecurity controls framework.', type: 'ebook', url: 'https://www.cisecurity.org/controls/v8' },
          { id: 'net-b-6', title: 'MITRE ATT&CK Knowledge Base', description: 'Threat behavior matrix and defensive mapping.', type: 'ebook', url: 'https://attack.mitre.org/' },
          { id: 'net-b-ar-1', title: 'كتاب التشفير - مقدمة Cryptography 101', description: 'كتاب مجاني عربي لمبادئ التشفير.', type: 'ebook', url: 'https://www.crypto101.io' },
          { id: 'net-b-ar-2', title: 'أساسيات الأمن السيبراني - Cyberplus', description: 'خارطة طريق شاملة للمبتدئين.', type: 'ebook', url: 'https://www.cyberoplus.com/p/cybersecurity-learning-roadmap.html' },
          { id: 'net-b-ar-3', title: 'NIST Cybersecurity Framework', description: 'الإطار الرسمي للأمن السيبراني.', type: 'ebook', url: 'https://www.nist.gov/cyberframework' },
        ],
        files: [
          { id: 'net-f-1', title: 'NIST SP 800-61r2 Incident Response (PDF)', description: 'Official incident response lifecycle guide.', type: 'pdf', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf' },
          { id: 'net-f-2', title: 'NIST SP 800-53 Rev.5 (PDF)', description: 'Security and privacy controls catalog.', type: 'pdf', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf' },
        ],
        videos: [
          { id: 'net-v-1', title: 'David Bombal', description: 'Top networking and cybersecurity practical content.', type: 'video', url: 'https://www.youtube.com/@davidbombal' },
          { id: 'net-v-2', title: 'NetworkChuck', description: 'Hands-on labs in networking and ethical hacking.', type: 'video', url: 'https://www.youtube.com/@NetworkChuck' },
          { id: 'net-v-3', title: 'John Hammond', description: 'Cybersecurity walkthroughs and CTF learning.', type: 'video', url: 'https://www.youtube.com/@_JohnHammond' },
          { id: 'net-v-4', title: 'Professor Messer - Security+', description: 'High-quality certification-focused security content.', type: 'video', url: 'https://www.youtube.com/@professormesser' },
          { id: 'net-v-ar-1', title: 'مدرسة البرمجة - Elzero Web School', description: 'شروحات برمجية عربية شاملة.', type: 'video', url: 'https://www.youtube.com/@ElzeroWebSchool' },
          { id: 'net-v-ar-2', title: 'CyberArab - الأمن السيبراني', description: 'قناة متخصصة في الأمن السيبراني.', type: 'video', url: 'https://www.youtube.com/@CyberArab' },
        ],
      },
    },
    {
      id: 'maintenance',
      icon: '🔧',
      colorClass: 'amber',
      title: { ar: 'صيانة الأنظمة المعلوماتية', en: 'Systems Maintenance', fr: 'Maintenance des systemes' },
      description: {
        ar: 'تعلم التشخيص والصيانة الوقائية والعلاجية لأنظمة الحاسوب.',
        en: 'Learn diagnostics and preventive/corrective maintenance for computer systems.',
        fr: 'Apprenez le diagnostic et la maintenance preventive/corrective des systemes informatiques.',
      },
      resources: {
        lessons: [
          { id: 'mnt-l-1', title: 'CompTIA A+ Core Skills', description: 'Core IT support and maintenance competencies.', type: 'link', url: 'https://www.comptia.org/certifications/a' },
          { id: 'mnt-l-2', title: 'Microsoft Learn - Windows Administration', description: 'System administration and troubleshooting paths.', type: 'link', url: 'https://learn.microsoft.com/en-us/training/browse/?products=windows-server' },
        ],
        books: [
          { id: 'mnt-b-1', title: 'The Linux Command Line (Free Book)', description: 'Foundational command-line maintenance skills.', type: 'ebook', url: 'https://linuxcommand.org/tlcl.php' },
        ],
        files: [],
        videos: [],
      },
    },
  ],
  usefulResources: [
    { id: 'res-schooldz', name: 'School DZ', category: 'Learning', url: 'https://www.schooldz.com' },
    { id: 'res-cisco', name: 'Cisco Networking Academy', category: 'Networking', url: 'https://www.netacad.com' },
    { id: 'res-hsoub', name: 'Hsoub Academy', category: 'Programming', url: 'https://academy.hsoub.com' },
  ],
};

const ui = {
  ar: {
    dir: 'rtl', home: 'الرئيسية', domains: 'التخصصات', resources: 'الموارد', contact: 'اتصل بي', admin: 'لوحة التحكم', language: 'اللغة',
    heroBadge: 'منصة تعليمية مهنية', explore: 'استكشف التخصصات',
    domainsTitle: 'الفروع والتخصصات', domainsDesc: 'كل فرع يحتوي على دروس وكتب وملفات تعليمية وفيديوهات قابلة للتطوير.',
    lessons: 'الدروس', books: 'الكتب', files: 'الملفات التعليمية', videos: 'الفيديوهات', open: 'فتح', download: 'تحميل', noItems: 'لا توجد عناصر辖区内',
    usefulTitle: 'الموارد التعليمية المفيدة', usefulDesc: 'مواقع مهمة في التكنولوجيا والتعلم الرقمي.',
    contactTitle: 'اتصل بي', contactDesc: 'للاستفسارات البيداغوجية أو طلب الموارد التعليمية.',
    fullName: 'الاسم الكامل', subject: 'الموضوع', message: 'الرسالة', send: 'إرسال',
    adminTitle: 'لوحة التحكم', adminDesc: 'أضف الموارد الت��لي��ية بدون برمجة.', saveProfile: 'حفظ البيانات', addResource: 'إضافة مورد',
    addUseful: 'إضافة مورد مفيد', domain: 'التخصص', category: 'الصنف', type: 'النوع', title: 'العنوان', description: 'الوصف',
  },
  en: {
    dir: 'ltr', home: 'Home', domains: 'Domains', resources: 'Resources', contact: 'Contact', admin: 'Admin', language: 'Language',
    heroBadge: 'Professional Learning Platform', explore: 'Explore Domains',
    domainsTitle: 'Domains and Specializations', domainsDesc: 'Each domain includes lessons, books, educational files, and videos.',
    lessons: 'Lessons', books: 'Books', files: 'Educational Files', videos: 'Videos', open: 'Open', download: 'Download', noItems: 'No items yet',
    usefulTitle: 'Useful Educational Resources', usefulDesc: 'Important websites for technology and digital learning.',
    contactTitle: 'Contact Me', contactDesc: 'For pedagogical questions and educational resources.',
    fullName: 'Full Name', subject: 'Subject', message: 'Message', send: 'Send',
    adminTitle: 'Admin Panel', adminDesc: 'Add educational content without coding.', saveProfile: 'Save Profile', addResource: 'Add Resource',
    addUseful: 'Add Useful Resource', domain: 'Domain', category: 'Category', type: 'Type', title: 'Title', description: 'Description',
  },
};

function readContent() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultContent);
  try {
    return JSON.parse(raw);
  } catch {
    return structuredClone(defaultContent);
  }
}

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [language, setLanguageState] = useState(() => localStorage.getItem('portal-language') || 'ar');
  const [content, setContent] = useState(readContent);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = ui[language].dir;
  }, [language]);

  const saveContent = (next) => {
    setContent(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const setLanguage = (next) => {
    setLanguageState(next);
    localStorage.setItem('portal-language', next);
    document.documentElement.lang = next;
    document.documentElement.dir = ui[next].dir;
  };

  const updateProfile = (patch) => saveContent({ ...content, profile: { ...content.profile, ...patch } });

  const addDomainResource = (domainId, category, resource) => {
    saveContent({
      ...content,
      domains: content.domains.map((d) => d.id !== domainId ? d : {
        ...d,
        resources: { ...d.resources, [category]: [resource, ...d.resources[category]] },
      }),
    });
  };

  const addUsefulResource = (resource) => {
    saveContent({ ...content, usefulResources: [resource, ...content.usefulResources] });
  };

  const deleteDomainResource = (domainId, category, resourceId) => {
    saveContent({
      ...content,
      domains: content.domains.map((d) => d.id !== domainId ? d : {
        ...d,
        resources: {
          ...d.resources,
          [category]: d.resources[category].filter((r) => r.id !== resourceId),
        },
      }),
    });
  };

  const deleteUsefulResource = (resourceId) => {
    saveContent({
      ...content,
      usefulResources: content.usefulResources.filter((r) => r.id !== resourceId),
    });
  };

  const value = { language, setLanguage, t: ui[language], content, updateProfile, addDomainResource, addUsefulResource, deleteDomainResource, deleteUsefulResource };
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside SiteProvider');
  return ctx;
}