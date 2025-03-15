import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I'm Dominic</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am Computer Science student proficient in TypeScript and well-versed in
        popular frameworks such as React JS, Next JS, Vue JS, and Next Js. Not
        just coding. I am passionate about creating clean and efficient code,
        automating testing code, and implementing modern design principles to
        deliver intuitive user experiences. With my technical expertise, I am
        able to create highly performant and elegant solutions that are easy to
        maintain and scale. I am always eager to learn new technologies and
        improve my skills.I also help businesses to create a professional online
        presence and provide them with the tools to manage their online
        presence. I am a self-motivated individual who is always looking for new
        challenges and opportunities to grow.
      </p>
      <p>
        I'm in partnership with TakeApp Technologies, 
        which helps business owners to create a professional online presence and provide them with the tools to manage their online presence.
      </p>
    </motion.section>
  );
};
