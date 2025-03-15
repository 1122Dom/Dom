import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/front-end.jpg',
      name: 'AmaliTech',
      position: 'Frontend Developer and IT Support',
      startDate: 'Sep. 2024',
      endDate: 'Dec. 2024',
      duration: '3 Months',
      location: 'Accra, Ghana',
    },
    {
      id: 2,
      image: '/CN.jpg',
      name: 'GCOM IT Solutions',
      position: 'Front-end, Networking and IT Support',
      startDate: 'Jan. 2025',
      endDate: 'Mar. 2025',
      duration: '3 Months',
      location: 'Ho, Ghana',
    },
    {
      id: 3,
      image: '/HTU.jpg',
      name: 'HTU',
      position: 'Coding Mentor',
      startDate: 'Jan. 2024',
      endDate: 'Present',
      duration: '2.5 Years',
      location: 'Ho, Ghana',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
