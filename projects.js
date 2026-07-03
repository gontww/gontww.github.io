/**
 * Augusto Gontijo - Projetos do Portfólio
 * 
 * Para adicionar um novo projeto, basta copiar o bloco de objeto abaixo,
 * colar no final do array 'projects' e preencher as informações.
 * O sistema se encarrega de renderizar no HTML e carregar os ícones automaticamente.
 */
const projects = [
  {
    badge: 'Destaque Backend',
    title: 'Kotlin CRUD com autenticação',
    category: 'API RESTful de Alta Segurança',
    github: 'https://github.com/gontww/kotlin-crud',
    description: 'API RESTful robusta desenvolvida em Kotlin com Spring Boot, projetada para gerenciar operações CRUD completas com segurança aprimorada. O sistema utiliza autenticação e autorização centralizadas por tokens JWT (JSON Web Tokens), garantindo o controle granular do acesso a cada rota e recurso.',
    features: [
      'Autenticação e Autorização via JWT',
      'Integração com PostgreSQL',
      'Arquitetura limpa e desacoplada',
      'Testes de Integração & Unitários',
      'Tratamento Global de Exceções',
      'Validação estrita de DTOs'
    ],
    stack: ['Kotlin', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Gradle', 'JUnit 5']
  },
];
