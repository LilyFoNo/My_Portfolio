import { motion } from "framer-motion";

interface BlobPageProps {
  id: string;
}

const BlobPage = ({ id }: BlobPageProps) => {
  const handleOnClick = (id: string) => {
    const aboutSection = document.getElementById(id);
    window.scrollTo({
      top: aboutSection ? aboutSection.offsetTop : 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className="hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 3 } }}
    >
      <button
        className="w-10 h-20 border border-[#a078f7] rounded-full flex justify-center py-2 absolute bottom-5 left-1/2"
        onClick={() => handleOnClick(id)}
      >
        <div className="w-5 h-5 bg-purple-950 rounded-full dot"></div>
      </button>
    </motion.div>
  );
};

export default BlobPage;
