'use client';

import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: '3D Portfolio Website',
      description: 'An interactive portfolio with stunning 3D elements and smooth animations built with Three.js and React.',
      tags: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with real-time inventory, payment processing, and admin dashboard.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and modern UI/UX design.',
      tags: ['React', 'WebSocket', 'OpenAI', 'Node.js'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex data sets with charts and graphs.',
      tags: ['D3.js', 'React', 'TypeScript', 'Redux'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans and progress monitoring.',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Social Media Platform',
      description: 'Full-stack social platform with posts, comments, likes, and real-time notifications.',
      tags: ['Next.js', 'MongoDB', 'Socket.io', 'AWS'],
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
              
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span className="text-sm font-medium">View Project</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
