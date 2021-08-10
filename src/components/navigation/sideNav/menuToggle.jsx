import { menu } from "../../../images";
import { motion } from "framer-motion";

function MenuToggle({ onToggleMenu }) {
  return (
    <motion.img
      whileTap={{ scale: 0.85 }}
      onClick={onToggleMenu}
      className="pointer"
      width="30px"
      height="30px"
      src={menu}
      alt=""
    />
  );
}

export default MenuToggle;
