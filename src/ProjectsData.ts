
interface Project {
    image: string;
    projectName: string;
    description: string;
    frameworks: string[];
    projectLink: string;
  }
  
  export const projects: Project[] = [
      {
          image: "/images/alienpongimage.png",
          projectName: "AliensPong",
          description: "Implemented game mechanics and user interface to help with design and deployment of multiplayer \
                        Pong game with the user experience in mind, as well as containerization, system monitoring and other \
                        tools to manage scalable and reliable infrastructure Worked with team members to build a smooth and \
                        high throughput gaming platform, by balancing development and operational areas to ensure best per-\
                        formance and customer experience.",
          frameworks: ["Nextjs", "Tailwind", "Django", "PostgreSQL", "Docker", "ELK Stack"],
          projectLink: "https://github.com/SimoRedDevil/ft_transcendence"
      },
      {
          image: "/images/crud.jpeg",
          projectName: "CRUD Application",  
          description: "This project is a full-stack CRUD (Create, Read, Update, Delete) application for managing books, built with Next.js and Docker Compose. It allows you to manage a collection of books through a backend API and a frontend interface, all containerized using Docker.",
          frameworks: ["Nextjs", "TypeScript", "prisma", "PostgreSQL", "Docker"],
          projectLink: "https://github.com/aaghbal/CRUD"
      },
      {
          image: "/images/devops.jpg",
          projectName: "WordPress Dockerized",
          description: "Designed and implemented a multiservice Docker environment featuring WordPress, Nginx, and MariaDB. Configured containerization, network management, and persistent storage. Automated the setup using Docker Compose, ensuring scalability and isolated services.",
          frameworks: ["Docker", "WordPress", "Nginx", "MariaDB", "Docker Compose"],
          projectLink: "https://github.com/aaghbal/inception"
      },
      {
          image: "/images/ircimage.webp",
          projectName: "C++ChatServer",
          description: "Developed an IRC server in C++ from scratch, supporting multiple clients, channels, and commands per RFC 1459. Implemented non-blocking I/O using select, user authentication, message broadcasting, and channel moderation. Compatible with major IRC clients.",
          frameworks: ["C++", "POSIX Sockets"],
          projectLink: "https://github.com/aaghbal/ft_irc"
      },
      {
          image: "/images/minirt.png",
          projectName: "CTrace3D",
          description: "Built a ray tracing engine in C, rendering 3D scenes with spheres, planes, and lights. Implemented ray-object intersection algorithms, shading models, reflections, bump mapping, and multiple light sources. Optimized for performance and real-time rendering.",
          frameworks: ["C Programming Language", "Ray Tracing Algorithm", "Linear Algebra"],
          projectLink: "https://github.com/aaghbal/miniRT"
      },
      {
          image: "/images/Cshell.webp",
          projectName: "CShell",
          description: "Created a Unix-like shell in C, supporting command execution, piping, redirection, environment variables, and signal handling. Implemented a custom parser and lexer to handle complex command syntax. En-sured compatibility with POSIX standards.",
          frameworks: ["C Programming Language", "POSIX Standards", "Shell Scripting"],
          projectLink: "https://your-project-url.com"
      },
  ];