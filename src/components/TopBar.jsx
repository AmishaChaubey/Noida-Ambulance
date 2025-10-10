import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#C8252C] py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-white rounded-tl-4xl rounded-tr-4xl">
      {/* Social Links - hidden on small screens */}
      <div className="hidden md:flex gap-3 md:gap-5 mb-2 md:mb-0">
        <Facebook size={16} className="cursor-pointer hover:text-amber-900" />
        <Twitter size={16} className="cursor-pointer hover:text-amber-900" />
        <Instagram size={16} className="cursor-pointer hover:text-amber-900" />
        <Linkedin size={16} className="cursor-pointer hover:text-amber-900" />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
        {/* Email - hidden on small screens */}
        <div className="hidden sm:flex items-center gap-2">
          <Mail size={16} />
          <span className="truncate">nihal@deadbodyfreezerboxonrent.com</span>
        </div>

        {/* Phone - always visible */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span className="truncate">Call us: (+91) 9266769458</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
