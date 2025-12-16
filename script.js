const content = {
    en: {
      name: "Ehab Shalaby",
      jobname: "IT & Networking | Focus on Cybersecurity",
      title: "About Me",
      about: "I'm Ehab Ali Shalaby, an IT and network enthusiast with a strong interest in digital networking, IT infrastructure, and cybersecurity. <br><br> I hold a Bachelor's degree in Business Information Systems, which provided me with a solid foundation in IT systems, business processes, and technology. <br><br>  Through self-study and hands-on projects, I have developed practical knowledge in routing and switching, network security, Linux, Cisco, and Windows environments. I have also studied professional courses such as A+, Network+, Security+, and CCNA.<br><br> I am particularly interested in cybersecurity and how secure network infrastructure plays a key role in protecting modern IT systems. I enjoy continuously learning and staying up to date with new technologies.",
      skills: "Skills",
      skillsItems: [
        "Networking Fundamentals: IP addressing, subnetting, routing, switching, VLANs, NAT, DHCP, DNS",
        "Certifications Studied: CompTIA A+, Network+, Security+, Cisco CCNA",
        "Network Tools: Cisco Packet Tracer, GNS3",
        "Troubleshooting & Configuration: Network setup, fault isolation, performance tuning",
        "Cybersecurity Basics: Network security principles, access control, firewalls, threat awareness",
        "Technical Skills: Windows OS, basic Linux commands, hardware setup and diagnostics",
        "Soft Skills: Problem-solving, attention to detail, teamwork, self-learning, time management"
      ],
      projects: "Projects",
      allProjects: "All Projects Here",
      clickToView: "Click to view all my network projects",
      myProjects: "My Projects",
      skillsUsed: "Skills Used",
      downloadProject: "Download Project",
      courses: "Courses & Self-Study",
      coursesItems: [
        "Studied the core content of the following certification tracks:",
        "CompTIA A+ (Computer hardware, software, troubleshooting)",
        "CompTIA Network+ (Network fundamentals, protocols, devices, and security)",
        "CompTIA Security+ (Basic security concepts, threats, and mitigation)",
        "Cisco CCNA (Routing, switching, IP addressing, VLANs, OSPF)",
        "Practical lab experience using Packet Tracer, GNS3, and VirtualBox"
      ],
      contact: "Contact",
      cv: "Download CV",
      email: "E-Mail: ehab.ali.gomaa256@gmail.com",
      linkedin: "LinkedIn: linkedin.com/in/ehabali25",
      github: "Github: www.github.com/Mre25",
      footer: "© 2025 Ehab Ali Shalaby. All rights reserved.",
      project1Title: "Network Design with Two Switches and VLAN Implementation",
      project1Description: "In this project, a network was designed using two switches connected via a trunk link. End devices were distributed across both switches and assigned to different VLANs based on departmental segmentation. The aim was to improve network performance and security through logical separation. Trunk ports were configured to allow inter-VLAN communication between switches.",
      project1Skills: "VLAN Configuration, Access and Trunk Port Setup, Switch-to-Switch Trunking, Network Segmentation",
      project2Title: "Network Design Using Three Routers with Static Routing",
      project2Description: "This project involves designing a network topology with three routers connected through serial interfaces to simulate WAN communication. Each router connects to a separate LAN, and static routing was configured to enable inter-network communication. This setup reflects real-world branch connectivity across distant locations.",
      project2Skills: "Static Routing Configuration, Serial Interface Setup, Subnetting, WAN Design Concepts",
      project3Title: "VLAN Implementation with Inter-VLAN Routing",
      project3Description: "This project features a comprehensive VLAN setup on a LAN network. End devices were segmented by departments using VLANs. A router-on-a-stick method was implemented for inter-VLAN routing, allowing communication between different VLANs through a single router interface. This project demonstrates practical application of VLANs in enterprise environments.",
      project3Skills: "VLAN and Inter-VLAN Routing, Access and Trunk Port Configuration, Router-on-a-Stick Implementation, Network Testing (Ping, CLI Commands)",
      project4Title: "Network Design with Three Routers and Subnet Segmentation",
      project4Description: "In this project, a network was designed using three routers, each connected to a local switch and a group of PCs. The network is divided into three main subnets, each representing a different department or location. Routers are interconnected to enable communication between the subnets using point-to-point links. Each subnet uses a /18 subnet mask for efficient IP management and scalability.",
      project4Skills: "IP Subnetting, Router Configuration, Switch Setup, Inter-router Communication, Network Segmentation",
    },
    de: {
      name: "Ehab Shalaby",
      jobname: "IT- und Netzwerktechnik | Schwerpunkt Cybersecurity",
      title: "Über mich",
      about: "Ich heiße Shalaby, Ehab Ali und bin ein IT- und Netzwerk-Enthusiast mit großem Interesse an digitaler Vernetzung, IT-Infrastruktur und Cybersecurity. <br><br> Ich habe einen Bachelorabschluss in Wirtschaftsinformatik, der mir eine solide Grundlage in IT-Systemen, Geschäftsprozessen und Technologie vermittelt hat.  <br><br> Durch Selbststudium und praxisnahe Projekte habe ich mir fundierte Kenntnisse in Routing und Switching, Netzwerksicherheit, Linux sowie Cisco- und Windows-Umgebungen angeeignet außerdem habe ich professionelle Kurse wie A+, Network+, Security+ und CCNA absolviert. <br><br> Besonders interessiert mich der Bereich Cybersecurity und die Bedeutung sicherer Netzwerkinfrastrukturen für den Schutz moderner IT-Systeme.",
      skills: "Fähigkeiten",
      skillsItems: [
        "Netzwerkgrundlagen: IP-Adressierung, Subnetting, Routing, Switching, VLANs, NAT, DHCP, DNS",
        "Studierte Zertifizierungen: CompTIA A+, Network+, Security+, Cisco CCNA",
        "Netzwerktools: Cisco Packet Tracer, GNS3",
        "Fehlerbehebung & Konfiguration: Netzwerkeinrichtung, Fehlerisolierung, Leistungsoptimierung",
        "Cybersecurity-Grundlagen: Netzwerksicherheitsprinzipien, Zugangskontrolle, Firewalls, Bedrohungsbewusstsein",
        "Technische Fähigkeiten: Windows-Betriebssystem, grundlegende Linux-Befehle, Hardwareeinrichtung und Diagnose",
        "Soft Skills: Problemlösung, Detailgenauigkeit, Teamarbeit, selbstständiges Lernen, Zeitmanagement"
      ],
      projects: "Projekte",
      allProjects: "Alle Projekte hier",
      clickToView: "Klicken Sie, um alle meine Netzwerkprojekte anzuzeigen",
      myProjects: "Meine Projekte",
      skillsUsed: "Verwendete Fähigkeiten",
      downloadProject: "Projekt herunterladen",
      courses: "Kurse & Selbststudium",
      coursesItems: [
      "Studierte die Kerninhalte der folgenden Zertifizierungskurse:",
      "CompTIA A+ (Computerhardware, Software, Fehlerbehebung)",
      "CompTIA Network+ (Netzwerkgrundlagen, Protokolle, Geräte und Sicherheit)",
      "CompTIA Security+ (Grundlegende Sicherheitskonzepte, Bedrohungen und Schadensbegrenzung)",
      "Cisco CCNA (Routing, Switching, IP-Adressierung, VLANs, OSPF)",
      "Praktische Laborerfahrung mit Packet Tracer, GNS3 und VirtualBox"
    ],

      contact: "Kontakt",
      cv: "Lebenslauf herunterladen",
      email: "E-Mail: ehab.ali.gomaa256@gmail.com",
      linkedin: "LinkedIn: linkedin.com/in/ehabali25",
      github: "Github: www.github.com/Mre25",
      footer: "© 2025 Ehab Ali Gomaa. Alle Rechte vorbehalten.",
      project1Title: "Netzwerkkonzeption mit zwei Switches und VLAN-Implementierung",
      project1Description: "In diesem Projekt wurde ein Netzwerk mit zwei Switches entworfen, die über eine Trunk-Verbindung miteinander verbunden sind. Die Endgeräte wurden auf beide Switches verteilt und verschiedenen VLANs je nach Abteilung zugeordnet. Ziel war es, die Netzwerkleistung und Sicherheit durch logische Segmentierung zu verbessern. Trunk-Ports wurden konfiguriert, um die VLAN-Kommunikation zwischen den Switches zu ermöglichen.",
      project1Skills: "VLAN-Konfiguration, Einrichtung von Access- und Trunk-Ports, Switch-zu-Switch-Trunking, Netzwerksegmentierung",
      project2Title: "Netzwerkkonzeption mit drei Routern und statischem Routing",
      project2Description: "Dieses Projekt umfasst die Gestaltung einer Netzwerktopologie mit drei Routern, die über serielle Schnittstellen verbunden sind, um die WAN-Kommunikation zu simulieren. Jeder Router ist mit einem eigenen LAN verbunden, und es wurde statisches Routing konfiguriert, um die Kommunikation zwischen den Netzwerken zu ermöglichen. Diese Struktur spiegelt reale Filialverbindungen über entfernte Standorte wider.",
      project2Skills: "Konfiguration von statischem Routing, Einrichtung serieller Schnittstellen, Subnetting, WAN-Konzepte",
      project3Title: "VLAN-Implementierung mit Inter-VLAN-Routing",
      project3Description: "Dieses Projekt beinhaltet eine umfassende VLAN-Struktur innerhalb eines LANs. Die Endgeräte wurden nach Abteilungen mithilfe von VLANs segmentiert. Für die Kommunikation zwischen den VLANs wurde das 'Router-on-a-Stick'-Verfahren implementiert, wobei die Kommunikation über eine einzige Router-Schnittstelle erfolgt. Dieses Projekt zeigt die praktische Anwendung von VLANs in Unternehmensnetzwerken.",
      project3Skills: "VLAN- und Inter-VLAN-Routing, Konfiguration von Access- und Trunk-Ports, Implementierung von Router-on-a-Stick, Netzwerktests (Ping, CLI-Befehle)",
      project4Title: "Netzwerkdesign mit drei Routern und Subnetz-Segmentierung",
      project4Description: "In diesem Projekt wurde ein Netzwerk mit drei Routern entworfen, wobei jeder Router mit einem lokalen Switch und einer Gruppe von PCs verbunden ist. Das Netzwerk ist in drei Haupt-Subnetze unterteilt, die jeweils eine Abteilung oder einen Standort repräsentieren. Die Router sind über Punkt-zu-Punkt-Verbindungen miteinander verbunden, um die Kommunikation zwischen den Subnetzen zu ermöglichen. Jedes Subnetz verwendet eine /18-Subnetzmaske für eine effiziente IP-Verwaltung und Skalierbarkeit.",
      project4Skills: "IP-Subnetting, Router-Konfiguration, Switch-Einrichtung, Inter-Router-Kommunikation, Netzwerksegmentierung",
    }
  };
  
  let currentLanguage = 'en';
  
  function updateSkillsList() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = content[currentLanguage].skillsItems
      .map(item => `<li>${item}</li>`)
      .join('');
  }
  function updateCoursesList() {
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = content[currentLanguage].coursesItems
      .map(item => `<li>${item}</li>`)
      .join('');
  }
  
  function setLanguage(lang) {
    currentLanguage = lang;
    const langContent = content[lang];
  
    // Update text elements
    const textElements = {
      'name': langContent.name,
      'jobname': langContent.jobname,
      'title': langContent.title,
      'about': langContent.about,
      'skills-title': langContent.skills,
      'projects-title': langContent.projects,
      'all-projects-text': langContent.allProjects,
      'click-to-view-text': langContent.clickToView,
      'my-projects-text': langContent.myProjects,
      'skills-used-text': langContent.skillsUsed,
      'download-project1-text': langContent.downloadProject,
      'download-project2-text': langContent.downloadProject,
      'download-project3-text': langContent.downloadProject,
      'courses-title': langContent.courses,
      'contact-title': langContent.contact,
      'cv-btn': langContent.cv,
      'footer-text': langContent.footer,
      'project1-title': langContent.project1Title,
      'project1-description': langContent.project1Description,
      'project1-skills': langContent.project1Skills,
      'project2-title': langContent.project2Title,
      'project2-description': langContent.project2Description,
      'project2-skills': langContent.project2Skills,
      'project3-title': langContent.project3Title,
      'project3-description': langContent.project3Description,
      'project3-skills': langContent.project3Skills,
      'project4-title': langContent.project4Title,
      'project4-description': langContent.project4Description,
      'project4-skills': langContent.project4Skills
    };
  
    for (const [id, text] of Object.entries(textElements)) {
      const element = document.getElementById(id);
      if (element) {
        if (id === 'about') {
          element.innerHTML = text;
        } else {
          element.textContent = text;
        }
      }
    }
  
    // Update contact links
    document.getElementById('email-text').innerHTML = 
      langContent.email.replace(': ', ': <a href="mailto:ehab.ali.gomaa256@gmail.com">') + '</a>';
    
    document.getElementById('linkedin-text').innerHTML = 
      langContent.linkedin.replace(': ', ': <a href="https://linkedin.com/in/ehab-ali25" target="_blank">') + '</a>';
    
    document.getElementById('github-text').innerHTML = 
      langContent.github.replace(': ', ': <a href="https://www.github.com/Mre25" target="_blank">') + '</a>';
  
    // Update lightbox titles
    document.querySelector('.project-image a[href="photos/2swi.jpeg"]').setAttribute('data-title', 
      `${langContent.project1Title} - ${langContent.myProjects}`);
    document.querySelector('.project-image a[href="photos/3rou.jpeg"]').setAttribute('data-title', 
      `${langContent.project2Title} - ${langContent.myProjects}`);
    document.querySelector('.project-image a[href="photos/vlan.jpeg"]').setAttribute('data-title', 
      `${langContent.project3Title} - ${langContent.myProjects}`);
  
    // Update skills list
    updateSkillsList();
    updateCoursesList();
  }
  
  function openProjectsGallery() {
    document.getElementById('projects-gallery').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closeProjectsGallery() {
    document.getElementById('projects-gallery').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false,
      'alwaysShowNavOnTouchDevices': true,
      'albumLabel': 'Project %1 of %2'
    });
  
    // Set initial language
    setLanguage('en');
  
    // Close gallery when clicking outside content
    document.addEventListener('click', function(event) {
      const gallery = document.getElementById('projects-gallery');
      if (event.target === gallery) {
        closeProjectsGallery();
      }
    });
  
    // Close gallery with ESC key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeProjectsGallery();
      }
    });

  });

