'use client';

import { motion } from 'framer-motion';

export function About() {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Three.js', level: 85 },
    { name: 'Next.js', level: 92 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Node.js', level: 87 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a passionate developer focused on creating engaging and interactive web experiences. 
              With expertise in modern web technologies, I bring ideas to life through code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development has led me to specialize in 3D graphics, animations, 
              and building performant applications that users love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
