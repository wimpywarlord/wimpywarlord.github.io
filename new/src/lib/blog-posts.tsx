export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  status: string;
  description: string;
  tags: string[];
  ogImage?: string;
  content: React.ReactNode;
};

// Helper component for highlighting text
export const Highlight = ({
  children,
  color
}: {
  children: React.ReactNode;
  color: 'purple' | 'cyan' | 'yellow' | 'green' | 'orange'
}) => {
  const colorClasses = {
    purple: 'text-purple-400 font-semibold',
    cyan: 'text-cyan-400',
    yellow: 'text-yellow-300',
    green: 'text-green-400',
    orange: 'text-orange-400'
  };
  return <span className={colorClasses[color]}>{children}</span>;
};

// Blog posts data with complete content preservation
export const blogPostsData: Record<string, BlogPost> = {
  'cracked-react-dev': {
    slug: 'cracked-react-dev',
    title: 'Cracked React Dev 🚿',
    date: '29th June 2025',
    status: 'Pays to Know',
    description: 'Ultimate collection of tools, workflows, and resources to become an elite React developer. From Cursor workflows to design systems.',
    tags: ['react', 'frontend', 'tools', 'workflow'],
    ogImage: 'https://kshitijdhyani.com/assets/meow_party.gif',
    content: null // Will be set in the component file
  },
  // Additional blog posts will be added here
};