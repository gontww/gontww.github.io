export interface Project {
  badge?: string;
  title: string;
  category: string;
  github?: string;
  website?: string;
  description: string;
  features: string[];
  stack: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    badge: 'Destaque Backend',
    title: 'Kotlin CRUD com autenticação',
    category: 'API RESTful de Alta Segurança',
    github: 'https://github.com/gontww/kotlin-crud',
    image: '/kotlin_crud_preview.png',
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
  {
    badge: 'Destaque Frontend',
    title: 'Brasil em Dados',
    category: 'Visualização de Dados & Analytics 3D',
    github: 'https://github.com/gontww/brasil-em-dados',
    website: 'https://brasilemdados.gont.com.br',
    image: '/brasil_em_dados_preview.gif',
    description: 'Plataforma interativa para visualização de dados demográficos, econômicos e setoriais de todos os municípios do Brasil em mapas 2D e 3D. O sistema consome dados das APIs oficiais do IBGE (SIDRA) em tempo real, integrando renderizações geográficas de alta performance com design premium e glassmorphism.',
    features: [
      'Visualização Coroplética 2D & Extrusão 3D',
      'Integração Dinâmica com APIs do IBGE (SIDRA)',
      'Comparador Multidimensional com Gráfico de Radar',
      'Deep Linking (Sincronização de estado via URL)',
      'Arquitetura de Features Modular e Escalável',
      'Caching Inteligente com TanStack Query'
    ],
    stack: ['Vue 3', 'TypeScript', 'Mapbox GL JS', 'Apache ECharts', 'Pinia', 'Tailwind CSS', 'Vite']
  },
];
